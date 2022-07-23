import { tokenService } from "../../../services/auth/tokenService";
import DashboardScreen from "../../../screens/admin/dashboardScreen";

export async function getServerSideProps(ctx){
    const token = tokenService.get(ctx);
    const menus = await fetch('http://localhost:3000/api/menus/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            token: token,
            menus: menus
        }
    }
}

export default DashboardScreen;
