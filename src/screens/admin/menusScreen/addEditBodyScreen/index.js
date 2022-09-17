import InputButton from "../../../../partials/form/inputButton";
import InputText from "../../../../partials/form/inputText";
import InputNumber from "../../../../partials/form/inputNumber";
import { useEffect, useState } from "react";
import { getFields } from "../../../../services/validitForm";
import InputCheckboxSwitch from '../../../../partials/form/inputCheckboxSwitch';

export default function AddEditBody(){
    const [values, setValues] = useState();
    
    useEffect(()=>{
        getFields();
    }, []);

    return (
        <section className='p-2 p-md-2 bg-cm-grey m-3 rounded shadow'>
            <form onSubmit={saveMenu}>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome do item do menu' name='name' icon='bi bi-menu-button-wide-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputText label='Ícone' name='icon' icon='bi bi-person-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputText label='Slug (Sem espaçoe e ascentos)' name='slug' icon='bi bi-person-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputNumber label='Posição' name='position' icon='bi bi-person-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputCheckboxSwitch label='Exibir item na dashboard' name='view_dashboard' />
                    </div>
                </div>

                <div className='row d-flex justify-content-end mt-3'>
                    <span>Os ícones ultilizados são do <a href="#" target='_blank' rel='noopener'>bootstrap icons</a>, copie a classe e cole no input do ícone do menu.</span>

                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar perfil' value='Salvar' style='color-main' />
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

    function saveMenu(event){
        event.preventDefault();

        console.log(values)

        getFields();
    }
}
