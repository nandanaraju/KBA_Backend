const axios = require('axios');
const { performance } = require('perf_hooks');

async function fetchMultipleUrls(urls) {
    const requests = urls.map(url => {
        const start = performance.now();
        return axios.get(url).then(response => {
            const duration = performance.now() - start;
            return { url, duration, data: response.data };
        }).catch(error => {
            const duration = performance.now() - start;
            return { url, duration, error: error.message };
        });
    });

    const results = await Promise.all(requests);
    const longestRequest = results.reduce((max, result) => result.duration > max.duration ? result : max, results[0]);

    console.log(`The longest request was to ${longestRequest.url} and it took ${longestRequest.duration.toFixed(2)} ms`);
}


const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleUrls(urls);
