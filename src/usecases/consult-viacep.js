import { CepAPi } from "../infrastructure/api/cep-api.js";
export class ContaViaCep {
  async execute(cep) {
    const cepFormated = String(cep).replaceAll("-", "").trim();
    return await new CepAPi().get(cepFormated);
  }
}
