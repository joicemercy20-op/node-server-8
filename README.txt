EXERCISE 8 - DEVELOPING SERVER SIDE APPLICATION USING NODE JS
============================================================

This project follows the uploaded lab document and includes both source-code
examples shown in it:
1. server.js - Native Node.js HTTP Server (port 3000)
2. app.js    - Express Framework Server (port 3001)

REQUIREMENTS
------------
- Node.js (LTS version)
- Visual Studio Code
- Internet connection for installing Express dependency

HOW TO OPEN
-----------
1. Download and extract Ex8_NodeJS_Server_Side_Application.zip.
2. Open Visual Studio Code.
3. Select File > Open Folder.
4. Choose the extracted Ex8_NodeJS_Server_Side_Application folder.
5. In VS Code, select Terminal > New Terminal.

RUN NATIVE NODE.JS SERVER
-------------------------
1. In the VS Code terminal, execute:
   node server.js
   OR:
   npm run start:native
2. Wait for:
   Node.js HTTP Server listening on http://localhost:3000
3. Open this address in your browser:
   http://localhost:3000
4. Open the JSON API:
   http://localhost:3000/api/users
5. To stop the server, click terminal and press Ctrl + C.

RUN EXPRESS SERVER
-----------------
1. First install the dependency once:
   npm install
2. Run:
   node app.js
   OR:
   npm run start:express
3. Open the home page:
   http://localhost:3001
4. View all items:
   http://localhost:3001/api/items
5. To stop the server, press Ctrl + C.

TEST EXPRESS POST ROUTE
----------------------
You can test POST /api/items using Postman:
- Method: POST
- URL: http://localhost:3001/api/items
- Body > raw > JSON:
  {
    "name": "Keyboard",
    "stock": 20
  }
- Expected status: 201 Created, with the new item in JSON response.

IMPORTANT
---------
- Native server uses port 3000; Express uses port 3001, so they can run without
  port conflicts (though run each one in its own terminal session).
- The app uses an in-memory sample data list. Items added by POST are not
  permanent and reset when the Express server is restarted.
- Do not use Live Server for this Node.js project. Run it from the VS Code
  terminal using Node.js commands.
