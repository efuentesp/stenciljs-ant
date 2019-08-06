import { Validator } from '../validator';

export const emailValidator: Validator<string> = {
    validate: (value: string) => {
        return value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false;
    },
    errorMessage: 'You must enter a valid email.'
}


