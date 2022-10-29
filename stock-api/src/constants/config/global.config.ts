import { databaseConfig } from "./database.config";
console.log(databaseConfig);
export const configuration =  () => ({
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.STOCK_API_PORT, 10) || 8080,
    apiUser: process.env.API_USER,
    apiPassword: process.env.API_PASSWORD,
    mysqlPort: parseInt(process.env.MYSQL_PORT),
    // mysql
    database: {
        ...databaseConfig(),
    }
});