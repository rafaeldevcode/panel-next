export async function getAllUsers(){
    const users = await fetch('http://localhost:3000/api/users/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

    return users;
}

export async function getAllPermisions(){
    const permisions = await fetch('http://localhost:3000/api/permisions/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

        return permisions;
}

export async function getAllMenus(){
    const menus = await fetch('http://localhost:3000/api/menus/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

        return menus;
}

export async function getAllNotifications(){
    const notifications = await fetch('http://localhost:3000/api/notifications/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

        return notifications;   
}
