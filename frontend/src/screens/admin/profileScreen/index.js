import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import ModalImagesProfile from './partials/modalImagesProfile';
import { getFields } from '../../../services/validitForm';
import { useEffect } from 'react';
import ProfileBodyScreen from './profileBodyScreen';

export default function ProfileScreen(){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Perfil' icon='bi bi-person-bounding-box' bread={{
                            '1':'&gt;',
                            '2': 'admin',
                            '3': '&gt;',
                            '4': 'profile'
                        }} />
                    </section>

                    <ProfileBodyScreen />
                </section>
            </section>

            {/* Modal for image profile */}
            <ModalImagesProfile />
            <Footer />
        </>
    );
}
