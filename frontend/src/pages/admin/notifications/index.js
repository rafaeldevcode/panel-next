import NotificationsScreen from "../../../screens/admin/notificationsScreen";

export async function getStaticProps(){
    const notifications = await fetch('http://localhost:3000/api/notifications/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            notifications: notifications
        }
    }
}

export default NotificationsScreen;
