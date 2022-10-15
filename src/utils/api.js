export function loadIngredients() {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    return getData('GET', url);
}

export function createOrder(body, token) {
    const url = "https://norma.nomoreparties.space/api/orders";
    const auth = 'Bearer ' + token;
    return getData('POST', url, body, auth);
}

export function registerUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/auth/register";
    return getData('POST', url, body);
}

export function loginUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/auth/login";
    return getData('POST', url, body);
}

export function tokenUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/auth/token";
    return getData('POST', url, body);
}

export function infoUserAPI(body, token) {
    const url = "https://norma.nomoreparties.space/api/auth/user";
    const auth = 'Bearer ' + token;
    return getData('GET', url, undefined, auth);
}

export function updateUserAPI(body, auth) {
    const url = "https://norma.nomoreparties.space/api/auth/user";
    auth = 'Bearer ' + auth;
    return getData('PATCH', url, body, auth);
}

export function logoutUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/auth/logout";
    return getData('POST', url, body);
}

export function forgotUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/password-reset";
    return getData('POST', url, body);
}

export function resetUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/password-reset/reset";
    return getData('POST', url, body);
}

function getData(method, url, body, auth = '') {
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    })
    .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(`Ошибка ${response.status}`);
    })
    .catch((e) => {
        console.log('Error: ' + e.message);
        return e.response;
    });
}


