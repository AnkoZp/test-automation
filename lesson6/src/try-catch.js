async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        const response = await fetch(primaryUrl);

        if (!response.ok) {
            throw new Error('Primary resource failed: ' + response.status);
        }

        const data = await response.json();
        console.log('Primary data:', data);
        return data;
    } catch (error) {
        console.warn('Primary failed, trying fallback...', error);

        try {
            const fallbackResponse = await fetch(fallbackUrl);

            if (!fallbackResponse.ok) {
                throw new Error('Fallback resource failed: ' + fallbackResponse.status);
            }

            const fallbackData = await fallbackResponse.json();
            console.log('Fallback data:', fallbackData);
            return fallbackData;
        } catch (fallbackError) {
            console.error('Fallback also failed:', fallbackError);
            throw new Error('Both resources failed. Custom error thrown!');
        }
    }
}

// Call with non-existent and working resource
fetchWithFallback(
    'https://thisurldoesnotexist.com/api/data',
    'https://jsonplaceholder.typicode.com/posts/1'
).catch(error => console.error(error.message));
