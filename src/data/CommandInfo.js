export const categories = [
    {
        name: "General Settings",
        commands: [
            "Help",
            "Invite",
            "Server Settings",
            "Set Prefix",
            "Toggle NSFW",
            "Vote",
            "Support",
            "Firewall Settings",
        ]
    },
    {
        name: "Live News and Releases",
        commands: [
            "Add Release Channel",
            "Add News Channel",
        ]
    },
    {
        name: "Lookup Commands",
        commands: [
            "Anime",
            "Manga",
            "Webtoon",
            "Today's Picks",
        ]
    },
    {
        name: "Recommending and Tracking",
        commands: [
            "My Recommended",
            "My Favourites",
            "My Watchlist",

            "Add Anime",
            "Recommend Anime",

            "Remove From Recommended",
            "Remove From Favourites",
            "Remove From Watchlist",
        ]
    },
    {
        name: "Character Collection",
        commands: [
            "Roll Character",
            "View All Characters",
            "View Character",
        ]
    },
];

export const commandsInfo = {
    "invite": {
        title: "Invite Crunchy",
        about: "This command will give you a invite link to " +
            "add Crunchy to your server.",
        runningThisCommand: "invite",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "server-settings": {
        title: "Your server settings for Crunchy",
        about: "This command will bring up any relevant settings for Crunchy like" +
            " the server prefix, nsfw mode, etc...",
        runningThisCommand: "serversettings",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "set-prefix": {
        title: "Set Crunchy's prefix for your server",
        about: "Customise the prefix Crunchy responds to in your server. ",
        runningThisCommand: "setprefix <new-prefix>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [
            "administrator",
        ],
    },
    "toggle-nsfw": {
        title: "Enable or disable NSFW commands",
        about: "This command allows you to toggle between having NSFW commands " +
            "enabled or disabled depending on your server's needs and requirements.",
        runningThisCommand: "togglensfw",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [
            "administrator",
        ],
    },
    "vote": {
        title: "Vote for Crunchy!",
        about: "Gives you a helpful hyperlink that takes you to vote " +
            "for Crunchy to show the love <3",
        runningThisCommand: "vote",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "support": {
        title: "Join Crunchy's support server",
        about: "Gives you a Discord invite to join our support server should " +
            "you have any questions to ask us or suggestions to give.",
        runningThisCommand: "support",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "firewall-settings": {
        title: "Allow or disallow users to recommend anime",
        about: "Using this command will toggle between allowing users to " +
            "see and interact with your recommended and tracking commands " +
            "with recommendations if your firewall is 'enabled' " +
            "nobody can add recommendations to your list, the other two commands" +
            " will simply not allow other users to see your lists.",
        runningThisCommand: "firewall <command>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },

    "add-release-channel": {
        title: "Get Crunchyroll anime releases to a channel",
        about: "When ran this command will setup the channel so a release " +
            "notification will be sent when ever there is a new anime episode " +
            "released on Crunchyroll.",
        runningThisCommand: "addrelease <channel-mention>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Manage Webhooks",
            "Add Reactions",
        ],
        userPermissions: [
            "administrator",
        ],
    },
    "add-news-channel": {
        title: "Get Crunchyroll anime news to a channel",
        about: "When ran this command will setup the channel so that a " +
            "embed will be sent when ever a new piece of news comes out on " +
            "Crunchyroll.",
        runningThisCommand: "addnews <channel-mention>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Manage Webhooks",
            "Add Reactions",
        ],
        userPermissions: [
            "administrator",
        ],
    },

    "anime": {
        title: "Get details on a given anime",
        about: "Gives you a embed containing a given anime's rating, " +
            "poster image, etc...",
        runningThisCommand: "anime <title>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "manga": {
        title: "Get details on a given manga",
        about: "Gives you a embed containing a given anime's rating, " +
            "poster image, etc...",
        runningThisCommand: "manga <title>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "webtoon": {
        title: "Get details on a given webtoon",
        about: "Gives you a embed containing a given webtoons's rating, " +
            "poster image, etc...",
        runningThisCommand: "webtoon <title>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "today's-picks": {
        title: "Get today's top 5 anime picks to watch",
        about: "This command updates every day at midnight GMT and gives you a " +
            "selection of 5 different anime that you might want to watch.",
        runningThisCommand: "todayspicks",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },

    "my-recommended": {
        title: "View what anime people have recommended for you",
        about: "This will bring you up an itemised list of items that people have" +
            " recommended to you with hyperlinks if given by the recommender.",
        runningThisCommand: "myrecommended",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "my-favourites": {
        title: "Lists your favourite set of anime",
        about: "Displays a list of your favourite anime " +
            "to add a favourite anime use the addanime command.",
        runningThisCommand: "myfavourites",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "my-watchlist": {
        title: "Lists the anime on your watchlist",
        about: "Displays a list of anime you've added on your watchlist, " +
            "to add an anime to your watchlist use the addanime command.",
        runningThisCommand: "mywatchlist",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "add-anime": {
        title: "Adds anime to your favourite or watchlist",
        about: "Adds a give anime (with optional url) to your watchlist, " +
            "favourites or both. When giving a url to go with the name specify " +
            "\"url=\" e.g. \"url=https://crunchyroll.com/\"",
        runningThisCommand: "addanime <title> [url=url]",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "recommend-anime": {
        title: "Recommend someone a given anime",
        about: "This command has the same arguments as the addanime command, " +
            "the only difference is that your first argument should be the mention " +
            "of the person you want to recommend the anime to.",
        runningThisCommand: "recommend <user> <title> [url=url]",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
        ],
        userPermissions: [

        ],
    },
    "remove-from-recommended": {
        title: "Remove a recommended anime from your list",
        about: "Removes a recommendation that is located on the given item-number you " +
            "provide in the command, if you give no command Crunchy will give you" +
            " a numbered list of your recommendations.",
        runningThisCommand: "removerecommended <item-number>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "remove-from-favourites": {
        title: "Remove a favourite anime from your list",
        about: "Removes a given favourite anime from your list, the anime removed" +
            " will be the anime with the corresponding item-number you give.",
        runningThisCommand: "removefavourite <item-number>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "remove-from-watchlist": {
        title: "Remove a anime from your watchlist",
        about: "Removes a given anime from your watchlist, the anime removed" +
            " will be the anime with the corresponding item-number you give.",
        runningThisCommand: "removewatchlist <item-number>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },

    "roll-character": {
        title: "Roll for a chance to collect your favourite characters",
        about: "Have chance at getting lucky and collecting some of your " +
            "favourite characters! Every 12 hours you gain a set of rolls, " +
            "every roll you're given a random character, you can click the heart " +
            "emoji to collect that character.",
        runningThisCommand: "character",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "view-all-characters": {
        title: "View your collected characters",
        about: "This command will give you a interactive menu with a numbered " +
            "list of each character you've collected.",
        runningThisCommand: "viewcharacters",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
    "view-character": {
        title: "View a collected characters",
        about: "This command will give you a set of information relating to " +
            "selected character that you've collected.",
        runningThisCommand: "viewcharacter <name>",
        permissionsRequired: [
            "Send Messages",
            "View Channel",
            "Add Reactions",
        ],
        userPermissions: [

        ],
    },
};