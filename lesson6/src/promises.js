function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            processData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function processData(data) {
    console.log('Data received and processed:', data);
}

fetchData('https://jsonplaceholder.typicode.com/posts/1').then();
