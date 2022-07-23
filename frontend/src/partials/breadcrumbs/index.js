import Link from "next/link";

export default function Breadcrumbs({ type, color, title, bread, icon, options }){
    return (
        <div className='border-bottom mb-3 d-flex justify-content-between align-items-end'>
            <div>
                <div>
                    <ul className='p-0 d-flex flex-nowrap text-cm-secondary'>
                        <li className='mx-2'><span className={`badge bg-${color} rounded-fill`}>{type}</span></li>
                        {Object.keys(bread).map((key)=>(    
                            <li key={key} className='mx-2' dangerouslySetInnerHTML={{__html: bread[key]}} />
                        ))}
                    </ul>
                </div>

                <div className='d-flex frex-nowrap align-items-center mb-2'>
                    <i className={`${icon} text-cm-secondary display-6 me-2`} />
                    <p className='display-5 fw-bold text-cm-secondary mb-0'>{title}</p>
                </div>
            </div>

            {options && <div className='mb-3'>
                {options.add && <Link href={options.add.href} passHref>
                    <a title={`Adicionar ${title}`} className='btn btn-md btn-cm-primary me-1 text-cm-light'>Adicionar</a>
                </Link>}

                {options.delete && <button id='deleteAll' type='button' title={`Remover vários(a) ${title}`} className='btn btn-md btn-cm-danger ms-1 disabled text-cm-light'>
                    Remover
                </button>}
            </div>}
        </div>
    )
}
