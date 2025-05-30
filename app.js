
// shortened-urls  express.js me 

import express from "express";

const app = express();
// home page 
app.get("/",(req,res)=> res.send("Hello World!"));

// about page
app.get("/about",(req,res)=> res.send("Hello about page!"));

// shortendURL
app.get("/shortenedURL",(req,res)=>
    { 
        return res.send(`<div class="container">
        <h1>URL Shortener</h1>
        <form id="Shortener-form">
            <div>
                <label for="url">Enter URL:</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="short">Enter shortCode:</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Shortened</button>
        </form>
        <h2>Shortened URLs</h2>
        <ul id="shortened-urls"></ul>
    </div>`);
    });

// const PORT = 3000;
const PORT =process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running at port localhost:${PORT}`)
})