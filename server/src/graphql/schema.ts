import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Rocket {
        rocketId: Int!
        id: String!
        name: String!
        active: Boolean!
        launches: [Launch!]!
    }

    type Launch {
        missionName: String!
    }

    type Query {
        rockets: [Rocket!]!
    }
`;

