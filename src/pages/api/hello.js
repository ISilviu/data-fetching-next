const movies = [
  {
      "id": 1,
      "title": "Heat",
      "year": "1995",
      "runtime": "170",
      "genres": [
          "Action",
          "Crime",
          "Drama"
      ],
      "director": "Michael Mann",
  },
  {
      "id": 2,
      "title": "L.A. Confidential",
      "year": "1997",
      "runtime": "138",
      "genres": [
          "Crime",
          "Drama",
          "Mystery"
      ],
      "director": "Curtis Hanson",
  },
  {
    "id": 3,
      "title": "Blood Diamond",
      "year": "2006",
      "runtime": "143",
      "genres": [
          "Adventure",
          "Drama",
          "Thriller"
      ],
      "director": "Edward Zwick",
  },
];

export default function handler(req, res) {
  res.status(200).json(movies);
}
