import './Addblog.css'
import { useNavigate } from 'react-router-dom';
const Addblog=()=>{
    const navigate =useNavigate();
   return (
    <div className="addblog-container">
      <h1 className="addblog-title">📝 Add New Blog</h1>
      <form className="addblog-form">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter blog title"
          name="title"
          required
        />

        <label>Author</label>
        <input
          type="text"
          placeholder="Enter author name"
          name="author"
          required
        />

        <label>Content</label>
        <textarea
          placeholder="Write your blog content here..."
          name="content"
          rows="6"
          required
        ></textarea>

        <label>Upload Image</label>
        <input type="file" accept="image/*" name="img" required />
        <div className='btn'>
            <button type="submit" className="btn-submit">
           ADD BLOG
        </button>
        <button className="btn-submit" onClick={()=>navigate("/admin")}>
           CANCLE
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default Addblog;