const User = require("../models/user.js");
const Report = require("../models/report.js");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find().populate([
      {
        path: "comments",
        path: "post",
        model: "Post",
        select: "_id title reports author????? ",
        populate: {
          path: "author",
          model: "User",
          select: "_id username fullName image",
        },
      },

      {
        path: "submittedBy",
        model: "User",
        select: "_id username fullName image",
      },
    ]);
    return res.status(200).json({
      success: true,
      reports,
    });
  } catch (error) {
    next(error);
  }
};
exports.promoteUser = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);
    user.role = "admin";
    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
