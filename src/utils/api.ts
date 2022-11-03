const BASE_URL = "https://norma.nomoreparties.space/api/";

export function loadIngredients() {
  const url = `${BASE_URL}ingredients`;
  return makeRequest("GET", url);
}

export function createOrder(
  body: { ingredients: Array<string> },
  token: string
) {
  const url = `${BASE_URL}orders`;
  const auth = "Bearer " + token;
  return makeRequest("POST", url, body, auth);
}

export function registerUserAPI(body: {
  email: string;
  password: string;
  name: string;
}) {
  const url = `${BASE_URL}auth/register`;
  return makeRequest("POST", url, body);
}

export function loginUserAPI(body: { email: string; password: string }) {
  const url = `${BASE_URL}auth/login`;
  return makeRequest("POST", url, body);
}

export function tokenUserAPI(body: { token: string }) {
  const url = `${BASE_URL}auth/token`;
  return makeRequest("POST", url, body);
}

export function infoUserAPI(token: string) {
  const url = `${BASE_URL}auth/user`;
  const auth = "Bearer " + token;
  return makeRequest("GET", url, undefined, auth);
}

export function updateUserAPI(
  body: { email?: string; password?: string; name?: string },
  auth: string
) {
  const url = `${BASE_URL}auth/user`;
  auth = "Bearer " + auth;
  return makeRequest("PATCH", url, body, auth);
}

export function logoutUserAPI(body: { token: string }) {
  const url = `${BASE_URL}auth/logout`;
  return makeRequest("POST", url, body);
}

export function forgotUserAPI(body: { email: string }) {
  const url = `${BASE_URL}password-reset`;
  return makeRequest("POST", url, body);
}

export function resetUserAPI(body: { password: string; token: string }) {
  const url = `${BASE_URL}password-reset/reset`;
  return makeRequest("POST", url, body);
}

function makeRequest(
  method: string,
  url: string,
  body?: any,
  auth: string = ""
) {
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
        const error = new Error(response.statusText);
        throw error;
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else return Promise.reject(`Ошибка ${response.status}`);
    });
}
