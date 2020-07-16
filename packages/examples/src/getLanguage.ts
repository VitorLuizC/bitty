import * as Maybe from '@bitty/maybe';

// ..:: Contexto ::..

enum LanguageEnum {
  PORTUGUESE = 'pt-BR',
  ENGLISH = 'en-US',
}

type User = {
  id: string;
  language?: LanguageEnum;
};

const getCurrentUser = (): null | User => null;

type Organization = {
  id: string;
  language: LanguageEnum;
};

// Função que pode falhar.
const getCurrentOrganization = (): Organization => ({
  id: '...',
  language: LanguageEnum.PORTUGUESE,
});

// ..:: Regras de negócio ::..

// 1. Pegar o idioma do usuário.
// 2. Se não der, pegar o idioma da organização.
// 3. Se não der, pegar o idioma do computador similar aos idiomas suportados.
// 4. Se não der, usar o idioma inglês.

// ..:: Solução ::..

const getLanguageFromUser = () =>
  Maybe.fromNullish(getCurrentUser())
    .chain((user) => Maybe.fromNullish(user.language));

const getLanguageFromOrganization = () =>
  Maybe.tryCatch(getCurrentOrganization)
    .map((organization) => organization.language);

const resolveLanguage = (language: string): Maybe.Maybe<LanguageEnum> => {
  if (language.startsWith('pt')) return Maybe.Some(LanguageEnum.PORTUGUESE);
  if (language.startsWith('en')) return Maybe.Some(LanguageEnum.ENGLISH);
  return Maybe.None;
};

const getLanguageFromBrowser = () =>
  Maybe.Some(window.navigator.languages)
    .chain(([ language ]) => Maybe.fromNullish(language))
    .chain(resolveLanguage);

const FALLBACK_LANGUAGE = LanguageEnum.ENGLISH;

const getLanguage = (): LanguageEnum =>
  getLanguageFromUser()
    .alt(getLanguageFromOrganization)
    .alt(getLanguageFromBrowser)
    .getOrElse(() => FALLBACK_LANGUAGE);

export default getLanguage;
