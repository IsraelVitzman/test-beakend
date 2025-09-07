import Posts from "../../posts"
import PostCard from "../PostCard/PostCard"
import './postList.css'

function PostList() {
    
    const posts = Posts()
    return (
        <div className="post-List">
            {posts.map((post =>
                <PostCard key={post.id} props={post} />
            ))}
        </div>
    )
}
export default PostList