import { bool, object, SchemaOf, string } from 'yup';
import { setLocale } from 'yup';
import { UseSchema, yupLocale } from '@monorepo-ts-vue-nestjs/utils';

setLocale(yupLocale);

export const authLoginSchema: SchemaOf<AuthLoginDto> = object().shape({
    email: string().required().email(),
    password: string().required().min(6),
    remember: bool(),
});

@UseSchema(authLoginSchema)
export class AuthLoginDto {
    email: string;
    password: string;
    remember: boolean;
}
