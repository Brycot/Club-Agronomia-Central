const Post = require("../../models/Post");

const deletePost = async (id) => {
  try {
    const post = await Post.deleteById(id);
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { deletePost };
