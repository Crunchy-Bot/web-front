export let user = null;
export const discordSupport = "https://discord.com/invite/KvvUcKP";
export const discordInvite = "https://discordapp.com/oauth2/authorize?client_id=656598065532239892&scope=bot&permissions=1678109696";

///*

user = {
    name: "ハーリさん (CF8)",
    icon: "https://cdn.discordapp.com/avatars/290923752475066368/4921a5665c5320be55559d1a026fca68.webp?size=128",
}

//*/


const whoAmI = "http://localhost:8080/api/me";

function checkAuth() {
    if (user !== null) {
        return
    }

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           let data = JSON.parse(xhttp.responseText);
           user = data.data;
        }
    };

    xhttp.open("GET", whoAmI);
    xhttp.send(null);
}

checkAuth();

export const isAuthenticated = () => {
    return user !== null
};
