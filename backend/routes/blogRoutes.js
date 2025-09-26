const express = require('express');
const router = express.Router();
const { getAllBlogs, getBlogBySlug, createBlog } = require('../controllers/blogController.js');

router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', createBlog);

module.exports = router;