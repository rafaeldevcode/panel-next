import { oppenClosedMenu } from "../../services/oppenClosedMenu";

export default function Menu(){
    return (
        <div className='d-flex align-items-center'>
            <form id='menu' className='menu'>
                <input className='d-none menu_input' type="checkbox" id="checkbox-menu" onClick={oppenClosedMenu} />
            
                <label className='position-relative d-block ms-2 menu_label' htmlFor="checkbox-menu">
                    <span className='position-absolute d-block rounded bg-cm-light' />.
                    <span className='position-absolute d-block rounded bg-cm-light' />.
                    <span className='position-absolute d-block rounded bg-cm-light' />.
                </label>
            </form>
        </div>
    );
}
