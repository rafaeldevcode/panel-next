import Link from 'next/link';
import Logo from '../logo';

export default function Header(){
    return (
        <header className='bg-cm-primary d-flex align-item-center w-100 p-2 shadow header'>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <div>
                    Teste
                </div>

                <div className='logo-header h-auto my-auto'>
                    <Link href='/admin/dashboard' passHref>
                        <a>
                            <Logo image='logo-white' />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}
