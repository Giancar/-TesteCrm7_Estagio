import axios from "axios";

export class CepAPi {
  async get(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return {
        status: true,
        code: 200,
        message: "Cep consulta com sucesso.",
        data: response,
      };
    } catch (error) {
      return {
        status: false,
        code: 500,
        message: "Erro ao consulta CEP.",
        data: error,
      };
    }
  }
}
