import { TrackAPI } from "./src/datasources/track-api";

export type DataSourceContext = {
    dataSources: {
        trackAPI: TrackAPI;
    };
  };