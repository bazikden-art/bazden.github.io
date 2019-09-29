import * as axios from "axios";


const instance = axios.create({
    baseURI:'https://frontend-test-assignment-api.abz.agency/api/v1/',
    //withCredentials:true

})

export const agencyAPI ={
    getUsers : (page=1,count=6) =>instance(`https://frontend-test-assignment-api.abz.agency/api/v1/users/?page=${page}&count=${count}`),
    getUser:(id=1) => instance(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`),
    getPositions:()=> instance(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
}




