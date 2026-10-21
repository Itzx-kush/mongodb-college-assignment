// TASK 4: Node.js and MongoDB Online Shopping
// Run: npm install, then npm run products
// Uses the MongoDB native driver and requires MongoDB running locally.

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB.");

    const db = client.db("ShoppingDB");
    const products = db.collection("products");

    // Reset this assignment's sample collection so the script can be run repeatedly.
    await products.deleteMany({});

    await products.insertMany([
      { productId: "P101", productName: "Wireless Mouse", category: "Electronics", price: 599, stock: 25 },
      { productId: "P102", productName: "Keyboard", category: "Electronics", price: 999, stock: 18 },
      { productId: "P103", productName: "Water Bottle", category: "Accessories", price: 299, stock: 8 },
      { productId: "P104", productName: "Notebook Pack", category: "Stationery", price: 149, stock: 40 }
    ]);
    console.log("\n1. Four product records inserted.");

    console.log("\n2. Products with stock greater than 10:");
    console.table(await products.find(
      { stock: { $gt: 10 } },
      { projection: { _id: 0 } }
    ).toArray());

    await products.updateOne(
      { productId: "P102" },
      { $set: { price: 899 } }
    );
    console.log("\n3. Updated P102 price to 899.");

    await products.deleteOne({ productId: "P103" });
    console.log("4. Deleted product P103.");

    console.log("\n5. Remaining product records:");
    console.table(await products.find({}, { projection: { _id: 0 } }).toArray());
  } catch (error) {
    console.error("Shopping assignment failed:", error.message);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main();
