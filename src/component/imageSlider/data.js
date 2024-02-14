import axios from "axios";

const data= await axios.get("https://picsum.photos/v2/list?page=1&limit=10")

export default data;