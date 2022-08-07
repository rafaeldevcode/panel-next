import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ModalDelete from "../../../../partials/modalDelete";
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';
import { hiddenItems } from "../../../../services/hiddenItems";
import TableFooter from '../../../../partials/tableFooter';

export default function BrowseBodyScreen({ users }){
    useEffect(()=>{
        hiddenItems(['td[data-col="email"]', 'th[data-row="email"]'], 576);
    }, []);

    return (
        <section className='p-3 p-sm-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover mb-0'>
                <thead>
                    <tr>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                        <th className='col'>Thumb</th>
                        <th className='col'>Nome</th>
                        <th className='col' data-row='email'>Email</th>
                        <th className='col'>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(users).map((key) => (
                        <tr key={users[key].id}>
                            <td className='col'>
                                <input 
                                    data-route={`/admin/users/delete/${users[key].id}`} 
                                    data-message={`Esta ação irá remover todos os usuários selecionados!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </td>
                            <th scope="row">
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
                            <td data-col='email'>{users[key].email}</td>
                            <td>
                                <Link href={`/admin/users/${users[key].id}`} passHref>
                                    <a title={`Editar usuário ${users[key].name}`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold m-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/users/delete/${users[key].id}`} 
                                    data-message={`Esta ação irá remover o usuário "${users[key].name}"!`}
                                    type='button' 
                                    title={`Remover usuário ${users[key].name}`} 
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold m-1'
                                >
                                    <i 
                                        data-route={`/admin/users/delete/${users[key].id}`} 
                                        data-message={`Esta ação irá remover o usuário "${users[key].name}"!`} 
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
