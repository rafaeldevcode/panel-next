import InputButton from "../../../../partials/form/inputButton";
import InputText from "../../../../partials/form/inputText";
import InputCheckboxSwitch from '../../../../partials/form/inputCheckboxSwitch';
import { useEffect } from "react";
import { getFields } from "../../../../services/validitForm";

export default function AddEditBody({ menus }){
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

                <div className='d-flex flex-wrap justify-content-evenly'>
                    {Object.keys(menus).map((key) => (
                        <div className='card p-3 col-md-4 col-12 col-lg-3 m-2' key={menus[key].id}>
                            <h2 className='fs-4'>{menus[key].name}</h2>

                            <InputCheckboxSwitch label='Adicionar' name={`add_${menus[key].name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-').toLowerCase()}`} />
                            <InputCheckboxSwitch label='Remover' name={`remove_${menus[key].name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-').toLowerCase()}`} />
                            <InputCheckboxSwitch label='Visualizar' name={`browse_${menus[key].name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-').toLowerCase()}`} />
                            <InputCheckboxSwitch label='Editar' name={`edit_${menus[key].name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-').toLowerCase()}`} />
                        </div>
                    ))}
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
