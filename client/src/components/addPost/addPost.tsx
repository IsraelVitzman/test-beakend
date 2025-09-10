import { useRef } from "react"
import {Crud} from "../../apiClient/crud.ts"
import './addPost.css'
export default function AddPost() {
  const id = useRef<HTMLInputElement>(null)
  const head = useRef<HTMLInputElement>(null)
  const userName = useRef<HTMLInputElement>(null)
  
  
  const send = async () => {
    if (!id.current?.value || !head.current?.value  || !userName.current?.value ) {
      console.error(" אחד השדות ריק, לא ניתן לשלוח");
      return;
    }
    const data = {
      id: id.current.value,
      userName: userName.current.value,
      head: head.current.value,
      
    };
    const crud= Crud("/post")
    await crud.post(data,"/addpost")
  }

  return (<>
    <div className="addPost">
      <input className="inputs" type="text" name="id" placeholder="id" ref={id} />
      <input className="inputs" type="text" name="head" placeholder="head" ref={head} />
      <input className="inputs" type="text" name="userName" placeholder="name" ref={userName} />
    
      <button id="btn" onClick={() => send()}>שלח</button>
    </div>
  </>
  )
}

