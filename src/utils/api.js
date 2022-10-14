export function loadIngredients() {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    return getData('GET', url);
}

export function createOrder(body) {
    const url = "https://norma.nomoreparties.space/api/orders";
    return getData('POST', url, body);
}

export function registerUserAPI(body) {
    const url = "https://norma.nomoreparties.space/api/auth/register";
    return getData('POST', url, body);
}

function getData(method, url, body) {
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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
        console.log(e.response);
        return e.response;
    });
}


