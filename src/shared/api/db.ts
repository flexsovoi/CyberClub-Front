import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    import.meta.env.VITE_DB_URL ??
        'postgres://postgres:postgres@localhost:5432/postgres',
);
