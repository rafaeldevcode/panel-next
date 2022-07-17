export default function Breadcrumbs({ type, color, title, bread }){
    return (
        <div className='border-bottom mb-3'>
            <div>
                <ul className='p-0 d-flex flex-nowrap text-cm-secondary'>
                    <li className='mx-2'><span className={`badge bg-${color} rounded-fill`}>{type}</span></li>
                    {Object.keys(bread).map((key)=>(    
                        <li key={key} className='mx-2' dangerouslySetInnerHTML={{__html: bread[key]}} />
                    ))}
                </ul>
            </div>
            <p className='display-5 fw-bold text-cm-secondary'>{title}</p>
        </div>
    )
}
