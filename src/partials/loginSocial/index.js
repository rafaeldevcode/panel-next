export default function LoginSocial(){
    return (
        <div className='col-12 col-sm-6'>
            <button title='Realizar login com Google' className='btn btn-md btn-ligth border border-primary col-12 mb-2 text-left position-relative ps-0'>
                <span className='position-absolute left-0 top-0 h-100 d-flex justify-content-center align-items-center px-2'>
                    <i className="bi bi-google text-primary" />
                </span>
                Logar com google
            </button>

            <button title='Realizar login com Facebook' className='btn btn-md btn-primary border border-primary col-12 mb-2 text-left position-relative ps-0'>
                <span className='position-absolute left-0 top-0 h-100 d-flex justify-content-center align-items-center px-2'>
                    <i className="bi bi-facebook text-light" />
                </span>
                Logar com facebook
            </button>
        </div>
    )
}
