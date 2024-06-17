import { CreateAccount } from "../usecases/create-account.js";
import { CepAPi } from "../infrastructure/api/cep-api.js";

export class CreateAccountController {
  async handle(req, res) {
    let account_data = req.body;
    const cepapi = await new CepAPi().get(account_data.cep);
    account_data.localidade = cepapi.data.data.localidade;
    
    const response = await new CreateAccount().execute(account_data);
    return res.status(200).send(response);
  }
}
