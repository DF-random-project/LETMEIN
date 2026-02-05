console.log("hello world!");

const server = Bun.serve({
    routes: {
        "/": new Response("OK")
    }
});

console.log(`server ${server.url}`);