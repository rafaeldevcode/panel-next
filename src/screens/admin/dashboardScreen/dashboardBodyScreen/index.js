import Link from "next/link";
import CardDashboard from "../../../../partials/cardDashboard";

export default function DashboardBodyScreen({ menus }){
    // console.log(menus)
    const cards = Object.keys(menus).map((key) => {
        if(menus[key].view_dashboard == true){
            return (
                <CardDashboard key={key} name={menus[key].name} icon={menus[key].icon} slug={menus[key].slug} />
            )
        }
    });

    return (
        <section className='p-3 p-md-5 bg-cm-grey m-3 rounded shadow'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {cards}
            </div>
        </section>
    )
}
