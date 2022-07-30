export function oppenClosedMenu(event){
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const menu = $('#menu');
    const aside = $('aside');
    const items = document.querySelectorAll('div[data-item-active]');
    const divBtn = $('#divClosed');

    if(width <= 750){
        
        if(event.target.checked){
            menu.addClass('menuMobileOppen');

            aside.attr('data-expanded', 'mobile-active');
            divBtn.addClass('divClosed');
            divBtn.attr('data-divbtn-closed', 'active');

        }else{
            menu.removeClass('menuMobileOppen');
            divBtn.attr('data-divbtn-closed', 'desactive');

            document.getElementById('checkbox-menu').checked = false;

            setTimeout(()=>{
                aside.attr('data-expanded', 'mobile-desactive');
                divBtn.removeClass('divClosed');
            }, 200);
        }
    }else{

        if(event.target.checked){
            aside.attr('data-expanded', 'active');

            items.forEach((item)=>{
                item.parentNode.querySelector('i').classList.remove('iconManu');

                $(item).removeClass('dNone');
                $(item).attr('data-item-active', 'true');
            });
        }else{
            aside.attr('data-expanded', 'desactive');

            items.forEach((item)=>{
                $(item).attr('data-item-active', 'false');

                setTimeout(()=>{
                    item.parentNode.querySelector('i').classList.add('iconManu');

                    $(item).addClass('dNone');
                }, 600);
            });
        }
    }
}
