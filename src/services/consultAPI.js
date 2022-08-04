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

export async function getAllPermissions(){
    const permissions = await fetch('http://localhost:3000/api/permissions/list')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

        return permissions;
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
