// Initialise express router
const express = require("express");
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require("../db/skt_db");

// Endpoint New User '/users/new'
router.post("/new", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO users (first_name, last_name, email, password, role, notes, archive) VALUES (?, ?, ?, ?, ?, ?, ?)";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.role,
      req.body.notes,
      req.body.archive,
    ]);
    conn.end();
    conn.release();

    // console.dir(req.body);

    // Response to client
    res.status(201).send({ message: "User created" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint All Users '/users'
router.get("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM users";

    // Execute query
    const rows = await conn.query(myquery);

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    res.status(503).json({ message: err.message });
  }
});

// Endpoint Single User /users/1
router.get("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM users WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.user]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update User '/users/update/:id'
router.put("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, role = ?, notes = ?, archive = ? WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.role,
      req.body.notes,
      req.body.archive,
      req.user,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(202).send({ message: "Users updated!" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete User '/users/:id'
router.delete("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM users WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.user]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).send({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
  }
});

// Router params for user id
router.param("id", (req, res, next, id) => {
  req.user = id;
  next();
});

module.exports = router;