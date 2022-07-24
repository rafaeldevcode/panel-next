export function disableEnableBtn(){
    const inputs = document.querySelectorAll('input[name="selectSeveral[]"]');
    const btnDeleteAll = document.getElementById('deleteAll');
    const checkeds = [];

    inputs.forEach((input)=>{
        checkeds.push(input.checked);
    })

    if(inArray(true, checkeds)){
        btnDeleteAll.classList.remove('disabled');
    }else{
        btnDeleteAll.classList.add('disabled');
    };

    function inArray(value, array) {
        var length = array.length;

        for(var i = 0; i < length; i++) {
            if(array[i] == value) return true;
        }
        return false;
    }
}

export function selectSeveral(event){
    disableEnableBtn();

    const input = event.target;
    const inputs = document.querySelectorAll('input[name="selectSeveral[]"]');
    const btnDeleteAll = document.getElementById('deleteAll');
    
    if(input.checked){
        inputs.forEach((input)=>{
            input.checked = true;
        });

        btnDeleteAll.classList.remove('disabled');
    }else{
        inputs.forEach((input)=>{
            input.checked = false;
        });

        btnDeleteAll.classList.add('disabled');
    }
}

export function deleteItem(event){
    const button = event.target;
    const route = $(button).attr('data-route');
    const message = $(button).attr('data-message');
    const modalLabel = $('#modalDeleteItemLabel');
    
    modalLabel.text(message);

    $('#modalDeleteItem').modal('show');
}

export function deleteAllItems(){
    const allItems = [];
    const modalLabel = $('#modalDeleteItemLabel');
    const itemsDelete = document.querySelectorAll('input[name="selectSeveral[]"]');
    const message = $(itemsDelete[0]).attr('data-message');

    itemsDelete.forEach((item)=>{
        if(item.checked){
            allItems.push($(item).attr('data-route'));
        }
    });

    modalLabel.text(message);
    $('#modalDeleteItem').modal('show');
}
