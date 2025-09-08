async function ApiClient(url:any, options = {}) {
    try {
        const URL = `${url}`
        const responce = await fetch(URL, options)
        const data = await responce.json()
        if (!responce.ok) {
            console.log("invalid eroor");//אני צריך לבדוק בשרת טיפול לגבי נפילות לעדכן כאן
            return 
        }
        return data
    }catch(err){
        throw err
    }
}
export default ApiClient
