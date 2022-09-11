import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFields } from "../../services/validitForm";
import { createMessage } from '../../services/createMessage';
import InputNumber from '../../partials/form/inputNumber';
import InputButton from '../../partials/form/inputButton';
import MetasConfig from '../../partials/metasConfig';

export default function VerifyEmailScreen(){
    const router = useRouter();
    const [value, setValue] = useState();

    useEffect(()=>{
        getFields();
    }, []);
    
    return (
        <>
            <MetasConfig title='Confirmar email' />
            <section className='vw-100 vh-100 d-flex justify-content-center align-items-center p-3'>
                <div className='border border-1 border-cm-primary rounded px-4 py-5 col-12 col-sm-8 col-md-6 shadow'>
                    <form onSubmit={verifyEmail}>
                        <h1 className='text-center fs-3'>Enviamos um token de verificação para seu email.</h1>

                        <InputNumber label='Token de verificação' name='token' icon='bi bi-key-fill' required onChange={handleChange} />

                        <div className='col-12 d-flex justify-content-end'>
                            <InputButton type='submit' title='Verificar email' value='Verificar' style='cm-primary' />
                        </div>
                    </form>
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

    function verifyEmail(event){
        event.preventDefault();

        if(value.token === '123456'){
            router.push('/dashboard');
        }else{
            createMessage('Token incorreto, verifique e tente novamente!', 'danger');
        }
    }
}
