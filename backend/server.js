const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { title } = require("process");

const app = express();
const PORT = 3001;
const DATA = "./data.json";

app.use(express.json());

const readData = () => {
    const raw = fs.readFileSync(DATA);
    return JSON.parse(raw);
};
const writeData = (data) => {
    fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
};

app.get("/:mode/:category", (req, res) =>{
    const data = readData();
    res.json(data[req.params.mode][req.params.category]);
});
app.post("/addYear/:year", (req, res) => {
    const data = readData();

    const newObject = {
        year: req.params.year,
        title: "",
        description: "",
        url: ""
    }
    const categories = Object.keys(data.r);

    categories.forEach(category => {
        data.r[category].push(newObject);
        data.m[category].push(newObject);
    });

    writeData(data);

    res.status(201).json(newObject.year);
});
app.put("/:mode/:category/:year", (req, res) => {
    const data = readData();
    const index = data[req.params.mode][req.params.category].findIndex(object => object.year === req.params.year);

    if (index === -1)
    {
        return res.status(404).json({message: "Not found"});
    }

    data[req.params.mode][req.params.category][req.params.year] = {
        ...data[req.params.mode][req.params.category][req.params.year],
        ...req.body
    };

    writeData(data);
    res.json([req.params.mode][req.params.category][req.params.year]);
});

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});