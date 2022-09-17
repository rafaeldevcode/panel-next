export default function InputSearch({ ...props }){
    return (
        <form action='?' method='POST' className='input-group me-2 mb-2 mb-sm-0'>
            <input type='search' className='form-control' name='search' placeholder='Pesquisar...' />
            <button type='submit' className='input-group-text bg-color-main text-light' id='search'>
                <i className='bi bi-search' />
            </button>
        </form>
    )
}
