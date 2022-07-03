import axios from "axios";
import getUrl from "./getUrl";
const ajax = async (bookName, selectByCategory, selectBySort, currentStartIndex) => {
    console.log(bookName, selectByCategory, selectBySort, currentStartIndex)
    const url = getUrl(bookName, selectByCategory, selectBySort, currentStartIndex)
    const response = await axios.get(url);
    return response.data;
}

export { ajax };