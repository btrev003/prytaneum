//
// ─── UTILITY FUNCTIONS ──────────────────────────────────────────────────────────
//

const isString = (value: unknown): value is string => typeof value === 'string';
// const isSecret = (value: string) => value === 'secret';
const isNumber = (value: unknown): value is number => !Number.isNaN(Number(value));

//
// ─── ISVALID FUNCTIONS FOR REACH ENV VARIABLE ───────────────────────────────────
//

const isValidNodeEnv =
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'staging' ||
    process.env.NODE_ENV === 'test';

const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';

const isSecret = (value: string) => value === 'secret';

const isValidCookieSecret = isProduction
    ? isString(process.env.COOKIE_SECRET) && !isSecret(process.env.COOKIE_SECRET)
    : isString(process.env.COOKIE_SECRET);

const isValidJwtSecret = isProduction
    ? isString(process.env.JWT_SECRET) && !isSecret(process.env.JWT_SECRET)
    : isString(process.env.JWT_SECRET);

// Any number is a valid port.
const isValidPort = isNumber(process.env.PORT);

const isValidHost =
    isString(process.env.HOST) &&
    // These values may change in the future
    (process.env.HOST === '0.0.0.0' || process.env.HOST === '127.0.0.1' || process.env.HOST === 'localhost');

const isValidOrigin = isString(process.env.ORIGIN);

const isValidRedisHost = isString(process.env.REDIS_HOST);

const isValidRedisPort = isNumber(process.env.REDIS_PORT);

const isValidRedisUsername = isString(process.env.REDIS_USERNAME);

const isValidRedisPassword = isString(process.env.REDIS_PASSWORD);

const isValidRedisUrl = isString(process.env.REDIS_URL);

const isValidGCPIssueGuidesBucket = isString(process.env.GCLOUD_ISSUE_GUIDES_STORAGE_BUCKET);

// This only needs to be defined in production.
const isValidGcpProjectId = isProduction || isStaging ? isString(process.env.GCP_PROJECT_ID) : true;

const isValidModerationUrl = isString(process.env.MODERATION_URL);

const isValidGCPProjectId = isString(process.env.GCP_PROJECT_ID);

const isValidGoogleClientId = isString(process.env.GOOGLE_CLIENT_ID);

const isValidGoogleClientSecret = isString(process.env.GOOGLE_CLIENT_SECRET);

const isValidGoogleRedirectUri = isString(process.env.GOOGLE_REDIRECT_URI);

export function checkEnv() {
    if (!isValidNodeEnv) throw new Error('NODE_ENV is not a valid value');
    if (!isValidCookieSecret) throw new Error('COOKIE_SECRET is not valid');
    if (!isValidJwtSecret) throw new Error('JWT_SECRET is not valid');
    if (!isValidPort) throw new Error('PORT is not valid');
    if (!isValidHost) throw new Error('HOST is not valid');
    if (!isValidOrigin) throw new Error('ORIGIN is not valid');
    if (!isValidGcpProjectId) throw new Error('GCP_PROJECT_ID is not valid');
    if (!isValidRedisHost) throw new Error('REDIS_HOST is not valid');
    if (!isValidRedisPort) throw new Error('REDIS_PORT is not valid');
    if (!isValidRedisUsername) throw new Error('REDIS_USERNAME is not valid');
    if (!isValidRedisPassword) throw new Error('REDIS_PASSWORD is not valid');
    if (!isValidRedisUrl) throw new Error('REDIS_URL is not valid');
    if (!isValidGCPIssueGuidesBucket) throw new Error('GCLOUD_ISSUE_GUIDES_STORAGE_BUCKET is not valid');
    if (!isValidModerationUrl) throw new Error('MODERATION_URL is not valid');
    if (!isValidGCPProjectId) throw new Error('GCP_PROJECT_ID is not valid');
    if (!isValidGoogleClientId) throw new Error('GOOGLE_CLIENT_ID is not valid');
    if (!isValidGoogleClientSecret) throw new Error('GOOGLE_CLIENT_SECRET is not valid');
    if (!isValidGoogleRedirectUri) throw new Error('GOOGLE_REDIRECT_URI is not valid');
}
