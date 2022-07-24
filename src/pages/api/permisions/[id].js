export default function handler(req, res) {
    if(req.method === "GET"){
            return res
                .status(200)
                .json({ 
                    permisions: {
                        0: {
                            id: 0,
                            name: 'Admin',
                            permision: 'admin',
                        },
                        1: {
                            id: 1,
                            name: 'Editor',
                            permision: 'editor',
                        },
                        2: {
                            id: 2,
                            name: 'User',
                            permision: 'user',
                        }
                    }
                })
    }else{
        return res.status(200).json({ 
            message: 'Este endpoint aceita apenas método GET.'
        })
    }
}
