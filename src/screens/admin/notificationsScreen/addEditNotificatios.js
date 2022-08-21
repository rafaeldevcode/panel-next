import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import AddEditBody from './addEditBodyScreen';
import MetasConfig from '../../../partials/MetasConfig';
import breadconfig from '../../../../config/breadcrumps.json'

export default function AddEditNotificatios({ menus, notifications, user, type }){
    return (
        <>
            <MetasConfig title='Adicionar notificação' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type={breadconfig[type].text}
                            color={breadconfig[type].color} 
                            title='Notificações' 
                            icon='bi bi-bell-fill'
                        />
                    </section>

                    <AddEditBody menus={menus.menus} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
