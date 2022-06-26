import { useRouter } from "next/router";
import { useState } from "react";
import { authService } from '../../services/auth/authService';
import siteconfig from '../../../config/siteconfig.json';

export default function LoginScreen(){
    const router = useRouter();

    const [values, setValues] = useState();
    
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
                    <img className='w-100' src={siteconfig.site.logo.src} alt={siteconfig.site.description} />
                </div>

                <form className='col-12 col-sm-6' onSubmit={sendLogin}>
                    <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-person-fill position-absolute m-2' />
                        <input className='form-control positio ps-4 py-2' type='text' name='username' id='username' required onChange={handleChange}/>
                        <label className='position-absolute ms-4 my-2' htmlFor="username">Usuário</label>
                    </div>

                    <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-lock-fill position-absolute m-2' />
                        <input className='form-control ps-4 py-2' type='password' name='password' id='password' required onChange={handleChange}/>
                        <button type='button' title='Exibir senha' className='btn btn-sm position-absolute end-0 h-100' onClick={showPass}><i id='iconPass' className='bi bi-eye-fill'/></button>
                        <label className='position-absolute ms-4 my-2' htmlFor="password">Senha</label>
                    </div>

                    <div className='my-4'>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="remember" />
                            <label class="form-check-label" htmlFor="remember">Mantenha-me conectado</label>
                        </div>
                        
                        <ul className='d-flex flex-nowrap justify-content-between ps-0'>
                            <li>
                                <a href="#" className='text-cm-primary' title="Realizar cadastro">Realizar cadastro</a>
                            </li>
                            <li>
                                <a href="#" className='text-cm-primary' title="Esqueci minha senha">Esqueci minha senha</a>
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
                console.log(error)
            })
    };

    function showPass(event){
        event.preventDefault();
        const inputPass = document.getElementById('password');
        const icone = document.getElementById('iconPass');

        if(inputPass.type === 'password'){
            inputPass.setAttribute('type', 'text');
            inputPass.classList.remove('bi-eye-fill');
            icone.classList.add('bi-eye-slash-fill');
        }else{
            inputPass.setAttribute('type', 'password');
            icone.classList.remove('bi-eye-slash-fill');
            icone.classList.add('bi-eye-fill');
        }
    }
}
