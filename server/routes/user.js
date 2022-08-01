const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const {
  getUserDetails,
  postResetPassword,
  setSocialLink,
} = require("../controllers/userController");
const router = express.Router();

router.route("/:userId").get(getUserDetails);
router.route("/reset-password/:userId").post(requireAuth, postResetPassword);
router.route("/set-social/:userId").post(requireAuth, setSocialLink);

module.exports = router;
