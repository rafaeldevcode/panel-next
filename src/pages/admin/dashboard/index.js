import { tokenService } from "../../../services/auth/tokenService";
import DashboardScreen from "../../../screens/admin/dashboardScreen";
import { getAllMenus, getAllNotifications } from "../../../services/consultAPI";

export async function getServerSideProps(ctx){
    const token = tokenService.get(ctx);
    const menus = await getAllMenus();
    const notifications = await getAllNotifications();

    return {
        props: {
            token: token,
            menus: menus,
            notifications: notifications
        }
    }
}

export default DashboardScreen;
