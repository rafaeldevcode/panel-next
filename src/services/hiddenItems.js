export function hiddenItems(selectors, pixels){
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if( width <= pixels){
        selectors.forEach(selector => {
            const items = document.querySelectorAll(selector);

                items.forEach(item => {
                    item.setAttribute('hidden', true);
                })
        })
    }
}
