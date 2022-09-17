import InputButton from "../../../../partials/form/inputButton";
import InputFileImege from "../../../../partials/form/inputFileImage";
import InputText from "../../../../partials/form/inputText";
import siteconfig from '../../../../../config/siteconfig.json';

export default function SettingsBodyScreen(){
    return (
        <section className='p-3 p-sm-5 bg-cm-grey m-3 rounded shadow'>
            <form>
                <div className='row d-flex justify-content-between'>
                    <div className='col-12 col-md-6'>
                        <InputText label='Nome do site' name='site_name' icon='bi-globe2' required />
                    </div>

                    <div className='col-12 col-md-6'>
                        <InputText label='Descrição do site' name='site_description' icon='bi-globe2' required />
                    </div>

                    <div className='col-12 d-flex flex-wrap'>
                        <InputFileImege 
                            label='Logo principal do site' 
                            icon='bi bi-card-image' 
                            src={siteconfig.site.logo.logo.src} 
                            width={siteconfig.site.logo.logo.width}
                            height={siteconfig.site.logo.logo.height}
                            name='site_logo' 
                        />

                        <InputFileImege 
                            label='Logo do cabeçalho site' 
                            icon='bi bi-card-image'
                            src={siteconfig.site.logo["logo-white"].src} 
                            width={siteconfig.site.logo["logo-white"].width}
                            height={siteconfig.site.logo["logo-white"].height}
                            name='site_logo_header' 
                        />

                        <InputFileImege 
                            label='Favicon do site' 
                            icon='bi bi-card-image' 
                            src={siteconfig.site.favicon.src} 
                            width={80}
                            height={80}
                            name='site_favicon' 
                        />

                        <InputFileImege 
                            label='Fundo da tela de login' 
                            icon='bi bi-card-image' 
                            src={siteconfig.site.login_bg.src} 
                            width={siteconfig.site.login_bg.width}
                            height={siteconfig.site.login_bg.height}
                            name='site_bg_login' 
                        />
                    </div>
                </div>

                <div className='row d-flex justify-content-end'>
                    <div className='col-12 col-md-3'>
                        <InputButton type='submit' title='Salvar configurações' value='Salvar' style='color-main' />
                    </div>
                </div>
            </form>
        </section>
    )
}
