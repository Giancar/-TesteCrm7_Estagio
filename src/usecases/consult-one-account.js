import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class ConsultOneAccount {
  async execute(req) {
    const response = await new RepositoryAccount().fetch(req.params.id);
    return response;
  }
}
