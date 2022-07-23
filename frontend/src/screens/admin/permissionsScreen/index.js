import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Link from 'next/link';

export default function PermissionsScreen({ permisions }){
    const options = {
        'add': {
            'href': '/admin/permissions/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'permissions'
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
                            title='Permições' 
                            bread={bread} 
                            options={options}
                        />
                    </section>

                    <section className='p-5 bg-cm-grey m-3 rounded shadow'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th className='col'>Nome</th>
                                    <th className='col'>Permição</th>
                                    <th className='col'>Ações</th>
                                    <th className='col'>
                                        <input type='checkbox' id='selectSeveral' />
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.keys(permisions.permisions).map((key) => (
                                    <tr key={permisions.permisions[key].id}>
                                        <td>{permisions.permisions[key].name}</td>
                                        <td>{permisions.permisions[key].permision}</td>
                                        <td>
                                            <Link href={`/admin/permisions/${permisions.permisions[key].id}`} passHref>
                                                <a title={`Editar usuário ${permisions.permisions[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                                    <i className='bi bi-pencil-square' />
                                                </a>
                                            </Link>

                                            <button type='button' title={`Remover usuário ${permisions.permisions[key].name}`} className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'>
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
