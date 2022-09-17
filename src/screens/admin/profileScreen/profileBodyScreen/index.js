import Image from "next/image";
import InputText from '../../../../partials/form/inputText';
import InputEmail from '../../../../partials/form/inputText';
import InputPass from '../../../../partials/form/inputPass';
import InputDate from '../../../../partials/form/inputDate';
import InputButton from '../../../../partials/form/inputButton';
import { useEffect, useState } from "react";
import { getFields } from "../../../../services/validitForm";
import siteconfig from '../../../../../config/siteconfig.json';

export default function ProfileBodyScreen({ user }){
    const [values, setValues] = useState();
    
    useEffect(()=>{
        getFields();
    }, []);
    
    return (
        <section className='p-3 bg-cm-grey m-3 rounded shadow'>
            <div className='position-relative'>
                <div className='profile-bg' style={{
                backgroundImage: `url('${siteconfig.site.login_bg.src}')`
            }}  />

                <div className='mx-auto position-relative profile-user'>
                    <Image 
                        className='border border-color-main'
                        src={user.photo}
                        alt={user.name}
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
                        <span className='text-color-main fw-bold'>Alterar</span>
                    </button>
                </div>
                
                <div className='position-absolute top-0 start-0 m-3 text-color-main fw-bold display-4'>
                    {user.name}
                </div>
            </div>

            <form onSubmit={saveProfile}>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome' name='name' icon='bi bi-person-fill' value={user.name} required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputEmail label='Email' icon='bi bi-envelope-fill' value={user.email} required disabled onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputText label='Telefone' name='phone' icon='bi bi-phone-fill' value={user.phone} required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputText label='Permições' icon='bi bi-phone-fill' value={user.permissions} required disabled onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputDate label='Data de nascimento' name='dateOfBirth' icon='bi bi-calendar-fill' value={user.dateOfBirth} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputPass label='Senha atual' name='currentPassword' onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputPass label='Nova senha' name='password' onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputPass label='Repita Nova senha' name='repeatPassword' onChange={handleChange} />
                    </div>
                </div>

                <div className='row d-flex justify-content-end'>
                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar perfil' value='Salvar' style='color-main' />
                    </div>
                </div>
            </form>
        </section>
    );

    function handleChange(event){
        if(event.target.value === ''){
            $('#password').attr('required', false);
            $('#currentPassword').attr('required', false);
            $('#repeatPassword').attr('required', false);
        }else{
            $('#password').attr('required', true);
            $('#currentPassword').attr('required', true);
            $('#repeatPassword').attr('required', true);
        }

        if(event.target.name == 'phone'){

            const telefone = removeCaracter(document.getElementById('phone').value);
            const mascara = `(${telefone.substr(0, 2)}) ${telefone.substr(2, 1)} ${telefone.substr(3, 4)}-${telefone.substr(7, 4)}`;
        
            document.getElementById('phone').value = mascara;

            function removeCaracter(phone){
                let regex = /[^0-9]/gi;
                phone = phone.replace(regex, '');
                return phone;
            }
        }

        getFields();
    }

    function saveProfile(event){
        event.preventDefault();
    
        console.log(values)
    
        getFields();
    }
}
