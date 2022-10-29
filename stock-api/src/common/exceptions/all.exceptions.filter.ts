import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import axios from 'axios';
import * as _ from 'lodash';
import { GlobalHttpException } from './custom-exceptions/global.exception';
import { JoiValidationError } from './custom-exceptions/joi.exception';

interface ErrorResponse {
    statusCode: number,
    message: string,
    path: string,
    code?: string,
    errors?: string[];
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const error: ErrorResponse = { statusCode: 0, message: '', path: '' };

        console.log('Exception: ', exception);

        // if (exception instanceof MongoError) {
        //     console.log(exception.stack.toString());
        // }

        // if (exception instanceof Error) {
        //     console.log(exception.stack.toString());
        // }

        if (exception instanceof HttpException) {
            const statusCode = exception.getStatus();
            error.statusCode = statusCode;
            error.message = exception.message && statusCode !== 500 ? exception.message : HttpStatus[statusCode];
        } else if (axios.isAxiosError(exception) && exception.response) {
            const statusCode = exception.response.status;
            error.statusCode = statusCode;
            error.message = exception.response.data['error']?.message ?? HttpStatus[statusCode];
            error.code = exception.response.data['error']?.code;
        } else if (exception instanceof JoiValidationError) {
            error.statusCode = 400;
            error.message = exception.details[0].message;
            error.code = exception.code ?? HttpStatus[400];
        } else {
            error.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            error.message = 'INTERNAL_SERVER_ERROR';
            error.code = 'INTERNAL_SERVER_ERROR';
        }

        error.path = httpAdapter.getRequestUrl(ctx.getRequest());

        const request = _.pick(ctx.getRequest(), ['params', 'query', 'body', 'file']);
        console.log('Request: ', request);

        const responseBody = {
            success: false,
            error
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, error.statusCode);
    }
}
