import Breadcrumbs from "../../../partials/breadcrumbs";
import Footer from "../../../partials/footer";
import Header from "../../../partials/header";
import Sidebar from "../../../partials/sidebar";
import Notification from '../../../partials/notifications';
import TermsBodyScreen from "./termsBodyScreen";

export default function TermsScreen({ menus, notifications, user }){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Visualizar' color='cm-secondary' title='Termos de Uso' icon='bi bi-file-earmark-text-fill' />
                    </section>

                    <TermsBodyScreen />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
