const express = require("express");
const app = express();
const port = 3000;
const formidable = require("formidable");
const fs = require("fs");

app.set("view engine", "ejs");
app.set("./views", "views");
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("<h1>Đây là trang chủ<h1>");
});

app.get("/addProduct", (req,res) => {
    res.render("addProduct.ejs");
});

app.post("/addnewproduct", (req,res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        let name = fields.productName;
        let tmpPath = files.productImage[0].filepath;
        let tenFile = files.productImage[0].originalFilename;
        let destPath = __dirname + '\\public\\images\\' + tenFile;
        fs.rename(tmpPath,destPath,function(err){
            if(err) throw err;
            res.send("Upload thành công. Name=" + name);
        });
    });
});


app.listen(port, () => {
    console.log(`Ứng dụng đang chạy ở port ${port}`)
});