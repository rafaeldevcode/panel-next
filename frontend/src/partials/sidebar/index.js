import Image from "next/image";
import Link from 'next/link';

export default function Sidebar(){
    return (
        <aside className='vh-100 bg-cm-secondary sidebar'>
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
                <div>
                    <Link href='/admin/profile' passHref>
                        <a className='text-decoration-none'>
                            <p className='mb-0 ms-2 text-cm-light fw-bold'>Rafael Vieira</p>
                        </a>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
