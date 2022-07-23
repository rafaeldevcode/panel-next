export default function handler(req, res) {
    if(req.method === "GET"){
            return res
                .status(200)
                .json({ 
                    menus: {
                        0: {
                            id: 0,
                            name: 'Dashboard',
                            slug: '/admin/dashboard',
                            icon: 'bi bi-speedometer',
                            position: 1
                        },
                        1: {
                            id: 1,
                            name: "Usuários",
                            slug: "/admin/users",
                            icon: "bi bi-people-fill",
                            position: 2
                        },
                        2: {
                            id: 2,
                            name: "Permissões",
                            slug: "/admin/permissions",
                            icon: "bi bi-file-earmark-lock-fill",
                            position: 3
                        },
                        3: {
                            id: 3,
                            name: "Menus",
                            slug: "/admin/menus",
                            icon: "bi bi-menu-button-wide-fill",
                            position: 4
                        },
                        4: {
                            id: 4,
                            name: "Notificações",
                            slug: "/admin/notifications",
                            icon: "bi bi-bell-fill",
                            position: 5
                        },
                        5: {
                            id: 5,
                            name: "Configurações",
                            slug: "/admin/settings",
                            icon: "bi bi-gear-fill",
                            position: 6
                        }
                    }
                })
    }else{
        return res.status(200).json({ 
            message: 'Este endpoint aceita apenas método GET.'
        })
    }
}
