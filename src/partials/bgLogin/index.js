import siteconfig from '../../../config/siteconfig.json';

export default function BgLogin(){
    return (
        <div className='col-7 position-relative section-image-login'>
            <div className='position-absolute top-0 start-0 image-bg-login' style={{
                backgroundImage: `url('${siteconfig.site.login_bg.src}')`
            }} />

            <div className='position-absolute bottom-0 start-0 m-2 d-flex flex-nowrap text-cm-dark'>
                <div className='me-3'>
                    <i className='bi bi-gear-fill display-3' />
                </div>

                <div>
                    <h1 className='m-0 fs-2'>{siteconfig.site.name}</h1>
                    <p className='m-0 fs-4'>{siteconfig.site.description}</p>
                </div>
            </div>
        </div>
    )
}
