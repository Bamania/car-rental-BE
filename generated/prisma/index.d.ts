
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
 * Model BookingInfo
 * 
 */
export type BookingInfo = $Result.DefaultSelection<Prisma.$BookingInfoPayload>
/**
 * Model CarInfo
 * 
 */
export type CarInfo = $Result.DefaultSelection<Prisma.$CarInfoPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingInfo`: Exposes CRUD operations for the **BookingInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingInfos
    * const bookingInfos = await prisma.bookingInfo.findMany()
    * ```
    */
  get bookingInfo(): Prisma.BookingInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carInfo`: Exposes CRUD operations for the **CarInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarInfos
    * const carInfos = await prisma.carInfo.findMany()
    * ```
    */
  get carInfo(): Prisma.CarInfoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    BookingInfo: 'BookingInfo',
    CarInfo: 'CarInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "bookingInfo" | "carInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BookingInfo: {
        payload: Prisma.$BookingInfoPayload<ExtArgs>
        fields: Prisma.BookingInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          findFirst: {
            args: Prisma.BookingInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          findMany: {
            args: Prisma.BookingInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>[]
          }
          create: {
            args: Prisma.BookingInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          createMany: {
            args: Prisma.BookingInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>[]
          }
          delete: {
            args: Prisma.BookingInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          update: {
            args: Prisma.BookingInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          deleteMany: {
            args: Prisma.BookingInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>[]
          }
          upsert: {
            args: Prisma.BookingInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingInfoPayload>
          }
          aggregate: {
            args: Prisma.BookingInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingInfo>
          }
          groupBy: {
            args: Prisma.BookingInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingInfoCountArgs<ExtArgs>
            result: $Utils.Optional<BookingInfoCountAggregateOutputType> | number
          }
        }
      }
      CarInfo: {
        payload: Prisma.$CarInfoPayload<ExtArgs>
        fields: Prisma.CarInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          findFirst: {
            args: Prisma.CarInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          findMany: {
            args: Prisma.CarInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>[]
          }
          create: {
            args: Prisma.CarInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          createMany: {
            args: Prisma.CarInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>[]
          }
          delete: {
            args: Prisma.CarInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          update: {
            args: Prisma.CarInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          deleteMany: {
            args: Prisma.CarInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>[]
          }
          upsert: {
            args: Prisma.CarInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarInfoPayload>
          }
          aggregate: {
            args: Prisma.CarInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarInfo>
          }
          groupBy: {
            args: Prisma.CarInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CarInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bookingInfo?: BookingInfoOmit
    carInfo?: CarInfoOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingInfoWhereInput
  }


  /**
   * Count Type CarInfoCountOutputType
   */

  export type CarInfoCountOutputType = {
    bookings: number
  }

  export type CarInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CarInfoCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CarInfoCountOutputType without action
   */
  export type CarInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfoCountOutputType
     */
    select?: CarInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarInfoCountOutputType without action
   */
  export type CarInfoCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phoneNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phoneNumber: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phoneNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phoneNumber: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    where?: BookingInfoWhereInput
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    cursor?: BookingInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingInfoScalarFieldEnum | BookingInfoScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BookingInfo
   */

  export type AggregateBookingInfo = {
    _count: BookingInfoCountAggregateOutputType | null
    _avg: BookingInfoAvgAggregateOutputType | null
    _sum: BookingInfoSumAggregateOutputType | null
    _min: BookingInfoMinAggregateOutputType | null
    _max: BookingInfoMaxAggregateOutputType | null
  }

  export type BookingInfoAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    totalPrice: number | null
    userId: number | null
  }

  export type BookingInfoSumAggregateOutputType = {
    id: number | null
    carId: number | null
    totalPrice: number | null
    userId: number | null
  }

  export type BookingInfoMinAggregateOutputType = {
    id: number | null
    carId: number | null
    pickupDate: string | null
    dropoffDate: string | null
    pickupLocation: string | null
    totalPrice: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type BookingInfoMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    pickupDate: string | null
    dropoffDate: string | null
    pickupLocation: string | null
    totalPrice: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type BookingInfoCountAggregateOutputType = {
    id: number
    carId: number
    pickupDate: number
    dropoffDate: number
    pickupLocation: number
    totalPrice: number
    createdAt: number
    userId: number
    _all: number
  }


  export type BookingInfoAvgAggregateInputType = {
    id?: true
    carId?: true
    totalPrice?: true
    userId?: true
  }

  export type BookingInfoSumAggregateInputType = {
    id?: true
    carId?: true
    totalPrice?: true
    userId?: true
  }

  export type BookingInfoMinAggregateInputType = {
    id?: true
    carId?: true
    pickupDate?: true
    dropoffDate?: true
    pickupLocation?: true
    totalPrice?: true
    createdAt?: true
    userId?: true
  }

  export type BookingInfoMaxAggregateInputType = {
    id?: true
    carId?: true
    pickupDate?: true
    dropoffDate?: true
    pickupLocation?: true
    totalPrice?: true
    createdAt?: true
    userId?: true
  }

  export type BookingInfoCountAggregateInputType = {
    id?: true
    carId?: true
    pickupDate?: true
    dropoffDate?: true
    pickupLocation?: true
    totalPrice?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type BookingInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingInfo to aggregate.
     */
    where?: BookingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingInfos to fetch.
     */
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingInfos
    **/
    _count?: true | BookingInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingInfoMaxAggregateInputType
  }

  export type GetBookingInfoAggregateType<T extends BookingInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingInfo[P]>
      : GetScalarType<T[P], AggregateBookingInfo[P]>
  }




  export type BookingInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingInfoWhereInput
    orderBy?: BookingInfoOrderByWithAggregationInput | BookingInfoOrderByWithAggregationInput[]
    by: BookingInfoScalarFieldEnum[] | BookingInfoScalarFieldEnum
    having?: BookingInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingInfoCountAggregateInputType | true
    _avg?: BookingInfoAvgAggregateInputType
    _sum?: BookingInfoSumAggregateInputType
    _min?: BookingInfoMinAggregateInputType
    _max?: BookingInfoMaxAggregateInputType
  }

  export type BookingInfoGroupByOutputType = {
    id: number
    carId: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt: Date
    userId: number
    _count: BookingInfoCountAggregateOutputType | null
    _avg: BookingInfoAvgAggregateOutputType | null
    _sum: BookingInfoSumAggregateOutputType | null
    _min: BookingInfoMinAggregateOutputType | null
    _max: BookingInfoMaxAggregateOutputType | null
  }

  type GetBookingInfoGroupByPayload<T extends BookingInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingInfoGroupByOutputType[P]>
            : GetScalarType<T[P], BookingInfoGroupByOutputType[P]>
        }
      >
    >


  export type BookingInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    pickupLocation?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingInfo"]>

  export type BookingInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    pickupLocation?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingInfo"]>

  export type BookingInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    pickupLocation?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingInfo"]>

  export type BookingInfoSelectScalar = {
    id?: boolean
    carId?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    pickupLocation?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type BookingInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "pickupDate" | "dropoffDate" | "pickupLocation" | "totalPrice" | "createdAt" | "userId", ExtArgs["result"]["bookingInfo"]>
  export type BookingInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarInfoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingInfo"
    objects: {
      car: Prisma.$CarInfoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      pickupDate: string
      dropoffDate: string
      pickupLocation: string
      totalPrice: number
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["bookingInfo"]>
    composites: {}
  }

  type BookingInfoGetPayload<S extends boolean | null | undefined | BookingInfoDefaultArgs> = $Result.GetResult<Prisma.$BookingInfoPayload, S>

  type BookingInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingInfoCountAggregateInputType | true
    }

  export interface BookingInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingInfo'], meta: { name: 'BookingInfo' } }
    /**
     * Find zero or one BookingInfo that matches the filter.
     * @param {BookingInfoFindUniqueArgs} args - Arguments to find a BookingInfo
     * @example
     * // Get one BookingInfo
     * const bookingInfo = await prisma.bookingInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingInfoFindUniqueArgs>(args: SelectSubset<T, BookingInfoFindUniqueArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingInfoFindUniqueOrThrowArgs} args - Arguments to find a BookingInfo
     * @example
     * // Get one BookingInfo
     * const bookingInfo = await prisma.bookingInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoFindFirstArgs} args - Arguments to find a BookingInfo
     * @example
     * // Get one BookingInfo
     * const bookingInfo = await prisma.bookingInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingInfoFindFirstArgs>(args?: SelectSubset<T, BookingInfoFindFirstArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoFindFirstOrThrowArgs} args - Arguments to find a BookingInfo
     * @example
     * // Get one BookingInfo
     * const bookingInfo = await prisma.bookingInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingInfos
     * const bookingInfos = await prisma.bookingInfo.findMany()
     * 
     * // Get first 10 BookingInfos
     * const bookingInfos = await prisma.bookingInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingInfoWithIdOnly = await prisma.bookingInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingInfoFindManyArgs>(args?: SelectSubset<T, BookingInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingInfo.
     * @param {BookingInfoCreateArgs} args - Arguments to create a BookingInfo.
     * @example
     * // Create one BookingInfo
     * const BookingInfo = await prisma.bookingInfo.create({
     *   data: {
     *     // ... data to create a BookingInfo
     *   }
     * })
     * 
     */
    create<T extends BookingInfoCreateArgs>(args: SelectSubset<T, BookingInfoCreateArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingInfos.
     * @param {BookingInfoCreateManyArgs} args - Arguments to create many BookingInfos.
     * @example
     * // Create many BookingInfos
     * const bookingInfo = await prisma.bookingInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingInfoCreateManyArgs>(args?: SelectSubset<T, BookingInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingInfos and returns the data saved in the database.
     * @param {BookingInfoCreateManyAndReturnArgs} args - Arguments to create many BookingInfos.
     * @example
     * // Create many BookingInfos
     * const bookingInfo = await prisma.bookingInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingInfos and only return the `id`
     * const bookingInfoWithIdOnly = await prisma.bookingInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingInfo.
     * @param {BookingInfoDeleteArgs} args - Arguments to delete one BookingInfo.
     * @example
     * // Delete one BookingInfo
     * const BookingInfo = await prisma.bookingInfo.delete({
     *   where: {
     *     // ... filter to delete one BookingInfo
     *   }
     * })
     * 
     */
    delete<T extends BookingInfoDeleteArgs>(args: SelectSubset<T, BookingInfoDeleteArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingInfo.
     * @param {BookingInfoUpdateArgs} args - Arguments to update one BookingInfo.
     * @example
     * // Update one BookingInfo
     * const bookingInfo = await prisma.bookingInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingInfoUpdateArgs>(args: SelectSubset<T, BookingInfoUpdateArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingInfos.
     * @param {BookingInfoDeleteManyArgs} args - Arguments to filter BookingInfos to delete.
     * @example
     * // Delete a few BookingInfos
     * const { count } = await prisma.bookingInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingInfoDeleteManyArgs>(args?: SelectSubset<T, BookingInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingInfos
     * const bookingInfo = await prisma.bookingInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingInfoUpdateManyArgs>(args: SelectSubset<T, BookingInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingInfos and returns the data updated in the database.
     * @param {BookingInfoUpdateManyAndReturnArgs} args - Arguments to update many BookingInfos.
     * @example
     * // Update many BookingInfos
     * const bookingInfo = await prisma.bookingInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingInfos and only return the `id`
     * const bookingInfoWithIdOnly = await prisma.bookingInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingInfo.
     * @param {BookingInfoUpsertArgs} args - Arguments to update or create a BookingInfo.
     * @example
     * // Update or create a BookingInfo
     * const bookingInfo = await prisma.bookingInfo.upsert({
     *   create: {
     *     // ... data to create a BookingInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingInfo we want to update
     *   }
     * })
     */
    upsert<T extends BookingInfoUpsertArgs>(args: SelectSubset<T, BookingInfoUpsertArgs<ExtArgs>>): Prisma__BookingInfoClient<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoCountArgs} args - Arguments to filter BookingInfos to count.
     * @example
     * // Count the number of BookingInfos
     * const count = await prisma.bookingInfo.count({
     *   where: {
     *     // ... the filter for the BookingInfos we want to count
     *   }
     * })
    **/
    count<T extends BookingInfoCountArgs>(
      args?: Subset<T, BookingInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingInfoAggregateArgs>(args: Subset<T, BookingInfoAggregateArgs>): Prisma.PrismaPromise<GetBookingInfoAggregateType<T>>

    /**
     * Group by BookingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingInfoGroupByArgs} args - Group by arguments.
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
      T extends BookingInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingInfoGroupByArgs['orderBy'] }
        : { orderBy?: BookingInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingInfo model
   */
  readonly fields: BookingInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarInfoDefaultArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingInfo model
   */
  interface BookingInfoFieldRefs {
    readonly id: FieldRef<"BookingInfo", 'Int'>
    readonly carId: FieldRef<"BookingInfo", 'Int'>
    readonly pickupDate: FieldRef<"BookingInfo", 'String'>
    readonly dropoffDate: FieldRef<"BookingInfo", 'String'>
    readonly pickupLocation: FieldRef<"BookingInfo", 'String'>
    readonly totalPrice: FieldRef<"BookingInfo", 'Float'>
    readonly createdAt: FieldRef<"BookingInfo", 'DateTime'>
    readonly userId: FieldRef<"BookingInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingInfo findUnique
   */
  export type BookingInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter, which BookingInfo to fetch.
     */
    where: BookingInfoWhereUniqueInput
  }

  /**
   * BookingInfo findUniqueOrThrow
   */
  export type BookingInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter, which BookingInfo to fetch.
     */
    where: BookingInfoWhereUniqueInput
  }

  /**
   * BookingInfo findFirst
   */
  export type BookingInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter, which BookingInfo to fetch.
     */
    where?: BookingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingInfos to fetch.
     */
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingInfos.
     */
    cursor?: BookingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingInfos.
     */
    distinct?: BookingInfoScalarFieldEnum | BookingInfoScalarFieldEnum[]
  }

  /**
   * BookingInfo findFirstOrThrow
   */
  export type BookingInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter, which BookingInfo to fetch.
     */
    where?: BookingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingInfos to fetch.
     */
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingInfos.
     */
    cursor?: BookingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingInfos.
     */
    distinct?: BookingInfoScalarFieldEnum | BookingInfoScalarFieldEnum[]
  }

  /**
   * BookingInfo findMany
   */
  export type BookingInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter, which BookingInfos to fetch.
     */
    where?: BookingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingInfos to fetch.
     */
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingInfos.
     */
    cursor?: BookingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingInfos.
     */
    skip?: number
    distinct?: BookingInfoScalarFieldEnum | BookingInfoScalarFieldEnum[]
  }

  /**
   * BookingInfo create
   */
  export type BookingInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingInfo.
     */
    data: XOR<BookingInfoCreateInput, BookingInfoUncheckedCreateInput>
  }

  /**
   * BookingInfo createMany
   */
  export type BookingInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingInfos.
     */
    data: BookingInfoCreateManyInput | BookingInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingInfo createManyAndReturn
   */
  export type BookingInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * The data used to create many BookingInfos.
     */
    data: BookingInfoCreateManyInput | BookingInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingInfo update
   */
  export type BookingInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingInfo.
     */
    data: XOR<BookingInfoUpdateInput, BookingInfoUncheckedUpdateInput>
    /**
     * Choose, which BookingInfo to update.
     */
    where: BookingInfoWhereUniqueInput
  }

  /**
   * BookingInfo updateMany
   */
  export type BookingInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingInfos.
     */
    data: XOR<BookingInfoUpdateManyMutationInput, BookingInfoUncheckedUpdateManyInput>
    /**
     * Filter which BookingInfos to update
     */
    where?: BookingInfoWhereInput
    /**
     * Limit how many BookingInfos to update.
     */
    limit?: number
  }

  /**
   * BookingInfo updateManyAndReturn
   */
  export type BookingInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * The data used to update BookingInfos.
     */
    data: XOR<BookingInfoUpdateManyMutationInput, BookingInfoUncheckedUpdateManyInput>
    /**
     * Filter which BookingInfos to update
     */
    where?: BookingInfoWhereInput
    /**
     * Limit how many BookingInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingInfo upsert
   */
  export type BookingInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingInfo to update in case it exists.
     */
    where: BookingInfoWhereUniqueInput
    /**
     * In case the BookingInfo found by the `where` argument doesn't exist, create a new BookingInfo with this data.
     */
    create: XOR<BookingInfoCreateInput, BookingInfoUncheckedCreateInput>
    /**
     * In case the BookingInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingInfoUpdateInput, BookingInfoUncheckedUpdateInput>
  }

  /**
   * BookingInfo delete
   */
  export type BookingInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    /**
     * Filter which BookingInfo to delete.
     */
    where: BookingInfoWhereUniqueInput
  }

  /**
   * BookingInfo deleteMany
   */
  export type BookingInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingInfos to delete
     */
    where?: BookingInfoWhereInput
    /**
     * Limit how many BookingInfos to delete.
     */
    limit?: number
  }

  /**
   * BookingInfo without action
   */
  export type BookingInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
  }


  /**
   * Model CarInfo
   */

  export type AggregateCarInfo = {
    _count: CarInfoCountAggregateOutputType | null
    _avg: CarInfoAvgAggregateOutputType | null
    _sum: CarInfoSumAggregateOutputType | null
    _min: CarInfoMinAggregateOutputType | null
    _max: CarInfoMaxAggregateOutputType | null
  }

  export type CarInfoAvgAggregateOutputType = {
    id: number | null
    price_per_day: number | null
    rating: number | null
  }

  export type CarInfoSumAggregateOutputType = {
    id: number | null
    price_per_day: number | null
    rating: number | null
  }

  export type CarInfoMinAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    image: string | null
    type: string | null
    price_per_day: number | null
    rating: number | null
    fuel_type: string | null
    transmission: string | null
    description: string | null
  }

  export type CarInfoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    image: string | null
    type: string | null
    price_per_day: number | null
    rating: number | null
    fuel_type: string | null
    transmission: string | null
    description: string | null
  }

  export type CarInfoCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    image: number
    type: number
    price_per_day: number
    rating: number
    fuel_type: number
    transmission: number
    description: number
    _all: number
  }


  export type CarInfoAvgAggregateInputType = {
    id?: true
    price_per_day?: true
    rating?: true
  }

  export type CarInfoSumAggregateInputType = {
    id?: true
    price_per_day?: true
    rating?: true
  }

  export type CarInfoMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    image?: true
    type?: true
    price_per_day?: true
    rating?: true
    fuel_type?: true
    transmission?: true
    description?: true
  }

  export type CarInfoMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    image?: true
    type?: true
    price_per_day?: true
    rating?: true
    fuel_type?: true
    transmission?: true
    description?: true
  }

  export type CarInfoCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    image?: true
    type?: true
    price_per_day?: true
    rating?: true
    fuel_type?: true
    transmission?: true
    description?: true
    _all?: true
  }

  export type CarInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarInfo to aggregate.
     */
    where?: CarInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarInfos to fetch.
     */
    orderBy?: CarInfoOrderByWithRelationInput | CarInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarInfos
    **/
    _count?: true | CarInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarInfoMaxAggregateInputType
  }

  export type GetCarInfoAggregateType<T extends CarInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarInfo[P]>
      : GetScalarType<T[P], AggregateCarInfo[P]>
  }




  export type CarInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarInfoWhereInput
    orderBy?: CarInfoOrderByWithAggregationInput | CarInfoOrderByWithAggregationInput[]
    by: CarInfoScalarFieldEnum[] | CarInfoScalarFieldEnum
    having?: CarInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarInfoCountAggregateInputType | true
    _avg?: CarInfoAvgAggregateInputType
    _sum?: CarInfoSumAggregateInputType
    _min?: CarInfoMinAggregateInputType
    _max?: CarInfoMaxAggregateInputType
  }

  export type CarInfoGroupByOutputType = {
    id: number
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description: string
    _count: CarInfoCountAggregateOutputType | null
    _avg: CarInfoAvgAggregateOutputType | null
    _sum: CarInfoSumAggregateOutputType | null
    _min: CarInfoMinAggregateOutputType | null
    _max: CarInfoMaxAggregateOutputType | null
  }

  type GetCarInfoGroupByPayload<T extends CarInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CarInfoGroupByOutputType[P]>
        }
      >
    >


  export type CarInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    image?: boolean
    type?: boolean
    price_per_day?: boolean
    rating?: boolean
    fuel_type?: boolean
    transmission?: boolean
    description?: boolean
    bookings?: boolean | CarInfo$bookingsArgs<ExtArgs>
    _count?: boolean | CarInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carInfo"]>

  export type CarInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    image?: boolean
    type?: boolean
    price_per_day?: boolean
    rating?: boolean
    fuel_type?: boolean
    transmission?: boolean
    description?: boolean
  }, ExtArgs["result"]["carInfo"]>

  export type CarInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    image?: boolean
    type?: boolean
    price_per_day?: boolean
    rating?: boolean
    fuel_type?: boolean
    transmission?: boolean
    description?: boolean
  }, ExtArgs["result"]["carInfo"]>

  export type CarInfoSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    image?: boolean
    type?: boolean
    price_per_day?: boolean
    rating?: boolean
    fuel_type?: boolean
    transmission?: boolean
    description?: boolean
  }

  export type CarInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "image" | "type" | "price_per_day" | "rating" | "fuel_type" | "transmission" | "description", ExtArgs["result"]["carInfo"]>
  export type CarInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CarInfo$bookingsArgs<ExtArgs>
    _count?: boolean | CarInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarInfo"
    objects: {
      bookings: Prisma.$BookingInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brand: string
      image: string
      type: string
      price_per_day: number
      rating: number
      fuel_type: string
      transmission: string
      description: string
    }, ExtArgs["result"]["carInfo"]>
    composites: {}
  }

  type CarInfoGetPayload<S extends boolean | null | undefined | CarInfoDefaultArgs> = $Result.GetResult<Prisma.$CarInfoPayload, S>

  type CarInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarInfoCountAggregateInputType | true
    }

  export interface CarInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarInfo'], meta: { name: 'CarInfo' } }
    /**
     * Find zero or one CarInfo that matches the filter.
     * @param {CarInfoFindUniqueArgs} args - Arguments to find a CarInfo
     * @example
     * // Get one CarInfo
     * const carInfo = await prisma.carInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarInfoFindUniqueArgs>(args: SelectSubset<T, CarInfoFindUniqueArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarInfoFindUniqueOrThrowArgs} args - Arguments to find a CarInfo
     * @example
     * // Get one CarInfo
     * const carInfo = await prisma.carInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoFindFirstArgs} args - Arguments to find a CarInfo
     * @example
     * // Get one CarInfo
     * const carInfo = await prisma.carInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarInfoFindFirstArgs>(args?: SelectSubset<T, CarInfoFindFirstArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoFindFirstOrThrowArgs} args - Arguments to find a CarInfo
     * @example
     * // Get one CarInfo
     * const carInfo = await prisma.carInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarInfos
     * const carInfos = await prisma.carInfo.findMany()
     * 
     * // Get first 10 CarInfos
     * const carInfos = await prisma.carInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carInfoWithIdOnly = await prisma.carInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarInfoFindManyArgs>(args?: SelectSubset<T, CarInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarInfo.
     * @param {CarInfoCreateArgs} args - Arguments to create a CarInfo.
     * @example
     * // Create one CarInfo
     * const CarInfo = await prisma.carInfo.create({
     *   data: {
     *     // ... data to create a CarInfo
     *   }
     * })
     * 
     */
    create<T extends CarInfoCreateArgs>(args: SelectSubset<T, CarInfoCreateArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarInfos.
     * @param {CarInfoCreateManyArgs} args - Arguments to create many CarInfos.
     * @example
     * // Create many CarInfos
     * const carInfo = await prisma.carInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarInfoCreateManyArgs>(args?: SelectSubset<T, CarInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarInfos and returns the data saved in the database.
     * @param {CarInfoCreateManyAndReturnArgs} args - Arguments to create many CarInfos.
     * @example
     * // Create many CarInfos
     * const carInfo = await prisma.carInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarInfos and only return the `id`
     * const carInfoWithIdOnly = await prisma.carInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarInfo.
     * @param {CarInfoDeleteArgs} args - Arguments to delete one CarInfo.
     * @example
     * // Delete one CarInfo
     * const CarInfo = await prisma.carInfo.delete({
     *   where: {
     *     // ... filter to delete one CarInfo
     *   }
     * })
     * 
     */
    delete<T extends CarInfoDeleteArgs>(args: SelectSubset<T, CarInfoDeleteArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarInfo.
     * @param {CarInfoUpdateArgs} args - Arguments to update one CarInfo.
     * @example
     * // Update one CarInfo
     * const carInfo = await prisma.carInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarInfoUpdateArgs>(args: SelectSubset<T, CarInfoUpdateArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarInfos.
     * @param {CarInfoDeleteManyArgs} args - Arguments to filter CarInfos to delete.
     * @example
     * // Delete a few CarInfos
     * const { count } = await prisma.carInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarInfoDeleteManyArgs>(args?: SelectSubset<T, CarInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarInfos
     * const carInfo = await prisma.carInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarInfoUpdateManyArgs>(args: SelectSubset<T, CarInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarInfos and returns the data updated in the database.
     * @param {CarInfoUpdateManyAndReturnArgs} args - Arguments to update many CarInfos.
     * @example
     * // Update many CarInfos
     * const carInfo = await prisma.carInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarInfos and only return the `id`
     * const carInfoWithIdOnly = await prisma.carInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarInfo.
     * @param {CarInfoUpsertArgs} args - Arguments to update or create a CarInfo.
     * @example
     * // Update or create a CarInfo
     * const carInfo = await prisma.carInfo.upsert({
     *   create: {
     *     // ... data to create a CarInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarInfo we want to update
     *   }
     * })
     */
    upsert<T extends CarInfoUpsertArgs>(args: SelectSubset<T, CarInfoUpsertArgs<ExtArgs>>): Prisma__CarInfoClient<$Result.GetResult<Prisma.$CarInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoCountArgs} args - Arguments to filter CarInfos to count.
     * @example
     * // Count the number of CarInfos
     * const count = await prisma.carInfo.count({
     *   where: {
     *     // ... the filter for the CarInfos we want to count
     *   }
     * })
    **/
    count<T extends CarInfoCountArgs>(
      args?: Subset<T, CarInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarInfoAggregateArgs>(args: Subset<T, CarInfoAggregateArgs>): Prisma.PrismaPromise<GetCarInfoAggregateType<T>>

    /**
     * Group by CarInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarInfoGroupByArgs} args - Group by arguments.
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
      T extends CarInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarInfoGroupByArgs['orderBy'] }
        : { orderBy?: CarInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarInfo model
   */
  readonly fields: CarInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends CarInfo$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, CarInfo$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarInfo model
   */
  interface CarInfoFieldRefs {
    readonly id: FieldRef<"CarInfo", 'Int'>
    readonly name: FieldRef<"CarInfo", 'String'>
    readonly brand: FieldRef<"CarInfo", 'String'>
    readonly image: FieldRef<"CarInfo", 'String'>
    readonly type: FieldRef<"CarInfo", 'String'>
    readonly price_per_day: FieldRef<"CarInfo", 'Float'>
    readonly rating: FieldRef<"CarInfo", 'Float'>
    readonly fuel_type: FieldRef<"CarInfo", 'String'>
    readonly transmission: FieldRef<"CarInfo", 'String'>
    readonly description: FieldRef<"CarInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarInfo findUnique
   */
  export type CarInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter, which CarInfo to fetch.
     */
    where: CarInfoWhereUniqueInput
  }

  /**
   * CarInfo findUniqueOrThrow
   */
  export type CarInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter, which CarInfo to fetch.
     */
    where: CarInfoWhereUniqueInput
  }

  /**
   * CarInfo findFirst
   */
  export type CarInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter, which CarInfo to fetch.
     */
    where?: CarInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarInfos to fetch.
     */
    orderBy?: CarInfoOrderByWithRelationInput | CarInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarInfos.
     */
    cursor?: CarInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarInfos.
     */
    distinct?: CarInfoScalarFieldEnum | CarInfoScalarFieldEnum[]
  }

  /**
   * CarInfo findFirstOrThrow
   */
  export type CarInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter, which CarInfo to fetch.
     */
    where?: CarInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarInfos to fetch.
     */
    orderBy?: CarInfoOrderByWithRelationInput | CarInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarInfos.
     */
    cursor?: CarInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarInfos.
     */
    distinct?: CarInfoScalarFieldEnum | CarInfoScalarFieldEnum[]
  }

  /**
   * CarInfo findMany
   */
  export type CarInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter, which CarInfos to fetch.
     */
    where?: CarInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarInfos to fetch.
     */
    orderBy?: CarInfoOrderByWithRelationInput | CarInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarInfos.
     */
    cursor?: CarInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarInfos.
     */
    skip?: number
    distinct?: CarInfoScalarFieldEnum | CarInfoScalarFieldEnum[]
  }

  /**
   * CarInfo create
   */
  export type CarInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a CarInfo.
     */
    data: XOR<CarInfoCreateInput, CarInfoUncheckedCreateInput>
  }

  /**
   * CarInfo createMany
   */
  export type CarInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarInfos.
     */
    data: CarInfoCreateManyInput | CarInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarInfo createManyAndReturn
   */
  export type CarInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * The data used to create many CarInfos.
     */
    data: CarInfoCreateManyInput | CarInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarInfo update
   */
  export type CarInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a CarInfo.
     */
    data: XOR<CarInfoUpdateInput, CarInfoUncheckedUpdateInput>
    /**
     * Choose, which CarInfo to update.
     */
    where: CarInfoWhereUniqueInput
  }

  /**
   * CarInfo updateMany
   */
  export type CarInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarInfos.
     */
    data: XOR<CarInfoUpdateManyMutationInput, CarInfoUncheckedUpdateManyInput>
    /**
     * Filter which CarInfos to update
     */
    where?: CarInfoWhereInput
    /**
     * Limit how many CarInfos to update.
     */
    limit?: number
  }

  /**
   * CarInfo updateManyAndReturn
   */
  export type CarInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * The data used to update CarInfos.
     */
    data: XOR<CarInfoUpdateManyMutationInput, CarInfoUncheckedUpdateManyInput>
    /**
     * Filter which CarInfos to update
     */
    where?: CarInfoWhereInput
    /**
     * Limit how many CarInfos to update.
     */
    limit?: number
  }

  /**
   * CarInfo upsert
   */
  export type CarInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the CarInfo to update in case it exists.
     */
    where: CarInfoWhereUniqueInput
    /**
     * In case the CarInfo found by the `where` argument doesn't exist, create a new CarInfo with this data.
     */
    create: XOR<CarInfoCreateInput, CarInfoUncheckedCreateInput>
    /**
     * In case the CarInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarInfoUpdateInput, CarInfoUncheckedUpdateInput>
  }

  /**
   * CarInfo delete
   */
  export type CarInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
    /**
     * Filter which CarInfo to delete.
     */
    where: CarInfoWhereUniqueInput
  }

  /**
   * CarInfo deleteMany
   */
  export type CarInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarInfos to delete
     */
    where?: CarInfoWhereInput
    /**
     * Limit how many CarInfos to delete.
     */
    limit?: number
  }

  /**
   * CarInfo.bookings
   */
  export type CarInfo$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingInfo
     */
    select?: BookingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingInfo
     */
    omit?: BookingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInfoInclude<ExtArgs> | null
    where?: BookingInfoWhereInput
    orderBy?: BookingInfoOrderByWithRelationInput | BookingInfoOrderByWithRelationInput[]
    cursor?: BookingInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingInfoScalarFieldEnum | BookingInfoScalarFieldEnum[]
  }

  /**
   * CarInfo without action
   */
  export type CarInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarInfo
     */
    select?: CarInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarInfo
     */
    omit?: CarInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInfoInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingInfoScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    pickupDate: 'pickupDate',
    dropoffDate: 'dropoffDate',
    pickupLocation: 'pickupLocation',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type BookingInfoScalarFieldEnum = (typeof BookingInfoScalarFieldEnum)[keyof typeof BookingInfoScalarFieldEnum]


  export const CarInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    image: 'image',
    type: 'type',
    price_per_day: 'price_per_day',
    rating: 'rating',
    fuel_type: 'fuel_type',
    transmission: 'transmission',
    description: 'description'
  };

  export type CarInfoScalarFieldEnum = (typeof CarInfoScalarFieldEnum)[keyof typeof CarInfoScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    bookings?: BookingInfoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    bookings?: BookingInfoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    bookings?: BookingInfoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
  }

  export type BookingInfoWhereInput = {
    AND?: BookingInfoWhereInput | BookingInfoWhereInput[]
    OR?: BookingInfoWhereInput[]
    NOT?: BookingInfoWhereInput | BookingInfoWhereInput[]
    id?: IntFilter<"BookingInfo"> | number
    carId?: IntFilter<"BookingInfo"> | number
    pickupDate?: StringFilter<"BookingInfo"> | string
    dropoffDate?: StringFilter<"BookingInfo"> | string
    pickupLocation?: StringFilter<"BookingInfo"> | string
    totalPrice?: FloatFilter<"BookingInfo"> | number
    createdAt?: DateTimeFilter<"BookingInfo"> | Date | string
    userId?: IntFilter<"BookingInfo"> | number
    car?: XOR<CarInfoScalarRelationFilter, CarInfoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookingInfoOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    pickupLocation?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    car?: CarInfoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookingInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingInfoWhereInput | BookingInfoWhereInput[]
    OR?: BookingInfoWhereInput[]
    NOT?: BookingInfoWhereInput | BookingInfoWhereInput[]
    carId?: IntFilter<"BookingInfo"> | number
    pickupDate?: StringFilter<"BookingInfo"> | string
    dropoffDate?: StringFilter<"BookingInfo"> | string
    pickupLocation?: StringFilter<"BookingInfo"> | string
    totalPrice?: FloatFilter<"BookingInfo"> | number
    createdAt?: DateTimeFilter<"BookingInfo"> | Date | string
    userId?: IntFilter<"BookingInfo"> | number
    car?: XOR<CarInfoScalarRelationFilter, CarInfoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookingInfoOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    pickupLocation?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: BookingInfoCountOrderByAggregateInput
    _avg?: BookingInfoAvgOrderByAggregateInput
    _max?: BookingInfoMaxOrderByAggregateInput
    _min?: BookingInfoMinOrderByAggregateInput
    _sum?: BookingInfoSumOrderByAggregateInput
  }

  export type BookingInfoScalarWhereWithAggregatesInput = {
    AND?: BookingInfoScalarWhereWithAggregatesInput | BookingInfoScalarWhereWithAggregatesInput[]
    OR?: BookingInfoScalarWhereWithAggregatesInput[]
    NOT?: BookingInfoScalarWhereWithAggregatesInput | BookingInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingInfo"> | number
    carId?: IntWithAggregatesFilter<"BookingInfo"> | number
    pickupDate?: StringWithAggregatesFilter<"BookingInfo"> | string
    dropoffDate?: StringWithAggregatesFilter<"BookingInfo"> | string
    pickupLocation?: StringWithAggregatesFilter<"BookingInfo"> | string
    totalPrice?: FloatWithAggregatesFilter<"BookingInfo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookingInfo"> | Date | string
    userId?: IntWithAggregatesFilter<"BookingInfo"> | number
  }

  export type CarInfoWhereInput = {
    AND?: CarInfoWhereInput | CarInfoWhereInput[]
    OR?: CarInfoWhereInput[]
    NOT?: CarInfoWhereInput | CarInfoWhereInput[]
    id?: IntFilter<"CarInfo"> | number
    name?: StringFilter<"CarInfo"> | string
    brand?: StringFilter<"CarInfo"> | string
    image?: StringFilter<"CarInfo"> | string
    type?: StringFilter<"CarInfo"> | string
    price_per_day?: FloatFilter<"CarInfo"> | number
    rating?: FloatFilter<"CarInfo"> | number
    fuel_type?: StringFilter<"CarInfo"> | string
    transmission?: StringFilter<"CarInfo"> | string
    description?: StringFilter<"CarInfo"> | string
    bookings?: BookingInfoListRelationFilter
  }

  export type CarInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    image?: SortOrder
    type?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    bookings?: BookingInfoOrderByRelationAggregateInput
  }

  export type CarInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarInfoWhereInput | CarInfoWhereInput[]
    OR?: CarInfoWhereInput[]
    NOT?: CarInfoWhereInput | CarInfoWhereInput[]
    name?: StringFilter<"CarInfo"> | string
    brand?: StringFilter<"CarInfo"> | string
    image?: StringFilter<"CarInfo"> | string
    type?: StringFilter<"CarInfo"> | string
    price_per_day?: FloatFilter<"CarInfo"> | number
    rating?: FloatFilter<"CarInfo"> | number
    fuel_type?: StringFilter<"CarInfo"> | string
    transmission?: StringFilter<"CarInfo"> | string
    description?: StringFilter<"CarInfo"> | string
    bookings?: BookingInfoListRelationFilter
  }, "id">

  export type CarInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    image?: SortOrder
    type?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    _count?: CarInfoCountOrderByAggregateInput
    _avg?: CarInfoAvgOrderByAggregateInput
    _max?: CarInfoMaxOrderByAggregateInput
    _min?: CarInfoMinOrderByAggregateInput
    _sum?: CarInfoSumOrderByAggregateInput
  }

  export type CarInfoScalarWhereWithAggregatesInput = {
    AND?: CarInfoScalarWhereWithAggregatesInput | CarInfoScalarWhereWithAggregatesInput[]
    OR?: CarInfoScalarWhereWithAggregatesInput[]
    NOT?: CarInfoScalarWhereWithAggregatesInput | CarInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarInfo"> | number
    name?: StringWithAggregatesFilter<"CarInfo"> | string
    brand?: StringWithAggregatesFilter<"CarInfo"> | string
    image?: StringWithAggregatesFilter<"CarInfo"> | string
    type?: StringWithAggregatesFilter<"CarInfo"> | string
    price_per_day?: FloatWithAggregatesFilter<"CarInfo"> | number
    rating?: FloatWithAggregatesFilter<"CarInfo"> | number
    fuel_type?: StringWithAggregatesFilter<"CarInfo"> | string
    transmission?: StringWithAggregatesFilter<"CarInfo"> | string
    description?: StringWithAggregatesFilter<"CarInfo"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phoneNumber: string
    bookings?: BookingInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phoneNumber: string
    bookings?: BookingInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    bookings?: BookingInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    bookings?: BookingInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phoneNumber: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingInfoCreateInput = {
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    car: CarInfoCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingInfoUncheckedCreateInput = {
    id?: number
    carId: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    userId: number
  }

  export type BookingInfoUpdateInput = {
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarInfoUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingInfoCreateManyInput = {
    id?: number
    carId: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    userId: number
  }

  export type BookingInfoUpdateManyMutationInput = {
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CarInfoCreateInput = {
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description?: string
    bookings?: BookingInfoCreateNestedManyWithoutCarInput
  }

  export type CarInfoUncheckedCreateInput = {
    id?: number
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description?: string
    bookings?: BookingInfoUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarInfoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bookings?: BookingInfoUpdateManyWithoutCarNestedInput
  }

  export type CarInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bookings?: BookingInfoUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarInfoCreateManyInput = {
    id?: number
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description?: string
  }

  export type CarInfoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CarInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type BookingInfoListRelationFilter = {
    every?: BookingInfoWhereInput
    some?: BookingInfoWhereInput
    none?: BookingInfoWhereInput
  }

  export type BookingInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CarInfoScalarRelationFilter = {
    is?: CarInfoWhereInput
    isNot?: CarInfoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingInfoCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    pickupLocation?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BookingInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type BookingInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    pickupLocation?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BookingInfoMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    pickupLocation?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BookingInfoSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type CarInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    image?: SortOrder
    type?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
  }

  export type CarInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
  }

  export type CarInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    image?: SortOrder
    type?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
  }

  export type CarInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    image?: SortOrder
    type?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
  }

  export type CarInfoSumOrderByAggregateInput = {
    id?: SortOrder
    price_per_day?: SortOrder
    rating?: SortOrder
  }

  export type BookingInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput> | BookingInfoCreateWithoutUserInput[] | BookingInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutUserInput | BookingInfoCreateOrConnectWithoutUserInput[]
    createMany?: BookingInfoCreateManyUserInputEnvelope
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
  }

  export type BookingInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput> | BookingInfoCreateWithoutUserInput[] | BookingInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutUserInput | BookingInfoCreateOrConnectWithoutUserInput[]
    createMany?: BookingInfoCreateManyUserInputEnvelope
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BookingInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput> | BookingInfoCreateWithoutUserInput[] | BookingInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutUserInput | BookingInfoCreateOrConnectWithoutUserInput[]
    upsert?: BookingInfoUpsertWithWhereUniqueWithoutUserInput | BookingInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingInfoCreateManyUserInputEnvelope
    set?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    disconnect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    delete?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    update?: BookingInfoUpdateWithWhereUniqueWithoutUserInput | BookingInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingInfoUpdateManyWithWhereWithoutUserInput | BookingInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput> | BookingInfoCreateWithoutUserInput[] | BookingInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutUserInput | BookingInfoCreateOrConnectWithoutUserInput[]
    upsert?: BookingInfoUpsertWithWhereUniqueWithoutUserInput | BookingInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingInfoCreateManyUserInputEnvelope
    set?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    disconnect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    delete?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    update?: BookingInfoUpdateWithWhereUniqueWithoutUserInput | BookingInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingInfoUpdateManyWithWhereWithoutUserInput | BookingInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
  }

  export type CarInfoCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CarInfoCreateWithoutBookingsInput, CarInfoUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarInfoCreateOrConnectWithoutBookingsInput
    connect?: CarInfoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarInfoUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CarInfoCreateWithoutBookingsInput, CarInfoUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarInfoCreateOrConnectWithoutBookingsInput
    upsert?: CarInfoUpsertWithoutBookingsInput
    connect?: CarInfoWhereUniqueInput
    update?: XOR<XOR<CarInfoUpdateToOneWithWhereWithoutBookingsInput, CarInfoUpdateWithoutBookingsInput>, CarInfoUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingInfoCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput> | BookingInfoCreateWithoutCarInput[] | BookingInfoUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutCarInput | BookingInfoCreateOrConnectWithoutCarInput[]
    createMany?: BookingInfoCreateManyCarInputEnvelope
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
  }

  export type BookingInfoUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput> | BookingInfoCreateWithoutCarInput[] | BookingInfoUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutCarInput | BookingInfoCreateOrConnectWithoutCarInput[]
    createMany?: BookingInfoCreateManyCarInputEnvelope
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
  }

  export type BookingInfoUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput> | BookingInfoCreateWithoutCarInput[] | BookingInfoUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutCarInput | BookingInfoCreateOrConnectWithoutCarInput[]
    upsert?: BookingInfoUpsertWithWhereUniqueWithoutCarInput | BookingInfoUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingInfoCreateManyCarInputEnvelope
    set?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    disconnect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    delete?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    update?: BookingInfoUpdateWithWhereUniqueWithoutCarInput | BookingInfoUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingInfoUpdateManyWithWhereWithoutCarInput | BookingInfoUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
  }

  export type BookingInfoUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput> | BookingInfoCreateWithoutCarInput[] | BookingInfoUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingInfoCreateOrConnectWithoutCarInput | BookingInfoCreateOrConnectWithoutCarInput[]
    upsert?: BookingInfoUpsertWithWhereUniqueWithoutCarInput | BookingInfoUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingInfoCreateManyCarInputEnvelope
    set?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    disconnect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    delete?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    connect?: BookingInfoWhereUniqueInput | BookingInfoWhereUniqueInput[]
    update?: BookingInfoUpdateWithWhereUniqueWithoutCarInput | BookingInfoUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingInfoUpdateManyWithWhereWithoutCarInput | BookingInfoUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BookingInfoCreateWithoutUserInput = {
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    car: CarInfoCreateNestedOneWithoutBookingsInput
  }

  export type BookingInfoUncheckedCreateWithoutUserInput = {
    id?: number
    carId: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
  }

  export type BookingInfoCreateOrConnectWithoutUserInput = {
    where: BookingInfoWhereUniqueInput
    create: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput>
  }

  export type BookingInfoCreateManyUserInputEnvelope = {
    data: BookingInfoCreateManyUserInput | BookingInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingInfoWhereUniqueInput
    update: XOR<BookingInfoUpdateWithoutUserInput, BookingInfoUncheckedUpdateWithoutUserInput>
    create: XOR<BookingInfoCreateWithoutUserInput, BookingInfoUncheckedCreateWithoutUserInput>
  }

  export type BookingInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingInfoWhereUniqueInput
    data: XOR<BookingInfoUpdateWithoutUserInput, BookingInfoUncheckedUpdateWithoutUserInput>
  }

  export type BookingInfoUpdateManyWithWhereWithoutUserInput = {
    where: BookingInfoScalarWhereInput
    data: XOR<BookingInfoUpdateManyMutationInput, BookingInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingInfoScalarWhereInput = {
    AND?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
    OR?: BookingInfoScalarWhereInput[]
    NOT?: BookingInfoScalarWhereInput | BookingInfoScalarWhereInput[]
    id?: IntFilter<"BookingInfo"> | number
    carId?: IntFilter<"BookingInfo"> | number
    pickupDate?: StringFilter<"BookingInfo"> | string
    dropoffDate?: StringFilter<"BookingInfo"> | string
    pickupLocation?: StringFilter<"BookingInfo"> | string
    totalPrice?: FloatFilter<"BookingInfo"> | number
    createdAt?: DateTimeFilter<"BookingInfo"> | Date | string
    userId?: IntFilter<"BookingInfo"> | number
  }

  export type CarInfoCreateWithoutBookingsInput = {
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description?: string
  }

  export type CarInfoUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    brand: string
    image: string
    type: string
    price_per_day: number
    rating: number
    fuel_type: string
    transmission: string
    description?: string
  }

  export type CarInfoCreateOrConnectWithoutBookingsInput = {
    where: CarInfoWhereUniqueInput
    create: XOR<CarInfoCreateWithoutBookingsInput, CarInfoUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    name: string
    email: string
    password: string
    phoneNumber: string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    email: string
    password: string
    phoneNumber: string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type CarInfoUpsertWithoutBookingsInput = {
    update: XOR<CarInfoUpdateWithoutBookingsInput, CarInfoUncheckedUpdateWithoutBookingsInput>
    create: XOR<CarInfoCreateWithoutBookingsInput, CarInfoUncheckedCreateWithoutBookingsInput>
    where?: CarInfoWhereInput
  }

  export type CarInfoUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CarInfoWhereInput
    data: XOR<CarInfoUpdateWithoutBookingsInput, CarInfoUncheckedUpdateWithoutBookingsInput>
  }

  export type CarInfoUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CarInfoUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price_per_day?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    fuel_type?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingInfoCreateWithoutCarInput = {
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingInfoUncheckedCreateWithoutCarInput = {
    id?: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    userId: number
  }

  export type BookingInfoCreateOrConnectWithoutCarInput = {
    where: BookingInfoWhereUniqueInput
    create: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput>
  }

  export type BookingInfoCreateManyCarInputEnvelope = {
    data: BookingInfoCreateManyCarInput | BookingInfoCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type BookingInfoUpsertWithWhereUniqueWithoutCarInput = {
    where: BookingInfoWhereUniqueInput
    update: XOR<BookingInfoUpdateWithoutCarInput, BookingInfoUncheckedUpdateWithoutCarInput>
    create: XOR<BookingInfoCreateWithoutCarInput, BookingInfoUncheckedCreateWithoutCarInput>
  }

  export type BookingInfoUpdateWithWhereUniqueWithoutCarInput = {
    where: BookingInfoWhereUniqueInput
    data: XOR<BookingInfoUpdateWithoutCarInput, BookingInfoUncheckedUpdateWithoutCarInput>
  }

  export type BookingInfoUpdateManyWithWhereWithoutCarInput = {
    where: BookingInfoScalarWhereInput
    data: XOR<BookingInfoUpdateManyMutationInput, BookingInfoUncheckedUpdateManyWithoutCarInput>
  }

  export type BookingInfoCreateManyUserInput = {
    id?: number
    carId: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
  }

  export type BookingInfoUpdateWithoutUserInput = {
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarInfoUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingInfoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingInfoCreateManyCarInput = {
    id?: number
    pickupDate: string
    dropoffDate: string
    pickupLocation: string
    totalPrice: number
    createdAt?: Date | string
    userId: number
  }

  export type BookingInfoUpdateWithoutCarInput = {
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingInfoUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingInfoUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    pickupDate?: StringFieldUpdateOperationsInput | string
    dropoffDate?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



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