export default function InputButton({ type, title, value, style }){
    return (
        <div className='d-flex flex-column my-4'>
            <input className={`btn btn-md btn-${style} py-2 fw-bold fs-5 text-light`} type={type} title={title} defaultValue={value}/>
        </div>
    );
}
