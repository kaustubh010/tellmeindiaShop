import multer from "multer";
import path from "path";
import nc from "next-connect";
import fs from "fs";

// Ensure storage directory exists
const storageDir = "/var/www/shop/storage/";
if (!fs.existsSync(storageDir)) fs.mkdirSync(storageDir, { recursive: true });

// Configure multer storage
const storage = multer.diskStorage({
    destination: storageDir,
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
    },
});

const upload = multer({ storage });

const handler = nc()
    .use(upload.single("file"))
    .post((req, res) => {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        res.json({ url: `/storage/${req.file.filename}` });
    });

export default handler;

export const config = {
    api: {
        bodyParser: false, // Disable body parsing for file uploads
    },
};
