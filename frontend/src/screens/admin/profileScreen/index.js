import Image from 'next/image';
import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import ModalImagesProfile from './partials/modalImagesProfile';
import InputText from '../../../partials/form/inputText';
import InputEmail from '../../../partials/form/inputText';
import InputPass from '../../../partials/form/inputPass';
import InputSelect from '../../../partials/form/inputSelect';
import InputDate from '../../../partials/form/inputDate';
import InputButton from '../../../partials/form/inputButton';
import { getFields } from '../../../services/validitForm';
import { useEffect } from 'react';

export default function ProfileScreen(){
    useEffect(()=>{
        getFields();
    }, []);

    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Perfil' bread={{
                            '1':'&gt;',
                            '2': 'admin',
                            '3': '&gt;',
                            '4': 'profile'
                        }} />

                        <div className='position-relative'>
                            <div className='profile-bg' />

                            <div className='mx-auto position-relative profile-user'>
                                <Image 
                                    className='border border-cm-primary'
                                    src='/assets/images/users/iron_man.png'
                                    alt='Rafael Vieira'
                                    width={137}
                                    height={137}
                                    layout='responsive'
                                    placeholder='blur'
                                    blurDataURL='/assets/images/default.png'
                                />

                                <button 
                                    className='position-absolute bottom-0 left-0 w-100 h-100 bg-cm-light profile-user-btn'
                                    data-bs-toggle="modal" 
                                    data-bs-target="#imagesProfile"
                                >
                                    <span className='text-cm-primary fw-bold'>Alterar</span>
                                </button>
                            </div>
                            
                            <div className='position-absolute top-0 start-0 m-3 text-cm-primary fw-bold display-4'>
                               Rafael Vieira
                            </div>
                        </div>
                    </section>

                    <section className='p-3'>
                        <form onSubmit={saveData}>
                            <div className='row d-flex justify-content-between'>
                                <div className='col-12 col-md-6'>
                                    <InputText label='Nome' name='name' icon='bi bi-person-fill' value='Rafael vieira' required />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <InputEmail label='Email' name='email' icon='bi bi-envelope-fill' value='rafaeldevcode@gmail.com' required disabled />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <InputSelect label='Permissões' name='permissions' icon='bi bi-file-earmark-lock-fill' options={{
                                        'admin': 'Admin',
                                        'user': 'Usuário'
                                    }} />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <InputDate label='Data de nascimento' name='dateOfBirth' icon='bi bi-calendar-fill' />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <InputPass label='Senha atual' name='currentPassword' onChange={handleChange} />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <InputPass label='Nova senha' name='password' onChange={handleChange} />
                                </div>
                            </div>

                            <div className='row d-flex justify-content-end'>
                                <div className='col-12 col-md-3'>
                                    <InputButton type='submit' title='Salvar perfil' value='Salvar' style='cm-primary' />
                                </div>
                            </div>
                        </form>
                    </section>
                </section>
            </section>

            {/* Modal for image profile */}
            <ModalImagesProfile />
            <Footer />
        </>
    );

    function handleChange(event){
        if(event.target.value === ''){
            document.getElementById('password').removeAttribute('required');
            document.getElementById('currentPassword').removeAttribute('required');
        }else{
            document.getElementById('password').required = true;
            document.getElementById('currentPassword').required = true;
        }

        getFields();
    }

    function saveData(event){
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const permissions = document.getElementById('permissions');
        const dateOfBirth = document.getElementById('dateOfBirth');
        const currentPassword = document.getElementById('currentPassword');
        const password = document.getElementById('password');

    }; 
}
