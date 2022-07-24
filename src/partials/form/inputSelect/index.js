export default function InputSelect({ label, name, icon, options, value, ...props }){
    return (
        <div className='d-flex flex-column position-relative my-4'>
            <i className={`${icon} position-absolute m-2`} />
            <select className='form-select ps-4' name={name} id={name} {...props}>
                <option defaultValue={value}>{label}</option>
                {Object.keys(options).map((key)=>(
                    <option key={key} defaultValue={key}>{options[key]}</option>
                ))}
            </select>
            <span className='position-absolute end-0 bottom-0 validit'></span>
        </div>
    )
}
