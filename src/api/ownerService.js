import axios from "axios";

export class OwnerService{
   async register(owner){
        const response = await axios.post(`http://localhost:8080/v1/owners/?email=${owner.email}&firstName=${owner.firstName}&lastName=${owner.lastName}&latitude=${owner.latitude}&longitude=${owner.longitude}&password=${owner.password}&username=${owner.username}`)   //default lat and long is 1,1
        return response;
    }

    async getAll(){
        const response = await axios.get("http://localhost:8080/v1/owners/")
        return response;
    }

    async getByUsername(username){
        const response =  await axios.get(`http://localhost:8080/v1/owners/owner/username/?username=${username}`);
        return response
    }

    async uploadProfilePic(user,formData){
        const response = await axios.post("http://localhost:8080/v1/owner-images/upload/?id="+user.id, formData, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        return response
    }

    async removeProfilePic(id){
        const response = await axios.delete("http://localhost:8080/v1/owner-images/owner-image?id="+id)
        return response
    }
}