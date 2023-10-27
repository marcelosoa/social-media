import { createContext, useContext } from "react";

import { AuthenticateUseCaseMethods } from "domain/use-case";

export const AuthenticateUseCaseContext = createContext<AuthenticateUseCaseMethods>({} as AuthenticateUseCaseMethods)


export const useAuthenticateUseCase = () => useContext(AuthenticateUseCaseContext)