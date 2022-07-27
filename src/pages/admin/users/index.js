import UsersScreen from "../../../screens/admin/usersScreen";
import { getAllMenus, getAllUsers, getAllNotifications } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const users = await getAllUsers();
    const notifications = await getAllNotifications();
    
    return {
        props: {
            users: users,
            menus: menus,
            notifications: notifications
        }
    }
}

export default UsersScreen;