import Image from "next/image";
import Link from 'next/link';

export default function Profile(){
    return (
        <div className='d-flex flex-nowrap align-items-center shadow p-2 profile'>
            <div className='user'>
                <Image
                    src='/assets/images/user.jpeg'
                    alt='Rafael Vieira'
                    width={460}
                    height={460}
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL='/assets/images/default.png'
                    className='border border-cm-primary'
                />
            </div>
            <div className='btn-group'>
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
                        <Link href='/admin/login' passHref>
                            <a className='dropdown-item d-flex flex-row justify-content-between'>
                                Logout
                                <i class='bi bi-box-arrow-right' />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
