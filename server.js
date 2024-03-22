const express=require("express");

const app =express();

const PORT =4000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`));
const today= new Date ();
const day = today.getDay();
const hours= today.getHours();

if(day>= 1 && day <= 5 && hours >=9 && hours < 16){
    app.use(express.static("public"));
    app.get("/", (req,res) => {
        app.use(express.static("public"));
        res.sendFile(__dirname + "/public/index.html");
    });
    } else {
        app.use(express.static("closed"));
        app.get("/", (req,res) => {
            app.use(express.static("public"));
            res.sendFile(__dirname + "/closed/index.html");
        });

    }
