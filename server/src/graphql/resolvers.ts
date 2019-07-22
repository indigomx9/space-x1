import fetch from "node-fetch";
const API_BASE = "https://api.spacexdata.com/v2"

class SpaceXClient {
    getRockets() {
        return fetch(API_BASE + "/rockets")
            .then((res) => res.json());
    }

    getLaunchesForRocket(rocketId) {
        return fetch(API_BASE + `/launches?rocketid=${rocketId}`)
            .then((res) => res.json());
    }
};

class Rocket {
    data: any;
    constructor(rocketData) {
        this.data = rocketData
    }
    get rocketId() {
        return this.data.rocketid
    }
    get id() {
        return this.data.id
    }
    get name() {
        return this.data.name
    }
    get active() {
        return this.data.active
    }

    async launches() {
        const launches = await ApiClient.getLaunchesForRocket(this.rocketId);
        return launches.map((launch) => new Launch(launch))
    }
};

class Launch {
    data: any;
    constructor(launchData) {
        this.data = launchData
    }
    get missionName() {
        return this.data.mission_name
    }
};

const ApiClient = new SpaceXClient();

const getRockets = async () => {
    const rockets = await ApiClient.getRockets();
    return rockets.map((rocket) => new Rocket(rocket));
};

export const resolvers = {
    Query: {
        rockets: getRockets
    }
};


