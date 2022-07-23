import UsersScreen from "../../../screens/admin/usersScreen";

export async function getStaticProps(){
    const users = await fetch('http://localhost:3000/api/users/list')
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
            users: users,
            menus: menus
        }
    }
}

export default UsersScreen;
