export default function handler(req, res) {

    if(req.method === "GET"){
        return res.status(200).json({ 
                users: {
                    0: {
                        id: 0,
                        name: 'Admin',
                        email: 'admin@admin.com',
                        password: 'admin',
                        dateOfBirth: '1998/01/16',
                        photo: '/assets/images/users/iron_man.png',
                        permissions: 'admin'
                    },
                    1: {
                        id: 1,
                        name: 'Admin',
                        email: 'admin@admin.com',
                        password: 'admin',
                        dateOfBirth: '1998/01/16',
                        photo: '/assets/images/users/iron_man.png',
                        permissions: 'admin'
                    },
                    2: {
                        id: 2,
                        name: 'Admin',
                        email: 'admin@admin.com',
                        password: 'admin',
                        dateOfBirth: '1998/01/16',
                        photo: '/assets/images/users/iron_man.png',
                        permissions: 'admin'
                    },
                    3: {
                        id: 3,
                        name: 'Admin',
                        email: 'admin@admin.com',
                        password: 'admin',
                        dateOfBirth: '1998/01/16',
                        photo: '/assets/images/users/iron_man.png',
                        permissions: 'admin'
                    }
                }
            })
    }else{
        return res.status(200).json({ 
            message: 'Este endpoint aceita apenas método GET.'
        })
    }
}
