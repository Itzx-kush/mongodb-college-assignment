# MongoDB and Node.js College Assignment

This repository contains four practical exercises demonstrating MongoDB CRUD operations and connecting Node.js applications to MongoDB.

## Assignment Overview

| No. | Exercise | Database / Collection | Main operations |
|---|---|---|---|
| 1 | Movie Ticket Management | `MovieDB.movies` | Insert five movies, display all movies, filter ticket prices below 250, update movie M102's ticket count, delete M103 |
| 2 | Sports Equipment Management | `SportsDB.equipment` | Insert four equipment records, display all equipment, filter Cricket equipment, update E102's quantity, delete E103 |
| 3 | Bus Reservation | `TransportDB.buses` | Connect using Node.js, insert three buses, filter buses with more than 20 available seats, update B102, delete B103, display final records |
| 4 | Online Shopping | `ShoppingDB.products` | Connect using the MongoDB native driver, insert four products, filter stock greater than 10, update P102's price, delete P103, display remaining products |

## Project Files

- `task1_movies.mongodb.js` — MongoDB Shell script for Movie Ticket Management.
- `task2_equipment.mongodb.js` — MongoDB Shell script for Sports Equipment Management.
- `buses.js` — Node.js program for Bus Reservation.
- `products.js` — Node.js program for Online Shopping.
- `package.json` — npm scripts and the MongoDB native driver dependency.
- `package-lock.json` — records the installed npm dependency versions.
- `.gitignore` — excludes `node_modules`, environment files, and log files.

## Requirements

- Node.js and npm
- MongoDB Community Server
- MongoDB Shell (`mongosh`) for Tasks 1 and 2
- Visual Studio Code or another code editor (optional)

MongoDB Server must be running locally. The Node.js programs connect to:

```text
mongodb://127.0.0.1:27017
```

## Setup

1. Install and start MongoDB Community Server.
2. Install MongoDB Shell (`mongosh`) for the first two exercises.
3. Open this repository folder in a terminal.
4. Install the project dependency:

   ```powershell
   npm install
   ```

## How to Run the Exercises

Run each command from the project root folder.

### Task 1 — Movie Ticket Management

```powershell
mongosh task1_movies.mongodb.js
```

The script inserts five movie records, displays all movies, finds movies priced below 250, updates the ticket count of M102 to 100, deletes M103, and displays the final records.

### Task 2 — Sports Equipment Management

```powershell
mongosh task2_equipment.mongodb.js
```

The script inserts four equipment records, displays all equipment, finds equipment for Cricket, updates the quantity of E102 to 25, deletes E103, and displays the final records.

If PowerShell reports that `mongosh` is not recognized, run it using the full path to `mongosh.exe` or add the MongoDB Shell `bin` directory to your PATH.

### Task 3 — Bus Reservation

```powershell
npm run buses
```

The program connects to MongoDB, inserts three buses, displays buses with more than 20 available seats, updates B102's available seats to 18, deletes B103, and displays the final bus records.

### Task 4 — Online Shopping

```powershell
npm run products
```

The program connects using the MongoDB native driver, inserts four products, displays products with stock greater than 10, updates P102's price to 899, deletes P103, and displays the remaining products.

## Implementation Notes

- Sample movie titles, sports equipment, bus routes, prices, ticket counts, and quantities are illustrative because the assignment brief does not specify exact sample values.
- The MongoDB Shell scripts use MongoDB Shell syntax and must be run with `mongosh`, not `node`.
- The bus and shopping exercises are Node.js programs that use the official MongoDB Node.js driver.
- Each script clears only its own assignment collection before inserting sample records so that the exercise can be run repeatedly. Do not store unrelated data in these collections.

## Learning Outcomes

By completing these exercises, students practise MongoDB document insertion, querying with comparison filters, updating selected fields, deleting specific records, and connecting Node.js programs to a MongoDB database.
