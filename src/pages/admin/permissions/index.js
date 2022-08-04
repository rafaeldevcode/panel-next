import PermissionsScreen from "../../../screens/admin/permissionsScreen/browsePermissions";
import { getAllMenus, getAllPermissions, getAllNotifications, getAllUsers } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const permissions = await getAllPermissions();
    const notifications = await getAllNotifications();
    const user = await getAllUsers();
    
    return {
        props: {
            permissions: permissions,
            menus: menus,
            notifications: notifications,
            user: user.users[0]
        }
    }
}

export default PermissionsScreen;
