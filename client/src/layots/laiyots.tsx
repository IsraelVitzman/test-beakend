import Logo from "../components/logo/logo";
import './laiyots.css'
import { Outlet  ,useNavigate} from "react-router-dom";

function Layout() {
  const navigate=useNavigate()
  return (
    <>
    <div className="head">
      <Logo />
      <nav>
         <button className="btn" onClick={() => navigate("/addpost")}>addpost</button>
         <button className="btn" onClick={() => navigate("/")}>home</button>
         
      </nav>
    </div>
    <div className="body">
      <Outlet/>
    </div>
    </>
  );
}
export default Layout;