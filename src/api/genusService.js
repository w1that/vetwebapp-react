import axios from "axios";

export class GenusService {
  async getAll() {
    const response = await axios.get("https://vetspring.herokuapp.com/v1/genuses/");
    return response;
  }

  async getById(genus) {
    const response = await axios.get(
      `https://vetspring.herokuapp.com/v1/genuses/genus?id=1`
    );
    return response;
  }

  async add(genus) {
    const response = await axios.post(
      "https://vetspring.herokuapp.com/v1/genuses/?name=" + genus.name
    );
    return response;
  }
}
