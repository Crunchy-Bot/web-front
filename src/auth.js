import axios from "axios";

export let user = null;

const whoAmI = "http://localhost:9990/v0/me";


export async function checkAuth() {
    if (user !== null) {
        return
    }

    let resp = await axios.get(whoAmI);
    if (resp.status !== 200) {
        return
    }

    user = JSON.parse(resp.data);
    return user
}

export const isAuthenticated = () => {
    console.log(user);
    return false
};
