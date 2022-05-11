const http = require('http');
const mongoose = require('mongoose');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:BfTdRAVhskzvyL7W@nasacluster.lhrgm.mongodb.net/nasa?retryWrites=true&w=majority'

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connecting ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

async function startServer() {
  await loadPlanetsData();
}

server.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})

startServer();













