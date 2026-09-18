const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { title } = require("process");

const app = express();
const PORT = 3001;
const DATA = "./data.json";

app.use(cors());
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
app.get("/:mode/:category/:year", (req, res) => {
    const data = readData();
    const entry = data[req.params.mode]?.[req.params.category]?.find(
        (object) => String(object.year) === req.params.year
    );

    if (!entry) {
        return res.status(404).json({ message: "Not found" });
    }

    res.json(entry);
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
    const list = data[req.params.mode]?.[req.params.category];
    const index = list?.findIndex(object => String(object.year) === req.params.year);

    if (index === undefined || index === -1)
    {
        return res.status(404).json({message: "Not found"});
    }

    list[index] = {
        ...list[index],
        ...req.body
    };

    writeData(data);
    res.json(list[index]);
});

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});