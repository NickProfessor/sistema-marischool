import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "marischool_bd",
  synchronize: false,
  migrations: ["src/migrations/*.ts"],
  entities: ["src/**/*.entity.ts"],
});
