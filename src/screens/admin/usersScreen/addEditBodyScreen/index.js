import InputButton from "../../../../partials/form/inputButton";
import InputText from "../../../../partials/form/inputText";
import { useEffect, useState } from "react";
import { getFields } from "../../../../services/validitForm";
import InputEmail from '../../../../partials/form/inputText';
import InputPass from '../../../../partials/form/inputPass';
import InputSelect from '../../../../partials/form/inputSelect';
import InputDate from '../../../../partials/form/inputDate';

export default function AddEditBody(){
    const [values, setValues] = useState();

    useEffect(()=>{
        getFields();
    }, []);

    return (
        <section className='p-2 p-md-5 bg-cm-grey m-3 rounded shadow'>
            <form onSubmit={saveUser}>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome do usuário' name='name' icon='bi bi-person-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputEmail label='Email' name='email' icon='bi bi-envelope-fill' value='' required onChange={handleChange} />
                    </div>
                    
                    <div className='col-12 col-md-6'>
                        <InputText label='Telefone' name='phone' icon='bi bi-phone-fill' value='' required onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputSelect label='Permissões' name='permissions' icon='bi bi-file-earmark-lock-fill' required  options={{
                            'admin': 'Admin',
                            'user': 'Usuário'
                        }} onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputDate label='Data de nascimento' name='dateOfBirth' icon='bi bi-calendar-fill' value='' onChange={handleChange} />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputPass label='Senha atual' name='password' required onChange={handleChange} />
                    </div>
                </div>

                <div className='row d-flex justify-content-end'>
                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar usuário' value='Salvar' style='cm-primary' />
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

        if(fieldName == 'phone'){

            const telefone = removeCaracter(document.getElementById('phone').value);
            const mascara = `(${telefone.substr(0, 2)}) ${telefone.substr(2, 1)} ${telefone.substr(3, 4)}-${telefone.substr(7, 4)}`;
        
            document.getElementById('phone').value = mascara;

            function removeCaracter(phone){
                let regex = /[^0-9]/gi;
                phone = phone.replace(regex, '');
                return phone;
            }
        }
    };

    function saveUser(event){
        event.preventDefault();

        console.log(values)

        getFields();
    }
}
