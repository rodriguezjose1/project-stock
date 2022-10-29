import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig: () => TypeOrmModuleOptions = () => ({
    type: "mysql",
    host:  process.env.MYSQL_CONTAINER_NAME,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true,
    extra: {
        decimalNumbers: true
    }
});