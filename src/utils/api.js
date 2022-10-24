const BASE_URL = "https://norma.nomoreparties.space/api/";

export function loadIngredients() {
  const url = `${BASE_URL}ingredients`;
  return makeRequest("GET", url);
}

export function createOrder(body, token) {
  const url = `${BASE_URL}orders`;
  const auth = "Bearer " + token;
  return makeRequest("POST", url, body, auth);
}

export function registerUserAPI(body) {
  const url = `${BASE_URL}auth/register`;
  return makeRequest("POST", url, body);
}

export function loginUserAPI(body) {
  const url = `${BASE_URL}auth/login`;
  return makeRequest("POST", url, body);
}

export function tokenUserAPI(body) {
  const url = `${BASE_URL}auth/token`;
  return makeRequest("POST", url, body);
}

export function infoUserAPI(body, token) {
  const url = `${BASE_URL}auth/user`;
  const auth = "Bearer " + token;
  return makeRequest("GET", url, undefined, auth);
}

export function updateUserAPI(body, auth) {
  const url = `${BASE_URL}auth/user`;
  auth = "Bearer " + auth;
  return makeRequest("PATCH", url, body, auth);
}

export function logoutUserAPI(body) {
  const url = `${BASE_URL}auth/logout`;
  return makeRequest("POST", url, body);
}

export function forgotUserAPI(body) {
  const url = `${BASE_URL}password-reset`;
  return makeRequest("POST", url, body);
}

export function resetUserAPI(body) {
  const url = `${BASE_URL}password-reset/reset`;
  return makeRequest("POST", url, body);
}

function makeRequest(method, url, body, auth = "") {
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
        error.response = response;
        throw error;
      }
    })
    .then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(`Ошибка ${response.status}`);
    });
}
