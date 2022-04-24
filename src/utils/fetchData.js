//let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
/*
* Get data from api
* 
* @param string urlApi Api url
*/
const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlApi, true);
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('error: ' + urlApi));
            }
        }
    
        xhttp.send();
    })
}

export default fetchData;