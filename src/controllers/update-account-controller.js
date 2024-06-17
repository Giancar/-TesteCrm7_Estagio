import { UpdateAccount } from "../usecases/update-account.js";

export class UpdateAccountController {
  async handle(req, res) {
    const response = await new UpdateAccount().execute(req);
    return res.status(200).send(response);
  }
}
