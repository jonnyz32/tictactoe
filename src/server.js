/* eslint-disable no-undef */
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const publicPath = path.join(__dirname, "..", "dist");

app.use(express.static(publicPath));
app.get("/*", function (req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});
const port = process.env.PORT || 7070
app.listen( port, ()=>{
    console.log("Listen on port " + port)
});
