import { Sequelize } from 'sequelize';

const dbConfig = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'lino',
  database: 'avocado'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  dialect: dbConfig.dialect,
  host: dbConfig.host,
});

export default sequelize;
