export default function InputCheckboxSwitch({ label, name }){
    return (
        <div className='form-check form-switch'>
            <input className='form-check-input' type="checkbox" id={name} />
            <label className='form-check-label' htmlFor={name}>{label}</label>
        </div>
    )
}
