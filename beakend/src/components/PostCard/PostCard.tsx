import "./PostCard.css"

function PostCard({props}:any){
    const time= new Date()
    return(
        <div className="post-card">
             <h4 id="Descriptio">{props.descriptio}</h4>
             <img id="imag" src={props.imag} alt="post" />
             <p id="like">{props.like}❤️</p>
             <p id="name">{props.name}</p>
             <p id="time">{time.toLocaleString()}</p>
        </div>
    )

}
export default PostCard

