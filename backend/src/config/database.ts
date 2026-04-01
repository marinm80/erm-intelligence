import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const poolConfig: any = {};

if (process.env['DATABASE_URL']) {
  poolConfig.connectionString = process.env['DATABASE_URL'];
  poolConfig.ssl = { rejectUnauthorized: false };
} else {
  poolConfig.host = process.env['DB_HOST'];
  poolConfig.port = parseInt(process.env['DB_PORT'] || '5432');
  poolConfig.user = process.env['DB_USER'];
  poolConfig.password = process.env['DB_PASSWORD'];
  poolConfig.database = process.env['DB_NAME'];
}

const pool = new Pool(poolConfig);

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export default pool;
