const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer ISI',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true, 
    success: true,
};

saveLaunch(launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return await launchesDatabase
    .find({}, { '_id':0, '_v':0 });
}

async function saveLaunch(launch) {
   const planet = await planets.findOne({
       keplerName: launch.target, 
   });

   if (!planet) {
       throw new Error('No matching planet was found')
   }

 await launchesDatabase.updateOne({
     flightNumber: launch.flightNumber,
 }, launch, {
     upsert: true,
 })
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestflightNumber, 
        Object.assign(launch, {
            success: true, 
            upcoming: true, 
            customers: ['Zero to Mastery', NASA],
            flightNumber: latestFlightNumber,
    })
    );
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
};





