import { DeleteAccount } from "../usecases/delete-account.js";

export class DeleteAccountController {
  async handle(req, res) {
    const response = await new DeleteAccount().execute(req);
    return res.status(200).send(response);
  }
}
