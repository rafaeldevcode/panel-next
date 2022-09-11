import Link from "next/link";

export default function CardDashboard({ name, slug, icon }){
    return (
        <Link href={slug} passHref>
            <a className='bg-cm-primary border border-cm-primary p-2 rounded text-decoration-none card-dashboard m-2 text-center text-cm-light'>
                <div>
                    <p className='m-0 p-0 text-start'>
                        <i className={icon} />
                    </p>

                    <div className='px-3'>
                        <h2 className='mb-0 fs-3'>{name}</h2>
                        <p className='fs-4 fw-bold mt-2 mb-0'>10</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
