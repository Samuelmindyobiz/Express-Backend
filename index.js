import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const movies = [
  { id: 1, movie: "Naruto Shippuden", genre: "Anime" },
  { id: 2, movie: "One-Piece", genre: "Anime,Fantasy,Action" },
  { id: 3, movie: "One Punch Man", genre: "Anime, Fantasy" },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  let movie = movies.find((movie) => movie.id === parseInt(id));

  res.send(movie);
});

app.post("/api/movies", (req, res) => {
  console.log(req.body);
  const newMovie = {
    id: movies.length + 1,
    movie: req.body.movie,
    genre: req.body.genre,
  };

  movies.push(newMovie);
  res.json(movies);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port
${port}`);
});
