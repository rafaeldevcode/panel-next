import Link from "next/link";
import { useEffect } from "react";
import ModalDelete from '../../../../partials/modalDelete';
import { selectSeveral, disableEnableBtn, deleteItem } from '../../../../services/deleteItems';
import { hiddenItems } from "../../../../services/hiddenItems";
import TableFooter from '../../../../partials/tableFooter';

export default function BrowseBodyScreen({ menus }){
    useEffect(()=>{
        hiddenItems([
            'td[data-col="slug"]', 
            'td[data-col="position"]', 
            'th[data-col="slug"]', 
            'th[data-col="position"]'
        ], 700);
    }, []);

    return (
        <section className='p-3 p-sm-5 bg-cm-grey m-3 rounded shadow'>
            <table className='table table-hover mb-0'>
                <thead>
                    <tr>
                        <th className='col'>
                            <input type='checkbox' onClick={selectSeveral} />
                        </th>
                        <th className='col'>Ícone</th>
                        <th className='col'>Nome</th>
                        <th className='col' data-col='slug'>Slug</th>
                        <th className='col' data-col='position'>Posição</th>
                        <th className='col'>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(menus).map((key) => (
                        <tr key={menus[key].id}>
                            <td className='col'>
                                <input 
                                    data-route={`/admin/menus/delete/${menus[key].id}`} 
                                    data-message={`Esta ação irá remover todos os items selecionados!`} 
                                    type='checkbox' 
                                    name='selectSeveral[]' 
                                    onClick={disableEnableBtn} 
                                />
                            </td>
                            <td><i className={menus[key].icon}/></td>
                            <td>{menus[key].name}</td>
                            <td data-col='slug'>{menus[key].slug}</td>
                            <td data-col='position'>{menus[key].position}</td>
                            <td>
                                <Link href={`/admin/menus/${menus[key].id}`} passHref>
                                    <a title={`Editar item ${menus[key].name} do menu`} className='btn btn-sm btn-cm-primary text-cm-light fw-bold m-1'>
                                        <i className='bi bi-pencil-square' />
                                    </a>
                                </Link>

                                <button 
                                    onClick={deleteItem} 
                                    data-route={`/admin/menus/delete/${menus[key].id}`} 
                                    data-message={`Esta ação irá remover o item "${menus[key].name} do menu"!`}
                                    type='button' 
                                    title={`Remover item ${menus[key].name} do menu`}
                                    className='btn btn-sm btn-cm-danger text-cm-light fw-bold m-1'
                                >
                                    <i 
                                        data-route={`/admin/menus/delete/${menus[key].id}`} 
                                        data-message={`Esta ação irá remover o item "${menus[key].name}" do menu!`} 
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
