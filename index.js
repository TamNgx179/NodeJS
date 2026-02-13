//Tạo node server
const express = require("express");
const app = express();
const port = 3000;

//routes
app.get("/",(req,res) => {
    res.send("<h1>Đây là trang home</h1>");
});

//start server
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port ${port}`)
});


