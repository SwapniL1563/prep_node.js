// file upload in Node.js
// Multer is node.js middleware for handling multiple/formdata, used for file upload
// It works with Express.js and saves uploaded file in memory or disk. Inside an (/uploads folder)

// How it works:
// user select a file from frontend(HTML form)
// form submits the file as multiple/formdata
// multer parses this req and stores the file:
// - in folder (/uploads) using diskStorage
// - in memory (buffer) using memoryStorage
// backend can now see the uploaded file

// eg.
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
  res.render('index', { file: null });
});

app.post('/upload', upload.single('myFile'), (req, res) => {
  if (!req.file) return res.send('Please select a file!');
  res.render('index', { file: `/uploads/${req.file.filename}` });
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
