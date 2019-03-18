const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

//Export the router to "../index.js"
module.exports = router;