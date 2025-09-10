import { useEffect, useState } from 'react'
import './getPost.css'
import { Crud } from '../../apiClient/crud'
import PostCard from '../PostCard/PostCard'


function GetPost() {
   const [data, setData]=useState<any[]>([])
    useEffect(()=>{
       const getData=async ()=>{
         const crud= Crud('/post')
         const responce=await crud.getAll("/getAllpost")
         setData(responce)
       }
      getData()
    },[])
    return(
      <div className="grid">
         {data.map(element=>(
            <PostCard key={element.id} props={element}/>
         ))}
      </div>
    )
    
   
}
export default  GetPost