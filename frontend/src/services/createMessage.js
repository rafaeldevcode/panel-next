export const createMessage = ( messageText, typeMessage ) => {
    const div = document.createElement('div');
        div.setAttribute('class', `position-fixed end-0 top-0 m-2 p-2 border border-cm-${typeMessage} border-4 rounded`);
        div.setAttribute('data-message', 'true');

    const message = document.createElement('p');
        message.setAttribute('class', `m-0 text-cm-${typeMessage}`);
        message.innerHTML = messageText;

        div.appendChild(message);

        document.querySelector('body').appendChild(div);

        setTimeout(()=>{
            div.setAttribute('data-message', 'false');

            setTimeout(() => {
                div.remove();
            }, 1000);
        }, 5000);
}
