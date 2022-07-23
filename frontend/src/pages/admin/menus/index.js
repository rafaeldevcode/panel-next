import MenusScreen from "../../../screens/admin/menusScreen";

export async function getStaticProps(){
    const menus = await fetch('http://localhost:3000/api/menus/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            menus: menus
        }
    }
}

export default MenusScreen;
