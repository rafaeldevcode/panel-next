import Link from "next/link";
import ModalDelete from '../../../../partials/modalDelete';
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';

export default function PermissionsBodyScreen({ permisions }){
    return (
        <section className='p-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover'>
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
                    {Object.keys(permisions).map((key) => (
                        <tr key={permisions[key].id}>
                            <td className='col'>
                                <input 
                                    data-route={`/admin/permisions/delete/${permisions[key].id}`} 
                                    data-message={`Esta ação irá remover todas as permições selecionadas!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </td>
                            <td className='col'>{permisions[key].name}</td>
                            <td>{permisions[key].permision}</td>
                            <td>
                                <Link href={`/admin/permisions/${permisions[key].id}`} passHref>
                                    <a title={`Editar permição ${permisions[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold m-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/permisions/delete/${permisions[key].id}`} 
                                    data-message={`Esta ação irá remover a permição "${permisions[key].name}"!`}
                                    type='button' 
                                    title={`Remover permição ${permisions[key].name}`}
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold m-1'
                                >
                                    <i 
                                        data-route={`/admin/permisions/delete/${permisions[key].id}`} 
                                        data-message={`Esta ação irá remover a permição "${permisions[key].name}"!`} 
                                        className='bi bi-trash-fill' 
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalDelete />
        </section>
    );
}
