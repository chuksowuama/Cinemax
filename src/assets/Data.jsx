export const navItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Series", path: "/series" },
  {
    id: 3,
    label: "Genres",
    path: "/genres",
    children: [
      { label: "Action", path: "/genres/action" },
      { label: "Comedy", path: "/genres/comedy" },
      { label: "Romance", path: "/genres/romance" },
      { label: "Horror", path: "/genres/horror" },
      { label: "Drama", path: "/genres/drama" },
      { label: "Sci-Fi", path: "/genres/Science-Fiction" },
    ],
  },
  { id: 4, label: "Top Rated", path: "/top-rated" },
];
