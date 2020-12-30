import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/danaLines'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(danaLine) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(danaLine)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}


export function getOne(danaLine) {
    return fetch(`${BASE_URL}/${danaLine._id}`).then(res => res.json())
}

