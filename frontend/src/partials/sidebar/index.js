import Profile from "../profile";
import Link from 'next/link';
import siteconfig from '../../../config/siteconfig.json'

export default function Sidebar(){
    const menu = siteconfig.site.navsidebar;

    return (
        <aside className='bg-cm-secondary sidebar' data-expanded='false'>
            <Profile />

            <nav>
                <ul className='m-0 p-2'>
                    {Object.keys(menu).map((key)=>(
                        <li className='d-flex flex-row align-items-center rounded itemNavSidbar' key={key}>
                            <div className='nav-icon text-cm-primary text-center'>
                                <Link href={menu[key].href} passHref>
                                    <a title={menu[key].text} className='text-decoration-none fw-bold text-cm-light'>
                                        <i className={`${menu[key].icone} fs-5`} />
                                    </a>
                                </Link>
                            </div>

                            <div className='ms-2 hiddeItem dNone w-100' data-item-active='false'>
                                <Link href={menu[key].href} passHref>
                                    <a title={menu[key].text} className='text-decoration-none fw-bold text-cm-light d-block w-100'>
                                        {menu[key].text}
                                    </a>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
