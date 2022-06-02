const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connecting ready!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error(err);
  });

  async function mongoConnect() {
      await mongoose.connect(MONGO_URL, {
          useNewUrlParser: true,
          useFindModify: false,
          userCreateIndex: true, 
          useUnifiedTopology: true, 
      });
  }

async function mongoDisconnect() {
    await mongoose.disconnect();
}  

module.exports = {
    mongoConnect, 
    mongoDisconnect, 
}

