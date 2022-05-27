import { User } from '@/db/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator((data, context: ExecutionContext): User => {
    return context.switchToHttp().getRequest().user.userSession.user;
});
