const BlogPost = require('../models/BlogPost.js');

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog post by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await BlogPost.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new blog post
exports.createBlog = async (req, res) => {
  const { title, content, category, image } = req.body;
  
  // Create slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
  const newBlog = new BlogPost({
    title,
    slug,
    content,
    category,
    image,
    publishedAt: new Date()
  });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};