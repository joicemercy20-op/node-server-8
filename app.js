// Ex. 8 - Express Framework Server
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory data store
let items = [
  { id: 101, name: "Server Rack Unit", stock: 12 },
  { id: 102, name: "Gigabit Switch", stock: 5 }
];

// Root HTML endpoint
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express Server</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f4f6fb; margin: 40px; color: #243047; }
        main { max-width: 650px; margin: auto; background: white; padding: 25px; border-radius: 12px; border: 1px solid #dbe2ee; }
        h2 { color: #0f766e; }
        a { color: #0f766e; }
      </style>
    </head>
    <body><main>
      <h2>Node.js Express Server Application Active</h2>
      <p>Get items using <a href="/api/items">/api/items</a>.</p>
      <p>POST requests to <code>/api/items</code> can add an item.</p>
    </main></body>
    </html>
  `);
});

// GET: Fetch all items
app.get("/api/items", (req, res) => {
  res.status(200).json({ success: true, data: items });
});

// POST: Add an item
app.post("/api/items", (req, res) => {
  const { name, stock } = req.body;

  if (typeof name !== "string" || !name.trim() || stock === undefined || stock === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide both item name and stock count."
    });
  }

  const stockNumber = Number(stock);
  if (!Number.isFinite(stockNumber) || stockNumber < 0) {
    return res.status(400).json({
      success: false,
      message: "Stock must be a valid non-negative number."
    });
  }

  const newItem = {
    id: items.length ? Math.max(...items.map(item => item.id)) + 1 : 101,
    name: name.trim(),
    stock: stockNumber
  };

  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Endpoint Not Found" });
});

app.listen(PORT, () => {
  console.log(`Express application running on http://localhost:${PORT}`);
});
