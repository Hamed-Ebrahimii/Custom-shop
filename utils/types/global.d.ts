import {HTMLAttributes} from "react";

type SvgProps = HTMLAttributes<HTMLOrSVGElement>

interface ILogin {
    "status": string,
    "token": {
        "accessToken": string
        "refreshToken": string
    },
    "data": {
        "user": {
            "_id": string,
            "firstname": string,
            "lastname": string,
            "username": string,
            "password": string,
            "phoneNumber": string,
            "address": string,
            "role": string,
            "createdAt": string,
            "updatedAt": string,
            "__v": number,
            "refreshToken": string
        }
    }
}
interface ResponseProduct {
    "status": string,
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": {
        "products": Product[]
    }
}
interface ResponseApi <T>{
    "status": string,
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": T
}
interface Product {
    "_id": string,
    "category": string,
    "subcategory": string,
    "name": string,
    "price": number,
    "quantity": number,
    "brand": string,
    "description": string,
    "thumbnail": string,
    "images": string[],
    "slugname": string
}
interface Category {
    "categories": {
            "_id": string,
            "name": string,
            "icon": string,
            "createdAt": string,
            "updatedAt": string,
            "slugname": string
        }[]
}
interface SubCategories {
    "subcategories":
        {
            "_id": string,
            "name": string,
            "icon": string,
            "createdAt": string,
            "updatedAt": string,
            "slugname": string,
            "category": string,
        }[]
}
interface EditProduct {
    "category"?: string,
    "subcategory"?: string,
    "name"?: string,
    "price"?: number,
    "quantity"?: number,
    "brand"?: string,
    "description"?: string,
    "thumbnail"?: string,
    "images"?: string[],
}