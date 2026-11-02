// Ex. 8 - Native Node.js HTTP Server
const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

// Mock database
const users = [
  { id: 1, name: "Alice", role: "Software Engineer" },
  { id: 2, name: "Bob", role: "Systems Architect" }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  console.log(`[${new Date().toLocaleTimeString()}] ${method} request to ${pathname}`);

  // Route 1: Home page
  if (pathname === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node.js Server</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; background: #f4f6fb; color: #243047; }
    .card { max-width: 650px; margin: auto; border: 1px solid #dbe2ee; padding: 25px; border-radius: 12px; background: white; }
    h1 { color: #4c51bf; }
    a { color: #4c51bf; }
    .active { color: #15803d; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Server-Side Application Powered by Node.js</h1>
    <p>Status: <span class="active">Active</span></p>
    <p>Access JSON Endpoint: <a href="/api/users">/api/users</a></p>
  </div>
</body>
</html>`);
  }
  // Route 2: JSON endpoint
  else if (pathname === "/api/users" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ success: true, count: users.length, data: users }, null, 2));
  }
  // Route 3: Not found
  else {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ success: false, message: "Resource Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Node.js HTTP Server listening on http://localhost:${PORT}`);
});
