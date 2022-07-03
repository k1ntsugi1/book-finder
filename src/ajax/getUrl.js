export default (bookName, selectByCategory, selectBySort, currentStartIndex) => {
    console.log(bookName, selectByCategory, selectBySort, currentStartIndex, 'url');
    const mainUrl = 'https://www.googleapis.com/books/v1/volumes?';
    const q = `q=${bookName}`;
    const categories = selectByCategory === 'all' ? '' : `&categories=[${selectByCategory}]`;
    const orderBy = `&orderBy=${selectBySort}`;
    const startIndex = `&startIndex=${currentStartIndex}`;
    const maxResults = '&maxResults=30'
    const key = `&key=AIzaSyBqzQ4Z66g5kISJG2QrjMdANI61Fw2hWKo`
    console.log(mainUrl + q + categories + orderBy + key)
    return mainUrl + q + categories + orderBy + key + startIndex + maxResults;
}