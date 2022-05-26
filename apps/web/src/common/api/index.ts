export * from './client';
export * from './interceptors';
export * from './response-error';

import * as auth from './modules/auth';
import * as account from './modules/account';

export const api = {
    auth,
    account,
};
