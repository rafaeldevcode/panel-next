export default function handler(req, res) {

    if(req.method === "GET"){
        return res.status(200).json({ 
                users: {
                    0: {
                        id: 0,
                        name: 'Admin',
                        email: 'admin@admin.com',
                        phone: '(41) 9 9149-8092',
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
