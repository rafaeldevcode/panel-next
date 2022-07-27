import MenusScreen from "../../../screens/admin/menusScreen";
import { getAllMenus, getAllNotifications } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();

    return {
        props: {
            menus: menus,
            notifications: notifications
        }
    }
}

export default MenusScreen;
