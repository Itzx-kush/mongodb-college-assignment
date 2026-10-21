// TASK 3: Node.js and MongoDB Bus Reservation
// Run: npm install, then npm run buses
// Requires MongoDB Community Server running at mongodb://127.0.0.1:27017.

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB.");

    const db = client.db("TransportDB");
    const buses = db.collection("buses");

    // Reset this assignment's sample collection so the script can be run repeatedly.
    await buses.deleteMany({});

    await buses.insertMany([
      { busNo: "B101", route: "Visakhapatnam - Vijayawada", totalSeats: 40, availableSeats: 28 },
      { busNo: "B102", route: "Visakhapatnam - Hyderabad", totalSeats: 45, availableSeats: 22 },
      { busNo: "B103", route: "Visakhapatnam - Rajahmundry", totalSeats: 35, availableSeats: 12 }
    ]);
    console.log("\n1. Three bus records inserted.");

    console.log("\n2. Buses with more than 20 available seats:");
    console.table(await buses.find(
      { availableSeats: { $gt: 20 } },
      { projection: { _id: 0 } }
    ).toArray());

    await buses.updateOne(
      { busNo: "B102" },
      { $set: { availableSeats: 18 } }
    );
    console.log("\n3. Updated B102 availableSeats to 18.");

    await buses.deleteOne({ busNo: "B103" });
    console.log("4. Deleted bus B103.");

    console.log("\n5. Final bus records:");
    console.table(await buses.find({}, { projection: { _id: 0 } }).toArray());
  } catch (error) {
    console.error("Bus assignment failed:", error.message);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main();
