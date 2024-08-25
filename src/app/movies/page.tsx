"use client";

import { gql, useQuery } from "@apollo/client";
import { Card } from "@/components/Card";
import CircularProgress from "@mui/material/CircularProgress";

const GET_MOVIES = gql`
  query GetMovies {
    movies {
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

export default function MoviesPage() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-7">Filmes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.movies.nodes.map((movie: any) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.advanced_custom_fields.title}
            releaseDate={movie.advanced_custom_fields.releaseDate}
            poster={movie.advanced_custom_fields.img.sourceUrl}
            genre={movie.advanced_custom_fields.gender}
          />
        ))}
      </div>
    </div>
  );
}
