const mongoose = require("mongoose");

// router handler

const LikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId, // reference
    ref: "Post", // reference to post model
  },

  user: {
    type: String,
    required: true,
  },
});

// export it

module.exports = mongoose.model("Like", LikeSchema);
