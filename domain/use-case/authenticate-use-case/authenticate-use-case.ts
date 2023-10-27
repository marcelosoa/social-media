import { AccountModel } from "domain/models";

export type AuthenticateUseCaseModel = {
  cpf: string,
  password: string
}

export interface AuthenticateUseCaseMethods {
  execute(input: AuthenticateUseCaseModel): Promise<AccountModel>
}