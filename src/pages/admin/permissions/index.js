import PermissionsScreen from "../../../screens/admin/permissionsScreen";
import { getAllMenus, getAllPermisions, getAllNotifications } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const permisions = await getAllPermisions();
    const notifications = await getAllNotifications();
    
    return {
        props: {
            permisions: permisions,
            menus: menus,
            notifications: notifications
        }
    }
}

export default PermissionsScreen;
