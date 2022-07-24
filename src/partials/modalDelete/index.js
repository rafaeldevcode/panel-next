export default function ModalDelete(){
    return (
        <div className='modal fade' id='modalDeleteItem' tabIndex='-1' aria-labelledby='modalDeleteItemLabel' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content border border-danger'>
                    <div className='modal-header bg-danger'>
                        <h5 className='modal-title text-cm-light' id='modalDeleteItemLabel'></h5>

                        <button title='Fechar modal' type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Fechar' />
                    </div>

                    <div className='modal-body p-4'>
                        <p className='modal-title text-center mb-4 fs-5'>Tem certeza que deseja continuar?</p>

                        <div className='d-flex flex-nowrap justify-content-center align-items-center'>
                            <button title='Fechar modal' type='button' className='btn btn-secondary me-2' data-bs-dismiss='modal'>Fechar</button>
                            <button title='Remover usuário' type='button' className='btn btn-danger ms-2'>Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
