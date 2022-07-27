export default function handler(req, res) {
    if(req.method === "GET"){
            return res
                .status(200)
                .json({ 
                    notifications: {
                        0: {
                            id: 0,
                            name: 'Notificação 1',
                            notification: 'Atualização do menu',
                            status: true
                        },
                        1: {
                            id: 1,
                            name: 'Notificação 2',
                            notification: 'Atualização de políticas e privacidade',
                            status: true
                        },
                        2: {
                            id: 2,
                            name: 'Notificação 3',
                            notification: 'Atualização do logo',
                            status: false
                        }
                    }
                })
    }else{
        return res.status(200).json({ 
            message: 'Este endpoint aceita apenas método GET.'
        })
    }
}
