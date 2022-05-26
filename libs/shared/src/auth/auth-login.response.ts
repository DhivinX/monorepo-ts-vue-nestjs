import { AccountResponse } from '../account/account.response';

export interface AuthLoginResponse {
    expirationTime: number;
    account: AccountResponse;
}
