import Footer from '../../../partials/Footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

export default function UsersScreen({ users }){
    const options = {
        'add': {
            'href': '/admin/users/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'users'
    };

    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-primary' 
                            title='Usuários' 
                            bread={bread}
                            options={options}
                        />
                    </section>

                    <section className='p-5 bg-cm-grey m-3 rounded shadow'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th className='col'>Thumb</th>
                                    <th className='col'>Nome</th>
                                    <th className='col'>Email</th>
                                    <th className='col'>Ações</th>
                                    <th className='col'>
                                        <input type='checkbox' id='selectSeveral' />
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.keys(users.users).map((key) => (
                                    <tr key={users.users[key].id}>
                                        <th scope="row" className='d-flex align-items-center'>
                                            <div className='user'>
                                                <Image
                                                    src={users.users[key].photo}
                                                    alt={users.users[key].name}
                                                    width={137}
                                                    height={137}
                                                    layout='responsive'
                                                    placeholder='blur'
                                                    blurDataURL='/assets/images/default.png'
                                                    className='border border-cm-primary'
                                                />
                                            </div>
                                        </th>
                                        <td>{users.users[key].name}</td>
                                        <td>{users.users[key].email}</td>
                                        <td>
                                            <Link href={`/admin/users/${users.users[key].id}`} passHref>
                                                <a title={`Editar usuário ${users.users[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                                    <i className='bi bi-pencil-square' />
                                                </a>
                                            </Link>

                                            <button type='button' title={`Remover usuário ${users.users[key].name}`} className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'>
                                                <i className='bi bi-trash-fill' />
                                            </button>
                                        </td>
                                        <th className='col'>
                                            <input type='checkbox' name='selectSeveral[]' />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}
