import Link from "next/link";
import ModalDelete from '../../../../partials/modalDelete';
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';
import TableFooter from '../../../../partials/tableFooter';

export default function BrowseBody({ permissions }){
    return (
        <section className='p-3 p-sm-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover mb-0'>
                <thead>
                    <tr>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                        <th className='col'>Nome</th>
                        <th className='col'>Permição</th>
                        <th className='col'>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(permissions).map((key) => (
                        <tr key={permissions[key].id}>
                            <td className='col'>
                                <input 
                                    data-route={`/admin/permisions/delete/${permissions[key].id}`} 
                                    data-message={`Esta ação irá remover todas as permições selecionadas!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </td>
                            <td className='col'>{permissions[key].name}</td>
                            <td>{permissions[key].permission}</td>
                            <td>
                                <Link href={`/admin/permisions/${permissions[key].id}`} passHref>
                                    <a title={`Editar permição ${permissions[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold m-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/permisions/delete/${permissions[key].id}`} 
                                    data-message={`Esta ação irá remover a permição "${permissions[key].name}"!`}
                                    type='button' 
                                    title={`Remover permição ${permissions[key].name}`}
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold m-1'
                                >
                                    <i 
                                        data-route={`/admin/permisions/delete/${permissions[key].id}`} 
                                        data-message={`Esta ação irá remover a permição "${permissions[key].name}"!`} 
                                        className='bi bi-trash-fill' 
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <TableFooter />
            <ModalDelete />
        </section>
    );
}
