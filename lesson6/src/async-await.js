async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }

        const data = await response.json();
        processData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function processData(data) {
    console.log('Data received and processed:', data);
}

await fetchData('https://jsonplaceholder.typicode.com/posts/1');
