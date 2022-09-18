export default function ServerErrorScreen(){
    return (
        <section className='vw-100 vh-100 d-flex justify-content-center align-items-center custom-500'>
            <div className='container d-flex justify-content-center align-items-center border rounded border-cm-warning m-2 custom-500-mirror'>
                <ul className='d-flex flex-nowrap text-cm-warning'>
                    <li className='fw-bolder display-6'>500</li>
                    <li className='display-6'>|</li>
                    <li className='display-6'>Internal Error</li>
                </ul>
            </div>
        </section>
    )
}
