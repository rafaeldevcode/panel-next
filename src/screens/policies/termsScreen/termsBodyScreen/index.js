import siteconfig from '../../../../../config/siteconfig.json';

export default function TermsBodyScreen(){
    return (
        <article className='p-5 m-3 bg-cm-grey shadow'>
            <div>
                <h4>1. Termos</h4>

                <p>Ao acessar ao site <b className='text-color-main'>{siteconfig.site.name}</b>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

                <h4>2. Uso de Licença</h4>

                <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site <b className='text-color-main'>{siteconfig.site.name}</b> , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>

                <ul className='cm-list-number'>
                    <li>modificar ou copiar os materiais; </li>
                    <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
                    <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site <b className='text-color-main'>{siteconfig.site.name}</b>; </li>
                    <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
                    <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>

                <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por <b className='text-color-main'>{siteconfig.site.name}</b> a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

                <h4>3. Isenção de responsabilidade</h4>

                <ul className='cm-list-number'>
                    <li>Os materiais no site da <b className='text-color-main'>{siteconfig.site.name}</b> são fornecidos 'como estão'. <b className='text-color-main'>{siteconfig.site.name}</b> não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                    <li>Além disso, o <b className='text-color-main'>{siteconfig.site.name}</b> não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                </ul>

                <h4>4. Limitações</h4>

                <p>Em nenhum caso o <b className='text-color-main'>{siteconfig.site.name}</b> ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em <b className='text-color-main'>{siteconfig.site.name}</b>, mesmo que <b className='text-color-main'>{siteconfig.site.name}</b> ou um representante autorizado da <b className='text-color-main'>{siteconfig.site.name}</b> tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>

                <h4>5. Precisão dos materiais</h4>

                <p>Os materiais exibidos no site da <b className='text-color-main'>{siteconfig.site.name}</b> podem incluir erros técnicos, tipográficos ou fotográficos. <b className='text-color-main'>{siteconfig.site.name}</b> não garante que qualquer material em seu site seja preciso, completo ou atual. <b className='text-color-main'>{siteconfig.site.name}</b> pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, <b className='text-color-main'>{siteconfig.site.name}</b> não se compromete a atualizar os materiais.</p>

                <h4>6. Links</h4>

                <p>O <b className='text-color-main'>{siteconfig.site.name}</b> não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por <b className='text-color-main'>{siteconfig.site.name}</b> do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                <h5>Modificações</h5>

                <p>O <b className='text-color-main'>{siteconfig.site.name}</b> pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

                <h5>Lei aplicável</h5>

                <p>Estes termos e condições são regidos e interpretados de acordo com as leis do <b className='text-color-main'>{siteconfig.site.name}</b> e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
            </div>
        </article>
    )
}
