import imagesprofile from '../../../../../config/imagesprofile.json';
import Image from 'next/image';
import InputButton from '../../../../partials/form/inputButton';

export default function ModalImagesProfile(){
    const images = imagesprofile.profile;
    
    return (
        <div className='modal fade' id='imagesProfile' tabIndex='-1' aria-labelledby='imagesProfileLabel' aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content border border-cm-primary'>
                    <form>
                        <div className='modal-header bg-cm-primary'>
                            <h5 className='modal-title text-cm-light' id='imagesProfileLabel'>Escolha uma imagem</h5>
                            <button title='Fechar modal' type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Fechar' />
                        </div>

                        <div className='modal-body'>
                            <div className='d-flex flex-wrap justify-content-evenly m-0'>
                                {Object.keys(images).map((key)=>(
                                    <div className='m-2' key={key}>
                                        <input className='d-none' type='radio' name='imageProfile' id={key} />
                                        <label className='form-check-label rounded-circle label-image-profile' htmlFor={key}>
                                            <Image
                                                className='rounded-circle'
                                                src={`/assets/images/users/${images[key].src}`}
                                                alt={images[key].alt}
                                                width={images[key].width}
                                                height={images[key].height}
                                                layout='responsive'
                                                placeholder='blur'
                                                blurDataURL='/assets/images/default.png'
                                            />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="modal-footer p-2">
                            <InputButton type='submit' title='Salvar configurações' value='Salvar' style='cm-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
