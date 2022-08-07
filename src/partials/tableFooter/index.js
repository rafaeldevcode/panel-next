export default function TableFooter(){
    return (
        <section className='w-100 border-top border-2 border-dark'>
            <div className='pt-2 d-flex justify-content-between'>
                <button className='btn btn-sm btn-cm-secondary'>
                    <i className='bi bi-arrow-left-short' />
                    Anterior
                </button>

                <div className='d-flex'>
                    <div className='px-2 me-1 border-top border-2 border-cm-primary'>
                        1
                    </div>
                    <div className='border-top border-2 border-cm-grey'>de 1 páginas</div>
                </div>

                <button className='btn btn-sm btn-cm-secondary'>
                    Próximo
                    <i className='bi bi-arrow-right-short' />
                </button>
            </div>
        </section>
    )
}
