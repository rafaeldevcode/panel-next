import NotificationsScreen from "../../../screens/admin/notificationsScreen";

export async function getStaticProps(){
    const notifications = await fetch('http://localhost:3000/api/notifications/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    const menus = await fetch('http://localhost:3000/api/menus/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            notifications: notifications,
            menus: menus
        }
    }
}

export default NotificationsScreen;
