import PostList from "../components/postList/postList"
import logoInstegrm from "../assets/img/logoInstegram.png"
import headInstegrm from "../assets/img/headInstagram.png"
import './home.css'
function Home() {
  return (
    <>
     <div className="home-page">
        <img id="headInstegrm" src={headInstegrm} alt="headInstegrm" />
        <img id="logoInstegrm" src={logoInstegrm} alt="logoInstegrm" />
     </div>
      <PostList/>
    </>

  )
}
export default Home