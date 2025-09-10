import {ApiClient} from "./apiClient.ts";

export function Crud(fromRuter: any) {
    const URL = `http://localhost:3000${fromRuter}`

    const post = (data: any, url: any) => {
         return  ApiClient(`${URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        })
    }
    const del = (url:any,id: any) => {
        return ApiClient(`${URL}${url}${id}`, {
            method: "DELETE",
        })
    }
    const getAll = (url:any) => {
        return ApiClient(`${URL}${url}`, {
            method: "GET",
        })
    }
    const getById = (url:any,id: any) => {
        return ApiClient(`${URL}${url}${id}`, {
            method: "GET",
        })
    }


    const put = (id: any, data: any) => {
        return ApiClient(`${URL}${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }
    return { getById, getAll, post, put, del }
}
