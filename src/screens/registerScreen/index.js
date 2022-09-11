import Link from 'next/link';
import BgLogin from '../../partials/bgLogin';
import Logo from '../../partials/logo';
import InputButton from '../../partials/form/inputButton';
import InputCheckboxSwitch from '../../partials/form/inputCheckboxSwitch';
import InputPass from '../../partials/form/inputPass';
import InputText from '../../partials/form/inputText';
import { useEffect, useState } from 'react';
import { getFields } from "../../services/validitForm";
import InputEmail from '../../partials/form/inputEmail';
import { useRouter } from "next/router";
import { createMessage } from '../../services/createMessage';
import MetasConfig from '../../partials/metasConfig';
import LoginSocial from '../../partials/loginSocial';

export default function RegisterScreen(){
    const router = useRouter();
    const [values, setValues] = useState();

    useEffect(()=>{
        getFields();
    }, []);

    return (
        <>
            <MetasConfig title='Realizar cadastro' />
            <section className="vh-100 vw-100 d-flex flex-nowrap">
                <BgLogin />

                <div className='d-flex flex-column justify-content-center align-items-center col-12 col-lg-5 p-2'>
                    <div className='col-12 col-sm-6 mb-3'>
                        <Logo image='logo' />
                    </div>

                    <form className='col-12 col-sm-6' onSubmit={createUser}>
                        <InputText label='Nome' name='name' icon='bi bi-person-fill' required onChange={handleChange} />

                        <InputEmail label='Email' name='email' icon='bi bi-envelope-fill position-absolute' required onChange={handleChange} />

                        <InputPass label='Senha' name='password' required onChange={handleChange} />

                        <InputPass label='Confirme sua senha' required name='confirm_password' onChange={handleChange} />

                        <div className='my-4'>
                            <InputCheckboxSwitch label='Mantenha-me conectado' name='remember' />
                            
                            <ul className='d-flex flex-nowrap justify-content-between ps-0'>
                                <li>
                                    <Link href="/login" passHref>
                                        <a className='text-cm-primary' title="Realizar login">Realizar login</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <InputButton type='submit' title='Realizar cadastro' value='Registrar' style='cm-primary' />
                    </form>

                    <LoginSocial />
                </div>
            </section>
        </>
    );

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            };
        });
    };

    function createUser(event){
        event.preventDefault();

        if(values.password === values.confirm_password){
            router.push('/verify-email');
        }else{
            createMessage('As senhas não conferem, tente novamente!', 'danger');
        }
    };

    function insertData(){
        
    }
}
