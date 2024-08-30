
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model TimeBlock
 * 
 */
export type TimeBlock = $Result.DefaultSelection<Prisma.$TimeBlockPayload>
/**
 * Model ConsultationSession
 * 
 */
export type ConsultationSession = $Result.DefaultSelection<Prisma.$ConsultationSessionPayload>
/**
 * Model SessionsRound
 * 
 */
export type SessionsRound = $Result.DefaultSelection<Prisma.$SessionsRoundPayload>
/**
 * Model SessionDuration
 * 
 */
export type SessionDuration = $Result.DefaultSelection<Prisma.$SessionDurationPayload>
/**
 * Model ClientProgressAnxiety
 * 
 */
export type ClientProgressAnxiety = $Result.DefaultSelection<Prisma.$ClientProgressAnxietyPayload>
/**
 * Model ClientProgressDepression
 * 
 */
export type ClientProgressDepression = $Result.DefaultSelection<Prisma.$ClientProgressDepressionPayload>
/**
 * Model TelegramBotSession
 * 
 */
export type TelegramBotSession = $Result.DefaultSelection<Prisma.$TelegramBotSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.timeBlock`: Exposes CRUD operations for the **TimeBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeBlocks
    * const timeBlocks = await prisma.timeBlock.findMany()
    * ```
    */
  get timeBlock(): Prisma.TimeBlockDelegate<ExtArgs>;

  /**
   * `prisma.consultationSession`: Exposes CRUD operations for the **ConsultationSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationSessions
    * const consultationSessions = await prisma.consultationSession.findMany()
    * ```
    */
  get consultationSession(): Prisma.ConsultationSessionDelegate<ExtArgs>;

  /**
   * `prisma.sessionsRound`: Exposes CRUD operations for the **SessionsRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionsRounds
    * const sessionsRounds = await prisma.sessionsRound.findMany()
    * ```
    */
  get sessionsRound(): Prisma.SessionsRoundDelegate<ExtArgs>;

  /**
   * `prisma.sessionDuration`: Exposes CRUD operations for the **SessionDuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionDurations
    * const sessionDurations = await prisma.sessionDuration.findMany()
    * ```
    */
  get sessionDuration(): Prisma.SessionDurationDelegate<ExtArgs>;

  /**
   * `prisma.clientProgressAnxiety`: Exposes CRUD operations for the **ClientProgressAnxiety** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientProgressAnxieties
    * const clientProgressAnxieties = await prisma.clientProgressAnxiety.findMany()
    * ```
    */
  get clientProgressAnxiety(): Prisma.ClientProgressAnxietyDelegate<ExtArgs>;

  /**
   * `prisma.clientProgressDepression`: Exposes CRUD operations for the **ClientProgressDepression** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientProgressDepressions
    * const clientProgressDepressions = await prisma.clientProgressDepression.findMany()
    * ```
    */
  get clientProgressDepression(): Prisma.ClientProgressDepressionDelegate<ExtArgs>;

  /**
   * `prisma.telegramBotSession`: Exposes CRUD operations for the **TelegramBotSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramBotSessions
    * const telegramBotSessions = await prisma.telegramBotSession.findMany()
    * ```
    */
  get telegramBotSession(): Prisma.TelegramBotSessionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    TimeBlock: 'TimeBlock',
    ConsultationSession: 'ConsultationSession',
    SessionsRound: 'SessionsRound',
    SessionDuration: 'SessionDuration',
    ClientProgressAnxiety: 'ClientProgressAnxiety',
    ClientProgressDepression: 'ClientProgressDepression',
    TelegramBotSession: 'TelegramBotSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'client' | 'timeBlock' | 'consultationSession' | 'sessionsRound' | 'sessionDuration' | 'clientProgressAnxiety' | 'clientProgressDepression' | 'telegramBotSession'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      TimeBlock: {
        payload: Prisma.$TimeBlockPayload<ExtArgs>
        fields: Prisma.TimeBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeBlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeBlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findFirst: {
            args: Prisma.TimeBlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeBlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findMany: {
            args: Prisma.TimeBlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          create: {
            args: Prisma.TimeBlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          createMany: {
            args: Prisma.TimeBlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimeBlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          update: {
            args: Prisma.TimeBlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          deleteMany: {
            args: Prisma.TimeBlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimeBlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimeBlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          aggregate: {
            args: Prisma.TimeBlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimeBlock>
          }
          groupBy: {
            args: Prisma.TimeBlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimeBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeBlockCountArgs<ExtArgs>,
            result: $Utils.Optional<TimeBlockCountAggregateOutputType> | number
          }
        }
      }
      ConsultationSession: {
        payload: Prisma.$ConsultationSessionPayload<ExtArgs>
        fields: Prisma.ConsultationSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          findFirst: {
            args: Prisma.ConsultationSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          findMany: {
            args: Prisma.ConsultationSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>[]
          }
          create: {
            args: Prisma.ConsultationSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          createMany: {
            args: Prisma.ConsultationSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConsultationSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          update: {
            args: Prisma.ConsultationSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConsultationSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          aggregate: {
            args: Prisma.ConsultationSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConsultationSession>
          }
          groupBy: {
            args: Prisma.ConsultationSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConsultationSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<ConsultationSessionCountAggregateOutputType> | number
          }
        }
      }
      SessionsRound: {
        payload: Prisma.$SessionsRoundPayload<ExtArgs>
        fields: Prisma.SessionsRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsRoundFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsRoundFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          findFirst: {
            args: Prisma.SessionsRoundFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsRoundFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          findMany: {
            args: Prisma.SessionsRoundFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>[]
          }
          create: {
            args: Prisma.SessionsRoundCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          createMany: {
            args: Prisma.SessionsRoundCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionsRoundDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          update: {
            args: Prisma.SessionsRoundUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          deleteMany: {
            args: Prisma.SessionsRoundDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsRoundUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionsRoundUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionsRoundPayload>
          }
          aggregate: {
            args: Prisma.SessionsRoundAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSessionsRound>
          }
          groupBy: {
            args: Prisma.SessionsRoundGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionsRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsRoundCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionsRoundCountAggregateOutputType> | number
          }
        }
      }
      SessionDuration: {
        payload: Prisma.$SessionDurationPayload<ExtArgs>
        fields: Prisma.SessionDurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionDurationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionDurationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          findFirst: {
            args: Prisma.SessionDurationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionDurationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          findMany: {
            args: Prisma.SessionDurationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>[]
          }
          create: {
            args: Prisma.SessionDurationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          createMany: {
            args: Prisma.SessionDurationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDurationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          update: {
            args: Prisma.SessionDurationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          deleteMany: {
            args: Prisma.SessionDurationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionDurationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionDurationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionDurationPayload>
          }
          aggregate: {
            args: Prisma.SessionDurationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSessionDuration>
          }
          groupBy: {
            args: Prisma.SessionDurationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionDurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionDurationCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionDurationCountAggregateOutputType> | number
          }
        }
      }
      ClientProgressAnxiety: {
        payload: Prisma.$ClientProgressAnxietyPayload<ExtArgs>
        fields: Prisma.ClientProgressAnxietyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientProgressAnxietyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientProgressAnxietyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          findFirst: {
            args: Prisma.ClientProgressAnxietyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientProgressAnxietyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          findMany: {
            args: Prisma.ClientProgressAnxietyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>[]
          }
          create: {
            args: Prisma.ClientProgressAnxietyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          createMany: {
            args: Prisma.ClientProgressAnxietyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientProgressAnxietyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          update: {
            args: Prisma.ClientProgressAnxietyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          deleteMany: {
            args: Prisma.ClientProgressAnxietyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientProgressAnxietyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientProgressAnxietyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressAnxietyPayload>
          }
          aggregate: {
            args: Prisma.ClientProgressAnxietyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientProgressAnxiety>
          }
          groupBy: {
            args: Prisma.ClientProgressAnxietyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientProgressAnxietyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientProgressAnxietyCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientProgressAnxietyCountAggregateOutputType> | number
          }
        }
      }
      ClientProgressDepression: {
        payload: Prisma.$ClientProgressDepressionPayload<ExtArgs>
        fields: Prisma.ClientProgressDepressionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientProgressDepressionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientProgressDepressionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          findFirst: {
            args: Prisma.ClientProgressDepressionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientProgressDepressionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          findMany: {
            args: Prisma.ClientProgressDepressionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>[]
          }
          create: {
            args: Prisma.ClientProgressDepressionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          createMany: {
            args: Prisma.ClientProgressDepressionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientProgressDepressionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          update: {
            args: Prisma.ClientProgressDepressionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          deleteMany: {
            args: Prisma.ClientProgressDepressionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientProgressDepressionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientProgressDepressionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientProgressDepressionPayload>
          }
          aggregate: {
            args: Prisma.ClientProgressDepressionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientProgressDepression>
          }
          groupBy: {
            args: Prisma.ClientProgressDepressionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientProgressDepressionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientProgressDepressionCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientProgressDepressionCountAggregateOutputType> | number
          }
        }
      }
      TelegramBotSession: {
        payload: Prisma.$TelegramBotSessionPayload<ExtArgs>
        fields: Prisma.TelegramBotSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramBotSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramBotSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          findFirst: {
            args: Prisma.TelegramBotSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramBotSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          findMany: {
            args: Prisma.TelegramBotSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>[]
          }
          create: {
            args: Prisma.TelegramBotSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          createMany: {
            args: Prisma.TelegramBotSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TelegramBotSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          update: {
            args: Prisma.TelegramBotSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          deleteMany: {
            args: Prisma.TelegramBotSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramBotSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TelegramBotSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramBotSessionPayload>
          }
          aggregate: {
            args: Prisma.TelegramBotSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTelegramBotSession>
          }
          groupBy: {
            args: Prisma.TelegramBotSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TelegramBotSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramBotSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<TelegramBotSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clients: number
    consultationSessions: number
    sessionDurations: number
    timeBlocks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs
    consultationSessions?: boolean | UserCountOutputTypeCountConsultationSessionsArgs
    sessionDurations?: boolean | UserCountOutputTypeCountSessionDurationsArgs
    timeBlocks?: boolean | UserCountOutputTypeCountTimeBlocksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionDurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionDurationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    ClientProgressAnxietys: number
    ClientProgressDepressions: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientProgressAnxietys?: boolean | ClientCountOutputTypeCountClientProgressAnxietysArgs
    ClientProgressDepressions?: boolean | ClientCountOutputTypeCountClientProgressDepressionsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountClientProgressAnxietysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProgressAnxietyWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountClientProgressDepressionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProgressDepressionWhereInput
  }


  /**
   * Count Type ConsultationSessionCountOutputType
   */

  export type ConsultationSessionCountOutputType = {
    sessionsRounds: number
  }

  export type ConsultationSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionsRounds?: boolean | ConsultationSessionCountOutputTypeCountSessionsRoundsArgs
  }

  // Custom InputTypes
  /**
   * ConsultationSessionCountOutputType without action
   */
  export type ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSessionCountOutputType
     */
    select?: ConsultationSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultationSessionCountOutputType without action
   */
  export type ConsultationSessionCountOutputTypeCountSessionsRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsRoundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    clients?: boolean | User$clientsArgs<ExtArgs>
    consultationSessions?: boolean | User$consultationSessionsArgs<ExtArgs>
    sessionDurations?: boolean | User$sessionDurationsArgs<ExtArgs>
    timeBlocks?: boolean | User$timeBlocksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | User$clientsArgs<ExtArgs>
    consultationSessions?: boolean | User$consultationSessionsArgs<ExtArgs>
    sessionDurations?: boolean | User$sessionDurationsArgs<ExtArgs>
    timeBlocks?: boolean | User$timeBlocksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      consultationSessions: Prisma.$ConsultationSessionPayload<ExtArgs>[]
      sessionDurations: Prisma.$SessionDurationPayload<ExtArgs>[]
      timeBlocks: Prisma.$TimeBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'> | Null>;

    consultationSessions<T extends User$consultationSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$consultationSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessionDurations<T extends User$sessionDurationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionDurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findMany'> | Null>;

    timeBlocks<T extends User$timeBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$timeBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.consultationSessions
   */
  export type User$consultationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    where?: ConsultationSessionWhereInput
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    cursor?: ConsultationSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * User.sessionDurations
   */
  export type User$sessionDurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    where?: SessionDurationWhereInput
    orderBy?: SessionDurationOrderByWithRelationInput | SessionDurationOrderByWithRelationInput[]
    cursor?: SessionDurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionDurationScalarFieldEnum | SessionDurationScalarFieldEnum[]
  }

  /**
   * User.timeBlocks
   */
  export type User$timeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    cursor?: TimeBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    contact: string | null
    priority: $Enums.Priority | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    contact: string | null
    priority: $Enums.Priority | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    contact: number
    priority: number
    isCompleted: number
    userId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    contact?: true
    priority?: true
    isCompleted?: true
    userId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    contact?: true
    priority?: true
    isCompleted?: true
    userId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    contact?: true
    priority?: true
    isCompleted?: true
    userId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    contact: string | null
    priority: $Enums.Priority | null
    isCompleted: boolean | null
    userId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    contact?: boolean
    priority?: boolean
    isCompleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ClientProgressAnxietys?: boolean | Client$ClientProgressAnxietysArgs<ExtArgs>
    ClientProgressDepressions?: boolean | Client$ClientProgressDepressionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    contact?: boolean
    priority?: boolean
    isCompleted?: boolean
    userId?: boolean
  }


  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ClientProgressAnxietys?: boolean | Client$ClientProgressAnxietysArgs<ExtArgs>
    ClientProgressDepressions?: boolean | Client$ClientProgressDepressionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ClientProgressAnxietys: Prisma.$ClientProgressAnxietyPayload<ExtArgs>[]
      ClientProgressDepressions: Prisma.$ClientProgressDepressionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      contact: string | null
      priority: $Enums.Priority | null
      isCompleted: boolean | null
      userId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ClientProgressAnxietys<T extends Client$ClientProgressAnxietysArgs<ExtArgs> = {}>(args?: Subset<T, Client$ClientProgressAnxietysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findMany'> | Null>;

    ClientProgressDepressions<T extends Client$ClientProgressDepressionsArgs<ExtArgs> = {}>(args?: Subset<T, Client$ClientProgressDepressionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly name: FieldRef<"Client", 'String'>
    readonly contact: FieldRef<"Client", 'String'>
    readonly priority: FieldRef<"Client", 'Priority'>
    readonly isCompleted: FieldRef<"Client", 'Boolean'>
    readonly userId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.ClientProgressAnxietys
   */
  export type Client$ClientProgressAnxietysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    where?: ClientProgressAnxietyWhereInput
    orderBy?: ClientProgressAnxietyOrderByWithRelationInput | ClientProgressAnxietyOrderByWithRelationInput[]
    cursor?: ClientProgressAnxietyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientProgressAnxietyScalarFieldEnum | ClientProgressAnxietyScalarFieldEnum[]
  }

  /**
   * Client.ClientProgressDepressions
   */
  export type Client$ClientProgressDepressionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    where?: ClientProgressDepressionWhereInput
    orderBy?: ClientProgressDepressionOrderByWithRelationInput | ClientProgressDepressionOrderByWithRelationInput[]
    cursor?: ClientProgressDepressionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientProgressDepressionScalarFieldEnum | ClientProgressDepressionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model TimeBlock
   */

  export type AggregateTimeBlock = {
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  export type TimeBlockAvgAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type TimeBlockSumAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type TimeBlockMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    duration: number | null
    order: number | null
    userId: string | null
  }

  export type TimeBlockMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    duration: number | null
    order: number | null
    userId: string | null
  }

  export type TimeBlockCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    color: number
    duration: number
    order: number
    userId: number
    _all: number
  }


  export type TimeBlockAvgAggregateInputType = {
    duration?: true
    order?: true
  }

  export type TimeBlockSumAggregateInputType = {
    duration?: true
    order?: true
  }

  export type TimeBlockMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
  }

  export type TimeBlockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
  }

  export type TimeBlockCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
    _all?: true
  }

  export type TimeBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlock to aggregate.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeBlocks
    **/
    _count?: true | TimeBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeBlockMaxAggregateInputType
  }

  export type GetTimeBlockAggregateType<T extends TimeBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeBlock[P]>
      : GetScalarType<T[P], AggregateTimeBlock[P]>
  }




  export type TimeBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithAggregationInput | TimeBlockOrderByWithAggregationInput[]
    by: TimeBlockScalarFieldEnum[] | TimeBlockScalarFieldEnum
    having?: TimeBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeBlockCountAggregateInputType | true
    _avg?: TimeBlockAvgAggregateInputType
    _sum?: TimeBlockSumAggregateInputType
    _min?: TimeBlockMinAggregateInputType
    _max?: TimeBlockMaxAggregateInputType
  }

  export type TimeBlockGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    color: string | null
    duration: number
    order: number
    userId: string
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  type GetTimeBlockGroupByPayload<T extends TimeBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
            : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
        }
      >
    >


  export type TimeBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    duration?: boolean
    order?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    duration?: boolean
    order?: boolean
    userId?: boolean
  }


  export type TimeBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TimeBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      color: string | null
      duration: number
      order: number
      userId: string
    }, ExtArgs["result"]["timeBlock"]>
    composites: {}
  }


  type TimeBlockGetPayload<S extends boolean | null | undefined | TimeBlockDefaultArgs> = $Result.GetResult<Prisma.$TimeBlockPayload, S>

  type TimeBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeBlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeBlockCountAggregateInputType | true
    }

  export interface TimeBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeBlock'], meta: { name: 'TimeBlock' } }
    /**
     * Find zero or one TimeBlock that matches the filter.
     * @param {TimeBlockFindUniqueArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimeBlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockFindUniqueArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TimeBlock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimeBlockFindUniqueOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimeBlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TimeBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimeBlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindFirstArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TimeBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimeBlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TimeBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany()
     * 
     * // Get first 10 TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimeBlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TimeBlock.
     * @param {TimeBlockCreateArgs} args - Arguments to create a TimeBlock.
     * @example
     * // Create one TimeBlock
     * const TimeBlock = await prisma.timeBlock.create({
     *   data: {
     *     // ... data to create a TimeBlock
     *   }
     * })
     * 
    **/
    create<T extends TimeBlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockCreateArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TimeBlocks.
     *     @param {TimeBlockCreateManyArgs} args - Arguments to create many TimeBlocks.
     *     @example
     *     // Create many TimeBlocks
     *     const timeBlock = await prisma.timeBlock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimeBlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimeBlock.
     * @param {TimeBlockDeleteArgs} args - Arguments to delete one TimeBlock.
     * @example
     * // Delete one TimeBlock
     * const TimeBlock = await prisma.timeBlock.delete({
     *   where: {
     *     // ... filter to delete one TimeBlock
     *   }
     * })
     * 
    **/
    delete<T extends TimeBlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockDeleteArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TimeBlock.
     * @param {TimeBlockUpdateArgs} args - Arguments to update one TimeBlock.
     * @example
     * // Update one TimeBlock
     * const timeBlock = await prisma.timeBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimeBlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpdateArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TimeBlocks.
     * @param {TimeBlockDeleteManyArgs} args - Arguments to filter TimeBlocks to delete.
     * @example
     * // Delete a few TimeBlocks
     * const { count } = await prisma.timeBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimeBlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimeBlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeBlock.
     * @param {TimeBlockUpsertArgs} args - Arguments to update or create a TimeBlock.
     * @example
     * // Update or create a TimeBlock
     * const timeBlock = await prisma.timeBlock.upsert({
     *   create: {
     *     // ... data to create a TimeBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeBlock we want to update
     *   }
     * })
    **/
    upsert<T extends TimeBlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpsertArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockCountArgs} args - Arguments to filter TimeBlocks to count.
     * @example
     * // Count the number of TimeBlocks
     * const count = await prisma.timeBlock.count({
     *   where: {
     *     // ... the filter for the TimeBlocks we want to count
     *   }
     * })
    **/
    count<T extends TimeBlockCountArgs>(
      args?: Subset<T, TimeBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeBlockAggregateArgs>(args: Subset<T, TimeBlockAggregateArgs>): Prisma.PrismaPromise<GetTimeBlockAggregateType<T>>

    /**
     * Group by TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeBlockGroupByArgs['orderBy'] }
        : { orderBy?: TimeBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeBlock model
   */
  readonly fields: TimeBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TimeBlock model
   */ 
  interface TimeBlockFieldRefs {
    readonly id: FieldRef<"TimeBlock", 'String'>
    readonly createdAt: FieldRef<"TimeBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeBlock", 'DateTime'>
    readonly name: FieldRef<"TimeBlock", 'String'>
    readonly color: FieldRef<"TimeBlock", 'String'>
    readonly duration: FieldRef<"TimeBlock", 'Int'>
    readonly order: FieldRef<"TimeBlock", 'Int'>
    readonly userId: FieldRef<"TimeBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeBlock findUnique
   */
  export type TimeBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findUniqueOrThrow
   */
  export type TimeBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findFirst
   */
  export type TimeBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findFirstOrThrow
   */
  export type TimeBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findMany
   */
  export type TimeBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlocks to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock create
   */
  export type TimeBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeBlock.
     */
    data: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
  }

  /**
   * TimeBlock createMany
   */
  export type TimeBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeBlock update
   */
  export type TimeBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeBlock.
     */
    data: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
    /**
     * Choose, which TimeBlock to update.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock updateMany
   */
  export type TimeBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
  }

  /**
   * TimeBlock upsert
   */
  export type TimeBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeBlock to update in case it exists.
     */
    where: TimeBlockWhereUniqueInput
    /**
     * In case the TimeBlock found by the `where` argument doesn't exist, create a new TimeBlock with this data.
     */
    create: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
    /**
     * In case the TimeBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
  }

  /**
   * TimeBlock delete
   */
  export type TimeBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter which TimeBlock to delete.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock deleteMany
   */
  export type TimeBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlocks to delete
     */
    where?: TimeBlockWhereInput
  }

  /**
   * TimeBlock without action
   */
  export type TimeBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationSession
   */

  export type AggregateConsultationSession = {
    _count: ConsultationSessionCountAggregateOutputType | null
    _min: ConsultationSessionMinAggregateOutputType | null
    _max: ConsultationSessionMaxAggregateOutputType | null
  }

  export type ConsultationSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type ConsultationSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type ConsultationSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isCompleted: number
    userId: number
    _all: number
  }


  export type ConsultationSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
  }

  export type ConsultationSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
  }

  export type ConsultationSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    _all?: true
  }

  export type ConsultationSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationSession to aggregate.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationSessions
    **/
    _count?: true | ConsultationSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationSessionMaxAggregateInputType
  }

  export type GetConsultationSessionAggregateType<T extends ConsultationSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationSession[P]>
      : GetScalarType<T[P], AggregateConsultationSession[P]>
  }




  export type ConsultationSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationSessionWhereInput
    orderBy?: ConsultationSessionOrderByWithAggregationInput | ConsultationSessionOrderByWithAggregationInput[]
    by: ConsultationSessionScalarFieldEnum[] | ConsultationSessionScalarFieldEnum
    having?: ConsultationSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationSessionCountAggregateInputType | true
    _min?: ConsultationSessionMinAggregateInputType
    _max?: ConsultationSessionMaxAggregateInputType
  }

  export type ConsultationSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isCompleted: boolean | null
    userId: string
    _count: ConsultationSessionCountAggregateOutputType | null
    _min: ConsultationSessionMinAggregateOutputType | null
    _max: ConsultationSessionMaxAggregateOutputType | null
  }

  type GetConsultationSessionGroupByPayload<T extends ConsultationSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationSessionGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessionsRounds?: boolean | ConsultationSession$sessionsRoundsArgs<ExtArgs>
    _count?: boolean | ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationSession"]>

  export type ConsultationSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
  }


  export type ConsultationSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessionsRounds?: boolean | ConsultationSession$sessionsRoundsArgs<ExtArgs>
    _count?: boolean | ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConsultationSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sessionsRounds: Prisma.$SessionsRoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      isCompleted: boolean | null
      userId: string
    }, ExtArgs["result"]["consultationSession"]>
    composites: {}
  }


  type ConsultationSessionGetPayload<S extends boolean | null | undefined | ConsultationSessionDefaultArgs> = $Result.GetResult<Prisma.$ConsultationSessionPayload, S>

  type ConsultationSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConsultationSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultationSessionCountAggregateInputType | true
    }

  export interface ConsultationSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationSession'], meta: { name: 'ConsultationSession' } }
    /**
     * Find zero or one ConsultationSession that matches the filter.
     * @param {ConsultationSessionFindUniqueArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConsultationSessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionFindUniqueArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConsultationSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConsultationSessionFindUniqueOrThrowArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConsultationSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConsultationSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindFirstArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConsultationSessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionFindFirstArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConsultationSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindFirstOrThrowArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConsultationSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConsultationSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationSessions
     * const consultationSessions = await prisma.consultationSession.findMany()
     * 
     * // Get first 10 ConsultationSessions
     * const consultationSessions = await prisma.consultationSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationSessionWithIdOnly = await prisma.consultationSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConsultationSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConsultationSession.
     * @param {ConsultationSessionCreateArgs} args - Arguments to create a ConsultationSession.
     * @example
     * // Create one ConsultationSession
     * const ConsultationSession = await prisma.consultationSession.create({
     *   data: {
     *     // ... data to create a ConsultationSession
     *   }
     * })
     * 
    **/
    create<T extends ConsultationSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionCreateArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ConsultationSessions.
     *     @param {ConsultationSessionCreateManyArgs} args - Arguments to create many ConsultationSessions.
     *     @example
     *     // Create many ConsultationSessions
     *     const consultationSession = await prisma.consultationSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConsultationSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConsultationSession.
     * @param {ConsultationSessionDeleteArgs} args - Arguments to delete one ConsultationSession.
     * @example
     * // Delete one ConsultationSession
     * const ConsultationSession = await prisma.consultationSession.delete({
     *   where: {
     *     // ... filter to delete one ConsultationSession
     *   }
     * })
     * 
    **/
    delete<T extends ConsultationSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionDeleteArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConsultationSession.
     * @param {ConsultationSessionUpdateArgs} args - Arguments to update one ConsultationSession.
     * @example
     * // Update one ConsultationSession
     * const consultationSession = await prisma.consultationSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConsultationSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionUpdateArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConsultationSessions.
     * @param {ConsultationSessionDeleteManyArgs} args - Arguments to filter ConsultationSessions to delete.
     * @example
     * // Delete a few ConsultationSessions
     * const { count } = await prisma.consultationSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConsultationSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultationSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationSessions
     * const consultationSession = await prisma.consultationSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConsultationSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsultationSession.
     * @param {ConsultationSessionUpsertArgs} args - Arguments to update or create a ConsultationSession.
     * @example
     * // Update or create a ConsultationSession
     * const consultationSession = await prisma.consultationSession.upsert({
     *   create: {
     *     // ... data to create a ConsultationSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationSession we want to update
     *   }
     * })
    **/
    upsert<T extends ConsultationSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultationSessionUpsertArgs<ExtArgs>>
    ): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConsultationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionCountArgs} args - Arguments to filter ConsultationSessions to count.
     * @example
     * // Count the number of ConsultationSessions
     * const count = await prisma.consultationSession.count({
     *   where: {
     *     // ... the filter for the ConsultationSessions we want to count
     *   }
     * })
    **/
    count<T extends ConsultationSessionCountArgs>(
      args?: Subset<T, ConsultationSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationSessionAggregateArgs>(args: Subset<T, ConsultationSessionAggregateArgs>): Prisma.PrismaPromise<GetConsultationSessionAggregateType<T>>

    /**
     * Group by ConsultationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationSessionGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationSession model
   */
  readonly fields: ConsultationSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sessionsRounds<T extends ConsultationSession$sessionsRoundsArgs<ExtArgs> = {}>(args?: Subset<T, ConsultationSession$sessionsRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConsultationSession model
   */ 
  interface ConsultationSessionFieldRefs {
    readonly id: FieldRef<"ConsultationSession", 'String'>
    readonly createdAt: FieldRef<"ConsultationSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultationSession", 'DateTime'>
    readonly isCompleted: FieldRef<"ConsultationSession", 'Boolean'>
    readonly userId: FieldRef<"ConsultationSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationSession findUnique
   */
  export type ConsultationSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession findUniqueOrThrow
   */
  export type ConsultationSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession findFirst
   */
  export type ConsultationSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationSessions.
     */
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession findFirstOrThrow
   */
  export type ConsultationSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationSessions.
     */
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession findMany
   */
  export type ConsultationSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSessions to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession create
   */
  export type ConsultationSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationSession.
     */
    data: XOR<ConsultationSessionCreateInput, ConsultationSessionUncheckedCreateInput>
  }

  /**
   * ConsultationSession createMany
   */
  export type ConsultationSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationSessions.
     */
    data: ConsultationSessionCreateManyInput | ConsultationSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationSession update
   */
  export type ConsultationSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationSession.
     */
    data: XOR<ConsultationSessionUpdateInput, ConsultationSessionUncheckedUpdateInput>
    /**
     * Choose, which ConsultationSession to update.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession updateMany
   */
  export type ConsultationSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationSessions.
     */
    data: XOR<ConsultationSessionUpdateManyMutationInput, ConsultationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationSessions to update
     */
    where?: ConsultationSessionWhereInput
  }

  /**
   * ConsultationSession upsert
   */
  export type ConsultationSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationSession to update in case it exists.
     */
    where: ConsultationSessionWhereUniqueInput
    /**
     * In case the ConsultationSession found by the `where` argument doesn't exist, create a new ConsultationSession with this data.
     */
    create: XOR<ConsultationSessionCreateInput, ConsultationSessionUncheckedCreateInput>
    /**
     * In case the ConsultationSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationSessionUpdateInput, ConsultationSessionUncheckedUpdateInput>
  }

  /**
   * ConsultationSession delete
   */
  export type ConsultationSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter which ConsultationSession to delete.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession deleteMany
   */
  export type ConsultationSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationSessions to delete
     */
    where?: ConsultationSessionWhereInput
  }

  /**
   * ConsultationSession.sessionsRounds
   */
  export type ConsultationSession$sessionsRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    where?: SessionsRoundWhereInput
    orderBy?: SessionsRoundOrderByWithRelationInput | SessionsRoundOrderByWithRelationInput[]
    cursor?: SessionsRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsRoundScalarFieldEnum | SessionsRoundScalarFieldEnum[]
  }

  /**
   * ConsultationSession without action
   */
  export type ConsultationSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionsRound
   */

  export type AggregateSessionsRound = {
    _count: SessionsRoundCountAggregateOutputType | null
    _avg: SessionsRoundAvgAggregateOutputType | null
    _sum: SessionsRoundSumAggregateOutputType | null
    _min: SessionsRoundMinAggregateOutputType | null
    _max: SessionsRoundMaxAggregateOutputType | null
  }

  export type SessionsRoundAvgAggregateOutputType = {
    totalDuration: number | null
  }

  export type SessionsRoundSumAggregateOutputType = {
    totalDuration: number | null
  }

  export type SessionsRoundMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalDuration: number | null
    isCompleted: boolean | null
    consultationSessionId: string | null
  }

  export type SessionsRoundMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalDuration: number | null
    isCompleted: boolean | null
    consultationSessionId: string | null
  }

  export type SessionsRoundCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    totalDuration: number
    isCompleted: number
    consultationSessionId: number
    _all: number
  }


  export type SessionsRoundAvgAggregateInputType = {
    totalDuration?: true
  }

  export type SessionsRoundSumAggregateInputType = {
    totalDuration?: true
  }

  export type SessionsRoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalDuration?: true
    isCompleted?: true
    consultationSessionId?: true
  }

  export type SessionsRoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalDuration?: true
    isCompleted?: true
    consultationSessionId?: true
  }

  export type SessionsRoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalDuration?: true
    isCompleted?: true
    consultationSessionId?: true
    _all?: true
  }

  export type SessionsRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionsRound to aggregate.
     */
    where?: SessionsRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionsRounds to fetch.
     */
    orderBy?: SessionsRoundOrderByWithRelationInput | SessionsRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionsRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionsRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionsRounds
    **/
    _count?: true | SessionsRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsRoundMaxAggregateInputType
  }

  export type GetSessionsRoundAggregateType<T extends SessionsRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionsRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionsRound[P]>
      : GetScalarType<T[P], AggregateSessionsRound[P]>
  }




  export type SessionsRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsRoundWhereInput
    orderBy?: SessionsRoundOrderByWithAggregationInput | SessionsRoundOrderByWithAggregationInput[]
    by: SessionsRoundScalarFieldEnum[] | SessionsRoundScalarFieldEnum
    having?: SessionsRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsRoundCountAggregateInputType | true
    _avg?: SessionsRoundAvgAggregateInputType
    _sum?: SessionsRoundSumAggregateInputType
    _min?: SessionsRoundMinAggregateInputType
    _max?: SessionsRoundMaxAggregateInputType
  }

  export type SessionsRoundGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    totalDuration: number
    isCompleted: boolean | null
    consultationSessionId: string
    _count: SessionsRoundCountAggregateOutputType | null
    _avg: SessionsRoundAvgAggregateOutputType | null
    _sum: SessionsRoundSumAggregateOutputType | null
    _min: SessionsRoundMinAggregateOutputType | null
    _max: SessionsRoundMaxAggregateOutputType | null
  }

  type GetSessionsRoundGroupByPayload<T extends SessionsRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsRoundGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsRoundGroupByOutputType[P]>
        }
      >
    >


  export type SessionsRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalDuration?: boolean
    isCompleted?: boolean
    consultationSessionId?: boolean
    consultationSession?: boolean | ConsultationSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionsRound"]>

  export type SessionsRoundSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalDuration?: boolean
    isCompleted?: boolean
    consultationSessionId?: boolean
  }


  export type SessionsRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultationSession?: boolean | ConsultationSessionDefaultArgs<ExtArgs>
  }


  export type $SessionsRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionsRound"
    objects: {
      consultationSession: Prisma.$ConsultationSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      totalDuration: number
      isCompleted: boolean | null
      consultationSessionId: string
    }, ExtArgs["result"]["sessionsRound"]>
    composites: {}
  }


  type SessionsRoundGetPayload<S extends boolean | null | undefined | SessionsRoundDefaultArgs> = $Result.GetResult<Prisma.$SessionsRoundPayload, S>

  type SessionsRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionsRoundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionsRoundCountAggregateInputType | true
    }

  export interface SessionsRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionsRound'], meta: { name: 'SessionsRound' } }
    /**
     * Find zero or one SessionsRound that matches the filter.
     * @param {SessionsRoundFindUniqueArgs} args - Arguments to find a SessionsRound
     * @example
     * // Get one SessionsRound
     * const sessionsRound = await prisma.sessionsRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionsRoundFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SessionsRound that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionsRoundFindUniqueOrThrowArgs} args - Arguments to find a SessionsRound
     * @example
     * // Get one SessionsRound
     * const sessionsRound = await prisma.sessionsRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionsRoundFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SessionsRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundFindFirstArgs} args - Arguments to find a SessionsRound
     * @example
     * // Get one SessionsRound
     * const sessionsRound = await prisma.sessionsRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionsRoundFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundFindFirstArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SessionsRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundFindFirstOrThrowArgs} args - Arguments to find a SessionsRound
     * @example
     * // Get one SessionsRound
     * const sessionsRound = await prisma.sessionsRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionsRoundFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SessionsRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionsRounds
     * const sessionsRounds = await prisma.sessionsRound.findMany()
     * 
     * // Get first 10 SessionsRounds
     * const sessionsRounds = await prisma.sessionsRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsRoundWithIdOnly = await prisma.sessionsRound.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionsRoundFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SessionsRound.
     * @param {SessionsRoundCreateArgs} args - Arguments to create a SessionsRound.
     * @example
     * // Create one SessionsRound
     * const SessionsRound = await prisma.sessionsRound.create({
     *   data: {
     *     // ... data to create a SessionsRound
     *   }
     * })
     * 
    **/
    create<T extends SessionsRoundCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundCreateArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SessionsRounds.
     *     @param {SessionsRoundCreateManyArgs} args - Arguments to create many SessionsRounds.
     *     @example
     *     // Create many SessionsRounds
     *     const sessionsRound = await prisma.sessionsRound.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionsRoundCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SessionsRound.
     * @param {SessionsRoundDeleteArgs} args - Arguments to delete one SessionsRound.
     * @example
     * // Delete one SessionsRound
     * const SessionsRound = await prisma.sessionsRound.delete({
     *   where: {
     *     // ... filter to delete one SessionsRound
     *   }
     * })
     * 
    **/
    delete<T extends SessionsRoundDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundDeleteArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SessionsRound.
     * @param {SessionsRoundUpdateArgs} args - Arguments to update one SessionsRound.
     * @example
     * // Update one SessionsRound
     * const sessionsRound = await prisma.sessionsRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionsRoundUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundUpdateArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SessionsRounds.
     * @param {SessionsRoundDeleteManyArgs} args - Arguments to filter SessionsRounds to delete.
     * @example
     * // Delete a few SessionsRounds
     * const { count } = await prisma.sessionsRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionsRoundDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionsRoundDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionsRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionsRounds
     * const sessionsRound = await prisma.sessionsRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionsRoundUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionsRound.
     * @param {SessionsRoundUpsertArgs} args - Arguments to update or create a SessionsRound.
     * @example
     * // Update or create a SessionsRound
     * const sessionsRound = await prisma.sessionsRound.upsert({
     *   create: {
     *     // ... data to create a SessionsRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionsRound we want to update
     *   }
     * })
    **/
    upsert<T extends SessionsRoundUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionsRoundUpsertArgs<ExtArgs>>
    ): Prisma__SessionsRoundClient<$Result.GetResult<Prisma.$SessionsRoundPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SessionsRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundCountArgs} args - Arguments to filter SessionsRounds to count.
     * @example
     * // Count the number of SessionsRounds
     * const count = await prisma.sessionsRound.count({
     *   where: {
     *     // ... the filter for the SessionsRounds we want to count
     *   }
     * })
    **/
    count<T extends SessionsRoundCountArgs>(
      args?: Subset<T, SessionsRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionsRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsRoundAggregateArgs>(args: Subset<T, SessionsRoundAggregateArgs>): Prisma.PrismaPromise<GetSessionsRoundAggregateType<T>>

    /**
     * Group by SessionsRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsRoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionsRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsRoundGroupByArgs['orderBy'] }
        : { orderBy?: SessionsRoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionsRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionsRound model
   */
  readonly fields: SessionsRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionsRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    consultationSession<T extends ConsultationSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultationSessionDefaultArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SessionsRound model
   */ 
  interface SessionsRoundFieldRefs {
    readonly id: FieldRef<"SessionsRound", 'String'>
    readonly createdAt: FieldRef<"SessionsRound", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionsRound", 'DateTime'>
    readonly totalDuration: FieldRef<"SessionsRound", 'Int'>
    readonly isCompleted: FieldRef<"SessionsRound", 'Boolean'>
    readonly consultationSessionId: FieldRef<"SessionsRound", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionsRound findUnique
   */
  export type SessionsRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter, which SessionsRound to fetch.
     */
    where: SessionsRoundWhereUniqueInput
  }

  /**
   * SessionsRound findUniqueOrThrow
   */
  export type SessionsRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter, which SessionsRound to fetch.
     */
    where: SessionsRoundWhereUniqueInput
  }

  /**
   * SessionsRound findFirst
   */
  export type SessionsRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter, which SessionsRound to fetch.
     */
    where?: SessionsRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionsRounds to fetch.
     */
    orderBy?: SessionsRoundOrderByWithRelationInput | SessionsRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionsRounds.
     */
    cursor?: SessionsRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionsRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionsRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionsRounds.
     */
    distinct?: SessionsRoundScalarFieldEnum | SessionsRoundScalarFieldEnum[]
  }

  /**
   * SessionsRound findFirstOrThrow
   */
  export type SessionsRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter, which SessionsRound to fetch.
     */
    where?: SessionsRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionsRounds to fetch.
     */
    orderBy?: SessionsRoundOrderByWithRelationInput | SessionsRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionsRounds.
     */
    cursor?: SessionsRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionsRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionsRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionsRounds.
     */
    distinct?: SessionsRoundScalarFieldEnum | SessionsRoundScalarFieldEnum[]
  }

  /**
   * SessionsRound findMany
   */
  export type SessionsRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter, which SessionsRounds to fetch.
     */
    where?: SessionsRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionsRounds to fetch.
     */
    orderBy?: SessionsRoundOrderByWithRelationInput | SessionsRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionsRounds.
     */
    cursor?: SessionsRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionsRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionsRounds.
     */
    skip?: number
    distinct?: SessionsRoundScalarFieldEnum | SessionsRoundScalarFieldEnum[]
  }

  /**
   * SessionsRound create
   */
  export type SessionsRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionsRound.
     */
    data: XOR<SessionsRoundCreateInput, SessionsRoundUncheckedCreateInput>
  }

  /**
   * SessionsRound createMany
   */
  export type SessionsRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionsRounds.
     */
    data: SessionsRoundCreateManyInput | SessionsRoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionsRound update
   */
  export type SessionsRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionsRound.
     */
    data: XOR<SessionsRoundUpdateInput, SessionsRoundUncheckedUpdateInput>
    /**
     * Choose, which SessionsRound to update.
     */
    where: SessionsRoundWhereUniqueInput
  }

  /**
   * SessionsRound updateMany
   */
  export type SessionsRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionsRounds.
     */
    data: XOR<SessionsRoundUpdateManyMutationInput, SessionsRoundUncheckedUpdateManyInput>
    /**
     * Filter which SessionsRounds to update
     */
    where?: SessionsRoundWhereInput
  }

  /**
   * SessionsRound upsert
   */
  export type SessionsRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionsRound to update in case it exists.
     */
    where: SessionsRoundWhereUniqueInput
    /**
     * In case the SessionsRound found by the `where` argument doesn't exist, create a new SessionsRound with this data.
     */
    create: XOR<SessionsRoundCreateInput, SessionsRoundUncheckedCreateInput>
    /**
     * In case the SessionsRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsRoundUpdateInput, SessionsRoundUncheckedUpdateInput>
  }

  /**
   * SessionsRound delete
   */
  export type SessionsRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
    /**
     * Filter which SessionsRound to delete.
     */
    where: SessionsRoundWhereUniqueInput
  }

  /**
   * SessionsRound deleteMany
   */
  export type SessionsRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionsRounds to delete
     */
    where?: SessionsRoundWhereInput
  }

  /**
   * SessionsRound without action
   */
  export type SessionsRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsRound
     */
    select?: SessionsRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsRoundInclude<ExtArgs> | null
  }


  /**
   * Model SessionDuration
   */

  export type AggregateSessionDuration = {
    _count: SessionDurationCountAggregateOutputType | null
    _avg: SessionDurationAvgAggregateOutputType | null
    _sum: SessionDurationSumAggregateOutputType | null
    _min: SessionDurationMinAggregateOutputType | null
    _max: SessionDurationMaxAggregateOutputType | null
  }

  export type SessionDurationAvgAggregateOutputType = {
    sessionDuration: number | null
    breakDuration: number | null
    longBreakDuration: number | null
    sessionsCount: number | null
  }

  export type SessionDurationSumAggregateOutputType = {
    sessionDuration: number | null
    breakDuration: number | null
    longBreakDuration: number | null
    sessionsCount: number | null
  }

  export type SessionDurationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sessionDuration: number | null
    breakDuration: number | null
    longBreakDuration: number | null
    sessionsCount: number | null
    userId: string | null
  }

  export type SessionDurationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sessionDuration: number | null
    breakDuration: number | null
    longBreakDuration: number | null
    sessionsCount: number | null
    userId: string | null
  }

  export type SessionDurationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    sessionDuration: number
    breakDuration: number
    longBreakDuration: number
    sessionsCount: number
    userId: number
    _all: number
  }


  export type SessionDurationAvgAggregateInputType = {
    sessionDuration?: true
    breakDuration?: true
    longBreakDuration?: true
    sessionsCount?: true
  }

  export type SessionDurationSumAggregateInputType = {
    sessionDuration?: true
    breakDuration?: true
    longBreakDuration?: true
    sessionsCount?: true
  }

  export type SessionDurationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sessionDuration?: true
    breakDuration?: true
    longBreakDuration?: true
    sessionsCount?: true
    userId?: true
  }

  export type SessionDurationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sessionDuration?: true
    breakDuration?: true
    longBreakDuration?: true
    sessionsCount?: true
    userId?: true
  }

  export type SessionDurationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sessionDuration?: true
    breakDuration?: true
    longBreakDuration?: true
    sessionsCount?: true
    userId?: true
    _all?: true
  }

  export type SessionDurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionDuration to aggregate.
     */
    where?: SessionDurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDurations to fetch.
     */
    orderBy?: SessionDurationOrderByWithRelationInput | SessionDurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionDurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionDurations
    **/
    _count?: true | SessionDurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionDurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionDurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionDurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionDurationMaxAggregateInputType
  }

  export type GetSessionDurationAggregateType<T extends SessionDurationAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionDuration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionDuration[P]>
      : GetScalarType<T[P], AggregateSessionDuration[P]>
  }




  export type SessionDurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionDurationWhereInput
    orderBy?: SessionDurationOrderByWithAggregationInput | SessionDurationOrderByWithAggregationInput[]
    by: SessionDurationScalarFieldEnum[] | SessionDurationScalarFieldEnum
    having?: SessionDurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionDurationCountAggregateInputType | true
    _avg?: SessionDurationAvgAggregateInputType
    _sum?: SessionDurationSumAggregateInputType
    _min?: SessionDurationMinAggregateInputType
    _max?: SessionDurationMaxAggregateInputType
  }

  export type SessionDurationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    sessionDuration: number | null
    breakDuration: number | null
    longBreakDuration: number | null
    sessionsCount: number | null
    userId: string
    _count: SessionDurationCountAggregateOutputType | null
    _avg: SessionDurationAvgAggregateOutputType | null
    _sum: SessionDurationSumAggregateOutputType | null
    _min: SessionDurationMinAggregateOutputType | null
    _max: SessionDurationMaxAggregateOutputType | null
  }

  type GetSessionDurationGroupByPayload<T extends SessionDurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionDurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionDurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionDurationGroupByOutputType[P]>
            : GetScalarType<T[P], SessionDurationGroupByOutputType[P]>
        }
      >
    >


  export type SessionDurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessionDuration?: boolean
    breakDuration?: boolean
    longBreakDuration?: boolean
    sessionsCount?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionDuration"]>

  export type SessionDurationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessionDuration?: boolean
    breakDuration?: boolean
    longBreakDuration?: boolean
    sessionsCount?: boolean
    userId?: boolean
  }


  export type SessionDurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionDurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionDuration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      sessionDuration: number | null
      breakDuration: number | null
      longBreakDuration: number | null
      sessionsCount: number | null
      userId: string
    }, ExtArgs["result"]["sessionDuration"]>
    composites: {}
  }


  type SessionDurationGetPayload<S extends boolean | null | undefined | SessionDurationDefaultArgs> = $Result.GetResult<Prisma.$SessionDurationPayload, S>

  type SessionDurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionDurationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionDurationCountAggregateInputType | true
    }

  export interface SessionDurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionDuration'], meta: { name: 'SessionDuration' } }
    /**
     * Find zero or one SessionDuration that matches the filter.
     * @param {SessionDurationFindUniqueArgs} args - Arguments to find a SessionDuration
     * @example
     * // Get one SessionDuration
     * const sessionDuration = await prisma.sessionDuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionDurationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SessionDuration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionDurationFindUniqueOrThrowArgs} args - Arguments to find a SessionDuration
     * @example
     * // Get one SessionDuration
     * const sessionDuration = await prisma.sessionDuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionDurationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SessionDuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationFindFirstArgs} args - Arguments to find a SessionDuration
     * @example
     * // Get one SessionDuration
     * const sessionDuration = await prisma.sessionDuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionDurationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationFindFirstArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SessionDuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationFindFirstOrThrowArgs} args - Arguments to find a SessionDuration
     * @example
     * // Get one SessionDuration
     * const sessionDuration = await prisma.sessionDuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionDurationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SessionDurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionDurations
     * const sessionDurations = await prisma.sessionDuration.findMany()
     * 
     * // Get first 10 SessionDurations
     * const sessionDurations = await prisma.sessionDuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionDurationWithIdOnly = await prisma.sessionDuration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionDurationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SessionDuration.
     * @param {SessionDurationCreateArgs} args - Arguments to create a SessionDuration.
     * @example
     * // Create one SessionDuration
     * const SessionDuration = await prisma.sessionDuration.create({
     *   data: {
     *     // ... data to create a SessionDuration
     *   }
     * })
     * 
    **/
    create<T extends SessionDurationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationCreateArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SessionDurations.
     *     @param {SessionDurationCreateManyArgs} args - Arguments to create many SessionDurations.
     *     @example
     *     // Create many SessionDurations
     *     const sessionDuration = await prisma.sessionDuration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionDurationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SessionDuration.
     * @param {SessionDurationDeleteArgs} args - Arguments to delete one SessionDuration.
     * @example
     * // Delete one SessionDuration
     * const SessionDuration = await prisma.sessionDuration.delete({
     *   where: {
     *     // ... filter to delete one SessionDuration
     *   }
     * })
     * 
    **/
    delete<T extends SessionDurationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationDeleteArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SessionDuration.
     * @param {SessionDurationUpdateArgs} args - Arguments to update one SessionDuration.
     * @example
     * // Update one SessionDuration
     * const sessionDuration = await prisma.sessionDuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionDurationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationUpdateArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SessionDurations.
     * @param {SessionDurationDeleteManyArgs} args - Arguments to filter SessionDurations to delete.
     * @example
     * // Delete a few SessionDurations
     * const { count } = await prisma.sessionDuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDurationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDurationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionDurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionDurations
     * const sessionDuration = await prisma.sessionDuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionDurationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionDuration.
     * @param {SessionDurationUpsertArgs} args - Arguments to update or create a SessionDuration.
     * @example
     * // Update or create a SessionDuration
     * const sessionDuration = await prisma.sessionDuration.upsert({
     *   create: {
     *     // ... data to create a SessionDuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionDuration we want to update
     *   }
     * })
    **/
    upsert<T extends SessionDurationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDurationUpsertArgs<ExtArgs>>
    ): Prisma__SessionDurationClient<$Result.GetResult<Prisma.$SessionDurationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SessionDurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationCountArgs} args - Arguments to filter SessionDurations to count.
     * @example
     * // Count the number of SessionDurations
     * const count = await prisma.sessionDuration.count({
     *   where: {
     *     // ... the filter for the SessionDurations we want to count
     *   }
     * })
    **/
    count<T extends SessionDurationCountArgs>(
      args?: Subset<T, SessionDurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionDurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionDuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionDurationAggregateArgs>(args: Subset<T, SessionDurationAggregateArgs>): Prisma.PrismaPromise<GetSessionDurationAggregateType<T>>

    /**
     * Group by SessionDuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionDurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionDurationGroupByArgs['orderBy'] }
        : { orderBy?: SessionDurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionDurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionDurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionDuration model
   */
  readonly fields: SessionDurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionDuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionDurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SessionDuration model
   */ 
  interface SessionDurationFieldRefs {
    readonly id: FieldRef<"SessionDuration", 'String'>
    readonly createdAt: FieldRef<"SessionDuration", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionDuration", 'DateTime'>
    readonly sessionDuration: FieldRef<"SessionDuration", 'Int'>
    readonly breakDuration: FieldRef<"SessionDuration", 'Int'>
    readonly longBreakDuration: FieldRef<"SessionDuration", 'Int'>
    readonly sessionsCount: FieldRef<"SessionDuration", 'Int'>
    readonly userId: FieldRef<"SessionDuration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionDuration findUnique
   */
  export type SessionDurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter, which SessionDuration to fetch.
     */
    where: SessionDurationWhereUniqueInput
  }

  /**
   * SessionDuration findUniqueOrThrow
   */
  export type SessionDurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter, which SessionDuration to fetch.
     */
    where: SessionDurationWhereUniqueInput
  }

  /**
   * SessionDuration findFirst
   */
  export type SessionDurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter, which SessionDuration to fetch.
     */
    where?: SessionDurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDurations to fetch.
     */
    orderBy?: SessionDurationOrderByWithRelationInput | SessionDurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionDurations.
     */
    cursor?: SessionDurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionDurations.
     */
    distinct?: SessionDurationScalarFieldEnum | SessionDurationScalarFieldEnum[]
  }

  /**
   * SessionDuration findFirstOrThrow
   */
  export type SessionDurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter, which SessionDuration to fetch.
     */
    where?: SessionDurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDurations to fetch.
     */
    orderBy?: SessionDurationOrderByWithRelationInput | SessionDurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionDurations.
     */
    cursor?: SessionDurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionDurations.
     */
    distinct?: SessionDurationScalarFieldEnum | SessionDurationScalarFieldEnum[]
  }

  /**
   * SessionDuration findMany
   */
  export type SessionDurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter, which SessionDurations to fetch.
     */
    where?: SessionDurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDurations to fetch.
     */
    orderBy?: SessionDurationOrderByWithRelationInput | SessionDurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionDurations.
     */
    cursor?: SessionDurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDurations.
     */
    skip?: number
    distinct?: SessionDurationScalarFieldEnum | SessionDurationScalarFieldEnum[]
  }

  /**
   * SessionDuration create
   */
  export type SessionDurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionDuration.
     */
    data: XOR<SessionDurationCreateInput, SessionDurationUncheckedCreateInput>
  }

  /**
   * SessionDuration createMany
   */
  export type SessionDurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionDurations.
     */
    data: SessionDurationCreateManyInput | SessionDurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionDuration update
   */
  export type SessionDurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionDuration.
     */
    data: XOR<SessionDurationUpdateInput, SessionDurationUncheckedUpdateInput>
    /**
     * Choose, which SessionDuration to update.
     */
    where: SessionDurationWhereUniqueInput
  }

  /**
   * SessionDuration updateMany
   */
  export type SessionDurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionDurations.
     */
    data: XOR<SessionDurationUpdateManyMutationInput, SessionDurationUncheckedUpdateManyInput>
    /**
     * Filter which SessionDurations to update
     */
    where?: SessionDurationWhereInput
  }

  /**
   * SessionDuration upsert
   */
  export type SessionDurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionDuration to update in case it exists.
     */
    where: SessionDurationWhereUniqueInput
    /**
     * In case the SessionDuration found by the `where` argument doesn't exist, create a new SessionDuration with this data.
     */
    create: XOR<SessionDurationCreateInput, SessionDurationUncheckedCreateInput>
    /**
     * In case the SessionDuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionDurationUpdateInput, SessionDurationUncheckedUpdateInput>
  }

  /**
   * SessionDuration delete
   */
  export type SessionDurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
    /**
     * Filter which SessionDuration to delete.
     */
    where: SessionDurationWhereUniqueInput
  }

  /**
   * SessionDuration deleteMany
   */
  export type SessionDurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionDurations to delete
     */
    where?: SessionDurationWhereInput
  }

  /**
   * SessionDuration without action
   */
  export type SessionDurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDuration
     */
    select?: SessionDurationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDurationInclude<ExtArgs> | null
  }


  /**
   * Model ClientProgressAnxiety
   */

  export type AggregateClientProgressAnxiety = {
    _count: ClientProgressAnxietyCountAggregateOutputType | null
    _avg: ClientProgressAnxietyAvgAggregateOutputType | null
    _sum: ClientProgressAnxietySumAggregateOutputType | null
    _min: ClientProgressAnxietyMinAggregateOutputType | null
    _max: ClientProgressAnxietyMaxAggregateOutputType | null
  }

  export type ClientProgressAnxietyAvgAggregateOutputType = {
    suddendlyscared: number | null
    fearful: number | null
    faintness: number | null
    nervousness: number | null
    heartRacing: number | null
    trembling: number | null
    feelingTense: number | null
    headaches: number | null
    panic: number | null
    restlessness: number | null
  }

  export type ClientProgressAnxietySumAggregateOutputType = {
    suddendlyscared: number | null
    fearful: number | null
    faintness: number | null
    nervousness: number | null
    heartRacing: number | null
    trembling: number | null
    feelingTense: number | null
    headaches: number | null
    panic: number | null
    restlessness: number | null
  }

  export type ClientProgressAnxietyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    suddendlyscared: number | null
    fearful: number | null
    faintness: number | null
    nervousness: number | null
    heartRacing: number | null
    trembling: number | null
    feelingTense: number | null
    headaches: number | null
    panic: number | null
    restlessness: number | null
    clientId: string | null
  }

  export type ClientProgressAnxietyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    suddendlyscared: number | null
    fearful: number | null
    faintness: number | null
    nervousness: number | null
    heartRacing: number | null
    trembling: number | null
    feelingTense: number | null
    headaches: number | null
    panic: number | null
    restlessness: number | null
    clientId: string | null
  }

  export type ClientProgressAnxietyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    suddendlyscared: number
    fearful: number
    faintness: number
    nervousness: number
    heartRacing: number
    trembling: number
    feelingTense: number
    headaches: number
    panic: number
    restlessness: number
    clientId: number
    _all: number
  }


  export type ClientProgressAnxietyAvgAggregateInputType = {
    suddendlyscared?: true
    fearful?: true
    faintness?: true
    nervousness?: true
    heartRacing?: true
    trembling?: true
    feelingTense?: true
    headaches?: true
    panic?: true
    restlessness?: true
  }

  export type ClientProgressAnxietySumAggregateInputType = {
    suddendlyscared?: true
    fearful?: true
    faintness?: true
    nervousness?: true
    heartRacing?: true
    trembling?: true
    feelingTense?: true
    headaches?: true
    panic?: true
    restlessness?: true
  }

  export type ClientProgressAnxietyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    suddendlyscared?: true
    fearful?: true
    faintness?: true
    nervousness?: true
    heartRacing?: true
    trembling?: true
    feelingTense?: true
    headaches?: true
    panic?: true
    restlessness?: true
    clientId?: true
  }

  export type ClientProgressAnxietyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    suddendlyscared?: true
    fearful?: true
    faintness?: true
    nervousness?: true
    heartRacing?: true
    trembling?: true
    feelingTense?: true
    headaches?: true
    panic?: true
    restlessness?: true
    clientId?: true
  }

  export type ClientProgressAnxietyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    suddendlyscared?: true
    fearful?: true
    faintness?: true
    nervousness?: true
    heartRacing?: true
    trembling?: true
    feelingTense?: true
    headaches?: true
    panic?: true
    restlessness?: true
    clientId?: true
    _all?: true
  }

  export type ClientProgressAnxietyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProgressAnxiety to aggregate.
     */
    where?: ClientProgressAnxietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressAnxieties to fetch.
     */
    orderBy?: ClientProgressAnxietyOrderByWithRelationInput | ClientProgressAnxietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientProgressAnxietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressAnxieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressAnxieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientProgressAnxieties
    **/
    _count?: true | ClientProgressAnxietyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientProgressAnxietyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientProgressAnxietySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientProgressAnxietyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientProgressAnxietyMaxAggregateInputType
  }

  export type GetClientProgressAnxietyAggregateType<T extends ClientProgressAnxietyAggregateArgs> = {
        [P in keyof T & keyof AggregateClientProgressAnxiety]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientProgressAnxiety[P]>
      : GetScalarType<T[P], AggregateClientProgressAnxiety[P]>
  }




  export type ClientProgressAnxietyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProgressAnxietyWhereInput
    orderBy?: ClientProgressAnxietyOrderByWithAggregationInput | ClientProgressAnxietyOrderByWithAggregationInput[]
    by: ClientProgressAnxietyScalarFieldEnum[] | ClientProgressAnxietyScalarFieldEnum
    having?: ClientProgressAnxietyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientProgressAnxietyCountAggregateInputType | true
    _avg?: ClientProgressAnxietyAvgAggregateInputType
    _sum?: ClientProgressAnxietySumAggregateInputType
    _min?: ClientProgressAnxietyMinAggregateInputType
    _max?: ClientProgressAnxietyMaxAggregateInputType
  }

  export type ClientProgressAnxietyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    suddendlyscared: number | null
    fearful: number | null
    faintness: number | null
    nervousness: number | null
    heartRacing: number | null
    trembling: number | null
    feelingTense: number | null
    headaches: number | null
    panic: number | null
    restlessness: number | null
    clientId: string
    _count: ClientProgressAnxietyCountAggregateOutputType | null
    _avg: ClientProgressAnxietyAvgAggregateOutputType | null
    _sum: ClientProgressAnxietySumAggregateOutputType | null
    _min: ClientProgressAnxietyMinAggregateOutputType | null
    _max: ClientProgressAnxietyMaxAggregateOutputType | null
  }

  type GetClientProgressAnxietyGroupByPayload<T extends ClientProgressAnxietyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientProgressAnxietyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientProgressAnxietyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientProgressAnxietyGroupByOutputType[P]>
            : GetScalarType<T[P], ClientProgressAnxietyGroupByOutputType[P]>
        }
      >
    >


  export type ClientProgressAnxietySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suddendlyscared?: boolean
    fearful?: boolean
    faintness?: boolean
    nervousness?: boolean
    heartRacing?: boolean
    trembling?: boolean
    feelingTense?: boolean
    headaches?: boolean
    panic?: boolean
    restlessness?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProgressAnxiety"]>

  export type ClientProgressAnxietySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suddendlyscared?: boolean
    fearful?: boolean
    faintness?: boolean
    nervousness?: boolean
    heartRacing?: boolean
    trembling?: boolean
    feelingTense?: boolean
    headaches?: boolean
    panic?: boolean
    restlessness?: boolean
    clientId?: boolean
  }


  export type ClientProgressAnxietyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }


  export type $ClientProgressAnxietyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientProgressAnxiety"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      suddendlyscared: number | null
      fearful: number | null
      faintness: number | null
      nervousness: number | null
      heartRacing: number | null
      trembling: number | null
      feelingTense: number | null
      headaches: number | null
      panic: number | null
      restlessness: number | null
      clientId: string
    }, ExtArgs["result"]["clientProgressAnxiety"]>
    composites: {}
  }


  type ClientProgressAnxietyGetPayload<S extends boolean | null | undefined | ClientProgressAnxietyDefaultArgs> = $Result.GetResult<Prisma.$ClientProgressAnxietyPayload, S>

  type ClientProgressAnxietyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientProgressAnxietyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientProgressAnxietyCountAggregateInputType | true
    }

  export interface ClientProgressAnxietyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientProgressAnxiety'], meta: { name: 'ClientProgressAnxiety' } }
    /**
     * Find zero or one ClientProgressAnxiety that matches the filter.
     * @param {ClientProgressAnxietyFindUniqueArgs} args - Arguments to find a ClientProgressAnxiety
     * @example
     * // Get one ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientProgressAnxietyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClientProgressAnxiety that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientProgressAnxietyFindUniqueOrThrowArgs} args - Arguments to find a ClientProgressAnxiety
     * @example
     * // Get one ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientProgressAnxietyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClientProgressAnxiety that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyFindFirstArgs} args - Arguments to find a ClientProgressAnxiety
     * @example
     * // Get one ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientProgressAnxietyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyFindFirstArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClientProgressAnxiety that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyFindFirstOrThrowArgs} args - Arguments to find a ClientProgressAnxiety
     * @example
     * // Get one ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientProgressAnxietyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClientProgressAnxieties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientProgressAnxieties
     * const clientProgressAnxieties = await prisma.clientProgressAnxiety.findMany()
     * 
     * // Get first 10 ClientProgressAnxieties
     * const clientProgressAnxieties = await prisma.clientProgressAnxiety.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientProgressAnxietyWithIdOnly = await prisma.clientProgressAnxiety.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientProgressAnxietyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClientProgressAnxiety.
     * @param {ClientProgressAnxietyCreateArgs} args - Arguments to create a ClientProgressAnxiety.
     * @example
     * // Create one ClientProgressAnxiety
     * const ClientProgressAnxiety = await prisma.clientProgressAnxiety.create({
     *   data: {
     *     // ... data to create a ClientProgressAnxiety
     *   }
     * })
     * 
    **/
    create<T extends ClientProgressAnxietyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyCreateArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClientProgressAnxieties.
     *     @param {ClientProgressAnxietyCreateManyArgs} args - Arguments to create many ClientProgressAnxieties.
     *     @example
     *     // Create many ClientProgressAnxieties
     *     const clientProgressAnxiety = await prisma.clientProgressAnxiety.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientProgressAnxietyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientProgressAnxiety.
     * @param {ClientProgressAnxietyDeleteArgs} args - Arguments to delete one ClientProgressAnxiety.
     * @example
     * // Delete one ClientProgressAnxiety
     * const ClientProgressAnxiety = await prisma.clientProgressAnxiety.delete({
     *   where: {
     *     // ... filter to delete one ClientProgressAnxiety
     *   }
     * })
     * 
    **/
    delete<T extends ClientProgressAnxietyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyDeleteArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClientProgressAnxiety.
     * @param {ClientProgressAnxietyUpdateArgs} args - Arguments to update one ClientProgressAnxiety.
     * @example
     * // Update one ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientProgressAnxietyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyUpdateArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClientProgressAnxieties.
     * @param {ClientProgressAnxietyDeleteManyArgs} args - Arguments to filter ClientProgressAnxieties to delete.
     * @example
     * // Delete a few ClientProgressAnxieties
     * const { count } = await prisma.clientProgressAnxiety.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientProgressAnxietyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressAnxietyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProgressAnxieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientProgressAnxieties
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientProgressAnxietyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientProgressAnxiety.
     * @param {ClientProgressAnxietyUpsertArgs} args - Arguments to update or create a ClientProgressAnxiety.
     * @example
     * // Update or create a ClientProgressAnxiety
     * const clientProgressAnxiety = await prisma.clientProgressAnxiety.upsert({
     *   create: {
     *     // ... data to create a ClientProgressAnxiety
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientProgressAnxiety we want to update
     *   }
     * })
    **/
    upsert<T extends ClientProgressAnxietyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressAnxietyUpsertArgs<ExtArgs>>
    ): Prisma__ClientProgressAnxietyClient<$Result.GetResult<Prisma.$ClientProgressAnxietyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClientProgressAnxieties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyCountArgs} args - Arguments to filter ClientProgressAnxieties to count.
     * @example
     * // Count the number of ClientProgressAnxieties
     * const count = await prisma.clientProgressAnxiety.count({
     *   where: {
     *     // ... the filter for the ClientProgressAnxieties we want to count
     *   }
     * })
    **/
    count<T extends ClientProgressAnxietyCountArgs>(
      args?: Subset<T, ClientProgressAnxietyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientProgressAnxietyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientProgressAnxiety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientProgressAnxietyAggregateArgs>(args: Subset<T, ClientProgressAnxietyAggregateArgs>): Prisma.PrismaPromise<GetClientProgressAnxietyAggregateType<T>>

    /**
     * Group by ClientProgressAnxiety.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressAnxietyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientProgressAnxietyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientProgressAnxietyGroupByArgs['orderBy'] }
        : { orderBy?: ClientProgressAnxietyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientProgressAnxietyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientProgressAnxietyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientProgressAnxiety model
   */
  readonly fields: ClientProgressAnxietyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientProgressAnxiety.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientProgressAnxietyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ClientProgressAnxiety model
   */ 
  interface ClientProgressAnxietyFieldRefs {
    readonly id: FieldRef<"ClientProgressAnxiety", 'String'>
    readonly createdAt: FieldRef<"ClientProgressAnxiety", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientProgressAnxiety", 'DateTime'>
    readonly suddendlyscared: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly fearful: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly faintness: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly nervousness: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly heartRacing: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly trembling: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly feelingTense: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly headaches: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly panic: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly restlessness: FieldRef<"ClientProgressAnxiety", 'Int'>
    readonly clientId: FieldRef<"ClientProgressAnxiety", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientProgressAnxiety findUnique
   */
  export type ClientProgressAnxietyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressAnxiety to fetch.
     */
    where: ClientProgressAnxietyWhereUniqueInput
  }

  /**
   * ClientProgressAnxiety findUniqueOrThrow
   */
  export type ClientProgressAnxietyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressAnxiety to fetch.
     */
    where: ClientProgressAnxietyWhereUniqueInput
  }

  /**
   * ClientProgressAnxiety findFirst
   */
  export type ClientProgressAnxietyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressAnxiety to fetch.
     */
    where?: ClientProgressAnxietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressAnxieties to fetch.
     */
    orderBy?: ClientProgressAnxietyOrderByWithRelationInput | ClientProgressAnxietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProgressAnxieties.
     */
    cursor?: ClientProgressAnxietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressAnxieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressAnxieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProgressAnxieties.
     */
    distinct?: ClientProgressAnxietyScalarFieldEnum | ClientProgressAnxietyScalarFieldEnum[]
  }

  /**
   * ClientProgressAnxiety findFirstOrThrow
   */
  export type ClientProgressAnxietyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressAnxiety to fetch.
     */
    where?: ClientProgressAnxietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressAnxieties to fetch.
     */
    orderBy?: ClientProgressAnxietyOrderByWithRelationInput | ClientProgressAnxietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProgressAnxieties.
     */
    cursor?: ClientProgressAnxietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressAnxieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressAnxieties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProgressAnxieties.
     */
    distinct?: ClientProgressAnxietyScalarFieldEnum | ClientProgressAnxietyScalarFieldEnum[]
  }

  /**
   * ClientProgressAnxiety findMany
   */
  export type ClientProgressAnxietyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressAnxieties to fetch.
     */
    where?: ClientProgressAnxietyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressAnxieties to fetch.
     */
    orderBy?: ClientProgressAnxietyOrderByWithRelationInput | ClientProgressAnxietyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientProgressAnxieties.
     */
    cursor?: ClientProgressAnxietyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressAnxieties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressAnxieties.
     */
    skip?: number
    distinct?: ClientProgressAnxietyScalarFieldEnum | ClientProgressAnxietyScalarFieldEnum[]
  }

  /**
   * ClientProgressAnxiety create
   */
  export type ClientProgressAnxietyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientProgressAnxiety.
     */
    data: XOR<ClientProgressAnxietyCreateInput, ClientProgressAnxietyUncheckedCreateInput>
  }

  /**
   * ClientProgressAnxiety createMany
   */
  export type ClientProgressAnxietyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientProgressAnxieties.
     */
    data: ClientProgressAnxietyCreateManyInput | ClientProgressAnxietyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientProgressAnxiety update
   */
  export type ClientProgressAnxietyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientProgressAnxiety.
     */
    data: XOR<ClientProgressAnxietyUpdateInput, ClientProgressAnxietyUncheckedUpdateInput>
    /**
     * Choose, which ClientProgressAnxiety to update.
     */
    where: ClientProgressAnxietyWhereUniqueInput
  }

  /**
   * ClientProgressAnxiety updateMany
   */
  export type ClientProgressAnxietyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientProgressAnxieties.
     */
    data: XOR<ClientProgressAnxietyUpdateManyMutationInput, ClientProgressAnxietyUncheckedUpdateManyInput>
    /**
     * Filter which ClientProgressAnxieties to update
     */
    where?: ClientProgressAnxietyWhereInput
  }

  /**
   * ClientProgressAnxiety upsert
   */
  export type ClientProgressAnxietyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientProgressAnxiety to update in case it exists.
     */
    where: ClientProgressAnxietyWhereUniqueInput
    /**
     * In case the ClientProgressAnxiety found by the `where` argument doesn't exist, create a new ClientProgressAnxiety with this data.
     */
    create: XOR<ClientProgressAnxietyCreateInput, ClientProgressAnxietyUncheckedCreateInput>
    /**
     * In case the ClientProgressAnxiety was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientProgressAnxietyUpdateInput, ClientProgressAnxietyUncheckedUpdateInput>
  }

  /**
   * ClientProgressAnxiety delete
   */
  export type ClientProgressAnxietyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
    /**
     * Filter which ClientProgressAnxiety to delete.
     */
    where: ClientProgressAnxietyWhereUniqueInput
  }

  /**
   * ClientProgressAnxiety deleteMany
   */
  export type ClientProgressAnxietyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProgressAnxieties to delete
     */
    where?: ClientProgressAnxietyWhereInput
  }

  /**
   * ClientProgressAnxiety without action
   */
  export type ClientProgressAnxietyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressAnxiety
     */
    select?: ClientProgressAnxietySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressAnxietyInclude<ExtArgs> | null
  }


  /**
   * Model ClientProgressDepression
   */

  export type AggregateClientProgressDepression = {
    _count: ClientProgressDepressionCountAggregateOutputType | null
    _avg: ClientProgressDepressionAvgAggregateOutputType | null
    _sum: ClientProgressDepressionSumAggregateOutputType | null
    _min: ClientProgressDepressionMinAggregateOutputType | null
    _max: ClientProgressDepressionMaxAggregateOutputType | null
  }

  export type ClientProgressDepressionAvgAggregateOutputType = {
    lowEnergy: number | null
    blamingyourself: number | null
    crying: number | null
    sexualLoss: number | null
    poorAppetite: number | null
    insomnia: number | null
    hopeness: number | null
    feelingBlue: number | null
    feelingLonely: number | null
    endingLifeThoughts: number | null
    tpappedFeelings: number | null
    wooringTooMuch: number | null
    feelingNoInterest: number | null
    feelingEffortless: number | null
    feelingWorthlessness: number | null
  }

  export type ClientProgressDepressionSumAggregateOutputType = {
    lowEnergy: number | null
    blamingyourself: number | null
    crying: number | null
    sexualLoss: number | null
    poorAppetite: number | null
    insomnia: number | null
    hopeness: number | null
    feelingBlue: number | null
    feelingLonely: number | null
    endingLifeThoughts: number | null
    tpappedFeelings: number | null
    wooringTooMuch: number | null
    feelingNoInterest: number | null
    feelingEffortless: number | null
    feelingWorthlessness: number | null
  }

  export type ClientProgressDepressionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lowEnergy: number | null
    blamingyourself: number | null
    crying: number | null
    sexualLoss: number | null
    poorAppetite: number | null
    insomnia: number | null
    hopeness: number | null
    feelingBlue: number | null
    feelingLonely: number | null
    endingLifeThoughts: number | null
    tpappedFeelings: number | null
    wooringTooMuch: number | null
    feelingNoInterest: number | null
    feelingEffortless: number | null
    feelingWorthlessness: number | null
    clientId: string | null
  }

  export type ClientProgressDepressionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lowEnergy: number | null
    blamingyourself: number | null
    crying: number | null
    sexualLoss: number | null
    poorAppetite: number | null
    insomnia: number | null
    hopeness: number | null
    feelingBlue: number | null
    feelingLonely: number | null
    endingLifeThoughts: number | null
    tpappedFeelings: number | null
    wooringTooMuch: number | null
    feelingNoInterest: number | null
    feelingEffortless: number | null
    feelingWorthlessness: number | null
    clientId: string | null
  }

  export type ClientProgressDepressionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    lowEnergy: number
    blamingyourself: number
    crying: number
    sexualLoss: number
    poorAppetite: number
    insomnia: number
    hopeness: number
    feelingBlue: number
    feelingLonely: number
    endingLifeThoughts: number
    tpappedFeelings: number
    wooringTooMuch: number
    feelingNoInterest: number
    feelingEffortless: number
    feelingWorthlessness: number
    clientId: number
    _all: number
  }


  export type ClientProgressDepressionAvgAggregateInputType = {
    lowEnergy?: true
    blamingyourself?: true
    crying?: true
    sexualLoss?: true
    poorAppetite?: true
    insomnia?: true
    hopeness?: true
    feelingBlue?: true
    feelingLonely?: true
    endingLifeThoughts?: true
    tpappedFeelings?: true
    wooringTooMuch?: true
    feelingNoInterest?: true
    feelingEffortless?: true
    feelingWorthlessness?: true
  }

  export type ClientProgressDepressionSumAggregateInputType = {
    lowEnergy?: true
    blamingyourself?: true
    crying?: true
    sexualLoss?: true
    poorAppetite?: true
    insomnia?: true
    hopeness?: true
    feelingBlue?: true
    feelingLonely?: true
    endingLifeThoughts?: true
    tpappedFeelings?: true
    wooringTooMuch?: true
    feelingNoInterest?: true
    feelingEffortless?: true
    feelingWorthlessness?: true
  }

  export type ClientProgressDepressionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lowEnergy?: true
    blamingyourself?: true
    crying?: true
    sexualLoss?: true
    poorAppetite?: true
    insomnia?: true
    hopeness?: true
    feelingBlue?: true
    feelingLonely?: true
    endingLifeThoughts?: true
    tpappedFeelings?: true
    wooringTooMuch?: true
    feelingNoInterest?: true
    feelingEffortless?: true
    feelingWorthlessness?: true
    clientId?: true
  }

  export type ClientProgressDepressionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lowEnergy?: true
    blamingyourself?: true
    crying?: true
    sexualLoss?: true
    poorAppetite?: true
    insomnia?: true
    hopeness?: true
    feelingBlue?: true
    feelingLonely?: true
    endingLifeThoughts?: true
    tpappedFeelings?: true
    wooringTooMuch?: true
    feelingNoInterest?: true
    feelingEffortless?: true
    feelingWorthlessness?: true
    clientId?: true
  }

  export type ClientProgressDepressionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lowEnergy?: true
    blamingyourself?: true
    crying?: true
    sexualLoss?: true
    poorAppetite?: true
    insomnia?: true
    hopeness?: true
    feelingBlue?: true
    feelingLonely?: true
    endingLifeThoughts?: true
    tpappedFeelings?: true
    wooringTooMuch?: true
    feelingNoInterest?: true
    feelingEffortless?: true
    feelingWorthlessness?: true
    clientId?: true
    _all?: true
  }

  export type ClientProgressDepressionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProgressDepression to aggregate.
     */
    where?: ClientProgressDepressionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressDepressions to fetch.
     */
    orderBy?: ClientProgressDepressionOrderByWithRelationInput | ClientProgressDepressionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientProgressDepressionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressDepressions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressDepressions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientProgressDepressions
    **/
    _count?: true | ClientProgressDepressionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientProgressDepressionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientProgressDepressionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientProgressDepressionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientProgressDepressionMaxAggregateInputType
  }

  export type GetClientProgressDepressionAggregateType<T extends ClientProgressDepressionAggregateArgs> = {
        [P in keyof T & keyof AggregateClientProgressDepression]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientProgressDepression[P]>
      : GetScalarType<T[P], AggregateClientProgressDepression[P]>
  }




  export type ClientProgressDepressionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProgressDepressionWhereInput
    orderBy?: ClientProgressDepressionOrderByWithAggregationInput | ClientProgressDepressionOrderByWithAggregationInput[]
    by: ClientProgressDepressionScalarFieldEnum[] | ClientProgressDepressionScalarFieldEnum
    having?: ClientProgressDepressionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientProgressDepressionCountAggregateInputType | true
    _avg?: ClientProgressDepressionAvgAggregateInputType
    _sum?: ClientProgressDepressionSumAggregateInputType
    _min?: ClientProgressDepressionMinAggregateInputType
    _max?: ClientProgressDepressionMaxAggregateInputType
  }

  export type ClientProgressDepressionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    lowEnergy: number | null
    blamingyourself: number | null
    crying: number | null
    sexualLoss: number | null
    poorAppetite: number | null
    insomnia: number | null
    hopeness: number | null
    feelingBlue: number | null
    feelingLonely: number | null
    endingLifeThoughts: number | null
    tpappedFeelings: number | null
    wooringTooMuch: number | null
    feelingNoInterest: number | null
    feelingEffortless: number | null
    feelingWorthlessness: number | null
    clientId: string
    _count: ClientProgressDepressionCountAggregateOutputType | null
    _avg: ClientProgressDepressionAvgAggregateOutputType | null
    _sum: ClientProgressDepressionSumAggregateOutputType | null
    _min: ClientProgressDepressionMinAggregateOutputType | null
    _max: ClientProgressDepressionMaxAggregateOutputType | null
  }

  type GetClientProgressDepressionGroupByPayload<T extends ClientProgressDepressionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientProgressDepressionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientProgressDepressionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientProgressDepressionGroupByOutputType[P]>
            : GetScalarType<T[P], ClientProgressDepressionGroupByOutputType[P]>
        }
      >
    >


  export type ClientProgressDepressionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lowEnergy?: boolean
    blamingyourself?: boolean
    crying?: boolean
    sexualLoss?: boolean
    poorAppetite?: boolean
    insomnia?: boolean
    hopeness?: boolean
    feelingBlue?: boolean
    feelingLonely?: boolean
    endingLifeThoughts?: boolean
    tpappedFeelings?: boolean
    wooringTooMuch?: boolean
    feelingNoInterest?: boolean
    feelingEffortless?: boolean
    feelingWorthlessness?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProgressDepression"]>

  export type ClientProgressDepressionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lowEnergy?: boolean
    blamingyourself?: boolean
    crying?: boolean
    sexualLoss?: boolean
    poorAppetite?: boolean
    insomnia?: boolean
    hopeness?: boolean
    feelingBlue?: boolean
    feelingLonely?: boolean
    endingLifeThoughts?: boolean
    tpappedFeelings?: boolean
    wooringTooMuch?: boolean
    feelingNoInterest?: boolean
    feelingEffortless?: boolean
    feelingWorthlessness?: boolean
    clientId?: boolean
  }


  export type ClientProgressDepressionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }


  export type $ClientProgressDepressionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientProgressDepression"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      lowEnergy: number | null
      blamingyourself: number | null
      crying: number | null
      sexualLoss: number | null
      poorAppetite: number | null
      insomnia: number | null
      hopeness: number | null
      feelingBlue: number | null
      feelingLonely: number | null
      endingLifeThoughts: number | null
      tpappedFeelings: number | null
      wooringTooMuch: number | null
      feelingNoInterest: number | null
      feelingEffortless: number | null
      feelingWorthlessness: number | null
      clientId: string
    }, ExtArgs["result"]["clientProgressDepression"]>
    composites: {}
  }


  type ClientProgressDepressionGetPayload<S extends boolean | null | undefined | ClientProgressDepressionDefaultArgs> = $Result.GetResult<Prisma.$ClientProgressDepressionPayload, S>

  type ClientProgressDepressionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientProgressDepressionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientProgressDepressionCountAggregateInputType | true
    }

  export interface ClientProgressDepressionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientProgressDepression'], meta: { name: 'ClientProgressDepression' } }
    /**
     * Find zero or one ClientProgressDepression that matches the filter.
     * @param {ClientProgressDepressionFindUniqueArgs} args - Arguments to find a ClientProgressDepression
     * @example
     * // Get one ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientProgressDepressionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClientProgressDepression that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientProgressDepressionFindUniqueOrThrowArgs} args - Arguments to find a ClientProgressDepression
     * @example
     * // Get one ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientProgressDepressionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClientProgressDepression that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionFindFirstArgs} args - Arguments to find a ClientProgressDepression
     * @example
     * // Get one ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientProgressDepressionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionFindFirstArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClientProgressDepression that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionFindFirstOrThrowArgs} args - Arguments to find a ClientProgressDepression
     * @example
     * // Get one ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientProgressDepressionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClientProgressDepressions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientProgressDepressions
     * const clientProgressDepressions = await prisma.clientProgressDepression.findMany()
     * 
     * // Get first 10 ClientProgressDepressions
     * const clientProgressDepressions = await prisma.clientProgressDepression.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientProgressDepressionWithIdOnly = await prisma.clientProgressDepression.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientProgressDepressionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClientProgressDepression.
     * @param {ClientProgressDepressionCreateArgs} args - Arguments to create a ClientProgressDepression.
     * @example
     * // Create one ClientProgressDepression
     * const ClientProgressDepression = await prisma.clientProgressDepression.create({
     *   data: {
     *     // ... data to create a ClientProgressDepression
     *   }
     * })
     * 
    **/
    create<T extends ClientProgressDepressionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionCreateArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClientProgressDepressions.
     *     @param {ClientProgressDepressionCreateManyArgs} args - Arguments to create many ClientProgressDepressions.
     *     @example
     *     // Create many ClientProgressDepressions
     *     const clientProgressDepression = await prisma.clientProgressDepression.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientProgressDepressionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientProgressDepression.
     * @param {ClientProgressDepressionDeleteArgs} args - Arguments to delete one ClientProgressDepression.
     * @example
     * // Delete one ClientProgressDepression
     * const ClientProgressDepression = await prisma.clientProgressDepression.delete({
     *   where: {
     *     // ... filter to delete one ClientProgressDepression
     *   }
     * })
     * 
    **/
    delete<T extends ClientProgressDepressionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionDeleteArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClientProgressDepression.
     * @param {ClientProgressDepressionUpdateArgs} args - Arguments to update one ClientProgressDepression.
     * @example
     * // Update one ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientProgressDepressionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionUpdateArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClientProgressDepressions.
     * @param {ClientProgressDepressionDeleteManyArgs} args - Arguments to filter ClientProgressDepressions to delete.
     * @example
     * // Delete a few ClientProgressDepressions
     * const { count } = await prisma.clientProgressDepression.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientProgressDepressionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientProgressDepressionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProgressDepressions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientProgressDepressions
     * const clientProgressDepression = await prisma.clientProgressDepression.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientProgressDepressionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientProgressDepression.
     * @param {ClientProgressDepressionUpsertArgs} args - Arguments to update or create a ClientProgressDepression.
     * @example
     * // Update or create a ClientProgressDepression
     * const clientProgressDepression = await prisma.clientProgressDepression.upsert({
     *   create: {
     *     // ... data to create a ClientProgressDepression
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientProgressDepression we want to update
     *   }
     * })
    **/
    upsert<T extends ClientProgressDepressionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientProgressDepressionUpsertArgs<ExtArgs>>
    ): Prisma__ClientProgressDepressionClient<$Result.GetResult<Prisma.$ClientProgressDepressionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClientProgressDepressions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionCountArgs} args - Arguments to filter ClientProgressDepressions to count.
     * @example
     * // Count the number of ClientProgressDepressions
     * const count = await prisma.clientProgressDepression.count({
     *   where: {
     *     // ... the filter for the ClientProgressDepressions we want to count
     *   }
     * })
    **/
    count<T extends ClientProgressDepressionCountArgs>(
      args?: Subset<T, ClientProgressDepressionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientProgressDepressionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientProgressDepression.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientProgressDepressionAggregateArgs>(args: Subset<T, ClientProgressDepressionAggregateArgs>): Prisma.PrismaPromise<GetClientProgressDepressionAggregateType<T>>

    /**
     * Group by ClientProgressDepression.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProgressDepressionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientProgressDepressionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientProgressDepressionGroupByArgs['orderBy'] }
        : { orderBy?: ClientProgressDepressionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientProgressDepressionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientProgressDepressionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientProgressDepression model
   */
  readonly fields: ClientProgressDepressionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientProgressDepression.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientProgressDepressionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ClientProgressDepression model
   */ 
  interface ClientProgressDepressionFieldRefs {
    readonly id: FieldRef<"ClientProgressDepression", 'String'>
    readonly createdAt: FieldRef<"ClientProgressDepression", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientProgressDepression", 'DateTime'>
    readonly lowEnergy: FieldRef<"ClientProgressDepression", 'Int'>
    readonly blamingyourself: FieldRef<"ClientProgressDepression", 'Int'>
    readonly crying: FieldRef<"ClientProgressDepression", 'Int'>
    readonly sexualLoss: FieldRef<"ClientProgressDepression", 'Int'>
    readonly poorAppetite: FieldRef<"ClientProgressDepression", 'Int'>
    readonly insomnia: FieldRef<"ClientProgressDepression", 'Int'>
    readonly hopeness: FieldRef<"ClientProgressDepression", 'Int'>
    readonly feelingBlue: FieldRef<"ClientProgressDepression", 'Int'>
    readonly feelingLonely: FieldRef<"ClientProgressDepression", 'Int'>
    readonly endingLifeThoughts: FieldRef<"ClientProgressDepression", 'Int'>
    readonly tpappedFeelings: FieldRef<"ClientProgressDepression", 'Int'>
    readonly wooringTooMuch: FieldRef<"ClientProgressDepression", 'Int'>
    readonly feelingNoInterest: FieldRef<"ClientProgressDepression", 'Int'>
    readonly feelingEffortless: FieldRef<"ClientProgressDepression", 'Int'>
    readonly feelingWorthlessness: FieldRef<"ClientProgressDepression", 'Int'>
    readonly clientId: FieldRef<"ClientProgressDepression", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientProgressDepression findUnique
   */
  export type ClientProgressDepressionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressDepression to fetch.
     */
    where: ClientProgressDepressionWhereUniqueInput
  }

  /**
   * ClientProgressDepression findUniqueOrThrow
   */
  export type ClientProgressDepressionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressDepression to fetch.
     */
    where: ClientProgressDepressionWhereUniqueInput
  }

  /**
   * ClientProgressDepression findFirst
   */
  export type ClientProgressDepressionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressDepression to fetch.
     */
    where?: ClientProgressDepressionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressDepressions to fetch.
     */
    orderBy?: ClientProgressDepressionOrderByWithRelationInput | ClientProgressDepressionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProgressDepressions.
     */
    cursor?: ClientProgressDepressionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressDepressions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressDepressions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProgressDepressions.
     */
    distinct?: ClientProgressDepressionScalarFieldEnum | ClientProgressDepressionScalarFieldEnum[]
  }

  /**
   * ClientProgressDepression findFirstOrThrow
   */
  export type ClientProgressDepressionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressDepression to fetch.
     */
    where?: ClientProgressDepressionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressDepressions to fetch.
     */
    orderBy?: ClientProgressDepressionOrderByWithRelationInput | ClientProgressDepressionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProgressDepressions.
     */
    cursor?: ClientProgressDepressionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressDepressions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressDepressions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProgressDepressions.
     */
    distinct?: ClientProgressDepressionScalarFieldEnum | ClientProgressDepressionScalarFieldEnum[]
  }

  /**
   * ClientProgressDepression findMany
   */
  export type ClientProgressDepressionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter, which ClientProgressDepressions to fetch.
     */
    where?: ClientProgressDepressionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProgressDepressions to fetch.
     */
    orderBy?: ClientProgressDepressionOrderByWithRelationInput | ClientProgressDepressionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientProgressDepressions.
     */
    cursor?: ClientProgressDepressionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProgressDepressions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProgressDepressions.
     */
    skip?: number
    distinct?: ClientProgressDepressionScalarFieldEnum | ClientProgressDepressionScalarFieldEnum[]
  }

  /**
   * ClientProgressDepression create
   */
  export type ClientProgressDepressionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientProgressDepression.
     */
    data: XOR<ClientProgressDepressionCreateInput, ClientProgressDepressionUncheckedCreateInput>
  }

  /**
   * ClientProgressDepression createMany
   */
  export type ClientProgressDepressionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientProgressDepressions.
     */
    data: ClientProgressDepressionCreateManyInput | ClientProgressDepressionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientProgressDepression update
   */
  export type ClientProgressDepressionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientProgressDepression.
     */
    data: XOR<ClientProgressDepressionUpdateInput, ClientProgressDepressionUncheckedUpdateInput>
    /**
     * Choose, which ClientProgressDepression to update.
     */
    where: ClientProgressDepressionWhereUniqueInput
  }

  /**
   * ClientProgressDepression updateMany
   */
  export type ClientProgressDepressionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientProgressDepressions.
     */
    data: XOR<ClientProgressDepressionUpdateManyMutationInput, ClientProgressDepressionUncheckedUpdateManyInput>
    /**
     * Filter which ClientProgressDepressions to update
     */
    where?: ClientProgressDepressionWhereInput
  }

  /**
   * ClientProgressDepression upsert
   */
  export type ClientProgressDepressionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientProgressDepression to update in case it exists.
     */
    where: ClientProgressDepressionWhereUniqueInput
    /**
     * In case the ClientProgressDepression found by the `where` argument doesn't exist, create a new ClientProgressDepression with this data.
     */
    create: XOR<ClientProgressDepressionCreateInput, ClientProgressDepressionUncheckedCreateInput>
    /**
     * In case the ClientProgressDepression was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientProgressDepressionUpdateInput, ClientProgressDepressionUncheckedUpdateInput>
  }

  /**
   * ClientProgressDepression delete
   */
  export type ClientProgressDepressionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
    /**
     * Filter which ClientProgressDepression to delete.
     */
    where: ClientProgressDepressionWhereUniqueInput
  }

  /**
   * ClientProgressDepression deleteMany
   */
  export type ClientProgressDepressionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProgressDepressions to delete
     */
    where?: ClientProgressDepressionWhereInput
  }

  /**
   * ClientProgressDepression without action
   */
  export type ClientProgressDepressionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProgressDepression
     */
    select?: ClientProgressDepressionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProgressDepressionInclude<ExtArgs> | null
  }


  /**
   * Model TelegramBotSession
   */

  export type AggregateTelegramBotSession = {
    _count: TelegramBotSessionCountAggregateOutputType | null
    _avg: TelegramBotSessionAvgAggregateOutputType | null
    _sum: TelegramBotSessionSumAggregateOutputType | null
    _min: TelegramBotSessionMinAggregateOutputType | null
    _max: TelegramBotSessionMaxAggregateOutputType | null
  }

  export type TelegramBotSessionAvgAggregateOutputType = {
    id: number | null
  }

  export type TelegramBotSessionSumAggregateOutputType = {
    id: number | null
  }

  export type TelegramBotSessionMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type TelegramBotSessionMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type TelegramBotSessionCountAggregateOutputType = {
    id: number
    key: number
    value: number
    _all: number
  }


  export type TelegramBotSessionAvgAggregateInputType = {
    id?: true
  }

  export type TelegramBotSessionSumAggregateInputType = {
    id?: true
  }

  export type TelegramBotSessionMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type TelegramBotSessionMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type TelegramBotSessionCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    _all?: true
  }

  export type TelegramBotSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramBotSession to aggregate.
     */
    where?: TelegramBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBotSessions to fetch.
     */
    orderBy?: TelegramBotSessionOrderByWithRelationInput | TelegramBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramBotSessions
    **/
    _count?: true | TelegramBotSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramBotSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramBotSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramBotSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramBotSessionMaxAggregateInputType
  }

  export type GetTelegramBotSessionAggregateType<T extends TelegramBotSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramBotSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramBotSession[P]>
      : GetScalarType<T[P], AggregateTelegramBotSession[P]>
  }




  export type TelegramBotSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramBotSessionWhereInput
    orderBy?: TelegramBotSessionOrderByWithAggregationInput | TelegramBotSessionOrderByWithAggregationInput[]
    by: TelegramBotSessionScalarFieldEnum[] | TelegramBotSessionScalarFieldEnum
    having?: TelegramBotSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramBotSessionCountAggregateInputType | true
    _avg?: TelegramBotSessionAvgAggregateInputType
    _sum?: TelegramBotSessionSumAggregateInputType
    _min?: TelegramBotSessionMinAggregateInputType
    _max?: TelegramBotSessionMaxAggregateInputType
  }

  export type TelegramBotSessionGroupByOutputType = {
    id: number
    key: string
    value: string
    _count: TelegramBotSessionCountAggregateOutputType | null
    _avg: TelegramBotSessionAvgAggregateOutputType | null
    _sum: TelegramBotSessionSumAggregateOutputType | null
    _min: TelegramBotSessionMinAggregateOutputType | null
    _max: TelegramBotSessionMaxAggregateOutputType | null
  }

  type GetTelegramBotSessionGroupByPayload<T extends TelegramBotSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramBotSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramBotSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramBotSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramBotSessionGroupByOutputType[P]>
        }
      >
    >


  export type TelegramBotSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["telegramBotSession"]>

  export type TelegramBotSessionSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
  }



  export type $TelegramBotSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramBotSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
    }, ExtArgs["result"]["telegramBotSession"]>
    composites: {}
  }


  type TelegramBotSessionGetPayload<S extends boolean | null | undefined | TelegramBotSessionDefaultArgs> = $Result.GetResult<Prisma.$TelegramBotSessionPayload, S>

  type TelegramBotSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TelegramBotSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TelegramBotSessionCountAggregateInputType | true
    }

  export interface TelegramBotSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramBotSession'], meta: { name: 'TelegramBotSession' } }
    /**
     * Find zero or one TelegramBotSession that matches the filter.
     * @param {TelegramBotSessionFindUniqueArgs} args - Arguments to find a TelegramBotSession
     * @example
     * // Get one TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TelegramBotSessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionFindUniqueArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TelegramBotSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TelegramBotSessionFindUniqueOrThrowArgs} args - Arguments to find a TelegramBotSession
     * @example
     * // Get one TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TelegramBotSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TelegramBotSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionFindFirstArgs} args - Arguments to find a TelegramBotSession
     * @example
     * // Get one TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TelegramBotSessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionFindFirstArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TelegramBotSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionFindFirstOrThrowArgs} args - Arguments to find a TelegramBotSession
     * @example
     * // Get one TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TelegramBotSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TelegramBotSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramBotSessions
     * const telegramBotSessions = await prisma.telegramBotSession.findMany()
     * 
     * // Get first 10 TelegramBotSessions
     * const telegramBotSessions = await prisma.telegramBotSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramBotSessionWithIdOnly = await prisma.telegramBotSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TelegramBotSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TelegramBotSession.
     * @param {TelegramBotSessionCreateArgs} args - Arguments to create a TelegramBotSession.
     * @example
     * // Create one TelegramBotSession
     * const TelegramBotSession = await prisma.telegramBotSession.create({
     *   data: {
     *     // ... data to create a TelegramBotSession
     *   }
     * })
     * 
    **/
    create<T extends TelegramBotSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionCreateArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TelegramBotSessions.
     *     @param {TelegramBotSessionCreateManyArgs} args - Arguments to create many TelegramBotSessions.
     *     @example
     *     // Create many TelegramBotSessions
     *     const telegramBotSession = await prisma.telegramBotSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TelegramBotSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TelegramBotSession.
     * @param {TelegramBotSessionDeleteArgs} args - Arguments to delete one TelegramBotSession.
     * @example
     * // Delete one TelegramBotSession
     * const TelegramBotSession = await prisma.telegramBotSession.delete({
     *   where: {
     *     // ... filter to delete one TelegramBotSession
     *   }
     * })
     * 
    **/
    delete<T extends TelegramBotSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionDeleteArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TelegramBotSession.
     * @param {TelegramBotSessionUpdateArgs} args - Arguments to update one TelegramBotSession.
     * @example
     * // Update one TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TelegramBotSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionUpdateArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TelegramBotSessions.
     * @param {TelegramBotSessionDeleteManyArgs} args - Arguments to filter TelegramBotSessions to delete.
     * @example
     * // Delete a few TelegramBotSessions
     * const { count } = await prisma.telegramBotSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TelegramBotSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramBotSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramBotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramBotSessions
     * const telegramBotSession = await prisma.telegramBotSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TelegramBotSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TelegramBotSession.
     * @param {TelegramBotSessionUpsertArgs} args - Arguments to update or create a TelegramBotSession.
     * @example
     * // Update or create a TelegramBotSession
     * const telegramBotSession = await prisma.telegramBotSession.upsert({
     *   create: {
     *     // ... data to create a TelegramBotSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramBotSession we want to update
     *   }
     * })
    **/
    upsert<T extends TelegramBotSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramBotSessionUpsertArgs<ExtArgs>>
    ): Prisma__TelegramBotSessionClient<$Result.GetResult<Prisma.$TelegramBotSessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TelegramBotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionCountArgs} args - Arguments to filter TelegramBotSessions to count.
     * @example
     * // Count the number of TelegramBotSessions
     * const count = await prisma.telegramBotSession.count({
     *   where: {
     *     // ... the filter for the TelegramBotSessions we want to count
     *   }
     * })
    **/
    count<T extends TelegramBotSessionCountArgs>(
      args?: Subset<T, TelegramBotSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramBotSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramBotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramBotSessionAggregateArgs>(args: Subset<T, TelegramBotSessionAggregateArgs>): Prisma.PrismaPromise<GetTelegramBotSessionAggregateType<T>>

    /**
     * Group by TelegramBotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramBotSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramBotSessionGroupByArgs['orderBy'] }
        : { orderBy?: TelegramBotSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramBotSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramBotSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramBotSession model
   */
  readonly fields: TelegramBotSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramBotSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramBotSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TelegramBotSession model
   */ 
  interface TelegramBotSessionFieldRefs {
    readonly id: FieldRef<"TelegramBotSession", 'Int'>
    readonly key: FieldRef<"TelegramBotSession", 'String'>
    readonly value: FieldRef<"TelegramBotSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TelegramBotSession findUnique
   */
  export type TelegramBotSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter, which TelegramBotSession to fetch.
     */
    where: TelegramBotSessionWhereUniqueInput
  }

  /**
   * TelegramBotSession findUniqueOrThrow
   */
  export type TelegramBotSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter, which TelegramBotSession to fetch.
     */
    where: TelegramBotSessionWhereUniqueInput
  }

  /**
   * TelegramBotSession findFirst
   */
  export type TelegramBotSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter, which TelegramBotSession to fetch.
     */
    where?: TelegramBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBotSessions to fetch.
     */
    orderBy?: TelegramBotSessionOrderByWithRelationInput | TelegramBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramBotSessions.
     */
    cursor?: TelegramBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramBotSessions.
     */
    distinct?: TelegramBotSessionScalarFieldEnum | TelegramBotSessionScalarFieldEnum[]
  }

  /**
   * TelegramBotSession findFirstOrThrow
   */
  export type TelegramBotSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter, which TelegramBotSession to fetch.
     */
    where?: TelegramBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBotSessions to fetch.
     */
    orderBy?: TelegramBotSessionOrderByWithRelationInput | TelegramBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramBotSessions.
     */
    cursor?: TelegramBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramBotSessions.
     */
    distinct?: TelegramBotSessionScalarFieldEnum | TelegramBotSessionScalarFieldEnum[]
  }

  /**
   * TelegramBotSession findMany
   */
  export type TelegramBotSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter, which TelegramBotSessions to fetch.
     */
    where?: TelegramBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBotSessions to fetch.
     */
    orderBy?: TelegramBotSessionOrderByWithRelationInput | TelegramBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramBotSessions.
     */
    cursor?: TelegramBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBotSessions.
     */
    skip?: number
    distinct?: TelegramBotSessionScalarFieldEnum | TelegramBotSessionScalarFieldEnum[]
  }

  /**
   * TelegramBotSession create
   */
  export type TelegramBotSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * The data needed to create a TelegramBotSession.
     */
    data: XOR<TelegramBotSessionCreateInput, TelegramBotSessionUncheckedCreateInput>
  }

  /**
   * TelegramBotSession createMany
   */
  export type TelegramBotSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramBotSessions.
     */
    data: TelegramBotSessionCreateManyInput | TelegramBotSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramBotSession update
   */
  export type TelegramBotSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * The data needed to update a TelegramBotSession.
     */
    data: XOR<TelegramBotSessionUpdateInput, TelegramBotSessionUncheckedUpdateInput>
    /**
     * Choose, which TelegramBotSession to update.
     */
    where: TelegramBotSessionWhereUniqueInput
  }

  /**
   * TelegramBotSession updateMany
   */
  export type TelegramBotSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramBotSessions.
     */
    data: XOR<TelegramBotSessionUpdateManyMutationInput, TelegramBotSessionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramBotSessions to update
     */
    where?: TelegramBotSessionWhereInput
  }

  /**
   * TelegramBotSession upsert
   */
  export type TelegramBotSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * The filter to search for the TelegramBotSession to update in case it exists.
     */
    where: TelegramBotSessionWhereUniqueInput
    /**
     * In case the TelegramBotSession found by the `where` argument doesn't exist, create a new TelegramBotSession with this data.
     */
    create: XOR<TelegramBotSessionCreateInput, TelegramBotSessionUncheckedCreateInput>
    /**
     * In case the TelegramBotSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramBotSessionUpdateInput, TelegramBotSessionUncheckedUpdateInput>
  }

  /**
   * TelegramBotSession delete
   */
  export type TelegramBotSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
    /**
     * Filter which TelegramBotSession to delete.
     */
    where: TelegramBotSessionWhereUniqueInput
  }

  /**
   * TelegramBotSession deleteMany
   */
  export type TelegramBotSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramBotSessions to delete
     */
    where?: TelegramBotSessionWhereInput
  }

  /**
   * TelegramBotSession without action
   */
  export type TelegramBotSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBotSession
     */
    select?: TelegramBotSessionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    contact: 'contact',
    priority: 'priority',
    isCompleted: 'isCompleted',
    userId: 'userId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const TimeBlockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    color: 'color',
    duration: 'duration',
    order: 'order',
    userId: 'userId'
  };

  export type TimeBlockScalarFieldEnum = (typeof TimeBlockScalarFieldEnum)[keyof typeof TimeBlockScalarFieldEnum]


  export const ConsultationSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isCompleted: 'isCompleted',
    userId: 'userId'
  };

  export type ConsultationSessionScalarFieldEnum = (typeof ConsultationSessionScalarFieldEnum)[keyof typeof ConsultationSessionScalarFieldEnum]


  export const SessionsRoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    totalDuration: 'totalDuration',
    isCompleted: 'isCompleted',
    consultationSessionId: 'consultationSessionId'
  };

  export type SessionsRoundScalarFieldEnum = (typeof SessionsRoundScalarFieldEnum)[keyof typeof SessionsRoundScalarFieldEnum]


  export const SessionDurationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sessionDuration: 'sessionDuration',
    breakDuration: 'breakDuration',
    longBreakDuration: 'longBreakDuration',
    sessionsCount: 'sessionsCount',
    userId: 'userId'
  };

  export type SessionDurationScalarFieldEnum = (typeof SessionDurationScalarFieldEnum)[keyof typeof SessionDurationScalarFieldEnum]


  export const ClientProgressAnxietyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    suddendlyscared: 'suddendlyscared',
    fearful: 'fearful',
    faintness: 'faintness',
    nervousness: 'nervousness',
    heartRacing: 'heartRacing',
    trembling: 'trembling',
    feelingTense: 'feelingTense',
    headaches: 'headaches',
    panic: 'panic',
    restlessness: 'restlessness',
    clientId: 'clientId'
  };

  export type ClientProgressAnxietyScalarFieldEnum = (typeof ClientProgressAnxietyScalarFieldEnum)[keyof typeof ClientProgressAnxietyScalarFieldEnum]


  export const ClientProgressDepressionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lowEnergy: 'lowEnergy',
    blamingyourself: 'blamingyourself',
    crying: 'crying',
    sexualLoss: 'sexualLoss',
    poorAppetite: 'poorAppetite',
    insomnia: 'insomnia',
    hopeness: 'hopeness',
    feelingBlue: 'feelingBlue',
    feelingLonely: 'feelingLonely',
    endingLifeThoughts: 'endingLifeThoughts',
    tpappedFeelings: 'tpappedFeelings',
    wooringTooMuch: 'wooringTooMuch',
    feelingNoInterest: 'feelingNoInterest',
    feelingEffortless: 'feelingEffortless',
    feelingWorthlessness: 'feelingWorthlessness',
    clientId: 'clientId'
  };

  export type ClientProgressDepressionScalarFieldEnum = (typeof ClientProgressDepressionScalarFieldEnum)[keyof typeof ClientProgressDepressionScalarFieldEnum]


  export const TelegramBotSessionScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type TelegramBotSessionScalarFieldEnum = (typeof TelegramBotSessionScalarFieldEnum)[keyof typeof TelegramBotSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    clients?: ClientListRelationFilter
    consultationSessions?: ConsultationSessionListRelationFilter
    sessionDurations?: SessionDurationListRelationFilter
    timeBlocks?: TimeBlockListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    consultationSessions?: ConsultationSessionOrderByRelationAggregateInput
    sessionDurations?: SessionDurationOrderByRelationAggregateInput
    timeBlocks?: TimeBlockOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    clients?: ClientListRelationFilter
    consultationSessions?: ConsultationSessionListRelationFilter
    sessionDurations?: SessionDurationListRelationFilter
    timeBlocks?: TimeBlockListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    name?: StringFilter<"Client"> | string
    contact?: StringNullableFilter<"Client"> | string | null
    priority?: EnumPriorityNullableFilter<"Client"> | $Enums.Priority | null
    isCompleted?: BoolNullableFilter<"Client"> | boolean | null
    userId?: StringFilter<"Client"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ClientProgressAnxietys?: ClientProgressAnxietyListRelationFilter
    ClientProgressDepressions?: ClientProgressDepressionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    ClientProgressAnxietys?: ClientProgressAnxietyOrderByRelationAggregateInput
    ClientProgressDepressions?: ClientProgressDepressionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    name?: StringFilter<"Client"> | string
    contact?: StringNullableFilter<"Client"> | string | null
    priority?: EnumPriorityNullableFilter<"Client"> | $Enums.Priority | null
    isCompleted?: BoolNullableFilter<"Client"> | boolean | null
    userId?: StringFilter<"Client"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ClientProgressAnxietys?: ClientProgressAnxietyListRelationFilter
    ClientProgressDepressions?: ClientProgressDepressionListRelationFilter
  }, "id" | "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    name?: StringWithAggregatesFilter<"Client"> | string
    contact?: StringNullableWithAggregatesFilter<"Client"> | string | null
    priority?: EnumPriorityNullableWithAggregatesFilter<"Client"> | $Enums.Priority | null
    isCompleted?: BoolNullableWithAggregatesFilter<"Client"> | boolean | null
    userId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type TimeBlockWhereInput = {
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimeBlockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimeBlockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    _count?: TimeBlockCountOrderByAggregateInput
    _avg?: TimeBlockAvgOrderByAggregateInput
    _max?: TimeBlockMaxOrderByAggregateInput
    _min?: TimeBlockMinOrderByAggregateInput
    _sum?: TimeBlockSumOrderByAggregateInput
  }

  export type TimeBlockScalarWhereWithAggregatesInput = {
    AND?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    OR?: TimeBlockScalarWhereWithAggregatesInput[]
    NOT?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeBlock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    name?: StringWithAggregatesFilter<"TimeBlock"> | string
    color?: StringNullableWithAggregatesFilter<"TimeBlock"> | string | null
    duration?: IntWithAggregatesFilter<"TimeBlock"> | number
    order?: IntWithAggregatesFilter<"TimeBlock"> | number
    userId?: StringWithAggregatesFilter<"TimeBlock"> | string
  }

  export type ConsultationSessionWhereInput = {
    AND?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    OR?: ConsultationSessionWhereInput[]
    NOT?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    id?: StringFilter<"ConsultationSession"> | string
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    isCompleted?: BoolNullableFilter<"ConsultationSession"> | boolean | null
    userId?: StringFilter<"ConsultationSession"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    sessionsRounds?: SessionsRoundListRelationFilter
  }

  export type ConsultationSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    sessionsRounds?: SessionsRoundOrderByRelationAggregateInput
  }

  export type ConsultationSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    OR?: ConsultationSessionWhereInput[]
    NOT?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    isCompleted?: BoolNullableFilter<"ConsultationSession"> | boolean | null
    userId?: StringFilter<"ConsultationSession"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    sessionsRounds?: SessionsRoundListRelationFilter
  }, "id">

  export type ConsultationSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ConsultationSessionCountOrderByAggregateInput
    _max?: ConsultationSessionMaxOrderByAggregateInput
    _min?: ConsultationSessionMinOrderByAggregateInput
  }

  export type ConsultationSessionScalarWhereWithAggregatesInput = {
    AND?: ConsultationSessionScalarWhereWithAggregatesInput | ConsultationSessionScalarWhereWithAggregatesInput[]
    OR?: ConsultationSessionScalarWhereWithAggregatesInput[]
    NOT?: ConsultationSessionScalarWhereWithAggregatesInput | ConsultationSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultationSession"> | Date | string
    isCompleted?: BoolNullableWithAggregatesFilter<"ConsultationSession"> | boolean | null
    userId?: StringWithAggregatesFilter<"ConsultationSession"> | string
  }

  export type SessionsRoundWhereInput = {
    AND?: SessionsRoundWhereInput | SessionsRoundWhereInput[]
    OR?: SessionsRoundWhereInput[]
    NOT?: SessionsRoundWhereInput | SessionsRoundWhereInput[]
    id?: StringFilter<"SessionsRound"> | string
    createdAt?: DateTimeFilter<"SessionsRound"> | Date | string
    updatedAt?: DateTimeFilter<"SessionsRound"> | Date | string
    totalDuration?: IntFilter<"SessionsRound"> | number
    isCompleted?: BoolNullableFilter<"SessionsRound"> | boolean | null
    consultationSessionId?: StringFilter<"SessionsRound"> | string
    consultationSession?: XOR<ConsultationSessionRelationFilter, ConsultationSessionWhereInput>
  }

  export type SessionsRoundOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalDuration?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    consultationSessionId?: SortOrder
    consultationSession?: ConsultationSessionOrderByWithRelationInput
  }

  export type SessionsRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsRoundWhereInput | SessionsRoundWhereInput[]
    OR?: SessionsRoundWhereInput[]
    NOT?: SessionsRoundWhereInput | SessionsRoundWhereInput[]
    createdAt?: DateTimeFilter<"SessionsRound"> | Date | string
    updatedAt?: DateTimeFilter<"SessionsRound"> | Date | string
    totalDuration?: IntFilter<"SessionsRound"> | number
    isCompleted?: BoolNullableFilter<"SessionsRound"> | boolean | null
    consultationSessionId?: StringFilter<"SessionsRound"> | string
    consultationSession?: XOR<ConsultationSessionRelationFilter, ConsultationSessionWhereInput>
  }, "id">

  export type SessionsRoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalDuration?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    consultationSessionId?: SortOrder
    _count?: SessionsRoundCountOrderByAggregateInput
    _avg?: SessionsRoundAvgOrderByAggregateInput
    _max?: SessionsRoundMaxOrderByAggregateInput
    _min?: SessionsRoundMinOrderByAggregateInput
    _sum?: SessionsRoundSumOrderByAggregateInput
  }

  export type SessionsRoundScalarWhereWithAggregatesInput = {
    AND?: SessionsRoundScalarWhereWithAggregatesInput | SessionsRoundScalarWhereWithAggregatesInput[]
    OR?: SessionsRoundScalarWhereWithAggregatesInput[]
    NOT?: SessionsRoundScalarWhereWithAggregatesInput | SessionsRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionsRound"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SessionsRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionsRound"> | Date | string
    totalDuration?: IntWithAggregatesFilter<"SessionsRound"> | number
    isCompleted?: BoolNullableWithAggregatesFilter<"SessionsRound"> | boolean | null
    consultationSessionId?: StringWithAggregatesFilter<"SessionsRound"> | string
  }

  export type SessionDurationWhereInput = {
    AND?: SessionDurationWhereInput | SessionDurationWhereInput[]
    OR?: SessionDurationWhereInput[]
    NOT?: SessionDurationWhereInput | SessionDurationWhereInput[]
    id?: StringFilter<"SessionDuration"> | string
    createdAt?: DateTimeFilter<"SessionDuration"> | Date | string
    updatedAt?: DateTimeFilter<"SessionDuration"> | Date | string
    sessionDuration?: IntNullableFilter<"SessionDuration"> | number | null
    breakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    longBreakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    sessionsCount?: IntNullableFilter<"SessionDuration"> | number | null
    userId?: StringFilter<"SessionDuration"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionDurationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionDuration?: SortOrderInput | SortOrder
    breakDuration?: SortOrderInput | SortOrder
    longBreakDuration?: SortOrderInput | SortOrder
    sessionsCount?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionDurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionDurationWhereInput | SessionDurationWhereInput[]
    OR?: SessionDurationWhereInput[]
    NOT?: SessionDurationWhereInput | SessionDurationWhereInput[]
    createdAt?: DateTimeFilter<"SessionDuration"> | Date | string
    updatedAt?: DateTimeFilter<"SessionDuration"> | Date | string
    sessionDuration?: IntNullableFilter<"SessionDuration"> | number | null
    breakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    longBreakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    sessionsCount?: IntNullableFilter<"SessionDuration"> | number | null
    userId?: StringFilter<"SessionDuration"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SessionDurationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionDuration?: SortOrderInput | SortOrder
    breakDuration?: SortOrderInput | SortOrder
    longBreakDuration?: SortOrderInput | SortOrder
    sessionsCount?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionDurationCountOrderByAggregateInput
    _avg?: SessionDurationAvgOrderByAggregateInput
    _max?: SessionDurationMaxOrderByAggregateInput
    _min?: SessionDurationMinOrderByAggregateInput
    _sum?: SessionDurationSumOrderByAggregateInput
  }

  export type SessionDurationScalarWhereWithAggregatesInput = {
    AND?: SessionDurationScalarWhereWithAggregatesInput | SessionDurationScalarWhereWithAggregatesInput[]
    OR?: SessionDurationScalarWhereWithAggregatesInput[]
    NOT?: SessionDurationScalarWhereWithAggregatesInput | SessionDurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionDuration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SessionDuration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionDuration"> | Date | string
    sessionDuration?: IntNullableWithAggregatesFilter<"SessionDuration"> | number | null
    breakDuration?: IntNullableWithAggregatesFilter<"SessionDuration"> | number | null
    longBreakDuration?: IntNullableWithAggregatesFilter<"SessionDuration"> | number | null
    sessionsCount?: IntNullableWithAggregatesFilter<"SessionDuration"> | number | null
    userId?: StringWithAggregatesFilter<"SessionDuration"> | string
  }

  export type ClientProgressAnxietyWhereInput = {
    AND?: ClientProgressAnxietyWhereInput | ClientProgressAnxietyWhereInput[]
    OR?: ClientProgressAnxietyWhereInput[]
    NOT?: ClientProgressAnxietyWhereInput | ClientProgressAnxietyWhereInput[]
    id?: StringFilter<"ClientProgressAnxiety"> | string
    createdAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    suddendlyscared?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    fearful?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    faintness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    nervousness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    heartRacing?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    trembling?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    feelingTense?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    headaches?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    panic?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    restlessness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    clientId?: StringFilter<"ClientProgressAnxiety"> | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }

  export type ClientProgressAnxietyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suddendlyscared?: SortOrderInput | SortOrder
    fearful?: SortOrderInput | SortOrder
    faintness?: SortOrderInput | SortOrder
    nervousness?: SortOrderInput | SortOrder
    heartRacing?: SortOrderInput | SortOrder
    trembling?: SortOrderInput | SortOrder
    feelingTense?: SortOrderInput | SortOrder
    headaches?: SortOrderInput | SortOrder
    panic?: SortOrderInput | SortOrder
    restlessness?: SortOrderInput | SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ClientProgressAnxietyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientProgressAnxietyWhereInput | ClientProgressAnxietyWhereInput[]
    OR?: ClientProgressAnxietyWhereInput[]
    NOT?: ClientProgressAnxietyWhereInput | ClientProgressAnxietyWhereInput[]
    createdAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    suddendlyscared?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    fearful?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    faintness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    nervousness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    heartRacing?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    trembling?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    feelingTense?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    headaches?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    panic?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    restlessness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    clientId?: StringFilter<"ClientProgressAnxiety"> | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }, "id">

  export type ClientProgressAnxietyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suddendlyscared?: SortOrderInput | SortOrder
    fearful?: SortOrderInput | SortOrder
    faintness?: SortOrderInput | SortOrder
    nervousness?: SortOrderInput | SortOrder
    heartRacing?: SortOrderInput | SortOrder
    trembling?: SortOrderInput | SortOrder
    feelingTense?: SortOrderInput | SortOrder
    headaches?: SortOrderInput | SortOrder
    panic?: SortOrderInput | SortOrder
    restlessness?: SortOrderInput | SortOrder
    clientId?: SortOrder
    _count?: ClientProgressAnxietyCountOrderByAggregateInput
    _avg?: ClientProgressAnxietyAvgOrderByAggregateInput
    _max?: ClientProgressAnxietyMaxOrderByAggregateInput
    _min?: ClientProgressAnxietyMinOrderByAggregateInput
    _sum?: ClientProgressAnxietySumOrderByAggregateInput
  }

  export type ClientProgressAnxietyScalarWhereWithAggregatesInput = {
    AND?: ClientProgressAnxietyScalarWhereWithAggregatesInput | ClientProgressAnxietyScalarWhereWithAggregatesInput[]
    OR?: ClientProgressAnxietyScalarWhereWithAggregatesInput[]
    NOT?: ClientProgressAnxietyScalarWhereWithAggregatesInput | ClientProgressAnxietyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientProgressAnxiety"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientProgressAnxiety"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientProgressAnxiety"> | Date | string
    suddendlyscared?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    fearful?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    faintness?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    nervousness?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    heartRacing?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    trembling?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    feelingTense?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    headaches?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    panic?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    restlessness?: IntNullableWithAggregatesFilter<"ClientProgressAnxiety"> | number | null
    clientId?: StringWithAggregatesFilter<"ClientProgressAnxiety"> | string
  }

  export type ClientProgressDepressionWhereInput = {
    AND?: ClientProgressDepressionWhereInput | ClientProgressDepressionWhereInput[]
    OR?: ClientProgressDepressionWhereInput[]
    NOT?: ClientProgressDepressionWhereInput | ClientProgressDepressionWhereInput[]
    id?: StringFilter<"ClientProgressDepression"> | string
    createdAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    lowEnergy?: IntNullableFilter<"ClientProgressDepression"> | number | null
    blamingyourself?: IntNullableFilter<"ClientProgressDepression"> | number | null
    crying?: IntNullableFilter<"ClientProgressDepression"> | number | null
    sexualLoss?: IntNullableFilter<"ClientProgressDepression"> | number | null
    poorAppetite?: IntNullableFilter<"ClientProgressDepression"> | number | null
    insomnia?: IntNullableFilter<"ClientProgressDepression"> | number | null
    hopeness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingBlue?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingLonely?: IntNullableFilter<"ClientProgressDepression"> | number | null
    endingLifeThoughts?: IntNullableFilter<"ClientProgressDepression"> | number | null
    tpappedFeelings?: IntNullableFilter<"ClientProgressDepression"> | number | null
    wooringTooMuch?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingNoInterest?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingEffortless?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingWorthlessness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    clientId?: StringFilter<"ClientProgressDepression"> | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }

  export type ClientProgressDepressionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lowEnergy?: SortOrderInput | SortOrder
    blamingyourself?: SortOrderInput | SortOrder
    crying?: SortOrderInput | SortOrder
    sexualLoss?: SortOrderInput | SortOrder
    poorAppetite?: SortOrderInput | SortOrder
    insomnia?: SortOrderInput | SortOrder
    hopeness?: SortOrderInput | SortOrder
    feelingBlue?: SortOrderInput | SortOrder
    feelingLonely?: SortOrderInput | SortOrder
    endingLifeThoughts?: SortOrderInput | SortOrder
    tpappedFeelings?: SortOrderInput | SortOrder
    wooringTooMuch?: SortOrderInput | SortOrder
    feelingNoInterest?: SortOrderInput | SortOrder
    feelingEffortless?: SortOrderInput | SortOrder
    feelingWorthlessness?: SortOrderInput | SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ClientProgressDepressionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientProgressDepressionWhereInput | ClientProgressDepressionWhereInput[]
    OR?: ClientProgressDepressionWhereInput[]
    NOT?: ClientProgressDepressionWhereInput | ClientProgressDepressionWhereInput[]
    createdAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    lowEnergy?: IntNullableFilter<"ClientProgressDepression"> | number | null
    blamingyourself?: IntNullableFilter<"ClientProgressDepression"> | number | null
    crying?: IntNullableFilter<"ClientProgressDepression"> | number | null
    sexualLoss?: IntNullableFilter<"ClientProgressDepression"> | number | null
    poorAppetite?: IntNullableFilter<"ClientProgressDepression"> | number | null
    insomnia?: IntNullableFilter<"ClientProgressDepression"> | number | null
    hopeness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingBlue?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingLonely?: IntNullableFilter<"ClientProgressDepression"> | number | null
    endingLifeThoughts?: IntNullableFilter<"ClientProgressDepression"> | number | null
    tpappedFeelings?: IntNullableFilter<"ClientProgressDepression"> | number | null
    wooringTooMuch?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingNoInterest?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingEffortless?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingWorthlessness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    clientId?: StringFilter<"ClientProgressDepression"> | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }, "id">

  export type ClientProgressDepressionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lowEnergy?: SortOrderInput | SortOrder
    blamingyourself?: SortOrderInput | SortOrder
    crying?: SortOrderInput | SortOrder
    sexualLoss?: SortOrderInput | SortOrder
    poorAppetite?: SortOrderInput | SortOrder
    insomnia?: SortOrderInput | SortOrder
    hopeness?: SortOrderInput | SortOrder
    feelingBlue?: SortOrderInput | SortOrder
    feelingLonely?: SortOrderInput | SortOrder
    endingLifeThoughts?: SortOrderInput | SortOrder
    tpappedFeelings?: SortOrderInput | SortOrder
    wooringTooMuch?: SortOrderInput | SortOrder
    feelingNoInterest?: SortOrderInput | SortOrder
    feelingEffortless?: SortOrderInput | SortOrder
    feelingWorthlessness?: SortOrderInput | SortOrder
    clientId?: SortOrder
    _count?: ClientProgressDepressionCountOrderByAggregateInput
    _avg?: ClientProgressDepressionAvgOrderByAggregateInput
    _max?: ClientProgressDepressionMaxOrderByAggregateInput
    _min?: ClientProgressDepressionMinOrderByAggregateInput
    _sum?: ClientProgressDepressionSumOrderByAggregateInput
  }

  export type ClientProgressDepressionScalarWhereWithAggregatesInput = {
    AND?: ClientProgressDepressionScalarWhereWithAggregatesInput | ClientProgressDepressionScalarWhereWithAggregatesInput[]
    OR?: ClientProgressDepressionScalarWhereWithAggregatesInput[]
    NOT?: ClientProgressDepressionScalarWhereWithAggregatesInput | ClientProgressDepressionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientProgressDepression"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientProgressDepression"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientProgressDepression"> | Date | string
    lowEnergy?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    blamingyourself?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    crying?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    sexualLoss?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    poorAppetite?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    insomnia?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    hopeness?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    feelingBlue?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    feelingLonely?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    endingLifeThoughts?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    tpappedFeelings?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    wooringTooMuch?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    feelingNoInterest?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    feelingEffortless?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    feelingWorthlessness?: IntNullableWithAggregatesFilter<"ClientProgressDepression"> | number | null
    clientId?: StringWithAggregatesFilter<"ClientProgressDepression"> | string
  }

  export type TelegramBotSessionWhereInput = {
    AND?: TelegramBotSessionWhereInput | TelegramBotSessionWhereInput[]
    OR?: TelegramBotSessionWhereInput[]
    NOT?: TelegramBotSessionWhereInput | TelegramBotSessionWhereInput[]
    id?: IntFilter<"TelegramBotSession"> | number
    key?: StringFilter<"TelegramBotSession"> | string
    value?: StringFilter<"TelegramBotSession"> | string
  }

  export type TelegramBotSessionOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type TelegramBotSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: TelegramBotSessionWhereInput | TelegramBotSessionWhereInput[]
    OR?: TelegramBotSessionWhereInput[]
    NOT?: TelegramBotSessionWhereInput | TelegramBotSessionWhereInput[]
    value?: StringFilter<"TelegramBotSession"> | string
  }, "id" | "key">

  export type TelegramBotSessionOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: TelegramBotSessionCountOrderByAggregateInput
    _avg?: TelegramBotSessionAvgOrderByAggregateInput
    _max?: TelegramBotSessionMaxOrderByAggregateInput
    _min?: TelegramBotSessionMinOrderByAggregateInput
    _sum?: TelegramBotSessionSumOrderByAggregateInput
  }

  export type TelegramBotSessionScalarWhereWithAggregatesInput = {
    AND?: TelegramBotSessionScalarWhereWithAggregatesInput | TelegramBotSessionScalarWhereWithAggregatesInput[]
    OR?: TelegramBotSessionScalarWhereWithAggregatesInput[]
    NOT?: TelegramBotSessionScalarWhereWithAggregatesInput | TelegramBotSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TelegramBotSession"> | number
    key?: StringWithAggregatesFilter<"TelegramBotSession"> | string
    value?: StringWithAggregatesFilter<"TelegramBotSession"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionUncheckedCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutClientsInput
    ClientProgressAnxietys?: ClientProgressAnxietyCreateNestedManyWithoutClientInput
    ClientProgressDepressions?: ClientProgressDepressionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    userId: string
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedCreateNestedManyWithoutClientInput
    ClientProgressDepressions?: ClientProgressDepressionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    ClientProgressAnxietys?: ClientProgressAnxietyUpdateManyWithoutClientNestedInput
    ClientProgressDepressions?: ClientProgressDepressionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedUpdateManyWithoutClientNestedInput
    ClientProgressDepressions?: ClientProgressDepressionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    userId: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    user: UserCreateNestedOneWithoutTimeBlocksInput
  }

  export type TimeBlockUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    userId: string
  }

  export type TimeBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTimeBlocksNestedInput
  }

  export type TimeBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    userId: string
  }

  export type TimeBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutConsultationSessionsInput
    sessionsRounds?: SessionsRoundCreateNestedManyWithoutConsultationSessionInput
  }

  export type ConsultationSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
    sessionsRounds?: SessionsRoundUncheckedCreateNestedManyWithoutConsultationSessionInput
  }

  export type ConsultationSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutConsultationSessionsNestedInput
    sessionsRounds?: SessionsRoundUpdateManyWithoutConsultationSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    sessionsRounds?: SessionsRoundUncheckedUpdateManyWithoutConsultationSessionNestedInput
  }

  export type ConsultationSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
  }

  export type ConsultationSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ConsultationSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionsRoundCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
    consultationSession: ConsultationSessionCreateNestedOneWithoutSessionsRoundsInput
  }

  export type SessionsRoundUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
    consultationSessionId: string
  }

  export type SessionsRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consultationSession?: ConsultationSessionUpdateOneRequiredWithoutSessionsRoundsNestedInput
  }

  export type SessionsRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consultationSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionsRoundCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
    consultationSessionId: string
  }

  export type SessionsRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionsRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consultationSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionDurationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
    user: UserCreateNestedOneWithoutSessionDurationsInput
  }

  export type SessionDurationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
    userId: string
  }

  export type SessionDurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutSessionDurationsNestedInput
  }

  export type SessionDurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionDurationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
    userId: string
  }

  export type SessionDurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionDurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientProgressAnxietyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
    client: ClientCreateNestedOneWithoutClientProgressAnxietysInput
  }

  export type ClientProgressAnxietyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
    clientId: string
  }

  export type ClientProgressAnxietyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
    client?: ClientUpdateOneRequiredWithoutClientProgressAnxietysNestedInput
  }

  export type ClientProgressAnxietyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientProgressAnxietyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
    clientId: string
  }

  export type ClientProgressAnxietyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressAnxietyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientProgressDepressionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
    client: ClientCreateNestedOneWithoutClientProgressDepressionsInput
  }

  export type ClientProgressDepressionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
    clientId: string
  }

  export type ClientProgressDepressionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
    client?: ClientUpdateOneRequiredWithoutClientProgressDepressionsNestedInput
  }

  export type ClientProgressDepressionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientProgressDepressionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
    clientId: string
  }

  export type ClientProgressDepressionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressDepressionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramBotSessionCreateInput = {
    key: string
    value: string
  }

  export type TelegramBotSessionUncheckedCreateInput = {
    id?: number
    key: string
    value: string
  }

  export type TelegramBotSessionUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramBotSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramBotSessionCreateManyInput = {
    id?: number
    key: string
    value: string
  }

  export type TelegramBotSessionUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramBotSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ConsultationSessionListRelationFilter = {
    every?: ConsultationSessionWhereInput
    some?: ConsultationSessionWhereInput
    none?: ConsultationSessionWhereInput
  }

  export type SessionDurationListRelationFilter = {
    every?: SessionDurationWhereInput
    some?: SessionDurationWhereInput
    none?: SessionDurationWhereInput
  }

  export type TimeBlockListRelationFilter = {
    every?: TimeBlockWhereInput
    some?: TimeBlockWhereInput
    none?: TimeBlockWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionDurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientProgressAnxietyListRelationFilter = {
    every?: ClientProgressAnxietyWhereInput
    some?: ClientProgressAnxietyWhereInput
    none?: ClientProgressAnxietyWhereInput
  }

  export type ClientProgressDepressionListRelationFilter = {
    every?: ClientProgressDepressionWhereInput
    some?: ClientProgressDepressionWhereInput
    none?: ClientProgressDepressionWhereInput
  }

  export type ClientProgressAnxietyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientProgressDepressionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    priority?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    priority?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    priority?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type EnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TimeBlockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockAvgOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type TimeBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockSumOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SessionsRoundListRelationFilter = {
    every?: SessionsRoundWhereInput
    some?: SessionsRoundWhereInput
    none?: SessionsRoundWhereInput
  }

  export type SessionsRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationSessionRelationFilter = {
    is?: ConsultationSessionWhereInput
    isNot?: ConsultationSessionWhereInput
  }

  export type SessionsRoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalDuration?: SortOrder
    isCompleted?: SortOrder
    consultationSessionId?: SortOrder
  }

  export type SessionsRoundAvgOrderByAggregateInput = {
    totalDuration?: SortOrder
  }

  export type SessionsRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalDuration?: SortOrder
    isCompleted?: SortOrder
    consultationSessionId?: SortOrder
  }

  export type SessionsRoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalDuration?: SortOrder
    isCompleted?: SortOrder
    consultationSessionId?: SortOrder
  }

  export type SessionsRoundSumOrderByAggregateInput = {
    totalDuration?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SessionDurationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionDuration?: SortOrder
    breakDuration?: SortOrder
    longBreakDuration?: SortOrder
    sessionsCount?: SortOrder
    userId?: SortOrder
  }

  export type SessionDurationAvgOrderByAggregateInput = {
    sessionDuration?: SortOrder
    breakDuration?: SortOrder
    longBreakDuration?: SortOrder
    sessionsCount?: SortOrder
  }

  export type SessionDurationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionDuration?: SortOrder
    breakDuration?: SortOrder
    longBreakDuration?: SortOrder
    sessionsCount?: SortOrder
    userId?: SortOrder
  }

  export type SessionDurationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionDuration?: SortOrder
    breakDuration?: SortOrder
    longBreakDuration?: SortOrder
    sessionsCount?: SortOrder
    userId?: SortOrder
  }

  export type SessionDurationSumOrderByAggregateInput = {
    sessionDuration?: SortOrder
    breakDuration?: SortOrder
    longBreakDuration?: SortOrder
    sessionsCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ClientProgressAnxietyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suddendlyscared?: SortOrder
    fearful?: SortOrder
    faintness?: SortOrder
    nervousness?: SortOrder
    heartRacing?: SortOrder
    trembling?: SortOrder
    feelingTense?: SortOrder
    headaches?: SortOrder
    panic?: SortOrder
    restlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressAnxietyAvgOrderByAggregateInput = {
    suddendlyscared?: SortOrder
    fearful?: SortOrder
    faintness?: SortOrder
    nervousness?: SortOrder
    heartRacing?: SortOrder
    trembling?: SortOrder
    feelingTense?: SortOrder
    headaches?: SortOrder
    panic?: SortOrder
    restlessness?: SortOrder
  }

  export type ClientProgressAnxietyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suddendlyscared?: SortOrder
    fearful?: SortOrder
    faintness?: SortOrder
    nervousness?: SortOrder
    heartRacing?: SortOrder
    trembling?: SortOrder
    feelingTense?: SortOrder
    headaches?: SortOrder
    panic?: SortOrder
    restlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressAnxietyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suddendlyscared?: SortOrder
    fearful?: SortOrder
    faintness?: SortOrder
    nervousness?: SortOrder
    heartRacing?: SortOrder
    trembling?: SortOrder
    feelingTense?: SortOrder
    headaches?: SortOrder
    panic?: SortOrder
    restlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressAnxietySumOrderByAggregateInput = {
    suddendlyscared?: SortOrder
    fearful?: SortOrder
    faintness?: SortOrder
    nervousness?: SortOrder
    heartRacing?: SortOrder
    trembling?: SortOrder
    feelingTense?: SortOrder
    headaches?: SortOrder
    panic?: SortOrder
    restlessness?: SortOrder
  }

  export type ClientProgressDepressionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lowEnergy?: SortOrder
    blamingyourself?: SortOrder
    crying?: SortOrder
    sexualLoss?: SortOrder
    poorAppetite?: SortOrder
    insomnia?: SortOrder
    hopeness?: SortOrder
    feelingBlue?: SortOrder
    feelingLonely?: SortOrder
    endingLifeThoughts?: SortOrder
    tpappedFeelings?: SortOrder
    wooringTooMuch?: SortOrder
    feelingNoInterest?: SortOrder
    feelingEffortless?: SortOrder
    feelingWorthlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressDepressionAvgOrderByAggregateInput = {
    lowEnergy?: SortOrder
    blamingyourself?: SortOrder
    crying?: SortOrder
    sexualLoss?: SortOrder
    poorAppetite?: SortOrder
    insomnia?: SortOrder
    hopeness?: SortOrder
    feelingBlue?: SortOrder
    feelingLonely?: SortOrder
    endingLifeThoughts?: SortOrder
    tpappedFeelings?: SortOrder
    wooringTooMuch?: SortOrder
    feelingNoInterest?: SortOrder
    feelingEffortless?: SortOrder
    feelingWorthlessness?: SortOrder
  }

  export type ClientProgressDepressionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lowEnergy?: SortOrder
    blamingyourself?: SortOrder
    crying?: SortOrder
    sexualLoss?: SortOrder
    poorAppetite?: SortOrder
    insomnia?: SortOrder
    hopeness?: SortOrder
    feelingBlue?: SortOrder
    feelingLonely?: SortOrder
    endingLifeThoughts?: SortOrder
    tpappedFeelings?: SortOrder
    wooringTooMuch?: SortOrder
    feelingNoInterest?: SortOrder
    feelingEffortless?: SortOrder
    feelingWorthlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressDepressionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lowEnergy?: SortOrder
    blamingyourself?: SortOrder
    crying?: SortOrder
    sexualLoss?: SortOrder
    poorAppetite?: SortOrder
    insomnia?: SortOrder
    hopeness?: SortOrder
    feelingBlue?: SortOrder
    feelingLonely?: SortOrder
    endingLifeThoughts?: SortOrder
    tpappedFeelings?: SortOrder
    wooringTooMuch?: SortOrder
    feelingNoInterest?: SortOrder
    feelingEffortless?: SortOrder
    feelingWorthlessness?: SortOrder
    clientId?: SortOrder
  }

  export type ClientProgressDepressionSumOrderByAggregateInput = {
    lowEnergy?: SortOrder
    blamingyourself?: SortOrder
    crying?: SortOrder
    sexualLoss?: SortOrder
    poorAppetite?: SortOrder
    insomnia?: SortOrder
    hopeness?: SortOrder
    feelingBlue?: SortOrder
    feelingLonely?: SortOrder
    endingLifeThoughts?: SortOrder
    tpappedFeelings?: SortOrder
    wooringTooMuch?: SortOrder
    feelingNoInterest?: SortOrder
    feelingEffortless?: SortOrder
    feelingWorthlessness?: SortOrder
  }

  export type TelegramBotSessionCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type TelegramBotSessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelegramBotSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type TelegramBotSessionMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type TelegramBotSessionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ConsultationSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput> | ConsultationSessionCreateWithoutUserInput[] | ConsultationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutUserInput | ConsultationSessionCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationSessionCreateManyUserInputEnvelope
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
  }

  export type SessionDurationCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput> | SessionDurationCreateWithoutUserInput[] | SessionDurationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionDurationCreateOrConnectWithoutUserInput | SessionDurationCreateOrConnectWithoutUserInput[]
    createMany?: SessionDurationCreateManyUserInputEnvelope
    connect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
  }

  export type TimeBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ConsultationSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput> | ConsultationSessionCreateWithoutUserInput[] | ConsultationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutUserInput | ConsultationSessionCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationSessionCreateManyUserInputEnvelope
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
  }

  export type SessionDurationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput> | SessionDurationCreateWithoutUserInput[] | SessionDurationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionDurationCreateOrConnectWithoutUserInput | SessionDurationCreateOrConnectWithoutUserInput[]
    createMany?: SessionDurationCreateManyUserInputEnvelope
    connect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
  }

  export type TimeBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ConsultationSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput> | ConsultationSessionCreateWithoutUserInput[] | ConsultationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutUserInput | ConsultationSessionCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationSessionUpsertWithWhereUniqueWithoutUserInput | ConsultationSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationSessionCreateManyUserInputEnvelope
    set?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    disconnect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    delete?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    update?: ConsultationSessionUpdateWithWhereUniqueWithoutUserInput | ConsultationSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationSessionUpdateManyWithWhereWithoutUserInput | ConsultationSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
  }

  export type SessionDurationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput> | SessionDurationCreateWithoutUserInput[] | SessionDurationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionDurationCreateOrConnectWithoutUserInput | SessionDurationCreateOrConnectWithoutUserInput[]
    upsert?: SessionDurationUpsertWithWhereUniqueWithoutUserInput | SessionDurationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionDurationCreateManyUserInputEnvelope
    set?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    disconnect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    delete?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    connect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    update?: SessionDurationUpdateWithWhereUniqueWithoutUserInput | SessionDurationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionDurationUpdateManyWithWhereWithoutUserInput | SessionDurationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionDurationScalarWhereInput | SessionDurationScalarWhereInput[]
  }

  export type TimeBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ConsultationSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput> | ConsultationSessionCreateWithoutUserInput[] | ConsultationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutUserInput | ConsultationSessionCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationSessionUpsertWithWhereUniqueWithoutUserInput | ConsultationSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationSessionCreateManyUserInputEnvelope
    set?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    disconnect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    delete?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    update?: ConsultationSessionUpdateWithWhereUniqueWithoutUserInput | ConsultationSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationSessionUpdateManyWithWhereWithoutUserInput | ConsultationSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
  }

  export type SessionDurationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput> | SessionDurationCreateWithoutUserInput[] | SessionDurationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionDurationCreateOrConnectWithoutUserInput | SessionDurationCreateOrConnectWithoutUserInput[]
    upsert?: SessionDurationUpsertWithWhereUniqueWithoutUserInput | SessionDurationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionDurationCreateManyUserInputEnvelope
    set?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    disconnect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    delete?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    connect?: SessionDurationWhereUniqueInput | SessionDurationWhereUniqueInput[]
    update?: SessionDurationUpdateWithWhereUniqueWithoutUserInput | SessionDurationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionDurationUpdateManyWithWhereWithoutUserInput | SessionDurationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionDurationScalarWhereInput | SessionDurationScalarWhereInput[]
  }

  export type TimeBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ClientProgressAnxietyCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput> | ClientProgressAnxietyCreateWithoutClientInput[] | ClientProgressAnxietyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressAnxietyCreateOrConnectWithoutClientInput | ClientProgressAnxietyCreateOrConnectWithoutClientInput[]
    createMany?: ClientProgressAnxietyCreateManyClientInputEnvelope
    connect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
  }

  export type ClientProgressDepressionCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput> | ClientProgressDepressionCreateWithoutClientInput[] | ClientProgressDepressionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressDepressionCreateOrConnectWithoutClientInput | ClientProgressDepressionCreateOrConnectWithoutClientInput[]
    createMany?: ClientProgressDepressionCreateManyClientInputEnvelope
    connect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
  }

  export type ClientProgressAnxietyUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput> | ClientProgressAnxietyCreateWithoutClientInput[] | ClientProgressAnxietyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressAnxietyCreateOrConnectWithoutClientInput | ClientProgressAnxietyCreateOrConnectWithoutClientInput[]
    createMany?: ClientProgressAnxietyCreateManyClientInputEnvelope
    connect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
  }

  export type ClientProgressDepressionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput> | ClientProgressDepressionCreateWithoutClientInput[] | ClientProgressDepressionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressDepressionCreateOrConnectWithoutClientInput | ClientProgressDepressionCreateOrConnectWithoutClientInput[]
    createMany?: ClientProgressDepressionCreateManyClientInputEnvelope
    connect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
  }

  export type NullableEnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type ClientProgressAnxietyUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput> | ClientProgressAnxietyCreateWithoutClientInput[] | ClientProgressAnxietyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressAnxietyCreateOrConnectWithoutClientInput | ClientProgressAnxietyCreateOrConnectWithoutClientInput[]
    upsert?: ClientProgressAnxietyUpsertWithWhereUniqueWithoutClientInput | ClientProgressAnxietyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProgressAnxietyCreateManyClientInputEnvelope
    set?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    disconnect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    delete?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    connect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    update?: ClientProgressAnxietyUpdateWithWhereUniqueWithoutClientInput | ClientProgressAnxietyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProgressAnxietyUpdateManyWithWhereWithoutClientInput | ClientProgressAnxietyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProgressAnxietyScalarWhereInput | ClientProgressAnxietyScalarWhereInput[]
  }

  export type ClientProgressDepressionUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput> | ClientProgressDepressionCreateWithoutClientInput[] | ClientProgressDepressionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressDepressionCreateOrConnectWithoutClientInput | ClientProgressDepressionCreateOrConnectWithoutClientInput[]
    upsert?: ClientProgressDepressionUpsertWithWhereUniqueWithoutClientInput | ClientProgressDepressionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProgressDepressionCreateManyClientInputEnvelope
    set?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    disconnect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    delete?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    connect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    update?: ClientProgressDepressionUpdateWithWhereUniqueWithoutClientInput | ClientProgressDepressionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProgressDepressionUpdateManyWithWhereWithoutClientInput | ClientProgressDepressionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProgressDepressionScalarWhereInput | ClientProgressDepressionScalarWhereInput[]
  }

  export type ClientProgressAnxietyUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput> | ClientProgressAnxietyCreateWithoutClientInput[] | ClientProgressAnxietyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressAnxietyCreateOrConnectWithoutClientInput | ClientProgressAnxietyCreateOrConnectWithoutClientInput[]
    upsert?: ClientProgressAnxietyUpsertWithWhereUniqueWithoutClientInput | ClientProgressAnxietyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProgressAnxietyCreateManyClientInputEnvelope
    set?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    disconnect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    delete?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    connect?: ClientProgressAnxietyWhereUniqueInput | ClientProgressAnxietyWhereUniqueInput[]
    update?: ClientProgressAnxietyUpdateWithWhereUniqueWithoutClientInput | ClientProgressAnxietyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProgressAnxietyUpdateManyWithWhereWithoutClientInput | ClientProgressAnxietyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProgressAnxietyScalarWhereInput | ClientProgressAnxietyScalarWhereInput[]
  }

  export type ClientProgressDepressionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput> | ClientProgressDepressionCreateWithoutClientInput[] | ClientProgressDepressionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientProgressDepressionCreateOrConnectWithoutClientInput | ClientProgressDepressionCreateOrConnectWithoutClientInput[]
    upsert?: ClientProgressDepressionUpsertWithWhereUniqueWithoutClientInput | ClientProgressDepressionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientProgressDepressionCreateManyClientInputEnvelope
    set?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    disconnect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    delete?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    connect?: ClientProgressDepressionWhereUniqueInput | ClientProgressDepressionWhereUniqueInput[]
    update?: ClientProgressDepressionUpdateWithWhereUniqueWithoutClientInput | ClientProgressDepressionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientProgressDepressionUpdateManyWithWhereWithoutClientInput | ClientProgressDepressionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientProgressDepressionScalarWhereInput | ClientProgressDepressionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeBlocksInput = {
    create?: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTimeBlocksNestedInput = {
    create?: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlocksInput
    upsert?: UserUpsertWithoutTimeBlocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeBlocksInput, UserUpdateWithoutTimeBlocksInput>, UserUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type UserCreateNestedOneWithoutConsultationSessionsInput = {
    create?: XOR<UserCreateWithoutConsultationSessionsInput, UserUncheckedCreateWithoutConsultationSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionsRoundCreateNestedManyWithoutConsultationSessionInput = {
    create?: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput> | SessionsRoundCreateWithoutConsultationSessionInput[] | SessionsRoundUncheckedCreateWithoutConsultationSessionInput[]
    connectOrCreate?: SessionsRoundCreateOrConnectWithoutConsultationSessionInput | SessionsRoundCreateOrConnectWithoutConsultationSessionInput[]
    createMany?: SessionsRoundCreateManyConsultationSessionInputEnvelope
    connect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
  }

  export type SessionsRoundUncheckedCreateNestedManyWithoutConsultationSessionInput = {
    create?: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput> | SessionsRoundCreateWithoutConsultationSessionInput[] | SessionsRoundUncheckedCreateWithoutConsultationSessionInput[]
    connectOrCreate?: SessionsRoundCreateOrConnectWithoutConsultationSessionInput | SessionsRoundCreateOrConnectWithoutConsultationSessionInput[]
    createMany?: SessionsRoundCreateManyConsultationSessionInputEnvelope
    connect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConsultationSessionsNestedInput = {
    create?: XOR<UserCreateWithoutConsultationSessionsInput, UserUncheckedCreateWithoutConsultationSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationSessionsInput
    upsert?: UserUpsertWithoutConsultationSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultationSessionsInput, UserUpdateWithoutConsultationSessionsInput>, UserUncheckedUpdateWithoutConsultationSessionsInput>
  }

  export type SessionsRoundUpdateManyWithoutConsultationSessionNestedInput = {
    create?: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput> | SessionsRoundCreateWithoutConsultationSessionInput[] | SessionsRoundUncheckedCreateWithoutConsultationSessionInput[]
    connectOrCreate?: SessionsRoundCreateOrConnectWithoutConsultationSessionInput | SessionsRoundCreateOrConnectWithoutConsultationSessionInput[]
    upsert?: SessionsRoundUpsertWithWhereUniqueWithoutConsultationSessionInput | SessionsRoundUpsertWithWhereUniqueWithoutConsultationSessionInput[]
    createMany?: SessionsRoundCreateManyConsultationSessionInputEnvelope
    set?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    disconnect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    delete?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    connect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    update?: SessionsRoundUpdateWithWhereUniqueWithoutConsultationSessionInput | SessionsRoundUpdateWithWhereUniqueWithoutConsultationSessionInput[]
    updateMany?: SessionsRoundUpdateManyWithWhereWithoutConsultationSessionInput | SessionsRoundUpdateManyWithWhereWithoutConsultationSessionInput[]
    deleteMany?: SessionsRoundScalarWhereInput | SessionsRoundScalarWhereInput[]
  }

  export type SessionsRoundUncheckedUpdateManyWithoutConsultationSessionNestedInput = {
    create?: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput> | SessionsRoundCreateWithoutConsultationSessionInput[] | SessionsRoundUncheckedCreateWithoutConsultationSessionInput[]
    connectOrCreate?: SessionsRoundCreateOrConnectWithoutConsultationSessionInput | SessionsRoundCreateOrConnectWithoutConsultationSessionInput[]
    upsert?: SessionsRoundUpsertWithWhereUniqueWithoutConsultationSessionInput | SessionsRoundUpsertWithWhereUniqueWithoutConsultationSessionInput[]
    createMany?: SessionsRoundCreateManyConsultationSessionInputEnvelope
    set?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    disconnect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    delete?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    connect?: SessionsRoundWhereUniqueInput | SessionsRoundWhereUniqueInput[]
    update?: SessionsRoundUpdateWithWhereUniqueWithoutConsultationSessionInput | SessionsRoundUpdateWithWhereUniqueWithoutConsultationSessionInput[]
    updateMany?: SessionsRoundUpdateManyWithWhereWithoutConsultationSessionInput | SessionsRoundUpdateManyWithWhereWithoutConsultationSessionInput[]
    deleteMany?: SessionsRoundScalarWhereInput | SessionsRoundScalarWhereInput[]
  }

  export type ConsultationSessionCreateNestedOneWithoutSessionsRoundsInput = {
    create?: XOR<ConsultationSessionCreateWithoutSessionsRoundsInput, ConsultationSessionUncheckedCreateWithoutSessionsRoundsInput>
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutSessionsRoundsInput
    connect?: ConsultationSessionWhereUniqueInput
  }

  export type ConsultationSessionUpdateOneRequiredWithoutSessionsRoundsNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutSessionsRoundsInput, ConsultationSessionUncheckedCreateWithoutSessionsRoundsInput>
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutSessionsRoundsInput
    upsert?: ConsultationSessionUpsertWithoutSessionsRoundsInput
    connect?: ConsultationSessionWhereUniqueInput
    update?: XOR<XOR<ConsultationSessionUpdateToOneWithWhereWithoutSessionsRoundsInput, ConsultationSessionUpdateWithoutSessionsRoundsInput>, ConsultationSessionUncheckedUpdateWithoutSessionsRoundsInput>
  }

  export type UserCreateNestedOneWithoutSessionDurationsInput = {
    create?: XOR<UserCreateWithoutSessionDurationsInput, UserUncheckedCreateWithoutSessionDurationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionDurationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSessionDurationsNestedInput = {
    create?: XOR<UserCreateWithoutSessionDurationsInput, UserUncheckedCreateWithoutSessionDurationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionDurationsInput
    upsert?: UserUpsertWithoutSessionDurationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionDurationsInput, UserUpdateWithoutSessionDurationsInput>, UserUncheckedUpdateWithoutSessionDurationsInput>
  }

  export type ClientCreateNestedOneWithoutClientProgressAnxietysInput = {
    create?: XOR<ClientCreateWithoutClientProgressAnxietysInput, ClientUncheckedCreateWithoutClientProgressAnxietysInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientProgressAnxietysInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutClientProgressAnxietysNestedInput = {
    create?: XOR<ClientCreateWithoutClientProgressAnxietysInput, ClientUncheckedCreateWithoutClientProgressAnxietysInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientProgressAnxietysInput
    upsert?: ClientUpsertWithoutClientProgressAnxietysInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutClientProgressAnxietysInput, ClientUpdateWithoutClientProgressAnxietysInput>, ClientUncheckedUpdateWithoutClientProgressAnxietysInput>
  }

  export type ClientCreateNestedOneWithoutClientProgressDepressionsInput = {
    create?: XOR<ClientCreateWithoutClientProgressDepressionsInput, ClientUncheckedCreateWithoutClientProgressDepressionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientProgressDepressionsInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutClientProgressDepressionsNestedInput = {
    create?: XOR<ClientCreateWithoutClientProgressDepressionsInput, ClientUncheckedCreateWithoutClientProgressDepressionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientProgressDepressionsInput
    upsert?: ClientUpsertWithoutClientProgressDepressionsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutClientProgressDepressionsInput, ClientUpdateWithoutClientProgressDepressionsInput>, ClientUncheckedUpdateWithoutClientProgressDepressionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    ClientProgressAnxietys?: ClientProgressAnxietyCreateNestedManyWithoutClientInput
    ClientProgressDepressions?: ClientProgressDepressionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedCreateNestedManyWithoutClientInput
    ClientProgressDepressions?: ClientProgressDepressionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    sessionsRounds?: SessionsRoundCreateNestedManyWithoutConsultationSessionInput
  }

  export type ConsultationSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    sessionsRounds?: SessionsRoundUncheckedCreateNestedManyWithoutConsultationSessionInput
  }

  export type ConsultationSessionCreateOrConnectWithoutUserInput = {
    where: ConsultationSessionWhereUniqueInput
    create: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput>
  }

  export type ConsultationSessionCreateManyUserInputEnvelope = {
    data: ConsultationSessionCreateManyUserInput | ConsultationSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionDurationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
  }

  export type SessionDurationUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
  }

  export type SessionDurationCreateOrConnectWithoutUserInput = {
    where: SessionDurationWhereUniqueInput
    create: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput>
  }

  export type SessionDurationCreateManyUserInputEnvelope = {
    data: SessionDurationCreateManyUserInput | SessionDurationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeBlockCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type TimeBlockUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type TimeBlockCreateOrConnectWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockCreateManyUserInputEnvelope = {
    data: TimeBlockCreateManyUserInput | TimeBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    name?: StringFilter<"Client"> | string
    contact?: StringNullableFilter<"Client"> | string | null
    priority?: EnumPriorityNullableFilter<"Client"> | $Enums.Priority | null
    isCompleted?: BoolNullableFilter<"Client"> | boolean | null
    userId?: StringFilter<"Client"> | string
  }

  export type ConsultationSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationSessionWhereUniqueInput
    update: XOR<ConsultationSessionUpdateWithoutUserInput, ConsultationSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationSessionCreateWithoutUserInput, ConsultationSessionUncheckedCreateWithoutUserInput>
  }

  export type ConsultationSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationSessionWhereUniqueInput
    data: XOR<ConsultationSessionUpdateWithoutUserInput, ConsultationSessionUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationSessionUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationSessionScalarWhereInput
    data: XOR<ConsultationSessionUpdateManyMutationInput, ConsultationSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationSessionScalarWhereInput = {
    AND?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
    OR?: ConsultationSessionScalarWhereInput[]
    NOT?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
    id?: StringFilter<"ConsultationSession"> | string
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    isCompleted?: BoolNullableFilter<"ConsultationSession"> | boolean | null
    userId?: StringFilter<"ConsultationSession"> | string
  }

  export type SessionDurationUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionDurationWhereUniqueInput
    update: XOR<SessionDurationUpdateWithoutUserInput, SessionDurationUncheckedUpdateWithoutUserInput>
    create: XOR<SessionDurationCreateWithoutUserInput, SessionDurationUncheckedCreateWithoutUserInput>
  }

  export type SessionDurationUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionDurationWhereUniqueInput
    data: XOR<SessionDurationUpdateWithoutUserInput, SessionDurationUncheckedUpdateWithoutUserInput>
  }

  export type SessionDurationUpdateManyWithWhereWithoutUserInput = {
    where: SessionDurationScalarWhereInput
    data: XOR<SessionDurationUpdateManyMutationInput, SessionDurationUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionDurationScalarWhereInput = {
    AND?: SessionDurationScalarWhereInput | SessionDurationScalarWhereInput[]
    OR?: SessionDurationScalarWhereInput[]
    NOT?: SessionDurationScalarWhereInput | SessionDurationScalarWhereInput[]
    id?: StringFilter<"SessionDuration"> | string
    createdAt?: DateTimeFilter<"SessionDuration"> | Date | string
    updatedAt?: DateTimeFilter<"SessionDuration"> | Date | string
    sessionDuration?: IntNullableFilter<"SessionDuration"> | number | null
    breakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    longBreakDuration?: IntNullableFilter<"SessionDuration"> | number | null
    sessionsCount?: IntNullableFilter<"SessionDuration"> | number | null
    userId?: StringFilter<"SessionDuration"> | string
  }

  export type TimeBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    update: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    data: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
  }

  export type TimeBlockUpdateManyWithWhereWithoutUserInput = {
    where: TimeBlockScalarWhereInput
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeBlockScalarWhereInput = {
    AND?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    OR?: TimeBlockScalarWhereInput[]
    NOT?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    consultationSessions?: ConsultationSessionCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    consultationSessions?: ConsultationSessionUncheckedCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type ClientProgressAnxietyCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
  }

  export type ClientProgressAnxietyUncheckedCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
  }

  export type ClientProgressAnxietyCreateOrConnectWithoutClientInput = {
    where: ClientProgressAnxietyWhereUniqueInput
    create: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput>
  }

  export type ClientProgressAnxietyCreateManyClientInputEnvelope = {
    data: ClientProgressAnxietyCreateManyClientInput | ClientProgressAnxietyCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientProgressDepressionCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
  }

  export type ClientProgressDepressionUncheckedCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
  }

  export type ClientProgressDepressionCreateOrConnectWithoutClientInput = {
    where: ClientProgressDepressionWhereUniqueInput
    create: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput>
  }

  export type ClientProgressDepressionCreateManyClientInputEnvelope = {
    data: ClientProgressDepressionCreateManyClientInput | ClientProgressDepressionCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    consultationSessions?: ConsultationSessionUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    consultationSessions?: ConsultationSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientProgressAnxietyUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientProgressAnxietyWhereUniqueInput
    update: XOR<ClientProgressAnxietyUpdateWithoutClientInput, ClientProgressAnxietyUncheckedUpdateWithoutClientInput>
    create: XOR<ClientProgressAnxietyCreateWithoutClientInput, ClientProgressAnxietyUncheckedCreateWithoutClientInput>
  }

  export type ClientProgressAnxietyUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientProgressAnxietyWhereUniqueInput
    data: XOR<ClientProgressAnxietyUpdateWithoutClientInput, ClientProgressAnxietyUncheckedUpdateWithoutClientInput>
  }

  export type ClientProgressAnxietyUpdateManyWithWhereWithoutClientInput = {
    where: ClientProgressAnxietyScalarWhereInput
    data: XOR<ClientProgressAnxietyUpdateManyMutationInput, ClientProgressAnxietyUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientProgressAnxietyScalarWhereInput = {
    AND?: ClientProgressAnxietyScalarWhereInput | ClientProgressAnxietyScalarWhereInput[]
    OR?: ClientProgressAnxietyScalarWhereInput[]
    NOT?: ClientProgressAnxietyScalarWhereInput | ClientProgressAnxietyScalarWhereInput[]
    id?: StringFilter<"ClientProgressAnxiety"> | string
    createdAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressAnxiety"> | Date | string
    suddendlyscared?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    fearful?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    faintness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    nervousness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    heartRacing?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    trembling?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    feelingTense?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    headaches?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    panic?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    restlessness?: IntNullableFilter<"ClientProgressAnxiety"> | number | null
    clientId?: StringFilter<"ClientProgressAnxiety"> | string
  }

  export type ClientProgressDepressionUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientProgressDepressionWhereUniqueInput
    update: XOR<ClientProgressDepressionUpdateWithoutClientInput, ClientProgressDepressionUncheckedUpdateWithoutClientInput>
    create: XOR<ClientProgressDepressionCreateWithoutClientInput, ClientProgressDepressionUncheckedCreateWithoutClientInput>
  }

  export type ClientProgressDepressionUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientProgressDepressionWhereUniqueInput
    data: XOR<ClientProgressDepressionUpdateWithoutClientInput, ClientProgressDepressionUncheckedUpdateWithoutClientInput>
  }

  export type ClientProgressDepressionUpdateManyWithWhereWithoutClientInput = {
    where: ClientProgressDepressionScalarWhereInput
    data: XOR<ClientProgressDepressionUpdateManyMutationInput, ClientProgressDepressionUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientProgressDepressionScalarWhereInput = {
    AND?: ClientProgressDepressionScalarWhereInput | ClientProgressDepressionScalarWhereInput[]
    OR?: ClientProgressDepressionScalarWhereInput[]
    NOT?: ClientProgressDepressionScalarWhereInput | ClientProgressDepressionScalarWhereInput[]
    id?: StringFilter<"ClientProgressDepression"> | string
    createdAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProgressDepression"> | Date | string
    lowEnergy?: IntNullableFilter<"ClientProgressDepression"> | number | null
    blamingyourself?: IntNullableFilter<"ClientProgressDepression"> | number | null
    crying?: IntNullableFilter<"ClientProgressDepression"> | number | null
    sexualLoss?: IntNullableFilter<"ClientProgressDepression"> | number | null
    poorAppetite?: IntNullableFilter<"ClientProgressDepression"> | number | null
    insomnia?: IntNullableFilter<"ClientProgressDepression"> | number | null
    hopeness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingBlue?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingLonely?: IntNullableFilter<"ClientProgressDepression"> | number | null
    endingLifeThoughts?: IntNullableFilter<"ClientProgressDepression"> | number | null
    tpappedFeelings?: IntNullableFilter<"ClientProgressDepression"> | number | null
    wooringTooMuch?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingNoInterest?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingEffortless?: IntNullableFilter<"ClientProgressDepression"> | number | null
    feelingWorthlessness?: IntNullableFilter<"ClientProgressDepression"> | number | null
    clientId?: StringFilter<"ClientProgressDepression"> | string
  }

  export type UserCreateWithoutTimeBlocksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeBlocksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionUncheckedCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
  }

  export type UserUpsertWithoutTimeBlocksInput = {
    update: XOR<UserUpdateWithoutTimeBlocksInput, UserUncheckedUpdateWithoutTimeBlocksInput>
    create: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeBlocksInput, UserUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type UserUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConsultationSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsultationSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    sessionDurations?: SessionDurationUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsultationSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultationSessionsInput, UserUncheckedCreateWithoutConsultationSessionsInput>
  }

  export type SessionsRoundCreateWithoutConsultationSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
  }

  export type SessionsRoundUncheckedCreateWithoutConsultationSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
  }

  export type SessionsRoundCreateOrConnectWithoutConsultationSessionInput = {
    where: SessionsRoundWhereUniqueInput
    create: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput>
  }

  export type SessionsRoundCreateManyConsultationSessionInputEnvelope = {
    data: SessionsRoundCreateManyConsultationSessionInput | SessionsRoundCreateManyConsultationSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConsultationSessionsInput = {
    update: XOR<UserUpdateWithoutConsultationSessionsInput, UserUncheckedUpdateWithoutConsultationSessionsInput>
    create: XOR<UserCreateWithoutConsultationSessionsInput, UserUncheckedCreateWithoutConsultationSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultationSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultationSessionsInput, UserUncheckedUpdateWithoutConsultationSessionsInput>
  }

  export type UserUpdateWithoutConsultationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    sessionDurations?: SessionDurationUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionsRoundUpsertWithWhereUniqueWithoutConsultationSessionInput = {
    where: SessionsRoundWhereUniqueInput
    update: XOR<SessionsRoundUpdateWithoutConsultationSessionInput, SessionsRoundUncheckedUpdateWithoutConsultationSessionInput>
    create: XOR<SessionsRoundCreateWithoutConsultationSessionInput, SessionsRoundUncheckedCreateWithoutConsultationSessionInput>
  }

  export type SessionsRoundUpdateWithWhereUniqueWithoutConsultationSessionInput = {
    where: SessionsRoundWhereUniqueInput
    data: XOR<SessionsRoundUpdateWithoutConsultationSessionInput, SessionsRoundUncheckedUpdateWithoutConsultationSessionInput>
  }

  export type SessionsRoundUpdateManyWithWhereWithoutConsultationSessionInput = {
    where: SessionsRoundScalarWhereInput
    data: XOR<SessionsRoundUpdateManyMutationInput, SessionsRoundUncheckedUpdateManyWithoutConsultationSessionInput>
  }

  export type SessionsRoundScalarWhereInput = {
    AND?: SessionsRoundScalarWhereInput | SessionsRoundScalarWhereInput[]
    OR?: SessionsRoundScalarWhereInput[]
    NOT?: SessionsRoundScalarWhereInput | SessionsRoundScalarWhereInput[]
    id?: StringFilter<"SessionsRound"> | string
    createdAt?: DateTimeFilter<"SessionsRound"> | Date | string
    updatedAt?: DateTimeFilter<"SessionsRound"> | Date | string
    totalDuration?: IntFilter<"SessionsRound"> | number
    isCompleted?: BoolNullableFilter<"SessionsRound"> | boolean | null
    consultationSessionId?: StringFilter<"SessionsRound"> | string
  }

  export type ConsultationSessionCreateWithoutSessionsRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutConsultationSessionsInput
  }

  export type ConsultationSessionUncheckedCreateWithoutSessionsRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
  }

  export type ConsultationSessionCreateOrConnectWithoutSessionsRoundsInput = {
    where: ConsultationSessionWhereUniqueInput
    create: XOR<ConsultationSessionCreateWithoutSessionsRoundsInput, ConsultationSessionUncheckedCreateWithoutSessionsRoundsInput>
  }

  export type ConsultationSessionUpsertWithoutSessionsRoundsInput = {
    update: XOR<ConsultationSessionUpdateWithoutSessionsRoundsInput, ConsultationSessionUncheckedUpdateWithoutSessionsRoundsInput>
    create: XOR<ConsultationSessionCreateWithoutSessionsRoundsInput, ConsultationSessionUncheckedCreateWithoutSessionsRoundsInput>
    where?: ConsultationSessionWhereInput
  }

  export type ConsultationSessionUpdateToOneWithWhereWithoutSessionsRoundsInput = {
    where?: ConsultationSessionWhereInput
    data: XOR<ConsultationSessionUpdateWithoutSessionsRoundsInput, ConsultationSessionUncheckedUpdateWithoutSessionsRoundsInput>
  }

  export type ConsultationSessionUpdateWithoutSessionsRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutConsultationSessionsNestedInput
  }

  export type ConsultationSessionUncheckedUpdateWithoutSessionsRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutSessionDurationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionDurationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    consultationSessions?: ConsultationSessionUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionDurationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionDurationsInput, UserUncheckedCreateWithoutSessionDurationsInput>
  }

  export type UserUpsertWithoutSessionDurationsInput = {
    update: XOR<UserUpdateWithoutSessionDurationsInput, UserUncheckedUpdateWithoutSessionDurationsInput>
    create: XOR<UserCreateWithoutSessionDurationsInput, UserUncheckedCreateWithoutSessionDurationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionDurationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionDurationsInput, UserUncheckedUpdateWithoutSessionDurationsInput>
  }

  export type UserUpdateWithoutSessionDurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionDurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    consultationSessions?: ConsultationSessionUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientCreateWithoutClientProgressAnxietysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutClientsInput
    ClientProgressDepressions?: ClientProgressDepressionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutClientProgressAnxietysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    userId: string
    ClientProgressDepressions?: ClientProgressDepressionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutClientProgressAnxietysInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutClientProgressAnxietysInput, ClientUncheckedCreateWithoutClientProgressAnxietysInput>
  }

  export type ClientUpsertWithoutClientProgressAnxietysInput = {
    update: XOR<ClientUpdateWithoutClientProgressAnxietysInput, ClientUncheckedUpdateWithoutClientProgressAnxietysInput>
    create: XOR<ClientCreateWithoutClientProgressAnxietysInput, ClientUncheckedCreateWithoutClientProgressAnxietysInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutClientProgressAnxietysInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutClientProgressAnxietysInput, ClientUncheckedUpdateWithoutClientProgressAnxietysInput>
  }

  export type ClientUpdateWithoutClientProgressAnxietysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    ClientProgressDepressions?: ClientProgressDepressionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutClientProgressAnxietysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    ClientProgressDepressions?: ClientProgressDepressionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutClientProgressDepressionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutClientsInput
    ClientProgressAnxietys?: ClientProgressAnxietyCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutClientProgressDepressionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
    userId: string
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutClientProgressDepressionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutClientProgressDepressionsInput, ClientUncheckedCreateWithoutClientProgressDepressionsInput>
  }

  export type ClientUpsertWithoutClientProgressDepressionsInput = {
    update: XOR<ClientUpdateWithoutClientProgressDepressionsInput, ClientUncheckedUpdateWithoutClientProgressDepressionsInput>
    create: XOR<ClientCreateWithoutClientProgressDepressionsInput, ClientUncheckedCreateWithoutClientProgressDepressionsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutClientProgressDepressionsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutClientProgressDepressionsInput, ClientUncheckedUpdateWithoutClientProgressDepressionsInput>
  }

  export type ClientUpdateWithoutClientProgressDepressionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    ClientProgressAnxietys?: ClientProgressAnxietyUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutClientProgressDepressionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    contact?: string | null
    priority?: $Enums.Priority | null
    isCompleted?: boolean | null
  }

  export type ConsultationSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
  }

  export type SessionDurationCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionDuration?: number | null
    breakDuration?: number | null
    longBreakDuration?: number | null
    sessionsCount?: number | null
  }

  export type TimeBlockCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ClientProgressAnxietys?: ClientProgressAnxietyUpdateManyWithoutClientNestedInput
    ClientProgressDepressions?: ClientProgressDepressionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ClientProgressAnxietys?: ClientProgressAnxietyUncheckedUpdateManyWithoutClientNestedInput
    ClientProgressDepressions?: ClientProgressDepressionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ConsultationSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessionsRounds?: SessionsRoundUpdateManyWithoutConsultationSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessionsRounds?: SessionsRoundUncheckedUpdateManyWithoutConsultationSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionDurationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionDurationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionDurationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    breakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    longBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sessionsCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimeBlockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ClientProgressAnxietyCreateManyClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suddendlyscared?: number | null
    fearful?: number | null
    faintness?: number | null
    nervousness?: number | null
    heartRacing?: number | null
    trembling?: number | null
    feelingTense?: number | null
    headaches?: number | null
    panic?: number | null
    restlessness?: number | null
  }

  export type ClientProgressDepressionCreateManyClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lowEnergy?: number | null
    blamingyourself?: number | null
    crying?: number | null
    sexualLoss?: number | null
    poorAppetite?: number | null
    insomnia?: number | null
    hopeness?: number | null
    feelingBlue?: number | null
    feelingLonely?: number | null
    endingLifeThoughts?: number | null
    tpappedFeelings?: number | null
    wooringTooMuch?: number | null
    feelingNoInterest?: number | null
    feelingEffortless?: number | null
    feelingWorthlessness?: number | null
  }

  export type ClientProgressAnxietyUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressAnxietyUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressAnxietyUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suddendlyscared?: NullableIntFieldUpdateOperationsInput | number | null
    fearful?: NullableIntFieldUpdateOperationsInput | number | null
    faintness?: NullableIntFieldUpdateOperationsInput | number | null
    nervousness?: NullableIntFieldUpdateOperationsInput | number | null
    heartRacing?: NullableIntFieldUpdateOperationsInput | number | null
    trembling?: NullableIntFieldUpdateOperationsInput | number | null
    feelingTense?: NullableIntFieldUpdateOperationsInput | number | null
    headaches?: NullableIntFieldUpdateOperationsInput | number | null
    panic?: NullableIntFieldUpdateOperationsInput | number | null
    restlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressDepressionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressDepressionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientProgressDepressionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowEnergy?: NullableIntFieldUpdateOperationsInput | number | null
    blamingyourself?: NullableIntFieldUpdateOperationsInput | number | null
    crying?: NullableIntFieldUpdateOperationsInput | number | null
    sexualLoss?: NullableIntFieldUpdateOperationsInput | number | null
    poorAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    insomnia?: NullableIntFieldUpdateOperationsInput | number | null
    hopeness?: NullableIntFieldUpdateOperationsInput | number | null
    feelingBlue?: NullableIntFieldUpdateOperationsInput | number | null
    feelingLonely?: NullableIntFieldUpdateOperationsInput | number | null
    endingLifeThoughts?: NullableIntFieldUpdateOperationsInput | number | null
    tpappedFeelings?: NullableIntFieldUpdateOperationsInput | number | null
    wooringTooMuch?: NullableIntFieldUpdateOperationsInput | number | null
    feelingNoInterest?: NullableIntFieldUpdateOperationsInput | number | null
    feelingEffortless?: NullableIntFieldUpdateOperationsInput | number | null
    feelingWorthlessness?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionsRoundCreateManyConsultationSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalDuration: number
    isCompleted?: boolean | null
  }

  export type SessionsRoundUpdateWithoutConsultationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionsRoundUncheckedUpdateWithoutConsultationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionsRoundUncheckedUpdateManyWithoutConsultationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDuration?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultationSessionCountOutputTypeDefaultArgs instead
     */
    export type ConsultationSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeBlockDefaultArgs instead
     */
    export type TimeBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeBlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultationSessionDefaultArgs instead
     */
    export type ConsultationSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultationSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionsRoundDefaultArgs instead
     */
    export type SessionsRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionsRoundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDurationDefaultArgs instead
     */
    export type SessionDurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDurationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientProgressAnxietyDefaultArgs instead
     */
    export type ClientProgressAnxietyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientProgressAnxietyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientProgressDepressionDefaultArgs instead
     */
    export type ClientProgressDepressionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientProgressDepressionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TelegramBotSessionDefaultArgs instead
     */
    export type TelegramBotSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TelegramBotSessionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}