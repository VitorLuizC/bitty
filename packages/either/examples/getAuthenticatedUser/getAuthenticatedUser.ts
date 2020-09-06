import * as Either from '../../';
// The import statement in your application would be:
// import * as Either from '@bitty/either';

import decodeJWT from 'jwt-decode';
import isNullish from '@bitty/nullish';

// ..:: Context ::..

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

// ..:: Business rules ::..

// 1. Get persisted JWT from `window.localStorage`.
// 2. With JWT, decode its payload with `jwt-decode`.
// 3. With payload, check if it wasn't expired.
// 4. With payload (not expired yet), get its userId.
// 5. With userId, do a request to `/user`.
// 6. With response, return the user.

// ..:: Implementation ::..

const getAuthenticatedJWT = () => {
  const error = new SignInError(SignInErrorCodeEnum.JWT_NOT_FOUND);
  return Either.fromFalsy(error)(window.localStorage.getItem(JWT_KEY));
};

const decodeAuthenticationJWT = (token: string) =>
  Either.tryCatch(
    () => decodeJWT<JWTPayload>(token),
    () => new SignInError(SignInErrorCodeEnum.JWT_INVALID),
  );

const wasNotJWTExpired = (payload: JWTPayload) =>
  isNullish(payload.exp) || payload.exp > Date.now() / 1000;

const checkJWTExpiration = Either.fromPredicate(wasNotJWTExpired, (payload) => {
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
      return new SignInError(SignInErrorCodeEnum.CANT_GET_USER, message);
    });

const getAuthenticatedUser = () =>
  getAuthenticatedJWT()
    .chain(decodeAuthenticationJWT)
    .chain(checkJWTExpiration)
    .map((payload) => payload.userId)
    .fold(Promise.reject, getUserById);

export default getAuthenticatedUser;
