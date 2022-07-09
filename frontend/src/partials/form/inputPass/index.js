import { showPass } from "../../../services/validitForm";

export default function InputPass({ label, name, ...props }){
    return (
        <div className='d-flex flex-column position-relative my-4'>
            <i className='bi bi-lock-fill position-absolute m-2' />
            <input className='form-control ps-4 py-2 validit-custom' type='password' name={name} id={name} {...props}/>
            <button type='button' title='Exibir senha' className='btn btn-sm btn-show-pass position-absolute end-0 h-100' onClick={showPass}><i className='bi bi-eye-fill'/></button>
            <label className='position-absolute ms-4 my-2 px-2' htmlFor={name}>{label}</label>
            <span className='position-absolute end-0 bottom-0 validit' />
        </div>
    );
}
