const launches = new Map();


let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer ISI',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true, 
    succes: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
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

module.exports = {
    getAllLaunches,
    addNewLaunch
};





