const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const {
  getUserDetails,
  postResetPassword,
  setSocialLink,
  numberOfPostsByUser_TEST,
} = require("../controllers/userController");
const router = express.Router();

router.route("/:userId").get(requireAuth, getUserDetails);
router.route("/reset-password/:userId").post(requireAuth, postResetPassword);
router.route("/set-social/:userId").post(requireAuth, setSocialLink);
router.route("/test/:userId").get(numberOfPostsByUser_TEST);

module.exports = router;
