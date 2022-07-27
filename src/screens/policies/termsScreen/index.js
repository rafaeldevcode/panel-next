import Breadcrumbs from "../../../partials/breadcrumbs";
import Footer from "../../../partials/footer";
import Header from "../../../partials/header";
import Sidebar from "../../../partials/sidebar";
import Notification from '../../../partials/notifications';
import TermsBodyScreen from "./termsBodyScreen";

export default function TermsScreen({ menus, notifications }){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Visualizar' color='cm-secondary' title='Termos de Uso' icon='bi bi-file-earmark-text-fill' bread={{
                            '1':'&gt;',
                            '2': 'policies',
                            '3': '&gt;',
                            '4': 'terms'
                        }} />
                    </section>

                    <TermsBodyScreen />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
