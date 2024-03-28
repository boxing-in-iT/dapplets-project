export type Movie = {
  adult: boolean;
  backdrop_path: string | null; // если backdrop_path может быть null
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null; // если overview может быть null
  popularity: number;
  poster_path: string | null; // если poster_path может быть null
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: number;
  name: string;
};

interface SortOption {
  title: string;
  value: string;
}

export const sortOptions: SortOption[] = [
  { title: "Popularity (Desc)", value: "popularity.desc" },
  { title: "Revenue (Desc)", value: "revenue.desc" },
  { title: "Primary Release Date (Desc)", value: "primary_release_date.desc" },
  { title: "Vote Count (Desc)", value: "vote_count.desc" },
  { title: "Vote Average (Desc)", value: "vote_average.desc" },
];
