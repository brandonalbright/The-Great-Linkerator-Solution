import axios from "axios";

const BASE_URL = 'api'

const getLinks = async () => {
    const url = `${BASE_URL}/links`;

    const { data } = await axios.get(url);

    console.log("DATA: ", data);
}

export default getLinks;