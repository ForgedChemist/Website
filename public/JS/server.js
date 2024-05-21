const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// Create an in-memory SQLite database
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
});

// Create a "posts" table in the database
db.run('CREATE TABLE posts(title text, content text)', (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Created "posts" table in the database.');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to add a new post
app.post('/addPost', (req, res) => {
        let sql = `INSERT INTO posts(title, content) VALUES(?, ?)`;
        let values = [req.body.title, req.body.content];

        // Insert the post into the database
        db.run(sql, values, function(err) {
            if (err) {
                return console.log(err.message);
            }
            res.status(200).send(`A row has been inserted with rowid ${this.lastID}`);
        });
});

// Endpoint to get all posts
app.get('/getPosts', (req, res) => {
        let sql = `SELECT * FROM posts`;

        // Retrieve all posts from the database
        db.all(sql, [], (err, rows) => {
                if (err) {
                        throw err;
                }
                res.json(rows);
        });
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));

// Fetch all posts and display them on the webpage
fetch('/getPosts')
        .then(response => response.json())
        .then(posts => {
                for (let post of posts) {
                        let postElement = document.createElement('div');
                        postElement.innerHTML = '<h2>' + post.title + '</h2><p>' + post.content + '</p>';
                        document.body.appendChild(postElement);
                    }
        });