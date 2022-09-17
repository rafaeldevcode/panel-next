export default function NotFoundScreen(){
    return (
        <section className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <div className='container d-flex justify-content-center align-items-center border rounded border-cm-danger shadow m-2 custom-404'>
                <ul className='d-flex flex-nowrap text-cm-danger'>
                    <li className='fw-bolder display-6'>404</li>
                    <li className='display-6'>|</li>
                    <li className='display-6'>Not Found</li>
                </ul>
            </div>
        </section>
    )
}
