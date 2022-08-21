import InputButton from "../../../../partials/form/inputButton";
import InputText from "../../../../partials/form/inputText";
import TextArea from "../../../../partials/form/textArea";
import { useEffect, useState } from "react";
import { getFields } from "../../../../services/validitForm";
import InputCheckboxSwitch from '../../../../partials/form/inputCheckboxSwitch';

export default function AddEditBody(){
    const [values, setValues] = useState();
    
    useEffect(()=>{
        getFields();
    }, []);

    return (
        <section className='p-2 p-md-5 bg-cm-grey m-3 rounded shadow'>
            <form onSubmit={saveNotification}>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome da notificação' name='name' icon='bi bi-bell-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12'>
                        <TextArea label='Notificação' name='notification' icon='bi bi-bell-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputCheckboxSwitch label='Ativar notificação' name='status' onChange={handleChange} />
                    </div>
                </div>

                <div className='row d-flex justify-content-end'>
                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar perfil' value='Salvar' style='cm-primary' />
                    </div>
                </div>
            </form>
        </section>
    );

    function handleChange(event){
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            };
        });

    };

    function saveNotification(event){
        event.preventDefault();

        console.log(values)

        getFields();
    }
}
