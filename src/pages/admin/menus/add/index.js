import AddEditMenus from "../../../../screens/admin/menusScreen/addEditMenus";
import { getAllMenus, getAllNotifications, getAllUsers } from "../../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();
    const user = await getAllUsers();
    
    return {
        props: {
            menus: menus,
            notifications: notifications,
            user: user.users[0],
            type: 'add'
        }
    }
}

export default AddEditMenus;
