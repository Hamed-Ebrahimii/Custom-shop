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