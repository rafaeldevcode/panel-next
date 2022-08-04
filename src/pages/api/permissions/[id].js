export default function handler(req, res) {
    if(req.method === "GET"){
            return res
                .status(200)
                .json({ 
                    permissions: {
                        0: {
                            id: 0,
                            name: 'Admin',
                            permission: 'admin',
                        },
                        1: {
                            id: 1,
                            name: 'Editor',
                            permission: 'editor',
                        },
                        2: {
                            id: 2,
                            name: 'User',
                            permission: 'user',
                        }
                    }
                })
    }else{
        return res.status(200).json({ 
            message: 'Este endpoint aceita apenas método GET.'
        })
    }
}
