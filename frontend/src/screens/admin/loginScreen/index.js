import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authService } from '../../../services/auth/authService';
import siteconfig from '../../../../config/siteconfig.json';
import { showPass, getFields } from "../../../services/validitForm";
import Link from 'next/link';
import Image from 'next/image';
import Message from "../../../partials/message";

export default function LoginScreen(){
    const router = useRouter();
    const [values, setValues] = useState();

    useEffect(()=>{
        getFields();
    }, []);
    
    return (
        <section className="vh-100 vw-100 d-flex flex-nowrap">
            <div className='col-7 position-relative section-image-login'>
                <div className='position-absolute top-0 start-0 image-bg-login' />

                <div className='position-absolute bottom-0 start-0 m-2 d-flex flex-nowrap text-cm-dark'>
                    <div className='me-3'>
                        <i className='bi bi-gear-fill display-3' />
                    </div>

                    <div>
                        <h1 className='m-0 fs-2'>{siteconfig.site.name}</h1>
                        <p className='m-0 fs-4'>{siteconfig.site.description}</p>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center col-12 col-lg-5 p-2'>
                <div className='col-12 col-sm-6 mb-5'>
                    <Image 
                        src={siteconfig.site.logo.src} 
                        alt={siteconfig.site.description}
                        width={500}
                        height={84}
                        layout='responsive'
                        placeholder='blur'
                        blurDataURL='/assets/images/default.png'
                    />
                </div>

                <form className='col-12 col-sm-6' onSubmit={sendLogin}>
                    <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-person-fill position-absolute m-2' />
                        <input className='form-control ps-4 py-2 validit-custom' type='text' name='username' id='username' required onChange={handleChange}/>
                        <label className='position-absolute ms-4 my-2 px-2' htmlFor="username">Usuário</label>
                        <span className='position-absolute end-0 bottom-0 validit'></span>
                    </div>

                    <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-lock-fill position-absolute m-2' />
                        <input className='form-control ps-4 py-2 validit-custom' type='password' name='password' id='password' required onChange={handleChange}/>
                        <button type='button' title='Exibir senha' className='btn btn-sm btn-show-pass position-absolute end-0 h-100' onClick={showPass}><i id='iconPass' className='bi bi-eye-fill'/></button>
                        <label className='position-absolute ms-4 my-2 px-2' htmlFor="password">Senha</label>
                        <span className='position-absolute end-0 bottom-0 validit'></span>
                    </div>

                    <div className='my-4'>
                        <div className='form-check form-switch'>
                            <input className='form-check-input' type='checkbox' id='remember' />
                            <label className='form-check-label' htmlFor='remember'>Mantenha-me conectado</label>
                        </div>
                        
                        <ul className='d-flex flex-nowrap justify-content-between ps-0'>
                            <li>
                                <Link href="#" passHref>
                                    <a className='text-cm-primary' title="Realizar cadastro">Realizar cadastro</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" passHref>
                                    <a className='text-cm-primary' title="Esqueci minha senha">Esqueci minha senha</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='d-flex flex-column my-4'>
                        <input className='btn btn-md btn-cm-primary py-2 fw-bold fs-5 text-light' type='submit' title='Fazer login' defaultValue='Logar'/>
                    </div>
                </form>
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

    function sendLogin(event){
        event.preventDefault();
        authService
            .login(values.username, values.password)
            .then((res) => {
                cosole.log(res.json())
                // router.push('/admin/dashboard');
            })
            .catch((error) => {
                const div = document.createElement('div');
                    div.setAttribute('class', 'position-fixed end-0 top-0 m-2 p-2 border border-cm-danger border-4 rounded');
                    div.setAttribute('data-message', 'true');

                const message = document.createElement('p');
                    message.setAttribute('class', 'm-0 text-cm-danger');
                    message.innerHTML = 'Usuário ou senha inválidos!';

                    div.appendChild(message);

                    document.querySelector('body').appendChild(div);

                    setTimeout(()=>{
                        div.setAttribute('data-message', 'false');

                        setTimeout(() => {
                            div.remove();
                        }, 1000);
                    }, 5000);
            })
    }; 
}
