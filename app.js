
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




// QUERY PARAMETER :-----------------------------------------------------------------------------
//  import express from "express";
//  import { PORT } from "./env.js";
//  import path from "path";

//  const app = express();

//  app.get("/product",(req,res)=>{
//     console.log(req.query);
//     res.send(`<h1>user search for Product ${req.query.search} page</h1>`)
//  });
//  app.listen(PORT,()=>{
//      console.log("server starting on port 3000");
//  });



// FORM SUBMISSION IN EXPRESS.JS:----------------------------------------------------------------------------------------------------

// import express from "express";
//  import { PORT } from "./env.js";
//  import path from "path";

//  const app = express();

//  app.use(express.urlencoded({extended:true}));  //middleware for accessing the post method 

//  app.post("/contact",(req,res)=>{
//     console.log(req.body);
//     res.redirect("/");
//  })


//  app.listen(PORT,()=>{
//      console.log("server starting on port 3000");
//  });



// HANDLE 404 PAGE:----------------------------------------------------------------------------------------------------------
// import express from "express";
//  import { PORT } from "./env.js";
//  import path from "path";

//  const app = express();

//  app.use(express.urlencoded({extended:true}));  //middleware for accessing the post method 

//  app.post("/contact",(req,res)=>{
//     console.log(req.body);
//     res.redirect("/");
//  });

//  app.use((req,res)=>{   // at the end me use krna hai code ke 
//     // return res.status(404).send("page mot found");
//     return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"));
//  });


//  app.listen(PORT,()=>{
//      console.log("server starting on port 3000");c
//  });



// EXPRESS.ROUTER():-----------------------------------------------------------------------------------------------------
// import express from "express";
//  const router = express.Router();

//  router.get("/users" , (req,res)=>{
//     res.send('lists of users');
//  })

//  export default router;//default export;

//  export const router1 = router;//named export;



// TEMPLATE ENGINE:-------------------------------------------------------------------------------------------------------
import express from 'express';
const app = express();
 const router = express.Router();

 const PORT = 3000;

app.set('view engine', 'ejs'); // Tell express to use EJS
app.set("views","./views");
app.use("/", router);


router.get("/report",(req,res)=>{
    const student = {
        name : "Nishita",
        grade: "12th",
        favoriteSubject: "Mathematics",
    };
     console.log(student);
   return res.render("report" ,{ student });
})

app.listen(PORT,()=>{
     console.log("server starting on port 3000");
 });