console.log("hello world!");

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const out = await req.json();        

        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        console.log(out);

        return new Response(out.challenge,{
            headers: {'Content-Type':'text/plain'}
        });
    }
});

console.log(`server ${server.url}`);

const token = "";
const channel = "programming";
const text = "Hello from a slack bot!";
/*fetch("https://slack.com/api/chat.postMessage",{
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
    body: JSON.stringify({'channel': channel, 'text': text})
}).then(async (res)=>{
    const out = await res.json();
    console.log(out);
});
console.log({'channel': channel, 'text': text});
console.log("sent message!");
*/