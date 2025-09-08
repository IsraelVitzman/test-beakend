import Head from "../components/head/head";
import Logo from "../components/logo/logo";
import PostList from "../components/postList/postList";

function Layout() {
  return (
    <>
    <div className="stile">
      <Logo />
      <Head />
      <PostList />
    </div>
    </>
  );
}
export default Layout;