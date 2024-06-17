import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class DeleteAccount {
  async execute(req) {
    const response = await new RepositoryAccount().delete(req.params.id);
    return response;
  }
}
