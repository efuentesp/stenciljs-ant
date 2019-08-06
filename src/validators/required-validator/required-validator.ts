import { Validator } from '../validator';

export function requiredValidator(required: string): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            
            if (required) {
                return (! value && required.toLowerCase() == 'true');
            }
            
            return true;
        },
        errorMessage: "algo"
           /* min && max ? `You must enter between ${min} and ${max} characters.`
            : min ? `You must enter at least ${min} characters.`
            : max ? `You must enter less than ${max} characters.` : ''*/
    };
}