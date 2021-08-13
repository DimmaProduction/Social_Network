export const required = (value) => {
    if (value) return undefined;
    else return "Field must be required!";
}

export const maxLengthValid = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Message is too long !! Maximum length ${maxLength}`;
    else return undefined;
}