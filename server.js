const express = require("express");
const app = express();

app.get("/track", (req, res) => {
    console.log("📩 EMAIL OPENED!");
    console.log("Time:", new Date());

    const pixel = Buffer.from(
        "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "base64"
    );

    res.set("Content-Type", "image/gif");
    res.send(pixel);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});