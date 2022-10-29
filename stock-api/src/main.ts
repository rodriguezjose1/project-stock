import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.setGlobalPrefix('api/v1/stock');

    app.use((req, res, next) => {
        res.locals.initTime = Date.now();
        next();
    });

    const port = process.env.STOCK_API_PORT || 8080;

    await app.listen(port);
    console.log('Stock API listening in port: ', port);
}
bootstrap();
