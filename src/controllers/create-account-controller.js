import { CreateAccount } from "../usecases/create-account.js";

export class CreateAccountController {
  async handle(req, res) {
    const response = await new CreateAccount().execute(req);
    return res.status(200).send(response);
  }
}
