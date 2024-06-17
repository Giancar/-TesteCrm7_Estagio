import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class UpdateAccount {
  async execute(req) {
    const response = await new RepositoryAccount().update(req.params.id, req.body);
    return response;
  }
}
