import BlogModel from "../models/BlogModel.js";
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.json(blog);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await BlogModel.create(req.body);

    res.json(blog);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });

    const blog = await BlogModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    console.log(req.params.id);
    await BlogModel.destroy({
      where: { id: parseInt(req.params.id,10) },
    })
    
    res.json({
      message: "¡Registro eliminado!.",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
