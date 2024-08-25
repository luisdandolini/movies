"use client";

import { gql, useQuery } from "@apollo/client";
import { Card } from "@/components/Card";
import CircularProgress from "@mui/material/CircularProgress";

const GET_SERIES = gql`
  query GetSeries {
    tvshows {
      nodes {
        id
        title
        advanced_custom_fields {
          gender
          releaseDate
          title
          img {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function MoviesPage() {
  const { loading, error, data } = useQuery(GET_SERIES);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-7">Séries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.tvshows.nodes.map((tvshow: any) => (
          <Card
            key={tvshow.id}
            title={tvshow.advanced_custom_fields.title}
            releaseDate={tvshow.advanced_custom_fields.releaseDate}
            poster={tvshow.advanced_custom_fields.img.sourceUrl}
            genre={tvshow.advanced_custom_fields.gender}
          />
        ))}
      </div>
    </div>
  );
}
