# MongoDB and Node.js Assignment

This project contains the four exercises from the assignment.

## Requirements

- Visual Studio Code
- Node.js and npm
- MongoDB Community Server running locally
- `mongosh` (MongoDB Shell) for Tasks 1 and 2

Node.js and npm are already installed on the student's computer. MongoDB Server and the shell were not detected during the initial PowerShell check.

## Files

- `task1_movies.mongodb.js` — Movie Ticket Management (MongoDB shell script)
- `task2_equipment.mongodb.js` — Sports Equipment Management (MongoDB shell script)
- `buses.js` — Bus Reservation (Node.js native MongoDB driver)
- `products.js` — Online Shopping (Node.js native MongoDB driver)

## Setup

1. Install MongoDB Community Server for Windows from:
   https://www.mongodb.com/try/download/community
2. In the installer, select the option to install MongoDB as a Windows service. If offered, select Install MongoDB Compass.
3. Install MongoDB Shell (`mongosh`) separately from:
   https://www.mongodb.com/try/download/shell
4. Open this folder in VS Code.
5. Open Terminal > New Terminal and run:

   ```powershell
   npm install
   ```

6. Confirm the MongoDB service is running. The programs connect to:
   `mongodb://127.0.0.1:27017`

## Run Task 1 — Movies

From the VS Code terminal, run:

```powershell
mongosh task1_movies.mongodb.js
```

The script creates/uses `MovieDB`, inserts five movies, displays all movies, finds prices below 250, updates M102's ticket count to 100, deletes M103, and displays the final records.

## Run Task 2 — Sports Equipment

```powershell
mongosh task2_equipment.mongodb.js
```

The script creates/uses `SportsDB`, inserts four equipment records, finds Cricket equipment, updates E102's quantity to 25, deletes E103, and displays the final records.

## Run Task 3 — Bus Reservation

```powershell
npm run buses
```

The program creates/uses `TransportDB`, inserts three buses, finds buses with more than 20 available seats, updates B102's available seats to 18, deletes B103, and displays the final records.

## Run Task 4 — Online Shopping

```powershell
npm run products
```

The program creates/uses `ShoppingDB`, inserts four products, finds products with stock greater than 10, updates P102's price to 899, deletes P103, and displays the remaining products.

## Important notes

- Sample prices, quantities, routes, and counts are illustrative because the assignment does not specify exact values.
- The scripts clear only their own assignment collection before inserting sample data, so they can be run again without duplicate sample records. Do not put unrelated data in these collections.
- The first two files use MongoDB Shell syntax; do not run them using `node`.
- The last two files use the MongoDB native Node.js driver.
