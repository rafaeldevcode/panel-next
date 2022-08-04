import NotificationsScreen from "../../../screens/admin/notificationsScreen";
import { getAllMenus, getAllNotifications, getAllUsers } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();
    const user = await getAllUsers();
    
    return {
        props: {
            notifications: notifications,
            menus: menus,
            user: user.users[0]
        }
    }
}

export default NotificationsScreen;
