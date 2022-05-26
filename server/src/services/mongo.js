const mongoose = require('mongoose');


const MONGO_URL = 'mongodb+srv://nasa-api:BfTdRAVhskzvyL7W@nasacluster.lhrgm.mongodb.net/nasa?retryWrites=true&w=majority'

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

