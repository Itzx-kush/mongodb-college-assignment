// TASK 1: Movie Ticket Management
// Run with mongosh: mongosh task1_movies.mongodb.js
// Uses a dedicated MovieDB database. Re-running resets only this collection's sample data.

const dbMovies = db.getSiblingDB("MovieDB");
dbMovies.movies.deleteMany({});

dbMovies.movies.insertMany([
  { movieId: "M101", title: "Sky Mission", genre: "Action", tickets: 120, price: 220 },
  { movieId: "M102", title: "Laugh Out Loud", genre: "Comedy", tickets: 90, price: 280 },
  { movieId: "M103", title: "Hidden Truth", genre: "Thriller", tickets: 75, price: 240 },
  { movieId: "M104", title: "Ocean World", genre: "Adventure", tickets: 150, price: 200 },
  { movieId: "M105", title: "Star Journey", genre: "Sci-Fi", tickets: 110, price: 300 }
]);

print("\n1. All movies after insertion:");
printjson(dbMovies.movies.find({}, { _id: 0 }).toArray());

print("\n2. Movies with ticket price less than 250:");
printjson(dbMovies.movies.find({ price: { $lt: 250 } }, { _id: 0 }).toArray());

dbMovies.movies.updateOne(
  { movieId: "M102" },
  { $set: { tickets: 100 } }
);
print("\n3. M102 after updating ticket count to 100:");
printjson(dbMovies.movies.findOne({ movieId: "M102" }, { _id: 0 }));

dbMovies.movies.deleteOne({ movieId: "M103" });
print("\n4. Deleted movie M103. Final movie records:");
printjson(dbMovies.movies.find({}, { _id: 0 }).toArray());
