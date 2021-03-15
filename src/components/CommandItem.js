import React from 'react';

const iconArea = process.env.PUBLIC_URL;

function CommandItem(props) {
    const title = props.info.title;
    const about = props.info.about;
    const runningThisCommand= props.info.runningThisCommand;
    const permissionsRequired = props.info.permissionsRequired;
    const userPermissions = props.info.userPermissions;
    const exampleGif = `${iconArea}/examples/${props.target}.gif`;

    let renderPerms = [];
    for (let perm of permissionsRequired) {
        renderPerms.push(
            <>
                - <code>{ perm }</code><br/>
            </>
        )
    }

    let permsMessage;
    if (userPermissions.length > 0) {
        let permsBlock = [];
        for (let perm of userPermissions) {
            permsBlock.push(
                <code className="rounded-lg mx-2">
                    { perm }
                </code>
            )
        }

        permsMessage = (
            <span className="italic text-sm">
            This command requires you have the following permissions:
                { permsBlock }
            </span>
        )
    } else {
        permsMessage = (<span/>);
    }

    return (
        <div className="px-2 xl:px-16 my-4 xl:my-0">
            <h1 className="loader-slide-from-right-1 font-bold text-white text-3xl italic ml-0 xl:ml-8 mt-8">
                { title }
            </h1>
            <div className="loader-slide-from-right-1/2 flex flex-col xl:flex-row justify-around bg-discord-dark shadow-embed rounded-lg p-4 xl:p-8 mt-8">
                <div className="w-full xl:w-1/2">
                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                About this command:
                            </h1>
                        </div>
                        <p className="text-white ml-4 px-2">
                            { about }<br/>
                        </p>
                        <p className="text-white ml-4 px-2 pt-2">
                            { permsMessage }
                        </p>
                    </div>
                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                Running this Command:
                            </h1>
                        </div>
                        <p className="flex flex-wrap text-white ml-4 pl-2 pr-8">
                            You can run this command using the command
                            <code className="text-crunchy rounded-lg mx-2">
                                -{ runningThisCommand }
                            </code>
                            <br/>

                            <span className="italic text-sm">
                            Make sure you replace
                            <code className="text-crunchy font-semibold rounded-lg mx-2">-</code>
                            with your server's set prefix.
                            </span>
                        </p>
                    </div>

                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                Permissions Required:
                            </h1>
                        </div>
                        <p className="text-white italic ml-4 px-2">
                            { renderPerms }
                        </p>
                    </div>
                </div>
                <div className="hidden xl:block w-1/2">
                    <div className="flex justify-around">
                        <img className="rounded-lg w-full" src={ exampleGif } alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CommandDefaultItem(props) {
    return (
        <div className="px-2 xl:px-16 my-4 xl:my-0">
            <h1 className="loader-slide-from-right-1 font-bold text-white text-3xl italic ml-0 xl:ml-8 mt-8">
                Welcome to the Crunchy's command page!
            </h1>
            <div className="loader-slide-from-right-1/2 flex flex-col xl:flex-row justify-around bg-discord-dark shadow-embed rounded-lg p-4 xl:p-8 mt-8">
                <div className="w-full xl:w-1/2">
                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                About this command:
                            </h1>
                        </div>
                        <p className="text-white ml-4 px-2">
                            Welcome to the commands page!<br/>
                            We hope you find what you are looking for here.<br/><br/>
                            To get started select a command from the list of commands on the left or if on mobile directly bellow,
                            by clicking on the command you want more info on.<br/>
                            Once you've clicked on
                            a command this menu will change bringing you all the juicy details!

                            Any command have a set of parameters that follow the following format:<br/>
                            - <code className="text-crunchy rounded-lg mx-2">{"<>"}</code> means this is a required parameter<br/>
                            - <code className="text-crunchy rounded-lg mx-2">{"[]"}</code> means this is a optional parameter<br/>
                        </p>
                    </div>
                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                Running this Command:
                            </h1>
                        </div>
                        <p className="text-white ml-4 px-2">
                            You can run the help command using the command
                            <code className="text-crunchy rounded-lg mx-2">-help</code>
                            <br/>

                            <span className="italic text-sm">
                            Make sure you replace
                            <code className="text-crunchy font-semibold rounded-lg mx-2">-</code>
                            with your server's set prefix.
                            </span>
                        </p>
                    </div>

                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                Permissions Required:
                            </h1>
                        </div>
                        <p className="text-white italic ml-4 px-2">
                            - <code>Send Messages</code><br/>
                            - <code>Add Reactions</code><br/>
                            - <code>View Channel</code><br/>
                        </p>
                    </div>
                </div>
                <div className="hidden xl:block w-1/2">
                    <div className="flex justify-around">
                        <img className="rounded-lg w-full" src="https://i.imgur.com/ZviOkrd.gif" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


function CommandNotFound(props) {
    return (
        <div className="px-2 xl:px-16 my-4 xl:my-0">
            <h1 className="loader-slide-from-right-1 font-bold text-white text-3xl italic ml-0 xl:ml-8 mt-8">
                Oops! That's not a command silly!
            </h1>
            <div className="loader-slide-from-right-1/2 flex flex-col xl:flex-row justify-around bg-discord-dark shadow-embed rounded-lg p-4 xl:p-8 mt-8">
                <div className="w-full xl:w-1/2">
                    <div className="py-2">
                        <div className="flex pb-2">
                            <h1 className="text-white text-lg border-b-2 border-crunchy font-semibold">
                                About this error:
                            </h1>
                        </div>
                        <p className="text-white ml-4 px-2">
                            Oh no! looks like you've accidentally lost your way!
                            If you want to look at a command listed on your left or if on
                            mobile; directly bellow, simply click on the command name.
                        </p>
                    </div>
                </div>
                <div className="hidden xl:block w-1/2">
                    <div className="flex justify-around">
                        <img className="rounded-lg w-64" src={ `${iconArea}/hime-confuse.png` } alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CommandItem, CommandDefaultItem, CommandNotFound };