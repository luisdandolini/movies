"use client";

import { gql, useQuery } from "@apollo/client";
import { Card } from "@/components/Card/Card";
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
          favorite
          img {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function SeriesPage() {
  const { loading, error, data } = useQuery(GET_SERIES);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        aria-busy="true"
        aria-live="polite"
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div role="alert">Erro: {error.message}</div>;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-7">Séries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {data.tvshows.nodes.map((tvshow: any) => (
          <Card
            key={tvshow.id}
            id={tvshow.id}
            title={tvshow.advanced_custom_fields.title}
            releaseDate={tvshow.advanced_custom_fields.releaseDate}
            poster={tvshow.advanced_custom_fields.img.sourceUrl}
            genre={tvshow.advanced_custom_fields.gender}
          />
        ))}
      </div>
    </section>
  );
}
