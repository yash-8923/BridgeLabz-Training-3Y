ASSIGNMENT 10 - APIs AND ENDPOINTS
==================================

FOLDER LIST
Each question has its own folder.
Each folder has three files: index.html, script.js, and db.json.
q1 - Real-Time Live Search (jQuery AJAX)
q2 - Employee Status Dashboard (XMLHttpRequest and PATCH)
q3 - Task Manager With Filters (jQuery AJAX and query parameters)
q4 - Multi-API Dashboard (Fetch and Promise.all)
q5 - College Timetable Viewer (Fetch and dynamic rendering)
q6 - User Registration With Duplicate Check (Axios, GET, and POST)

BEFORE YOU START
1. Install Node.js.
2. Install JSON Server version 0.17.4. Use this command:
   npm install -g json-server@0.17.4

PORT LIST
Each question uses a different port.
q1 - port 3001
q2 - port 3002
q3 - port 3003
q4 - port 3004
q5 - port 3005
q6 - port 3006

HOW TO RUN A QUESTION
1. Open a terminal in the folder of the question. Example: q1.
2. Start JSON Server. Use the port for that question.
   json-server --watch db.json --port 3001
3. Open the index.html file in a browser.
4. Stop JSON Server with Ctrl+C before you start the next question.

NOTES
- Each question uses only its own db.json file.
- Each db.json file has at least 5 sample records.
- q4: To see the skeleton loading effect, add the option --delay 1500 to the json-server command.
- q4: To test the warning message, rename one endpoint in db.json (for example, "orders") and start JSON Server again.
- q2: To test the error message, stop JSON Server and toggle a switch.
- q1, q3: The pages load jQuery from a CDN. q6 loads Axios from a CDN. You need an internet connection.
