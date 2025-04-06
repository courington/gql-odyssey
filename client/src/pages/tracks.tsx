import React from "react";
import { Layout } from "../components";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__/";
import { Track } from "../__generated__/types";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
  `);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return <Layout grid>
    <QueryResult loading={loading} error={error} data={data}> 
      {data?.tracksForHome.map((track: Track, index: number) => (
        <TrackCard key={track.id + index} track={track} />
      ))}
    </QueryResult>
  </Layout>
};

export default Tracks;
