import "./Adminpage.css";
import { useNavigate } from "react-router-dom";

const Adminpage = () => {
    const navigate=useNavigate();
  return (
    <div className="admin-container">
      <h1>Welcome, Admin 👋</h1>
      <div className="admin-content">
        <p>
         Add new posts, upload images, and
          keep your platform updated!
        </p>
        <button className="btn btn-primary"onClick={()=>navigate("/addblog")}>Add New Blog</button>
      </div>
    </div>
  );
};

export default Adminpage;
