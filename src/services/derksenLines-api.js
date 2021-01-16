import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/derksenLines'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(derksenLine) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(derksenLine)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(derksenLine) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(derksenLine)
    }
    return fetch(`${BASE_URL}/${erksenaLine._id}`, options).then(res => res.json())
}

export function getOne(derksenLine) {
    return fetch(`${BASE_URL}/${derksenLine._id}`).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}