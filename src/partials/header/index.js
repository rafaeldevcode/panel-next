import Link from 'next/link';
import Logo from '../logo';
import Menu from '../menu';

export default function Header(){
    return (
        <header className='bg-color-main d-flex align-item-center w-100 p-2 shadow header'>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <Menu />

                <div className='logo-header h-auto my-auto'>
                    <Link href='/admin/dashboard' passHref>
                        <a title='Voltar a página inicial'>
                            <Logo image='logo-white' />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}
