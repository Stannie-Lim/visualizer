const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/idk_make_a_db');


const sync = async () => {
	
};


module.exports = {
  sync,
};
