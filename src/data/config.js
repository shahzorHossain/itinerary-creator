import Raven from 'raven-js';

const sentry_key = 'fcf9714b430e4f268e5d15ded866af3a';
const sentry_app = '1478805';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  window && window.console && console.error && console.error(ex);
}
