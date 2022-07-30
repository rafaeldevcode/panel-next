import Profile from "../profile";
import Link from 'next/link';
import { oppenClosedMenu } from "../../services/oppenClosedMenu";

export default function Sidebar({ menus }){
    return (
        <>
            <aside className='bg-cm-secondary sidebar'>
                <Profile />

                <nav>
                    <ul className='m-0 p-2'>
                        {Object.keys(menus).map((key)=>(
                            <li className='d-flex flex-row align-items-center rounded itemNavSidbar' key={menus[key].id}>
                                <div className='nav-icon text-cm-primary text-center w-100'>
                                    <Link href={menus[key].slug} passHref>
                                        <a title={menus[key].name} className='text-decoration-none d-block fw-bold text-cm-light'>
                                            <div className='d-flex align-items-center w-100'>
                                                <i className={`${menus[key].icon} fs-5 iconManu`} />

                                                <div className='ms-2 hiddeItem dNone' data-item-active='false'>
                                                    {menus[key].name}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div id='divClosed' onClick={oppenClosedMenu} />
        </>
    )
}
