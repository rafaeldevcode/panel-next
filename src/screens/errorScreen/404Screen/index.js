export default function NotFoundScreen(){
    return (
        <section className='vw-100 vh-100 d-flex justify-content-center align-items-center custom-404'>
            <div className='container d-flex justify-content-center align-items-center border rounded border-cm-danger m-2 custom-404-mirror'>
                <ul className='d-flex flex-nowrap text-cm-danger'>
                    <li className='fw-bolder display-6'>404</li>
                    <li className='display-6'>|</li>
                    <li className='display-6'>Not Found</li>
                </ul>
            </div>
        </section>
    )
}
