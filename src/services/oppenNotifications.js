export function oppenNotifications(event){
    event.preventDefault();

    const notification = document.getElementById('notifications');
    const notificationAttr = notification.getAttribute("data-notification");

    if(notificationAttr == null || notificationAttr == 'false'){
        notification.setAttribute('data-notification', 'true');
    }else{
        notification.setAttribute('data-notification', 'false');
    }
}
