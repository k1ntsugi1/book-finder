
const parseData = (data) => {
    const volumeInfo = data.volumeInfo; 
    const totalBooks = data.totalItems;
    const items = data.items.map((book) => {
        const id = book.id
        const imgUrl = volumeInfo.imageLinks == null ? null : volumeInfo.imageLinks.smallThumbnail;
        const name = volumeInfo.title ?? null;
        const categories = volumeInfo.categories ?? null;
        const authors = volumeInfo.authors ?? null;
        const description = volumeInfo.description ?? null

        console.log(id, imgUrl, name, categories, authors)
        return {id, imgUrl, name, categories, authors, description }
    })
    return {totalBooks, items}
}

export {parseData};