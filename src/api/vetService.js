import axios from "axios";

export class VetService{
    async register(vet){
        const response = await axios.post(`http://localhost:8080/v1/vets/?clinicName=${vet.clinicName}&email=${vet.email}&latitude=${vet.latitude}&longitude=${vet.longitude}&password=${vet.password}&username=${vet.username}`);
        return response;
    }

    async getAll(){
        const response = await axios.get("http://localhost:8080/v1/vets/")
        return response;
    }

    async login(vet){
        let owners = null
        this.getAll().then(response=>{
            response.data.data.forEach(element => {
                if(element.username==vet.username && element.password == vet.password){
                    console.log("yes")
                    return true
                }
            });
        })
        console.log("no")
        return false
    }

    async getByUsername(username){
        const response = await axios.get(`http://localhost:8080/v1/vets/vet/username?username=${username}`)
        return response
    }
}