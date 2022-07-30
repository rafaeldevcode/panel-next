export function oppenNotifications(event){
    event.preventDefault();

    const notification = $('#notifications');
    const notificationAttr = $(notification).attr('data-notification');

    if(notificationAttr == null || notificationAttr == 'false'){
        notification.attr('data-notification', 'true');
    }else{
        notification.attr('data-notification', 'false');
    }
}
