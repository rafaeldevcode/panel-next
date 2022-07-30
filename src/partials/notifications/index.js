import { oppenNotifications } from "../../services/oppenNotifications";

export default function Notifications({ notifications }){
    return (
        <div id="notifications" className='position-fixed bottom-0 end-0 notification border border-cm-primary bg-cm-light p-2 rounded w-100'>
            <button title="Abrir notificações" onClick={oppenNotifications} className='border border-cm-secondary border-start border-top border-end notification-btn position-absolute bg-cm-primary end-0 rounded-top p-1 d-flex justify-content-center align-items-center'>
                <i className='bi bi-bell-fill fs-4 text-cm-light'>
                    <i className='bi bi-circle-fill text-cm-danger position-absolute top-0 end-0 mt-1 me-1' />
                </i>
            </button>

            <div>
                {Object.keys(notifications).map((key) => (
                    <div className='border border-cm-primary shadow rounded w-100 p-2 position-relative mb-2' key={notifications[key].id}>
                        {notifications[key].status && <i className='bi bi-circle-fill text-cm-danger position-absolute top-0 end-0 me-1' />}
                        
                        <p>{notifications[key].name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
