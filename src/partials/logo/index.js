import Image from "next/image";
import siteconfig from '../../../config/siteconfig.json';

export default function Logo({ image }){
    return (
        <Image 
            src={siteconfig.site.logo[image].src} 
            alt={siteconfig.site.description}
            width={siteconfig.site.logo[image].width}
            height={siteconfig.site.logo[image].height}
            layout='responsive'
            placeholder='blur'
            blurDataURL='/assets/images/default.png'
        />
    )
}
