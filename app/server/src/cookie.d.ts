// Temporary fix for @fastify/cookie type definitions not working properly
// Copied from https://github.com/fastify/fastify-cookie/blob/37bd8409c0d99ee9558f7f485edc56b5bcd1d696/types/plugin.d.ts#L79
import { FastifyPluginCallback } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance extends SignerMethods {
        /**
         * Manual cookie parsing method
         * @docs https://github.com/fastify/fastify-cookie#manual-cookie-parsing
         * @param cookieHeader Raw cookie header value
         */
        parseCookie(cookieHeader: string): {
            [key: string]: string;
        };
    }

    interface FastifyRequest extends SignerMethods {
        /**
         * Request cookies
         */
        cookies: { [cookieName: string]: string | undefined };
    }

    interface FastifyReply extends SignerMethods {
        /**
         * Request cookies
         */
        cookies: { [cookieName: string]: string | undefined };
    }

    interface SignerMethods {
        /**
         * Signs the specified cookie using the secret/signer provided.
         * @param value cookie value
         */
        signCookie(value: string): string;

        /**
         * Unsigns the specified cookie using the secret/signer provided.
         * @param value Cookie value
         */
        unsignCookie(value: string): fastifyCookie.UnsignResult;
    }

    export type setCookieWrapper = (
        name: string,
        value: string,
        options?: fastifyCookie.CookieSerializeOptions
    ) => FastifyReply;

    interface FastifyReply {
        /**
         * Set response cookie
         * @name setCookie
         * @param name Cookie name
         * @param value Cookie value
         * @param options Serialize options
         */
        setCookie(name: string, value: string, options?: fastifyCookie.CookieSerializeOptions): this;

        /**
         * @alias setCookie
         */
        cookie(name: string, value: string, options?: fastifyCookie.CookieSerializeOptions): this;

        /**
         * clear response cookie
         * @param name Cookie name
         * @param options Serialize options
         */
        clearCookie(name: string, options?: fastifyCookie.CookieSerializeOptions): this;

        /**
         * Unsigns the specified cookie using the secret provided.
         * @param value Cookie value
         */
        unsignCookie(value: string): fastifyCookie.UnsignResult;
    }
}

type FastifyCookiePlugin = FastifyPluginCallback<NonNullable<fastifyCookie.FastifyCookieOptions>>;

declare namespace fastifyCookie {
    interface SignerBase {
        sign: (value: string) => string;
        unsign: (input: string) => UnsignResult;
    }

    export class Signer implements SignerBase {
        constructor(secrets: string | Array<string> | Buffer | Array<Buffer>, algorithm?: string);
        sign: (value: string) => string;

        unsign: (input: string) => UnsignResult;
    }

    export interface CookieSerializeOptions {
        /**  The `Domain` attribute. */
        domain?: string;
        encode?(val: string): string;
        /**  The expiration `date` used for the `Expires` attribute. If both `expires` and `maxAge` are set, then `expires` is used. */
        expires?: Date;
        /**  The `boolean` value of the `HttpOnly` attribute. Defaults to true. */
        httpOnly?: boolean;
        /**  A `number` in seconds that specifies the `Expires` attribute by adding the specified seconds to the current date. If both `expires` and `maxAge` are set, then `expires` is used. */
        maxAge?: number;
        /**  The `Path` attribute. Defaults to `/` (the root path).  */
        path?: string;
        priority?: 'low' | 'medium' | 'high';
        /** A `boolean` or one of the `SameSite` string attributes. E.g.: `lax`, `node` or `strict`.  */
        sameSite?: 'lax' | 'none' | 'strict' | boolean;
        /**  The `boolean` value of the `Secure` attribute. Set this option to false when communicating over an unencrypted (HTTP) connection. Value can be set to `auto`; in this case the `Secure` attribute will be set to false for HTTP request, in case of HTTPS it will be set to true.  Defaults to true. */
        secure?: boolean | 'auto';
        signed?: boolean;
    }

    type HookType = 'onRequest' | 'preParsing' | 'preValidation' | 'preHandler' | 'preSerialization';

    export interface FastifyCookieOptions {
        secret?: string | string[] | Buffer | Buffer[] | Signer;
        hook?: HookType | false;
        parseOptions?: fastifyCookie.CookieSerializeOptions;
    }

    export type Sign = (value: string, secret: string | Buffer, algorithm?: string) => string;
    export type Unsign = (input: string, secret: string | Buffer, algorithm?: string) => UnsignResult;
    export type SignerFactory = (secrets: string | string[] | Buffer | Buffer[], algorithm?: string) => SignerBase;

    export interface UnsignResult {
        valid: boolean;
        renew: boolean;
        value: string | null;
    }

    export const signerFactory: SignerFactory;
    export const sign: Sign;
    export const unsign: Unsign;

    export interface FastifyCookie extends FastifyCookiePlugin {
        signerFactory: SignerFactory;
        Signer: Signer;
        sign: Sign;
        unsign: Unsign;
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow
    export const fastifyCookie: FastifyCookie;

    export interface FastifyCookieOptions {
        secret?: string | string[] | Buffer | Buffer[] | SignerBase;
        algorithm?: string;
        parseOptions?: CookieSerializeOptions;
    }

    export { fastifyCookie as default };
}

declare function fastifyCookie(...params: Parameters<FastifyCookiePlugin>): ReturnType<FastifyCookiePlugin>;

export = fastifyCookie;
