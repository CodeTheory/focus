'use strict';

const {is} = require('electron-util');
const Sentry = require('@sentry/electron');
const settings = require('../common/settings');

const SENTRY_PUBLIC_DSN = 'https://2dffdbd619f34418817f4db3309299ce@sentry.io/255536';

const isSentryEnabled = !is.development && settings.get('allowAnalytics');

if (isSentryEnabled) {
  Sentry.init({dsn: SENTRY_PUBLIC_DSN});
}

module.exports = Sentry;
module.exports.isSentryEnabled = isSentryEnabled;
