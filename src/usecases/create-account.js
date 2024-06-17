import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class CreateAccount {
  async execute(account_data) {
    const response = await new RepositoryAccount().create(account_data);
    return response;
  }
}
