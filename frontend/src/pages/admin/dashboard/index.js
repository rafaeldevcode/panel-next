import { tokenService } from "../../../services/auth/tokenService"

export async function getServerSideProps(ctx){
    const token = tokenService.get(ctx);

    return {
        props: {
            token: token
        }
    }
}

export default function Dashboard(props){
    return (
        <>
            <h1>Dashboard</h1>
            <p>Token: {props.token}</p>
        </>
    )
}
