import { ItemProps } from "./data";

const BASE_URL = "https://norma.nomoreparties.space/api/";

interface CustomResponse<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
  json(): T;
}
type TResponseBody<U> = {
  success: boolean;
  data?: U;
};

type orderInfoProps = {
  success: boolean;
  name: string;
  order: {
    price: boolean;
    number: boolean;
    updatedAt: string;
    createdAt: string;
    name: string;
    status: string;
    _id: string;
    owner: {
      name: string;
      email: string;
      updatedAt: string;
      createdAt: string;
    };
    ingredients: Array<ItemProps | string>;
  };
};

export function loadIngredients() {
  const url = `${BASE_URL}ingredients`;
  return makeRequest<CustomResponse<TResponseBody<Array<ItemProps>>>>(
    "GET",
    url
  );
}

export function createOrder(body: any, token: any) {
  const url = `${BASE_URL}orders`;
  const auth = "Bearer " + token;
  return makeRequest<CustomResponse<TResponseBody<orderInfoProps>>>(
    "POST",
    url,
    body,
    auth
  );
}

export function registerUserAPI(body: any) {
  const url = `${BASE_URL}auth/register`;
  return makeRequest("POST", url, body);
}

export function loginUserAPI(body: any) {
  const url = `${BASE_URL}auth/login`;
  return makeRequest("POST", url, body);
}

export function tokenUserAPI(body: any) {
  const url = `${BASE_URL}auth/token`;
  return makeRequest("POST", url, body);
}

export function infoUserAPI(body: any, token: any) {
  const url = `${BASE_URL}auth/user`;
  const auth = "Bearer " + token;
  return makeRequest("GET", url, undefined, auth);
}

export function updateUserAPI(body: any, auth: any) {
  const url = `${BASE_URL}auth/user`;
  auth = "Bearer " + auth;
  return makeRequest("PATCH", url, body, auth);
}

export function logoutUserAPI(body: any) {
  const url = `${BASE_URL}auth/logout`;
  return makeRequest("POST", url, body);
}

export function forgotUserAPI(body: any) {
  const url = `${BASE_URL}password-reset`;
  return makeRequest("POST", url, body);
}

export function resetUserAPI(body: any) {
  const url = `${BASE_URL}password-reset/reset`;
  return makeRequest("POST", url, body);
}

function makeRequest<T>(
  method: string,
  url: string,
  body?: any,
  auth: string = ""
): Promise<T> {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: auth,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        throw error;
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else return Promise.reject(`Ошибка ${response.status}`);
    });
}

// function makeRequest<T>(
//   method: string,
//   url: string,
//   body?: any,
//   auth: string = ""
// ): Promise<T> {
//   return fetch(url, {
//     method: method,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: auth,
//     },
//     body: JSON.stringify(body),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json() as Promise<T>;
//   });
// }
