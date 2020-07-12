export function postRequest(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, { method: method, headers: headers, body }).then(response => {
        return response.json()
    })
}

export function getRequest(method, url) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, { method: method, headers: headers }).then(response => {
        return response.json()
    })
}