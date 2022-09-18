export default function Message({ text, type }, ...props){
    return (
        <div {...props} className={`position-fixed end-0 top-0 m-2 p-2 border border-cm-${type} border-2 rounded shadow`}>
            <p className={`m-0 text-cm-${type}`}>{text}</p>
        </div>
    )
}
