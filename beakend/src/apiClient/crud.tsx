import ApiClient from "./apiClient";

function Crud(url: any) {
    const post = (data: any) => {
        return ApiClient(url, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(data)
        })
    }
    const del = (id: any) => {
        return ApiClient(`${url} ${id}`, {
            method: "DELETE",
        })
    }

    const get = (id: any) => {
        return ApiClient(`${url} ${id}`, {
            method: "GET",
        })
    }

    const put = (id: any ,data: any) => {
        return ApiClient(`${url} ${id}`, {
            method: "PUT",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(data)
        })
    }
return {get ,post ,put,del}
}
export default Crud