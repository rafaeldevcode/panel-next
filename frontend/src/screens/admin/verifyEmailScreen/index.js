import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFields } from "../../../services/validitForm";

export default function verifyEmailScreen(){
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

                    <div className='d-flex flex-column position-relative my-4'>
                        <i className='bi bi-key-fill position-absolute m-2' />
                        <input className='form-control ps-4 py-2 validit-custom' type='number' name='verify_email' id='verifyEmail' required onChange={handleChange} />
                        <label className='position-absolute ms-4 my-2 px-2' htmlFor="verifyEmail">Token de verificação</label>
                        <span className='position-absolute end-0 bottom-0 validit'></span>
                    </div>

                    <div className='py-2 col-12 d-flex justify-content-end'>
                        <input title='verificar email' className='btn btn-lg text-cm-light btn-cm-primary' type='submit' value='Verificar' />
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

        console.log(value.verify_email);
    }
}
