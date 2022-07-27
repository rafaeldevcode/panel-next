import MenusScreen from "../../../screens/admin/menusScreen";
import { getAllMenus } from "../../../services/consultAPI";

export async function getStaticProps(){
    const menus = await getAllMenus();

    return {
        props: {
            menus: menus
        }
    }
}

export default MenusScreen;
