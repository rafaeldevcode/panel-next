import Image from "next/image";

export default function InputFileImege({ label, icon, src, name, width, height, ...props }){
    return (
        <div className='my-4 section-input mx-auto'>
            <div>
                <input className='form-control ps-4 py-2 validit-custom' hidden type='file' name={name} id={name} {...props} />
                <label className='mt-4 w-100 h-100 my-2 p-3 section-input-label rounded border border-cm-primary position-relative' htmlFor={name}>
                    <span className='d-inline text-left w-100 position-absolute left-0 top-0 section-input-span'>
                        <i className={icon} />  
                        <span className='ms-2'>{label}</span>
                    </span>

                    <Image 
                        src={src} 
                        alt={label}
                        width={width}
                        height={height}
                        layout='responsive'
                        placeholder='blur'
                        blurDataURL='/assets/images/default.png'
                    />
                </label>
                <span className='position-absolute end-0 bottom-0 validit' />
            </div>
        </div>
    )
}
