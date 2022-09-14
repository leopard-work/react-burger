export function loadIngredients() {
    const url = "https://norma.nomoreparties.space/api/ingredients";

    return fetch(url)
        .then((response) => {
            if (response.ok) return response.json();
            else return Promise.reject(`Ошибка ${response.status}`);
        })
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => { console.warn(error); })
}

export function loadOrder(body) {
    const url = "https://norma.nomoreparties.space/api/orders";

    return fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((response) => {
            if (response.ok) return response.json();
            else return Promise.reject(`Ошибка ${response.status}`);
        })
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => { console.warn(error); })
}


