import * as Either from '@bitty/either';
import decodeJWT from 'jwt-decode';
import isNullish from '@bitty/nullish';

// ..:: Contexto ::..

const BASE_URL = 'https://angularsp.com/api/1.0';

const JWT_KEY = 'JWT';

enum SignInErrorCodeEnum {
  JWT_NOT_FOUND = 'JWT_NOT_FOUND',
  JWT_INVALID = 'JWT_INVALID',
  JWT_EXPIRED = 'JWT_EXPIRED',
  CANT_GET_USER = 'CANT_GET_USER',
}

class SignInError extends Error {
  code: SignInErrorCodeEnum;

  constructor(code: SignInErrorCodeEnum, message = 'No message.') {
    super(message);
    this.code = code;
    this.name = 'JWTError';
    this.message = message;
  }
}

type JWTPayload = {
  iat: number;
  exp?: null | number;
  userId: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

// ..:: Regras de negócio ::..

// 1. Pegar o JWT persistido no LocalStorage.
// 2. Com o JWT, fazer o decode e pegar o payload dele.
// 3. Com o payload, checar se não está expirado.
// 4. Com o payload, pegar o userId.
// 5. Com o userId, fazer a requisição para /user.
// 6. Com o resposta, retornar o usuário.

// ..:: Solução ::..

const getAuthenticatedJWT = () => {
  const error = new SignInError(SignInErrorCodeEnum.JWT_NOT_FOUND);
  return Either.fromFalsy(error)(window.localStorage.getItem(JWT_KEY));
};

const decodeAuthenticationJWT = (token: string) =>
  Either.tryCatch(
    () => decodeJWT<JWTPayload>(token),
    () => new SignInError(SignInErrorCodeEnum.JWT_INVALID),
  );

const wasJWTExpired = (payload: JWTPayload) =>
  isNullish(payload.exp) || payload.exp > Date.now() / 1000;

const checkJWTExpiration = Either.fromPredicate(wasJWTExpired, (payload) => {
  const date = new Date(payload.exp! * 1000);
  return new SignInError(
    SignInErrorCodeEnum.JWT_EXPIRED,
    `Authentication expired at ${date.toISOString()}`,
  );
});

const getUserById = (userId: string): Promise<User> =>
  fetch(BASE_URL + '/user/' + userId, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem(JWT_KEY)!}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      const message = String(error?.message);
      return new SignInError(SignInErrorCodeEnum.CANT_GET_USER, message),
    });

const getAuthenticatedUser = () =>
  getAuthenticatedJWT()
    .chain(decodeAuthenticationJWT)
    .chain(checkJWTExpiration)
    .map((payload) => payload.userId)
    .fold(Promise.reject, getUserById);

export default getAuthenticatedUser;
