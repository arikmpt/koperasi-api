import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function IsRequiredString(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isRequiredString',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return typeof value === 'string' && value.trim().length > 0;
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} is required`;
                },
            },
        });
    };
}

export function IsRequiredNumber(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsRequiredNumber',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return (
                        typeof value === 'number' &&
                        typeof value !== 'undefined'
                    );
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} is required`;
                },
            },
        });
    };
}
