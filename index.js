// Import module
const http = require("http");

// fields for hostname and port
const HOST = "127.0.0.1";
const PORT = 3000;

// Favorite Programming Language
const favLang = "Javascript";

// Shows favorite programming language in a webpage; accessible through localhost:3000
http.createServer((request, response) => {
    response.end(favLang);
}).listen(PORT, HOST, () => {
    console.log(`Server running in localhost:${PORT}`);
});

/**
 * Command used to run Node.js Application:
 *
 * node index.js
 */
