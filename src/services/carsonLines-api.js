import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/carsonLines'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(carsonLine) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(carsonLine)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

// export function update(danaLine) {
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//         body: JSON.stringify(danaLine)
//     }
//     return fetch(`${BASE_URL}/${danaLine._id}`, options).then(res => res.json())
// }

// export function getOne(danaLine) {
//     return fetch(`${BASE_URL}/${danaLine._id}`).then(res => res.json())
// }

// export function deleteOne(id) {
//     const options = {
//         method: 'DELETE',
//         headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
//     }
//     return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
// }