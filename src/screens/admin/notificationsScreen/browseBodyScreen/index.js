import Link from "next/link";
import ModalDelete from '../../../../partials/modalDelete';
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';
import TableFooter from '../../../../partials/tableFooter';

export default function BrowseBodyScreen({ notifications }){
    return (
        <section className='p-3 p-sm-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover mb-0'>
                <thead>
                    <tr>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                        <th className='col'>Nome</th>
                        <th className='col'>Status</th>
                        <th className='col'>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(notifications).map((key) => (
                        <tr key={notifications[key].id}>
                            <td className='col'>
                                <input 
                                    data-route={`/admin/notifications/delete/${notifications[key].id}`}  
                                    data-message={`Esta ação irá remover todas as notificações selecionadas!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </td>
                            <td>{notifications[key].name}</td>
                            <td>{notifications[key].status === true ? 'Ativa' : 'Inativa'}</td>
                            <td>
                                <Link href={`/admin/notifications/${notifications[key].id}`} passHref>
                                    <a title={`Editar nitificação ${notifications[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold m-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/notifications/delete/${notifications[key].id}`} 
                                    data-message={`Esta ação irá remover a nitificação "${notifications[key].name}"!`}
                                    type='button' 
                                    title={`Remover nitificação ${notifications[key].name}`}
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold m-1'
                                >
                                    <i 
                                        data-route={`/admin/notifications/delete/${notifications[key].id}`} 
                                        data-message={`Esta ação irá remover a notificação "${notifications[key].name}"!`} 
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
