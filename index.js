const axios = require('axios');

class banner {

    constructor(token) {
        if (!token)
            throw new Error('Token is required')
        this.token = token;
    }

    async get(userID, { size = 4096 }) {
        try {
            if (!size)
                size = 4096
            if (!parseInt(size))
                throw new Error('Size must be an integer')
            if (!userID)
                throw new Error('UserID is required')

            const url = `https://discord.com/api/v8/users/${userID}`;
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bot ${this.token}`
                }
            });
            if (response.status != 200)
                throw new Error(`${response.status} ${response.statusText}`)

            let banner = response.data.user.banner;
            if (banner) {
                banner = banner + `?size=${size}`;
            }
            return { sucess: true, user: response.data, banner: banner };
        } catch (error) {
            return { sucess: false, error: error.message, user: null, banner: null };
        }
    }
}

module.exports = banner;