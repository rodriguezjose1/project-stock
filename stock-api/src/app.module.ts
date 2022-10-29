import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './constants/config/global.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './routes/users/users.module';
import { AppLoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exceptions/all.exceptions.filter';
import { ProductsModule } from './routes/products/products.module';
import { SalesModule } from './routes/sales/sales.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env_${process.env.NODE_ENV}`,
            load: [configuration]
        }),
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule
            ],
            useFactory: (configService: ConfigService) => {
                console.log(configService);
                return configService.get('database');
            },
            inject: [
                ConfigService
            ]
        }),
        UsersModule,
        ProductsModule,
        SalesModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
			provide: APP_FILTER,
			useClass: AllExceptionsFilter,
		},
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer): void {
		consumer.apply(AppLoggerMiddleware).forRoutes('*');
	}
}
