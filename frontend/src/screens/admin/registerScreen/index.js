import Link from 'next/link';
import BgLogin from '../../../partials/bgLogin';
import Logo from '../../../partials/logo';
import InputButton from '../../../partials/form/inputButton';
import InputCheckboxSwitch from '../../../partials/form/inputCheckboxSwitch';
import InputPass from '../../../partials/form/inputPass';
import InputText from '../../../partials/form/inputText';
import { useEffect, useState } from 'react';
import { getFields } from "../../../services/validitForm";
import InputEmail from '../../../partials/form/inputEmail';
import { useRouter } from "next/router";
import { createMessage } from '../../../services/createMessage';

export default function RegisterScreen(){
    const router = useRouter();
    const [values, setValues] = useState();

    useEffect(()=>{
        getFields();
    }, []);

    return (
        <section className="vh-100 vw-100 d-flex flex-nowrap">
            <BgLogin />

            <div className='d-flex flex-column justify-content-center align-items-center col-12 col-lg-5 p-2'>
                <div className='col-12 col-sm-6 mb-3'>
                    <Logo />
                </div>

                <form className='col-12 col-sm-6' onSubmit={createUser}>
                    <InputText label='Nome' name='name' icone='bi bi-person-fill position-absolute' onChange={handleChange} />

                    <InputEmail label='Email' name='email' icone='bi bi-envelope-fill position-absolute' onChange={handleChange} />

                    <InputPass label='Senha' name='password' onChange={handleChange} />

                    <InputPass label='Confirme sua senha' name='confirm_password' onChange={handleChange} />

                    <div className='my-4'>
                        <InputCheckboxSwitch label='Mantenha-me conectado' name='remember' />
                        
                        <ul className='d-flex flex-nowrap justify-content-between ps-0'>
                            <li>
                                <Link href="/admin/login" passHref>
                                    <a className='text-cm-primary' title="Realizar login">Realizar login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <InputButton type='submit' title='Fazer cadastro' value='Registrar' style='primary' />
                </form>

                <div className='col-12 col-sm-6'>
                    <button className='btn btn-md btn-ligth border border-primary col-12 mb-2 text-left position-relative ps-0'>
                        <span className='position-absolute left-0 top-0 h-100 d-flex justify-content-center align-items-center px-2'>
                            <i className="bi bi-google text-primary" />
                        </span>
                        Logar com google
                    </button>

                    <button className='btn btn-md btn-primary border border-primary col-12 mb-2 text-left position-relative ps-0'>
                        <span className='position-absolute left-0 top-0 h-100 d-flex justify-content-center align-items-center px-2'>
                            <i className="bi bi-facebook text-light" />
                        </span>
                        Logar com facebook
                    </button>
                </div>
            </div>
        </section>
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
            router.push('/admin/verify-email');
        }else{
            createMessage('As senhas não conferem, tente novamente!', 'danger');
        }
    };

    function insertData(){
        
    }
}
