//Função que faz uma requisição e retorna os dados de um cep;
import axios from "axios";
import { userAddress } from "../types";
export default async function getAddressInfo(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const address: userAddress = {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
    };

    return address;
  } catch (error) {
    return null;
  }
}
