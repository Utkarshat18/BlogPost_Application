import { useEffect, useState } from "react";


const Displayblog =()=>{
    const [blogs,setblogs]=useState([]);

    useEffect(()=>{
        const fetchblogs=async()=>{
            try{
                const response=await fetch("http://localhost:8000/blog/getblog");
                const data= await response.json();
                if(data.success)
                {
                    setblogs(data.blogs);
                }

            }catch(err){
                console.log(err);
            }
        }
        fetchblogs();
    },[])
    return (
        <>
        <div className="blog-container">
             {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
            
        </div>
        </>

    )
};

export default Displayblog;