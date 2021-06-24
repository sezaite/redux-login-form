export const isValidPassword = input => {
    const passRgx = new RegExp(".{3,}"); //at least three characters(any)
    return passRgx.test(input);
}
