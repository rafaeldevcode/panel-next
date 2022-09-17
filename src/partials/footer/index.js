import Link from 'next/link';
import siteconfig from '../../../config/siteconfig.json';

export default function Footer(){
    const year = new Date().getFullYear();

    return (
        <footer className='p-4 border-top shadow'>
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                <p className='mb-0 fw-bold text-cm-secondary text-center'>&copy; {year} {siteconfig.site.name} | Todos os diretitos reservados</p>

                <nav>
                    <ul className='d-flex flex-row m-0 p-0'>
                        <li>
                            <Link href='/policies/privacy' passHref>
                                <a className='text-decoration-none fw-bold text-color-main'>
                                    Politícas de Privacidade
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2'>|</li>
                        <li>
                            <Link href='/policies/terms' passHref>
                                <a className='text-decoration-none fw-bold text-color-main'>
                                    Temos de Uso
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
