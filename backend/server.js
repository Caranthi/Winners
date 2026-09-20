const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const { title } = require("process");

const app = express();
const PORT = 3001;
const DATA = "./data.json";
const IMAGES_DIR = path.join(__dirname, "../frontend/public/images");
const MUSIC_DIR = path.join(__dirname, "../frontend/public/music");
const upload = multer({ storage: multer.memoryStorage() });

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
const handleUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No image provided" });
    }

    const filename = req.params.variant
        ? `${req.params.category}_${req.params.variant}.jpg`
        : `${req.params.category}.jpg`;

    const dir = path.join(IMAGES_DIR, req.params.person, req.params.year);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, filename), req.file.buffer);

    res.status(201).json({ message: "Uploaded" });
};
app.post("/upload/:person/:category/:year", upload.single("image"), handleUpload);
app.post("/upload/:person/:category/:year/:variant", upload.single("image"), handleUpload);
app.post("/uploadMusic/:person/:category/:year", upload.single("music"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No music provided" });
    }

    const dir = path.join(MUSIC_DIR, req.params.person, req.params.year);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${req.params.category}.mp3`), req.file.buffer);

    res.status(201).json({ message: "Uploaded" });
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