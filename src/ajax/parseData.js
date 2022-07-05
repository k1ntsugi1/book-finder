
const parseData = (data) => {
    const currentTotalBooks = data.totalItems;
    if (!Object.hasOwn(data, 'items')) throw new Error('No Results');
    
    const items = data.items.map((book) => {
        const volumeInfo = book.volumeInfo;
        const id = book.id
        const imgUrl = volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : null;
        const name = volumeInfo.title ?? null;
        const categories = volumeInfo.categories ?? null;
        const authors = volumeInfo.authors ?? null;
        const description = volumeInfo.description ?? null

        return {id, imgUrl, name, categories, authors, description }
    })
    return {currentTotalBooks, items}
}

export {parseData};