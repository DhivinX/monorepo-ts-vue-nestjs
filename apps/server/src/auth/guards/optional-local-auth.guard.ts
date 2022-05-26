import { AuthGuard } from '@nestjs/passport';

export class OptionalLocalAuthGuard extends AuthGuard('local') {
    handleRequest(err, user) {
        return user;
    }
}
