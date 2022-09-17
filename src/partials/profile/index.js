import Image from "next/image";
import Link from 'next/link';
import { oppenNotifications } from "../../services/oppenNotifications";

export default function Profile({ user }){
    return (
        <div className='d-flex flex-nowrap align-items-center shadow p-2 profile'>
            <div className='user'>
                <Link href='/admin/profile' passHref>
                    <a title={`Editar perfil de ${user.name}`}>
                        <Image
                            src={user.photo}
                            alt={user.name}
                            width={137}
                            height={137}
                            layout='responsive'
                            placeholder='blur'
                            blurDataURL='/assets/images/default.png'
                            className='border border-color-main'
                        />
                    </a>
                </Link>
            </div>
            <div className='btn-group hiddeItem dNone profile-dropdawn'  data-item-active='false'>
                <button type='button' title='Perfil' className='btn profile-dropdawn-btn w-100 dropdown-toggle text-cm-light fw-bold' data-bs-toggle='dropdown' aria-expanded='false'>
                    {user.name}
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
                        <Link href='#' passHref>
                            <a onClick={oppenNotifications} className='dropdown-item d-flex flex-row justify-content-between'>
                                Notificações
                                <i className='bi bi-bell-fill position-relative'>
                                    <i className='bi bi-circle-fill fs-6 text-cm-danger position-absolute top-0 end-0 bubbleNotification' />
                                </i>
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
