import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserSession = createParamDecorator((data, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
});
