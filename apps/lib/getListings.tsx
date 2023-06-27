export async function getSearchListing() {
    const URL = `https://uat.realestate.com.kh/api/portal/pages/results/?pathname=/buy`;
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error('Failed to fetch data'); // this will be caught by the error page and passed to the page as props
    }
    const data = await res.json();
    return data.results;
}