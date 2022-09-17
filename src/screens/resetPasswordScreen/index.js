import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputButton from "../../partials/form/inputButton";
import InputEmail from "../../partials/form/inputEmail";
import InputNumber from '../../partials/form/inputNumber';
import InputPass from '../../partials/form/inputPass';
import { createMessage } from "../../services/createMessage";
import { getFields } from "../../services/validitForm";
import MetasConfig from '../../partials/metasConfig';

export default function ResetPasswordScreen(){ 
    const router = useRouter();
    const querys = router.query
    const [value, setValue] = useState();
    const isEmail = querys.insert === 'email' ? true : false;
    const isToken = querys.insert === 'token' ? true : false;
    const isPass = querys.insert === 'pass' ? true : false;

    useEffect(()=>{
        getFields();
    }, []);

    return (
        <>
            <MetasConfig title='Resetar minha senha' />
            <section className='vw-100 vh-100 d-flex justify-content-center align-items-center p-3'>
                <div className='border border-1 border-color-main rounded px-4 py-5 col-12 col-sm-8 col-md-6 shadow'>
                    {isEmail && <form onSubmit={sendEmail}>
                        <h1 className='text-center fs-3'>Por favor informe seu email</h1>

                        <InputEmail label='Email' name='email' icon='bi bi-envelope-fill position-absolute' required onChange={handleChange} />

                        <div className='col-12 d-flex justify-content-end'>
                            <InputButton type='submit' title='Enviar email' value='Enviar' style='primary' />
                        </div>
                    </form>}

                    {isToken && <form onSubmit={verify}>
                        <h1 className='text-center fs-3'>Enviamos um token de verificação para seu email.</h1>

                        <InputNumber label='Token de verificação' name='token' icon='bi bi-key-fill' required onChange={handleChange} />

                        <div className='py-2 col-12 d-flex justify-content-end'>
                            <InputButton type='submit' title='Verificar email' value='Verificar' style='primary' />
                        </div>
                    </form>}

                    {isPass && <form onSubmit={resetPass}>
                        <h1 className='text-center fs-3'>Digite sua nova senha</h1>

                        <InputPass label='Senha' name='password' required onChange={handleChange} />

                        <InputPass label='Confirme sua senha' required name='confirm_password' onChange={handleChange} />

                        <div className='py-2 col-12 d-flex justify-content-end'>
                            <InputButton type='submit' title='Redefinir senha' value='Verificar' style='color-main' />
                        </div>
                    </form>}
                </div>
            </section>
        </>
    );

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValue((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            };
        });
    };

    function sendEmail(event){
        event.preventDefault();

        router.push('/admin/reset-password?insert=token');
    }

    function verify(event){
        event.preventDefault();

        if(value.token === '123456'){
            router.push('/admin/reset-password?insert=pass');
        }else{
            createMessage('Token incorreto, verifique e tente novamente!', 'danger');
        }
    }

    function resetPass(event){
        event.preventDefault();

        if(value.password === value.confirm_password){
            router.push('/admin/dashboard');
        }else{
            createMessage('As senhas digitadas não conferem, verifique e tente novamente!', 'danger');
        }
    }
}
