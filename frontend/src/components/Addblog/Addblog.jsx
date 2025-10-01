import { useState } from 'react';
import './Addblog.css'
import { useNavigate } from 'react-router-dom';
const Addblog=()=>{
    const navigate =useNavigate();

    const [bloginfo,setbloginfo]=useState({
        "title":"",
        "author":"",
        "content":""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        const copybloginfo={...bloginfo};
        copybloginfo[name]=value;
        setbloginfo(copybloginfo);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {title,author,content}=bloginfo;
        if(!title || !author || !content)
        {
            alert("Please fill all the fields");
            return;
        }
        try{
            const url="http://localhost:8000/blog/addblog";
            const response=await fetch(url,{method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(bloginfo)
            })
            const result=await response.json();
            const {message,success}=result;
            if(success)
            {
                setTimeout(() => {
                return alert("Blog added successfully"); 
            },);
            }

        }catch(err){
            alert("something went wrong");
        }
    }
   return (
    <div className="addblog-container">
      <h1 className="addblog-title">📝 Add New Blog</h1>
      <form className="addblog-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter blog title"
          name="title"
          value={bloginfo.title}
          onChange={handleChange}
          required
        />

        <label>Author</label>
        <input
          type="text"
          placeholder="Enter author name"
          name="author"
          value={bloginfo.author}
          onChange={handleChange}
          required
        />

        <label>Content</label>
        <textarea
          placeholder="Write your blog content here..."
          name="content"
          value={bloginfo.content}
          onChange={handleChange}
          rows="6"
          required
        ></textarea>
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