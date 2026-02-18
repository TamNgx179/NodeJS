//Tạo node server
const express = require("express");
const app = express();
const port = 3000;  
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//res.send() phải tự viết html
app.get("/",(req,res) => {
    res.send("<h1>Đây là trang home</h1>");
});

//res.render() viết HTML trong file riêng + truyền dữ liệu vào
app.get("/home", (req,res) => {
    res.render("home", {title: "Anh", name: "Teo"});
});

app.get("/date", (req,res) => {
    res.render("date", {day: "Thứ bảy"});
});

app.get("/product", (req,res) => {
    const sp= [
        {name: 'HTC M9', price: 6000000},
        {name: 'Samsung S8', price: 7500000},
    ]
    res.render("product",{sp: sp});
});

app.get("/addEmail", (req,res) => {
    res.render("addEmail.ejs");
});

app.post("/addEmail", (req,res) => {
    let email = req.body.email;
    res.send(email);
});

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port ${port}`)
});


