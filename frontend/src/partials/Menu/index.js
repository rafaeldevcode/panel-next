// import oppenClosedMenu from '../../services/oppenClosedMenu';

export default function Menu(){
    return (
        <form className='menu'>
            <input className='d-none menu_input' type="checkbox" id="checkbox-menu"  />
        
            <label className='position-relative d-block ms-2 menu_label' htmlFor="checkbox-menu">
                <span className='position-absolute d-block rounded bg-cm-light' />.
                <span className='position-absolute d-block rounded bg-cm-light' />.
                <span className='position-absolute d-block rounded bg-cm-light' />.
            </label>
        </form>
    )
}
