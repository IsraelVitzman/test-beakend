export async function ApiClient(url:any, options:object={}) {
    try {    
        const responce = await fetch(url,options)
        const data:any = await responce.json()
        if (!responce.ok) {
            console.log("invalid eroor",data.message);
            return {messag:data}
        }
        return data
    }catch(err){
        throw err
    }
    
}

