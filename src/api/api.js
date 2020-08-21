export const usersAPI = {
    getUsers: () => {
        return fetch('https://randomuser.me/api/?results=10')
            .then(res => {
                return res.json()
            })
    }
}