import Link from "next/link";
import ModalDelete from '../../../../partials/modalDelete';
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';

export default function MenusBodyScreen({ menus }){
    return (
        <section className='p-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th className='col'>Ícone</th>
                        <th className='col'>Nome</th>
                        <th className='col'>Slug</th>
                        <th className='col'>Posição</th>
                        <th className='col'>Ações</th>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(menus).map((key) => (
                        <tr key={menus[key].id}>
                            <td><i className={menus[key].icon}/></td>
                            <td>{menus[key].name}</td>
                            <td>{menus[key].slug}</td>
                            <td>{menus[key].position}</td>
                            <td>
                                <Link href={`/admin/menus/${menus[key].id}`} passHref>
                                    <a title={`Editar item ${menus[key].name} do menu`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold me-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/menus/delete/${menus[key].id}`} 
                                    data-message={`Esta ação irá remover o item "${menus[key].name} do menu"!`}
                                    type='button' 
                                    title={`Remover item ${menus[key].name} do menu`}
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold ms-1'
                                >
                                    <i 
                                        data-route={`/admin/menus/delete/${menus[key].id}`} 
                                        data-message={`Esta ação irá remover o item "${menus[key].name}" do menu!`} 
                                        className='bi bi-trash-fill' 
                                    />
                                </button>
                            </td>
                            <th className='col'>
                                <input 
                                    data-route={`/admin/menus/delete/${menus[key].id}`} 
                                    data-message={`Esta ação irá remover todos os items selecionados!`} 
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