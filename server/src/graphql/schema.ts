import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Rocket {
        rocketid: Int!
        id: String!
        name: String!
        active: Boolean!
    }

    type Query {
        rockets: [Rocket!]!
    }
`;

