import InputButton from "../../../../partials/form/inputButton";
import InputText from "../../../../partials/form/inputText";
import { useEffect } from "react";
import { getFields } from "../../../../services/validitForm";

export default function AddEditBody(){
    useEffect(()=>{
        getFields();
    }, []);

    return (
        <section className='p-5 bg-cm-grey m-3 rounded shadow'>
            <form>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome da permição' name='name' icon='bi bi-person-fill' value='' required />
                    </div>
                </div>



                <div className='row d-flex justify-content-end'>
                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar perfil' value='Salvar' style='cm-primary' />
                    </div>
                </div>
            </form>
        </section>
    )
}
