export default function handler(req, res) {
    res
        .status(200)
        .json({ 
            users: {
                0: {
                    name: 'Admin',
                    email: 'admin@admin.com',
                    password: 'admin',
                    dateOfBirth: '1998/01/16',
                    photo: '/assets/images/users/iron_man.png',
                    permissions: 'admin'
                }
            }
        })
  }
