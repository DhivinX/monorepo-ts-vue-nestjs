import { UserProfileResponse } from '../users/user-profile.response';

export interface AuthLoginResponse {
    expirationTime: number;
    account: UserProfileResponse;
}
