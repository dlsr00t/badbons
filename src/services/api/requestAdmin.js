import axios from "axios";

const url = "http://localhost:3000/api/admin-login";

const data = {
	"email":"dlsroot12@gmail.com",
	"password":"anything"
}

export async function adminToken(){
    let response = await axios.post(url, data);
    console.log(response.data);
}

