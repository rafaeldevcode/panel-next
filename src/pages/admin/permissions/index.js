import PermissionsScreen from "../../../screens/admin/permissionsScreen";

export async function getStaticProps(){
    const permisions = await fetch('http://localhost:3000/api/permisions/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    const menus = await fetch('http://localhost:3000/api/menus/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            permisions: permisions,
            menus: menus
        }
    }
}

export default PermissionsScreen;
