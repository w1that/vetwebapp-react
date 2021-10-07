import axios from "axios";

export class GenusService{
    async getAll(){
        const response = await axios.get("http://localhost:8080/v1/genuses/")
        return response
    }

    async getById(genus){
        const response = await axios.get(`http://localhost:8080/v1/genuses/genus?id=1`)
        return response
    }
}