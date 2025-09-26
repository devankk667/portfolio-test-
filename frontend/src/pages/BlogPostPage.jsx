import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8">
       {/* Blog post content */}
    </div>
  );
};

export default BlogPostPage;