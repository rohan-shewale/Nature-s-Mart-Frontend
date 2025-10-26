const express = require('express');
const connection = require("./db");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/api/farmproducts", (req, res) => {
    const sql = "select * from farmproducts";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("error fetching data : ", err);
            res.status(500).json({ error: "Internal server error" });
        } else {
            console.log("fetched data : ", results);
            res.json(results);
        }
    });
});

app.get('/api/farmproducts/:id', (req, res) => {
    // Get the ID from the request parameter
    const productId = req.params.id;

    // Query the database for the product with the specified ID
    const sql = `SELECT * FROM farmproducts WHERE id = ${productId}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;

        // Send the selected product data as the response
        res.send(result[0]);
    });
});

// const corsOptions = {
//   origin: 'http://localhost:3000'// the port where your React app is running 
// }

app.use(cors());

app.listen(3000, () => {
    console.log("server listening on port 3000");
})