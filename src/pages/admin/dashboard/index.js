import { tokenService } from "../../../services/auth/tokenService";
import DashboardScreen from "../../../screens/admin/dashboardScreen";
import { getAllMenus, getAllNotifications, getAllUsers } from "../../../services/consultAPI";

export async function getServerSideProps(ctx){
    const token = tokenService.get(ctx);
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();
    const user = await getAllUsers();

    return {
        props: {
            token: token,
            menus: menus,
            notifications: notifications,
            user: user.users[0]
        }
    }
}

export default DashboardScreen;
