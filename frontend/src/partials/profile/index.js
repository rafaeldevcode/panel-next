import Image from "next/image";
import Link from 'next/link';

export default function Profile(){
    return (
        <div className='d-flex flex-nowrap align-items-center shadow p-2 profile'>
            <div className='user'>
                <Image
                    src='/assets/images/users/iron_man.png'
                    alt='Rafael Vieira'
                    width={137}
                    height={137}
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL='/assets/images/default.png'
                    className='border border-cm-primary'
                />
            </div>
            <div className='btn-group hiddeItem dNone'  data-item-active='false'>
                <button type='button' title='Perfil' className='btn btn-profile w-100 dropdown-toggle text-cm-light fw-bold' data-bs-toggle='dropdown' aria-expanded='false'>
                    Rafael Vieira
                </button>
                <ul className='dropdown-menu dropdown-menu-dark'>
                    <li>
                        <Link href='/admin/profile' passHref>
                            <a className='dropdown-item d-flex flex-row justify-content-between'>
                                Perfil
                                <i className='bi bi-person-bounding-box' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/admin/notifications' passHref>
                            <a className='dropdown-item d-flex flex-row justify-content-between'>
                                Notificações
                                <i className='bi bi-bell-fill' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/admin/login' passHref>
                            <a className='dropdown-item d-flex flex-row justify-content-between'>
                                Logout
                                <i className='bi bi-box-arrow-right' />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
