import { Validator } from '../validator';

export function lengthValidator(min: number, max: number ): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            } 
            return true;
        },
        errorMessage:
            min && max ? `You must enter between ${min} and ${max} characters.`
            : min ? `You must enter at least ${min} characters.`
            : max ? `You must enter less than ${max} characters.` : ''
    };
}

/*
export function lengthValidator2(params :ILengthValidator ): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (params.min && params.max) {
                return params.min <= value.length && value.length <= max;
            }
            if (params.min) {
                return params.min <= value.length;
            }
            if (params.max) {
                return value.length <= params.max;
            } 
            return true;
        },
        errorMessage:
        params.min && params.max ? `You must enter between ${params.min} and ${params.max} characters.`
            : params.min ? `You must enter at least ${params.min} characters.`
            : params.max ? `You must enter less than ${params.max} characters.` : ''
    };
}


interface IMessage{
    type:"min-val" | "max-val" | "required",
    message:string
}

interface ILengthValidator {
    min?    : number,
    max?    : number,
    message?: IMessage[] 
}

const msg: IMessage= {type:"required",message:"el campo es requerido"}

console.log(msg)
// Riot "Conectividad"
// Alert del valor ingresado desde riot
// Requerido
// Mensajes customizables
// Refactoring
*/
