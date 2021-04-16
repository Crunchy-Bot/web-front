import axios from "axios";

export let user = {
    isAuthed: false,
};

const whoAmI = "http://localhost:9990/v0/me";
export const sendAuth = "http://localhost:9990/v0/authorize";

export async function checkAuth() {
    if (user.isAuthed) {
        return
    }

    let resp = await axios.get(whoAmI);
    if (resp.status !== 200) {
        return
    }

    user = resp.data;
    return user
}


export const isAuthenticated = () => {
    console.log(user);
    return user.isAuthed
};
