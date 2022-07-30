export const showPass = (event) => {
    event.preventDefault();
    const inputPass = event.target.parentNode.parentNode.querySelector('input');
    const icone = event.target;

    if(inputPass.type === 'password'){
        $(inputPass).attr('type', 'text');
        $(inputPass).removeClass('bi-eye-fill');
        $(icone).addClass('bi-eye-slash-fill');
    }else{
        $(inputPass).attr('type', 'password');
        $(icone).removeClass('bi-eye-slash-fill');
        $(icone).removeClass('bi-eye-fill');
    }
}

export const getFields = () => {
    const fields = document.querySelectorAll('[required]');
    
    for(let field of fields){
        field.addEventListener('invalid', event => {
            // Eliminar bubble
            event.preventDefault();
            customValidation(event)
        });
        field.addEventListener('blur', customValidation);
    }
}

function validateField(field){
    function verifyError(){
        let foundError = false;

        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid){
                foundError = error;
            }
        }

        return foundError;
    };

    function setCustomMessage(message){
        let spanError = field.parentNode.querySelector('span.validit');

        if(message){
            $(spanError).html(`${message} <i class="bi bi-x-circle-fill"></i>`);
            $(spanError).attr('data-valid', 'false')
        }else{
            $(spanError).html('Válido! <i class="bi bi-check-circle-fill"></i>');
            $(spanError).attr('data-valid', 'true')
        }
    };

    function customMessage(typeError){
        let valueMissing = 'Por favor, preencha este campo!'

        const message = {
            text: {
                valueMissing: valueMissing
            },
            email: {
                valueMissing: valueMissing,
                typeMismatch: 'Por favor, digite um email válido!'
            },
            password: {
                valueMissing: valueMissing
            },
            number: {
                valueMissing: valueMissing
            }
        };

        if(message[field.type]){
            return message[field.type][typeError];
        }else{
            return valueMissing;
        }
    };

    return function(){
        let error = verifyError();

        if(error){
            let message = customMessage(error);

            setCustomMessage(message);
        }else{
            setCustomMessage();
        }
    };
};

function customValidation(event){
    let field = event.target;
    let validation = validateField(field);

    validation();
};
