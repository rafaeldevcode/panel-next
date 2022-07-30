export function oppenClosedMenu(event){
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const menu = document.querySelector('#menu');
    const aside = document.querySelector('aside');
    const items = document.querySelectorAll('div[data-item-active]');
    const divBtn = document.querySelector('#divClosed');

    if(width <= 750){
        
        if(event.target.checked){
            menu.classList.add('menuMobileOppen');

            aside.setAttribute('data-expanded', 'mobile-active');
            divBtn.classList.add('divClosed');
            divBtn.setAttribute('data-divbtn-closed', 'active');

        }else{
            menu.classList.remove('menuMobileOppen');
            divBtn.setAttribute('data-divbtn-closed', 'desactive');

            document.querySelector('#checkbox-menu').checked = false;

            setTimeout(()=>{
                aside.setAttribute('data-expanded', 'mobile-desactive');
                divBtn.classList.remove('divClosed');
            }, 200);
        }
    }else{

        if(event.target.checked){
            aside.setAttribute('data-expanded', 'active');

            items.forEach((item)=>{
                item.parentNode.querySelector('i').classList.remove('iconManu');
                item.classList.remove('dNone');
                item.setAttribute('data-item-active', 'true');
            });
        }else{
            aside.setAttribute('data-expanded', 'desactive');

            items.forEach((item)=>{
                item.setAttribute('data-item-active', 'false');

                setTimeout(()=>{
                    item.parentNode.querySelector('i').classList.add('iconManu');
                    item.classList.add('dNone');
                }, 600);
            });
        }
    }
}
