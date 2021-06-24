import axios from 'axios';

const getValidUsers = () => {
    return new Promise((resolve, reject) => {
        const authURL = 'data.json';
        axios.get(authURL)
            .then(res => {
                resolve({ users: res.data.users });
            })
            .catch(err => reject(err));
    })
}

export default getValidUsers