import Image from "next/image";
import siteconfig from '../../../config/siteconfig.json';

export default function Logo(){
    return (
        <Image 
            src={siteconfig.site.logo.src} 
            alt={siteconfig.site.description}
            width={500}
            height={84}
            layout='responsive'
            placeholder='blur'
            blurDataURL='/assets/images/default.png'
        />
    )
}
