import NotificationsScreen from "../../../screens/admin/notificationsScreen";
import { getAllMenus, getAllNotifications } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();
    
    return {
        props: {
            notifications: notifications,
            menus: menus
        }
    }
}

export default NotificationsScreen;
