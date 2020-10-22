const movieData = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 4.8,
    genre: "drama",
    image:
      "https://news.toyark.com/wp-content/uploads/sites/4/2020/07/Dark-Knight-Batman-Prime-1-Studio-001.jpg",
  },
  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 4.7,
    genre: "action, crime, drama",
    image:
      "https://news.toyark.com/wp-content/uploads/sites/4/2020/07/Dark-Knight-Batman-Prime-1-Studio-001.jpg",
  },
  {
    id: "3",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 4.7,
    genre: "adventure, drama, fantasy",
    image:
      "https://news.toyark.com/wp-content/uploads/sites/4/2020/07/Dark-Knight-Batman-Prime-1-Studio-001.jpg",
  },
];

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movieData);
      //   reject("Canot fetch data");
    }, 2000);
  });
};
