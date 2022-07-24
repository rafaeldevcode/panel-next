import Profile from "../profile";
import Link from 'next/link';

export default function Sidebar({ menus }){
    return (
        <aside className='bg-cm-secondary sidebar' data-expanded='false'>
            <Profile />

            <nav>
                <ul className='m-0 p-2'>
                    {Object.keys(menus).map((key)=>(
                        <li className='d-flex flex-row align-items-center rounded itemNavSidbar' key={menus[key].id}>
                            <div className='nav-icon text-cm-primary text-center'>
                                <Link href={menus[key].slug} passHref>
                                    <a title={menus[key].name} className='text-decoration-none fw-bold text-cm-light'>
                                        <i className={`${menus[key].icon} fs-5`} />
                                    </a>
                                </Link>
                            </div>

                            <div className='ms-2 hiddeItem dNone w-100' data-item-active='false'>
                                <Link href={menus[key].slug} passHref>
                                    <a title={menus[key].name} className='text-decoration-none fw-bold text-cm-light d-block w-100'>
                                        {menus[key].name}
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
