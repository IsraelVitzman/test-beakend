import "./PostCard.css"
import imag from '../../assets/img/post.jpeg'
function PostCard({props}:any){
    const time= new Date()
    return(
        <div className="post-card">
             <h4 id="Descriptio">{props.head}</h4>
             <img id="imag" src={imag} alt="post" />
             <p id="like">like❤️30</p>
             <p id="name">name:{props.userName}</p>
             <p id="time">{time.toLocaleString()}</p>
        </div>
    )
}
export default PostCard

