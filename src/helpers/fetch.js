const baseUrl = "http://localhost:4000/api";//process.env.REACT_APP_API_URL;

export const fetchWithOutToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    try {
        if(method === 'GET'){
            return fetch(url).catch(err => console.log(err));;
        } else {
            return fetch(url, {
                method,
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            }).catch(err => console.log(err));;
        }
    } catch (error) {
        console.log(error);
    }
    
}

export const fetchWithToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token')  || '';
    try {
        if(method === 'GET'){
            return fetch(url, ({
                method,
                headers: {
                    'x-token': token
                }
            })).catch(err => console.log(err));
        } else {
            return fetch(url, {
                method,
                headers: {
                    'Content-type':'application/json',
                    'x-token': token
                },
                body: JSON.stringify(data)
            }).catch(err => console.log(err));;
        }
    } catch (error) {
        console.log(error);
    }
}