import axios from "axios";

export let user = {
    isAuthed: false,
};

const whoAmI = "http://localhost:9990/v0/me";
export const sendAuth = "http://localhost:9990/v0/authorize";
export const loginRedirectURI = "https://discord.com/api/oauth2/authorize?client_id=656598065532239892&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fauthorized&response_type=code&scope=identify%20guilds"

export async function checkAuth() {
    if (user.isAuthed) {
        return
    }

    try {
        let resp = await axios.get(whoAmI);
        let sessionId = resp.headers['X-Session-ID'];
        document.cookie = `session=${sessionId}; Path=/; SameSite=lax`;
        user = resp.data;
        return user
    } catch {
        return
    }


}


export const isAuthenticated = () => {
    console.log(user);
    return user.isAuthed
};
