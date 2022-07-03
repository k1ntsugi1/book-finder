
const parseData = (data) => { 
    const totalBooks = data.totalItems;
    const items = data.items.map((book) => {
        const volumeInfo = book.volumeInfo;
        const id = book.id
        const imgUrl = Object.hasOwn(volumeInfo, 'imageLinks') ? volumeInfo.imageLinks.smallThumbnail : null;
        const name = volumeInfo.title ?? null;
        const categories = volumeInfo.categories ?? null;
        const authors = volumeInfo.authors ?? null;
        const description = volumeInfo.description ?? null

        return {id, imgUrl, name, categories, authors, description }
    })
    return {totalBooks, items}
}

export {parseData};