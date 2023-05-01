const express = require("express");

const router = express.Router();

// Import Controller

const { dummylink } = require("../controller/LikePost");

const { createComment } = require("../controller/CommentPost");

// mapping create

router.get("/dummyroute", dummylink);

router.post("/comments/create", createComment);

// export

module.exports = router;
