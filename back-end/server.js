const express = require('express');
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParse.json());
app.use(express.static(path.join(__dirname, 'public')));


// initialize SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
	db.run("CREATE TABLE messages ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT , email TEXT, phone TEXT, message TEXT)");
});


// serve the HTML, CSS and JS files from the public folder
app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});


// handle contact form submissions
app.post('/send_message', (req, res) => {
	const { name, email, phone, message } = req.body;
	
	db.run("INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)", [name, email, phone, message], (err) => {
		if (err) {
			console.error(err.message);
			res.status(500).send('Error saving the message');
		} else {
			res.status(200).send('Message received successfully');
		}
	});


// start the server
app.listen(PORT,() => {
	console.log('Server is running on htttp://localhost:${PORT}');
});

