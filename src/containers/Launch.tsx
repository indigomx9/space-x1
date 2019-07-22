import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const LAUNCH_QUERY = gql`
    query LaunchQuery {
        rockets {
            rocketId
            id
            name
            active		
        }
    }
`;

export class Launch extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1 className="banner">Launch</h1>
                <Query query={LAUNCH_QUERY}>
                    {({ loading, error, data }) => {
                        if(loading) return <h2>Loading...</h2>
                        if(error) console.log(error);
                        return (
                            {data.rockets.map(rocket => (
                                <li key={rocket.id}>{rocket.name}</li>
                            ))}
                        );
                    }}
                </Query>
            </React.Fragment>
        );
    }
};

