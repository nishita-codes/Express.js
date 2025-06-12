
// shortened-urls  express.js me 

// import express from "express";
// import { PORT } from "./env.js";

// const app = express();
// // home page 
// app.get("/",(req,res)=> res.send("Hello World!"));

// // about page
// app.get("/about",(req,res)=> res.send("Hello about page!"));

// // shortendURL
// app.get("/shortenedURL",(req,res)=>
//     { 
//         return res.send(`<div class="container">
//         <h1>URL Shortener</h1>
//         <form id="Shortener-form">
//             <div>
//                 <label for="url">Enter URL:</label>
//                 <input type="url" name="url" id="url" required>
//             </div>
//             <div>
//                 <label for="short">Enter shortCode:</label>
//                 <input type="text" name="shortCode" id="shortCode" required>
//             </div>
//             <button type="submit">Shortened</button>
//         </form>
//         <h2>Shortened URLs</h2>
//         <ul id="shortened-urls"></ul>
//     </div>`);
//     });

// // const PORT = 3000;
// // const PORT =process.env.PORT || 3000;
// // const PORT = 3000;
// app.listen(PORT,()=>{
//     console.log(`server is running at port localhost:${PORT}`)
// })




// HOW TO SEND FILES(PUBLIC) IN EXPRESS.JS only for html:-------------------------------------------------------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express();

// app.get("/" , (req,res)=>{
//     const homePagePath = path.join(import.meta.dirname,"public","index.html");
//     res.sendFile(homePagePath);
// })

// app.listen(PORT,()=>{
//     console.log("server starting on port 3000");
// })



// HOW TO SEND FILES IN EXPRESS.JS FOR CSS,HTML,IMAGES,JS:-------------------------------------------------------------------------

// import express from "express";
// import { PORT } from "./env.js";
//  import path from "path";

//  const app = express();
//   const staticPath = path.join(import.meta.dirname,"public");
//   app.use(express.static(staticPath));
 
 
//   app.listen(PORT,()=>{
//      console.log("server starting on port 3000");
//  });





// ROUTE PARAMTERS IN EXPRESS.JS:----------------------------------------------------------------------------------------------
// import express from "express";
// import { PORT } from "./env.js";
//  import path from "path";

//  const app = express();
//   const staticPath = path.join(import.meta.dirname,"public");
//   app.use(express.static(staticPath));
  

// FOR SINGLE ROUTE PARAMTER---------------------------------
//   app.get("/profile/:username",(req,res)=>{
//     console.log(req.params);
//     res.send(`<h1> My username is ${req.params.username}</h1>`)
//   });

// FOR MULTIPLE ROUTE PARAMTER--------------------------------- slug--unique identify
// app.get("/profile/:username/article/:slug",(req,res)=>{
//     console.log(req.params);
//     res.send(`<h1> article ${req.params.username} by ${req.params.slug}</h1>`)
//   });
 
 
//   app.listen(PORT,()=>{
//      console.log("server starting on port 3000");
//  });