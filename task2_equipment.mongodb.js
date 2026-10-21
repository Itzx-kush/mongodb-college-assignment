// TASK 2: Sports Equipment Management
// Run with mongosh: mongosh task2_equipment.mongodb.js
// Uses a dedicated SportsDB database. Re-running resets only this collection's sample data.

const dbSports = db.getSiblingDB("SportsDB");
dbSports.equipment.deleteMany({});

dbSports.equipment.insertMany([
  { equipmentId: "E101", name: "Cricket Bat", sport: "Cricket", quantity: 15, available: true },
  { equipmentId: "E102", name: "Football", sport: "Football", quantity: 20, available: true },
  { equipmentId: "E103", name: "Cricket Ball", sport: "Cricket", quantity: 30, available: true },
  { equipmentId: "E104", name: "Tennis Racket", sport: "Tennis", quantity: 12, available: false }
]);

print("\n1. All sports equipment after insertion:");
printjson(dbSports.equipment.find({}, { _id: 0 }).toArray());

print("\n2. Equipment belonging to Cricket:");
printjson(dbSports.equipment.find({ sport: "Cricket" }, { _id: 0 }).toArray());

dbSports.equipment.updateOne(
  { equipmentId: "E102" },
  { $set: { quantity: 25 } }
);
print("\n3. E102 after updating quantity to 25:");
printjson(dbSports.equipment.findOne({ equipmentId: "E102" }, { _id: 0 }));

dbSports.equipment.deleteOne({ equipmentId: "E103" });
print("\n4. Deleted equipment E103. Final equipment records:");
printjson(dbSports.equipment.find({}, { _id: 0 }).toArray());
