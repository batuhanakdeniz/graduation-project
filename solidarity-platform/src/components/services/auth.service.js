import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const verifyUser = (code) => {
	return axios.get(API_URL + "verify/" + code).then((response) => {
		return response.data;
	});
};

export default verifyUser;
