import gql from "graphql-tag";

export const typeDefs = gql`
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        "The number of modules in the track"
        modulesCount: Int
        "The track's complete array of Modules"
        modules: [Module!]!
        "The track's complete description, can be in Markdown format"
        description: String
        "The number of times a track has been viewed"
        numberOfViews: Int
    }

    "A Module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        "Get a single track by ID, for detailed track page"
        track(id: ID!): Track
    }

    type Mutation {
        "Increment the number of views of a track, when the user has completed a track"
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a successful mutation"
        track: Track
    }
`;