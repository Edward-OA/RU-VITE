import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

// Add a delay middleware
server.use((req, res, next) => {
    setTimeout(next, 500); // 500ms delay
});

server.use(middlewares);
server.use(router);

const PORT = 9000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
