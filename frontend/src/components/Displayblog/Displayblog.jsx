import { useEffect, useState } from "react";
import "./Displayblog.css";   // import CSS

const Displayblog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/blog/getblog"); 
        const data = await response.json();
        if (data.success) {
          setblogs(data.blogs);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchblogs();
  }, []);

  return (
    <div className="blog-page">
      <h1 className="blog-title">📖 Latest Blogs</h1>

      <div className="blog-grid">
        {blogs.length === 0 ? (
          <p className="empty-message">No blogs available yet.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-author">✍️ {blog.author}</p>
              <p className="blog-content">{blog.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Displayblog;
