export default function InputCheckboxSwitch({ label, name, ...props }){
    return (
        <div className='form-check form-switch'>
            <input className='form-check-input' type="checkbox" id={name} {...props} name={name} />
            <label className='form-check-label' htmlFor={name}>{label}</label>
            <span className='position-absolute end-0 bottom-0 validit' />
        </div>
    )
}
