export default function InputDate({ label, name, icon, value, ...props }){
    return (
        <div className='d-flex flex-column position-relative my-4'>
            <i className={`${icon} position-absolute m-2`} />
            <input className='form-control ps-4 py-2 validit-custom' type='date' name={name} id={name} defaultValue={value} {...props} />
            <label className='position-absolute ms-4 my-2 px-2' htmlFor={name}>{label}</label>
            <span className='position-absolute end-0 bottom-0 validit' />
        </div>
    )
}
