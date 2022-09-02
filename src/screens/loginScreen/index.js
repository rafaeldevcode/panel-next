import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authService } from '../../services/auth/authService';
import { getFields } from "../../services/validitForm";
import Link from 'next/link';
import BgLogin from "../../partials/bgLogin";
import Logo from "../../partials/logo";
import InputText from "../../partials/form/inputText";
import InputPass from "../../partials/form/inputPass";
import InputCheckboxSwitch from "../../partials/form/inputCheckboxSwitch";
import InputButton from "../../partials/form/inputButton";
import { createMessage } from "../../services/createMessage";
import MetasConfig from '../../partials/MetasConfig';

export default function LoginScreen(){
    const router = useRouter();
    const [values, setValues] = useState();

    useEffect(()=>{
        getFields();
    }, []);
    
    return (
        <>
            <MetasConfig title='Realizar login' />
            <section className="vh-100 vw-100 d-flex flex-nowrap">
                <BgLogin />

                <div className='d-flex flex-column justify-content-center align-items-center col-12 col-lg-5 p-2'>
                    <div className='col-12 col-sm-6 mb-5'>
                        <Logo image='logo' />
                    </div>

                    <form className='col-12 col-sm-6' onSubmit={sendLogin}>
                        <InputText label='Usuário' name='username' icon='bi bi-person-fill' required onChange={handleChange} />

                        <InputPass label='Senha' name='password' required onChange={handleChange} />

                        <div className='my-4'>
                            <InputCheckboxSwitch label='Mantenha-me conectado' name='remember' />
                            
                            <ul className='d-flex flex-nowrap justify-content-between ps-0'>
                                <li>
                                    <Link href="/register" passHref>
                                        <a className='text-cm-primary' title="Realizar cadastro">Realizar cadastro</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reset-password?insert=email" passHref>
                                        <a className='text-cm-primary' title="Esqueci minha senha">Esqueci minha senha</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <InputButton type='submit' title='Realizar login' value='Logar' style='cm-primary' />
                    </form>
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

    function sendLogin(event){
        event.preventDefault();
        
        fetch('http://localhost:3000/api/users/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            const user = response.users[0];

            if(user.email == values.username && user.password == values.password){
                router.push('/admin/dashboard');
            }else{
                createMessage('Usuário ou senha inválidos, tente novamente!', 'cm-danger');
            }
        });
    }; 
}
