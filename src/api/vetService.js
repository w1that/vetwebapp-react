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


    async getByUsername(username){
        const response = await axios.get(`http://localhost:8080/v1/vets/vet/username?username=${username}`)
        return response
    }

    async getByClinicNameContaining(containing){
        const response = await axios.get("http://localhost:8080/v1/vets/getByClinicNameContaining?containing="+ containing)
        return response
    }

    async uploadProfilePic(user,formData){
        const response = await axios.post("http://localhost:8080/v1/vet-images/upload/?id="+user.id, formData, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        return response
    }
}