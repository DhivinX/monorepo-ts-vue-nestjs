import { object, SchemaOf, setLocale, string } from 'yup';
import { UseSchema, yupLocale } from '@monorepo-ts-vue-nestjs/utils';

setLocale(yupLocale);

export const userCreateSchema: SchemaOf<UserCreateDto> = object().shape({
    email: string().required().email(),
    password: string().required().min(6),
    firstName: string().required(),
    lastName: string().required(),
});

@UseSchema(userCreateSchema)
export class UserCreateDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
