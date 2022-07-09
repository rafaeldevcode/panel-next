import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFields } from "../../../services/validitForm";
import { createMessage } from '../../../services/createMessage';
import InputNumber from '../../../partials/form/inputNumber';
import InputButton from '../../../partials/form/inputButton';

export default function VerifyEmailScreen(){
    const router = useRouter();
    const [value, setValue] = useState();

    useEffect(()=>{
        getFields();
    }, []);
    
    return (
        <section className='vw-100 vh-100 d-flex justify-content-center align-items-center p-3'>
            <div className='border border-1 border-cm-primary rounded px-4 py-5 col-12 col-sm-8 col-md-6 shadow'>
                <form onSubmit={verifyEmail}>
                    <h1 className='text-center fs-3'>Enviamos um token de verificação para seu email.</h1>

                    {/* <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-key-fill position-absolute m-2' />
                        <input className='form-control ps-4 py-2 validit-custom' type='number' name='verify_email' id='verifyEmail' required onChange={handleChange} />
                        <label className='position-absolute ms-4 my-2 px-2' htmlFor="verifyEmail">Token de verificação</label>
                        <span className='position-absolute end-0 bottom-0 validit'></span>
                    </div> */}

                    <InputNumber label='Token de verificação' name='token' icon='bi bi-key-fill' required onChange={handleChange} />

                    <div className='col-12 d-flex justify-content-end'>
                        <InputButton type='submit' title='Verificar email' value='Verificar' style='primary' />
                    </div>
                </form>
            </div>
        </section>
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

    function verifyEmail(event){
        event.preventDefault();

        if(value.token === '123456'){
            router.push('/admin/dashboard');
        }else{
            createMessage('Token incorreto, verifique e tente novamente!', 'danger');
        }
    }
}
