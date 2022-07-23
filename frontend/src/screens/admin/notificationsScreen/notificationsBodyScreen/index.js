import Link from "next/link";
import { selectSeveral, disableEnableBtn } from '../../../../services/deleteItems';

export default function NotificationsBodyScreen({ notifications }){
    return (
        <section className='p-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th className='col'>Nome</th>
                        <th className='col'>Status</th>
                        <th className='col'>Ações</th>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(notifications).map((key) => (
                        <tr key={notifications[key].id}>
                            <td>{notifications[key].name}</td>
                            <td>{notifications[key].status}</td>
                            <td>
                                <Link href={`/admin/notifications/${notifications[key].id}`} passHref>
                                    <a title={`Editar nitificação ${notifications[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button type='button' title={`Remover nitificação ${notifications[key].name}`} className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'>
                                    <i className='bi bi-trash-fill' />
                                </button>
                            </td>
                            <th className='col'>
                                <input type='checkbox' name='selectSeveral[]' onClick={disableEnableBtn} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
