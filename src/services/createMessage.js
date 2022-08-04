export const createMessage = ( messageText, typeMessage ) => {
    const div = $('<div />');
        div.attr('class', `position-fixed end-0 top-0 m-2 p-2 border border-${typeMessage} border-4 rounded`);
        div.attr('data-message', 'true');

    const message = $('<p />');
        message.attr('class', `m-0 text-${typeMessage}`);
        message.text(messageText);

        div.append(message);

        $('body').append(div);

        setTimeout(()=>{
            div.attr('data-message', 'false');

            setTimeout(() => {
                div.remove();
            }, 1000);
        }, 5000);
}
