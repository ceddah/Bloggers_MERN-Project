const express = require("express");
const {
  createNewPost,
  removePost,
  postDetails,
  postComment,
  removeComment,
  editComment,
  browsePosts,
  bookmarkPost,
  latestPosts,
} = require("../controllers/postController");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// Posts
router.route("/create-new").post(requireAuth, createNewPost);
router.route("/remove-post/:postId").delete(requireAuth, removePost);
router.route("/detail/:postId").get(requireAuth, postDetails);
router.route("/browse-posts").get(requireAuth, browsePosts);
router.route("/bookmark/:postId").get(requireAuth, bookmarkPost);
router.route("/latest-posts").get(requireAuth, latestPosts);

// Comments
router.route("/detail/:postId/new-comment").post(requireAuth, postComment);
router.route("/detail/:postId/remove-comment/:commentId").delete(requireAuth, removeComment);
router.route("/detail/edit-comment/:commentId").post(requireAuth, editComment);

// Subscribe?

module.exports = router;
