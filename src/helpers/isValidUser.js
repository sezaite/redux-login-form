import getValidUsers from '../helpers/getValidUsers';

const isValidUser = async (details) => {
    const validUsers = await getValidUsers();
    const doesMatch = validUsers.users.filter(user => user.username === details.username && user.password === details.password);
    return doesMatch.length > 0;
}

export default isValidUser
