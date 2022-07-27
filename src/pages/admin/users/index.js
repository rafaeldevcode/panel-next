import UsersScreen from "../../../screens/admin/usersScreen";
import { getAllMenus, getAllUsers } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const users = await getAllUsers();
    
    return {
        props: {
            users: users,
            menus: menus
        }
    }
}

export default UsersScreen;
