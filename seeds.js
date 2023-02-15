const sequelize = require('./config/connection');
const seedUsers = require('./seeds/userData');
const seedArticles = require('./seeds/articleData');
const seedComments = require('./seeds/commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedArticles();

  await seedComments();

  process.exit(0);
};

seedAll();