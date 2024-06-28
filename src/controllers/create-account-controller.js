import { CreateAccount } from "../usecases/create-account.js";
import { ContaViaCep } from "../usecases/consult-viacep.js";

export class CreateAccountController {
  async handle(req, res) {
    let account_data = req.body;
    const cepapi = await new ContaViaCep().execute(account_data.cep);

    account_data.localidade = cepapi.data.data.localidade;
    account_data.bairro = cepapi.data.data.bairro;
    
    const response = await new CreateAccount().execute(account_data);
    return res.status(200).send(response);
  }
}
