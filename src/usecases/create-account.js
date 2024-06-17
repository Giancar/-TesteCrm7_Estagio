import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class CreateAccount {
  async execute(req) {
    const response = await new RepositoryAccount().create(req.body);
    return response;
  }
}
