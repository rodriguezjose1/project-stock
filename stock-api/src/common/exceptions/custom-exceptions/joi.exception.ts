import * as Joi from 'joi';

export class JoiValidationError extends Joi.ValidationError {
    code: string;

    constructor (error, code) {
        super(error.message, error.details, error._original);
        this.code = code;
    }
}