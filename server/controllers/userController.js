const Post = require("../models/post");
const Comment = require("../models/comment");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getUserDetails = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    const comments = await Comment.find({ author: userId }).populate([
      {
        path: "onPost",
        model: "Post",
        select: "_id title createdAt",
      },
      {
        path: "author",
        model: "User",
        select: "_id image",
      },
    ]);
    const posts = await Post.find({ author: userId })
      .select("title author createdAt updatedAt")
      .populate("author", "image");

    return res.status(200).json({
      success: true,
      userProfileDetails: {
        user,
        comments,
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
  // recent activity, all posts and comments by user
  // fullnamem @username
  // stats
  // email???
  // number of posts used made
  // number of comments user mad
  // lifetime posts
  // role = user/admin
  // joined date
  // bookmarks lengthh
};

exports.postResetPassword = async (req, res, next) => {
  const { userId } = req.params;
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(userId);

    const isPasswordCorrect = await user.comparePasswords(currentPassword);
    if (!isPasswordCorrect) {
      return next(
        new ErrorHandler("You must enter your current password correctly in order to change it.")
      );
    }
    const newHash = await bcrypt.hash(newPassword, 10);
    user.password = newHash;
    await user.save();
    return res.status(203).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.setSocialLink = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, { ...req.body }, { new: true });
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
