import Image from "next/image";
import Link from "next/link";
import ModalDelete from "../../../../partials/modalDelete";
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';

export default function UsersBodyScreen({ users }){
    return (
        <section className='p-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th className='col'>Thumb</th>
                        <th className='col'>Nome</th>
                        <th className='col'>Email</th>
                        <th className='col'>Ações</th>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(users).map((key) => (
                        <tr key={users[key].id}>
                            <th scope="row" className='d-flex align-items-center'>
                                <div className='user'>
                                    <Image
                                        src={users[key].photo}
                                        alt={users[key].name}
                                        width={137}
                                        height={137}
                                        layout='responsive'
                                        placeholder='blur'
                                        blurDataURL='/assets/images/default.png'
                                        className='border border-cm-primary'
                                    />
                                </div>
                            </th>
                            <td>{users[key].name}</td>
                            <td>{users[key].email}</td>
                            <td>
                                <Link href={`/admin/users/${users[key].id}`} passHref>
                                    <a title={`Editar usuário ${users[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/users/delete/${users[key].id}`} 
                                    data-message={`Esta ação irá remover o usuário "${users[key].name}"!`}
                                    type='button' 
                                    title={`Remover usuário ${users[key].name}`} 
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'
                                >
                                    <i 
                                        data-route={`/admin/users/delete/${users[key].id}`} 
                                        data-message={`Esta ação irá remover o usuário "${users[key].name}"!`} 
                                        className='bi bi-trash-fill' 
                                    />
                                </button>
                            </td>
                            <th className='col'>
                                <input 
                                    data-route={`/admin/users/delete/${users[key].id}`} 
                                    data-message={`Esta ação irá remover todos os usuários selecionados!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalDelete />
        </section>
    );
}
