export const usersAPI = {
    getUsers: () => {
        return fetch('https://randomuser.me/api/?results=10')
            .then(res => {
                return res.json()
            })
    }
}

export const authAPI = {

    authorization: async (data) => {
        localStorage.setItem('TOT-chat-auth', JSON.stringify(data));
        return data;
    },

    getAuthorization: async () => {
        const res = await localStorage.getItem('TOT-chat-auth');
        if (res === null) {
            return false
        }
        return { res, auth: true };
    }

}
