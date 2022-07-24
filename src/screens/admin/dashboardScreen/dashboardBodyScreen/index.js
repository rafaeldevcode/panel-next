import Link from "next/link";

export default function DashboardBodyScreen(){
    return (
        <section className='p-3 p-md-5 bg-cm-grey m-3 rounded shadow'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <Link href='/admin/users' passHref >
                    <a className='bg-cm-primary border border-primary p-2 rounded text-decoration-none card-dashboard m-2 text-center text-cm-light'>
                        <div>
                            <p className='m-0 p-0 text-start'><i className='bi bi-people-fill'/></p>

                            <div className='px-3'>
                                <h2 className='mb-0 fs-3'>Usuários</h2>
                                <p className='fs-4 fw-bold mt-2 mb-0'>10</p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/admin/menus' passHref >
                    <a className='bg-cm-primary border border-primary p-2 rounded text-decoration-none card-dashboard m-2 text-center text-cm-light'>
                        <div>
                            <p className='m-0 p-0 text-start'><i className='bi bi-menu-button-wide-fill'/></p>

                            <div className='px-3'>
                                <h2 className='mb-0 fs-3'>Menus</h2>
                                <p className='fs-4 fw-bold  mt-2 mb-0'>10</p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/admin/permissions' passHref >
                    <a className='bg-cm-primary border border-primary p-2 rounded text-decoration-none card-dashboard m-2 text-center text-cm-light'>
                        <div>
                            <p className='m-0 p-0 text-start'><i className='bi bi-file-earmark-lock-fill'/></p>

                            <div className='px-3'>
                                <h2 className='mb-0 fs-3'>Permições</h2>
                                <p className='fs-4 fw-bold  mt-2 mb-0'>10</p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/admin/notifications' passHref >
                    <a className='bg-cm-primary border border-primary p-2 rounded text-decoration-none card-dashboard m-2 text-center text-cm-light'>
                        <div>
                            <p className='m-0 p-0 text-start'><i className='bi bi-bell-fill'/></p>

                            <div className='px-3'>
                                <h2 className='mb-0 fs-3'>Notificações</h2>
                                <p className='fs-4 fw-bold  mt-2 mb-0'>10</p>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </section>
    )
}
