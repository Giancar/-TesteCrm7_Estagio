import { ConsultOneAccount } from "../usecases/consult-one-account.js";

export class ConsultOneAccountController {
  async handle(req, res) {
    const response = await new ConsultOneAccount().execute(req);
    return res.status(200).send(response);
  }
}
