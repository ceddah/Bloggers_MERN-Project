const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");

exports.createNewPost = async (req, res, next) => {
  const newPost = { ...req.body };
  newPost.author = req.user._id;

  try {
    const post = new Post(newPost);
    await post.save();
    return res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    return next(error);
  }
};

exports.removePost = async (req, res, next) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (post.author.toString() !== req.user._id.toString()) {
      return next(new ErrorHandler("Unable to delete this post."));
    }
    await Post.findByIdAndDelete(postId);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

exports.postDetails = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId).populate([
      {
        path: "comments",
        populate: {
          path: "author",
          model: "User",
          select: "_id username image",
        },
      },
    ]);

    if (!post) {
      return next(new ErrorHandler("Unable to find this post."));
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return next(error);
  }
};

exports.postComment = async (req, res, next) => {
  const { postId } = req.params;
  const newComment = { ...req.body };
  newComment.author = req.user._id;
  try {
    const comment = await Comment.create(newComment);
    const post = await Post.findById(postId);
    post.comments = [...post.comments, comment._id];
    await post.save();
    return res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.removeComment = async (req, res, next) => {
  const { commentId, postId } = req.params;
  try {
    const post = await Post.findById(postId);
    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== commentId.toString()
    );
    await post.save();
    await Comment.findByIdAndDelete(commentId);
    return res.status(202).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.editComment = async (req, res, next) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    await Comment.findByIdAndUpdate(commentId, { text });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.browsePosts = async (req, res, next) => {
  const { search, category } = req.query;
  const options = {
    ...(search && { title: { $regex: search, $options: "i" } }),
    ...(category && { category }),
  };

  try {
    const posts = await Post.find(options).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

exports.bookmarkPost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const user = await User.findById(req.user._id);
    user.bookmarks = [...user.bookmarks, postId];
    await user.save();

    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.latestPosts = async (req, res, next) => {
  try {
    const latest = await Post.find().sort({ createdAt: -1 }).limit(3);

    return res.status(200).json({
      success: true,
      posts: latest,
    });
  } catch (error) {
    next(error);
  }
};