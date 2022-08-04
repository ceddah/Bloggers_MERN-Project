const express = require("express");
const { getAllUsers, getAllReports, promoteUser } = require("../controllers/adminController");

const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");

const router = express.Router();

router.route("/get-all-users").get(requireAuth, requireAdmin, getAllUsers);
router.route("/get-all-reports").get(requireAuth, requireAdmin, getAllReports);
router.route("/promote-user").get(requireAuth, requireAdmin, promoteUser);

module.exports = router;
