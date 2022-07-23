import PermissionsScreen from "../../../screens/admin/permissionsScreen";

export async function getStaticProps(){
    const permisions = await fetch('http://localhost:3000/api/permisions/list')
        .then((response) => {

            return response.json();
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            permisions: permisions
        }
    }
}

export default PermissionsScreen;
