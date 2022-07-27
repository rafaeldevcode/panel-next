import PermissionsScreen from "../../../screens/admin/permissionsScreen";
import { getAllMenus, getAllPermisions } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();
    const permisions = await getAllPermisions();
    
    return {
        props: {
            permisions: permisions,
            menus: menus
        }
    }
}

export default PermissionsScreen;
