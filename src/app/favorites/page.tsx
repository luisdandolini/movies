"use client";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { Card } from "@/components/Card";
import { gql, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";

const GET_FAVORITES_BY_IDS = gql`
  query GetFavoritesByIds($ids: [ID!]!) {
    movies(where: { in: $ids }) {
      nodes {
        id
        title
        advanced_custom_fields {
          gender
          releaseDate
          img {
            sourceUrl
          }
        }
      }
    }
    tvshows(where: { in: $ids }) {
      nodes {
        id
        title
        advanced_custom_fields {
          gender
          releaseDate
          img {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function FavoritesPage() {
  const { favorites } = useFavoritesStore();

  const { loading, error, data } = useQuery(GET_FAVORITES_BY_IDS, {
    variables: { ids: favorites.length ? favorites : [""] },
    skip: favorites.length === 0,
  });

  if (favorites.length === 0) {
    return <p>Nenhum favorito adicionado.</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const allFavorites = [
    ...(data?.movies?.nodes || []),
    ...(data?.tvshows?.nodes || []),
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-7">Meus Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFavorites.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.advanced_custom_fields.title}
            releaseDate={item.advanced_custom_fields.releaseDate}
            poster={item.advanced_custom_fields.img.sourceUrl}
            genre={item.advanced_custom_fields.gender}
          />
        ))}
      </div>
    </div>
  );
}
