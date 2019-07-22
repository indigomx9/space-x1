import fetch from "node-fetch";
const API_BASE = "https://api.spacexdata.com/v2"

class SpaceXClient {
    getRockets() {
        return fetch(API_BASE + "/rockets")
            .then((res) => res.json());
    }
};

class Rocket {
    data: any;
    constructor(rocketData) {
        this.data = rocketData
    }
    get rocketid() {
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


