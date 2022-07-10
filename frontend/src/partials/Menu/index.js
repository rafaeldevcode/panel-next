export default function Menu(){
    return (
        <form className='menu'>
            <input className='d-none menu_input' type="checkbox" id="checkbox-menu" onClick={oppenMenu} />
        
            <label className='position-relative d-block ms-2 menu_label' htmlFor="checkbox-menu">
                <span className='position-absolute d-block rounded bg-cm-light' />.
                <span className='position-absolute d-block rounded bg-cm-light' />.
                <span className='position-absolute d-block rounded bg-cm-light' />.
            </label>
        </form>
    );

    function oppenMenu(event){
        const aside = document.querySelector('aside[data-expanded]');
        const items = document.querySelectorAll('div[data-item-active]');

        if(event.target.checked){
            aside.setAttribute('data-expanded', 'true');

            items.forEach((item)=>{
                item.classList.remove('dNone');
                item.setAttribute('data-item-active', 'true');
            });
        }else{
            aside.setAttribute('data-expanded', 'false');

            items.forEach((item)=>{
                item.setAttribute('data-item-active', 'false');

                setTimeout(()=>{
                    item.classList.add('dNone');
                }, 600);
            });
        }
    }
}
