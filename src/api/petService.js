import axios from "axios";

export class PetService{
    async getAll(){
        const response = await axios.get("http://localhost:8080/v1/pets/");
        return response
    }

    async add(genus,owner,age, description, disease){
        await axios.post(`http://localhost:8080/v1/pets/?age=${age}&description=${description}&disease=${disease}&genusId=${genus.id}&ownerId=${owner.id}`)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        
    }

    async getByGenusId(genus){
        const response = await axios.get(`http://localhost:8080/v1/pets/pets/genus/?id=${genus.id}`)
        return response
    }

    async addImage(pet, formData){
        const response = await axios.post(`http://localhost:8080/v1/pet-images/upload/?id=${pet.id}`,formData, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        return response
    }

    async getByPetImage(pet){
        const response = await axios.get(`http://localhost:8080/v1/pet-images/pet-image?id=${pet.id}`)
        return response
    }
}