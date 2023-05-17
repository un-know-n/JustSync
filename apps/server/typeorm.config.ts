import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './src/app/users/entities/user.entity';
import { CloudDisk1684506392241 } from './migrations/1684506392241-CloudDisk';

dotenv.config();

export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username:  process.env.TYPEORM_USERNAME,
  password:  process.env.TYPEORM_PASSWORD,
  database:  process.env.TYPEORM_DB,
  entities: [User],
  migrations: [CloudDisk1684506392241],
  migrationsRun: true,
  synchronize: true,
  logging: true,
}

export default new DataSource(typeormConfig);
