const express = require("express");
const {
  createNewPost,
  removePost,
  postDetails,
  postComment,
  removeComment,
  editComment,
  likeComment,
  browsePosts,
  getAllBookmarks,
  bookmarkPost,
  latestPosts,
} = require("../controllers/postController");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// Posts
router.route("/create-new").post(requireAuth, createNewPost);
router.route("/remove-post/:postId").delete(requireAuth, removePost);
router.route("/detail/:postId").get(postDetails);
router.route("/browse-posts").get(browsePosts);
router.route("/bookmark/:postId").get(requireAuth, bookmarkPost);
router.route("/my-bookmarks").get(requireAuth, getAllBookmarks);
router.route("/latest-posts").get(latestPosts);

// Comments
router.route("/detail/:postId/new-comment").post(requireAuth, postComment);
router.route("/detail/:postId/remove-comment/:commentId").delete(requireAuth, removeComment);
router.route("/detail/edit-comment/:commentId").post(requireAuth, editComment);
router.route("/detail/like-comment/:commentId").get(requireAuth, likeComment);

module.exports = router;
