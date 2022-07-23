import Link from "next/link";

export default function PermissionsBodyScreen({ permisions }){
    return (
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
                    {Object.keys(permisions).map((key) => (
                        <tr key={permisions[key].id}>
                            <td>{permisions[key].name}</td>
                            <td>{permisions[key].permision}</td>
                            <td>
                                <Link href={`/admin/permisions/${permisions[key].id}`} passHref>
                                    <a title={`Editar permição ${permisions[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button type='button' title={`Remover permição ${permisions[key].name}`} className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'>
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
    )
}
