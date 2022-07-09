import { tokenService } from "../../../services/auth/tokenService";
import DashboardScreen from "../../../screens/admin/dashboardScreen";

export async function getServerSideProps(ctx){
    const token = tokenService.get(ctx);

    return {
        props: {
            token: token
        }
    }
}

export default DashboardScreen;
