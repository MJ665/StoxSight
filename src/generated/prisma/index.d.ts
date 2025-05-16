
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
 * Model ZerodhaAccount
 * 
 */
export type ZerodhaAccount = $Result.DefaultSelection<Prisma.$ZerodhaAccountPayload>
/**
 * Model UpstoxAccount
 * 
 */
export type UpstoxAccount = $Result.DefaultSelection<Prisma.$UpstoxAccountPayload>
/**
 * Model IndiaStock
 * 
 */
export type IndiaStock = $Result.DefaultSelection<Prisma.$IndiaStockPayload>
/**
 * Model USStock
 * 
 */
export type USStock = $Result.DefaultSelection<Prisma.$USStockPayload>
/**
 * Model CryptoAsset
 * 
 */
export type CryptoAsset = $Result.DefaultSelection<Prisma.$CryptoAssetPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model PredictionRun
 * 
 */
export type PredictionRun = $Result.DefaultSelection<Prisma.$PredictionRunPayload>
/**
 * Model LlmAnalysisRun
 * 
 */
export type LlmAnalysisRun = $Result.DefaultSelection<Prisma.$LlmAnalysisRunPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthMethod: {
  GOOGLE: 'GOOGLE',
  EMAIL: 'EMAIL'
};

export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]


export const PortfolioType: {
  INDIA: 'INDIA',
  US: 'US',
  CRYPTO: 'CRYPTO'
};

export type PortfolioType = (typeof PortfolioType)[keyof typeof PortfolioType]


export const WatchlistType: {
  INDIA: 'INDIA',
  US: 'US',
  CRYPTO: 'CRYPTO'
};

export type WatchlistType = (typeof WatchlistType)[keyof typeof WatchlistType]


export const RunStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PARTIAL: 'PARTIAL'
};

export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus]


export const LlmRunStatus: {
  PENDING: 'PENDING',
  FETCHING_DATA: 'FETCHING_DATA',
  PROCESSING_LLM: 'PROCESSING_LLM',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type LlmRunStatus = (typeof LlmRunStatus)[keyof typeof LlmRunStatus]

}

export type AuthMethod = $Enums.AuthMethod

export const AuthMethod: typeof $Enums.AuthMethod

export type PortfolioType = $Enums.PortfolioType

export const PortfolioType: typeof $Enums.PortfolioType

export type WatchlistType = $Enums.WatchlistType

export const WatchlistType: typeof $Enums.WatchlistType

export type RunStatus = $Enums.RunStatus

export const RunStatus: typeof $Enums.RunStatus

export type LlmRunStatus = $Enums.LlmRunStatus

export const LlmRunStatus: typeof $Enums.LlmRunStatus

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
   * `prisma.zerodhaAccount`: Exposes CRUD operations for the **ZerodhaAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZerodhaAccounts
    * const zerodhaAccounts = await prisma.zerodhaAccount.findMany()
    * ```
    */
  get zerodhaAccount(): Prisma.ZerodhaAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upstoxAccount`: Exposes CRUD operations for the **UpstoxAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpstoxAccounts
    * const upstoxAccounts = await prisma.upstoxAccount.findMany()
    * ```
    */
  get upstoxAccount(): Prisma.UpstoxAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indiaStock`: Exposes CRUD operations for the **IndiaStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndiaStocks
    * const indiaStocks = await prisma.indiaStock.findMany()
    * ```
    */
  get indiaStock(): Prisma.IndiaStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSStock`: Exposes CRUD operations for the **USStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USStocks
    * const uSStocks = await prisma.uSStock.findMany()
    * ```
    */
  get uSStock(): Prisma.USStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cryptoAsset`: Exposes CRUD operations for the **CryptoAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CryptoAssets
    * const cryptoAssets = await prisma.cryptoAsset.findMany()
    * ```
    */
  get cryptoAsset(): Prisma.CryptoAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predictionRun`: Exposes CRUD operations for the **PredictionRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredictionRuns
    * const predictionRuns = await prisma.predictionRun.findMany()
    * ```
    */
  get predictionRun(): Prisma.PredictionRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.llmAnalysisRun`: Exposes CRUD operations for the **LlmAnalysisRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LlmAnalysisRuns
    * const llmAnalysisRuns = await prisma.llmAnalysisRun.findMany()
    * ```
    */
  get llmAnalysisRun(): Prisma.LlmAnalysisRunDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    ZerodhaAccount: 'ZerodhaAccount',
    UpstoxAccount: 'UpstoxAccount',
    IndiaStock: 'IndiaStock',
    USStock: 'USStock',
    CryptoAsset: 'CryptoAsset',
    Portfolio: 'Portfolio',
    Watchlist: 'Watchlist',
    PredictionRun: 'PredictionRun',
    LlmAnalysisRun: 'LlmAnalysisRun'
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
      modelProps: "user" | "zerodhaAccount" | "upstoxAccount" | "indiaStock" | "uSStock" | "cryptoAsset" | "portfolio" | "watchlist" | "predictionRun" | "llmAnalysisRun"
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
      ZerodhaAccount: {
        payload: Prisma.$ZerodhaAccountPayload<ExtArgs>
        fields: Prisma.ZerodhaAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZerodhaAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZerodhaAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          findFirst: {
            args: Prisma.ZerodhaAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZerodhaAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          findMany: {
            args: Prisma.ZerodhaAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>[]
          }
          create: {
            args: Prisma.ZerodhaAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          createMany: {
            args: Prisma.ZerodhaAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZerodhaAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>[]
          }
          delete: {
            args: Prisma.ZerodhaAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          update: {
            args: Prisma.ZerodhaAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          deleteMany: {
            args: Prisma.ZerodhaAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZerodhaAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZerodhaAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>[]
          }
          upsert: {
            args: Prisma.ZerodhaAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZerodhaAccountPayload>
          }
          aggregate: {
            args: Prisma.ZerodhaAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZerodhaAccount>
          }
          groupBy: {
            args: Prisma.ZerodhaAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZerodhaAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZerodhaAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ZerodhaAccountCountAggregateOutputType> | number
          }
        }
      }
      UpstoxAccount: {
        payload: Prisma.$UpstoxAccountPayload<ExtArgs>
        fields: Prisma.UpstoxAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpstoxAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpstoxAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          findFirst: {
            args: Prisma.UpstoxAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpstoxAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          findMany: {
            args: Prisma.UpstoxAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>[]
          }
          create: {
            args: Prisma.UpstoxAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          createMany: {
            args: Prisma.UpstoxAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpstoxAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>[]
          }
          delete: {
            args: Prisma.UpstoxAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          update: {
            args: Prisma.UpstoxAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          deleteMany: {
            args: Prisma.UpstoxAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpstoxAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpstoxAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>[]
          }
          upsert: {
            args: Prisma.UpstoxAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpstoxAccountPayload>
          }
          aggregate: {
            args: Prisma.UpstoxAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpstoxAccount>
          }
          groupBy: {
            args: Prisma.UpstoxAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpstoxAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpstoxAccountCountArgs<ExtArgs>
            result: $Utils.Optional<UpstoxAccountCountAggregateOutputType> | number
          }
        }
      }
      IndiaStock: {
        payload: Prisma.$IndiaStockPayload<ExtArgs>
        fields: Prisma.IndiaStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndiaStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndiaStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          findFirst: {
            args: Prisma.IndiaStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndiaStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          findMany: {
            args: Prisma.IndiaStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>[]
          }
          create: {
            args: Prisma.IndiaStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          createMany: {
            args: Prisma.IndiaStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndiaStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>[]
          }
          delete: {
            args: Prisma.IndiaStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          update: {
            args: Prisma.IndiaStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          deleteMany: {
            args: Prisma.IndiaStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndiaStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndiaStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>[]
          }
          upsert: {
            args: Prisma.IndiaStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndiaStockPayload>
          }
          aggregate: {
            args: Prisma.IndiaStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndiaStock>
          }
          groupBy: {
            args: Prisma.IndiaStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndiaStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndiaStockCountArgs<ExtArgs>
            result: $Utils.Optional<IndiaStockCountAggregateOutputType> | number
          }
        }
      }
      USStock: {
        payload: Prisma.$USStockPayload<ExtArgs>
        fields: Prisma.USStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          findFirst: {
            args: Prisma.USStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          findMany: {
            args: Prisma.USStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>[]
          }
          create: {
            args: Prisma.USStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          createMany: {
            args: Prisma.USStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.USStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>[]
          }
          delete: {
            args: Prisma.USStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          update: {
            args: Prisma.USStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          deleteMany: {
            args: Prisma.USStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.USStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>[]
          }
          upsert: {
            args: Prisma.USStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USStockPayload>
          }
          aggregate: {
            args: Prisma.USStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSStock>
          }
          groupBy: {
            args: Prisma.USStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<USStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.USStockCountArgs<ExtArgs>
            result: $Utils.Optional<USStockCountAggregateOutputType> | number
          }
        }
      }
      CryptoAsset: {
        payload: Prisma.$CryptoAssetPayload<ExtArgs>
        fields: Prisma.CryptoAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptoAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptoAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          findFirst: {
            args: Prisma.CryptoAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptoAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          findMany: {
            args: Prisma.CryptoAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>[]
          }
          create: {
            args: Prisma.CryptoAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          createMany: {
            args: Prisma.CryptoAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CryptoAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>[]
          }
          delete: {
            args: Prisma.CryptoAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          update: {
            args: Prisma.CryptoAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          deleteMany: {
            args: Prisma.CryptoAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptoAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CryptoAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>[]
          }
          upsert: {
            args: Prisma.CryptoAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoAssetPayload>
          }
          aggregate: {
            args: Prisma.CryptoAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCryptoAsset>
          }
          groupBy: {
            args: Prisma.CryptoAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptoAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptoAssetCountArgs<ExtArgs>
            result: $Utils.Optional<CryptoAssetCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      PredictionRun: {
        payload: Prisma.$PredictionRunPayload<ExtArgs>
        fields: Prisma.PredictionRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          findFirst: {
            args: Prisma.PredictionRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          findMany: {
            args: Prisma.PredictionRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>[]
          }
          create: {
            args: Prisma.PredictionRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          createMany: {
            args: Prisma.PredictionRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>[]
          }
          delete: {
            args: Prisma.PredictionRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          update: {
            args: Prisma.PredictionRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          deleteMany: {
            args: Prisma.PredictionRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>[]
          }
          upsert: {
            args: Prisma.PredictionRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionRunPayload>
          }
          aggregate: {
            args: Prisma.PredictionRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredictionRun>
          }
          groupBy: {
            args: Prisma.PredictionRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionRunCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionRunCountAggregateOutputType> | number
          }
        }
      }
      LlmAnalysisRun: {
        payload: Prisma.$LlmAnalysisRunPayload<ExtArgs>
        fields: Prisma.LlmAnalysisRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LlmAnalysisRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LlmAnalysisRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          findFirst: {
            args: Prisma.LlmAnalysisRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LlmAnalysisRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          findMany: {
            args: Prisma.LlmAnalysisRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>[]
          }
          create: {
            args: Prisma.LlmAnalysisRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          createMany: {
            args: Prisma.LlmAnalysisRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LlmAnalysisRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>[]
          }
          delete: {
            args: Prisma.LlmAnalysisRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          update: {
            args: Prisma.LlmAnalysisRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          deleteMany: {
            args: Prisma.LlmAnalysisRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LlmAnalysisRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LlmAnalysisRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>[]
          }
          upsert: {
            args: Prisma.LlmAnalysisRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmAnalysisRunPayload>
          }
          aggregate: {
            args: Prisma.LlmAnalysisRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLlmAnalysisRun>
          }
          groupBy: {
            args: Prisma.LlmAnalysisRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<LlmAnalysisRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.LlmAnalysisRunCountArgs<ExtArgs>
            result: $Utils.Optional<LlmAnalysisRunCountAggregateOutputType> | number
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
    zerodhaAccount?: ZerodhaAccountOmit
    upstoxAccount?: UpstoxAccountOmit
    indiaStock?: IndiaStockOmit
    uSStock?: USStockOmit
    cryptoAsset?: CryptoAssetOmit
    portfolio?: PortfolioOmit
    watchlist?: WatchlistOmit
    predictionRun?: PredictionRunOmit
    llmAnalysisRun?: LlmAnalysisRunOmit
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
    portfolios: number
    watchlists: number
    predictionRuns: number
    llmAnalysisRuns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | UserCountOutputTypeCountPortfoliosArgs
    watchlists?: boolean | UserCountOutputTypeCountWatchlistsArgs
    predictionRuns?: boolean | UserCountOutputTypeCountPredictionRunsArgs
    llmAnalysisRuns?: boolean | UserCountOutputTypeCountLlmAnalysisRunsArgs
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
  export type UserCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPredictionRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionRunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLlmAnalysisRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmAnalysisRunWhereInput
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
    authMethod: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    authMethod: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    authMethod: number
    createdAt: number
    updatedAt: number
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
    authMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    authMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    authMethod?: true
    createdAt?: true
    updatedAt?: true
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
    password: string | null
    authMethod: $Enums.AuthMethod
    createdAt: Date
    updatedAt: Date
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
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    zerodhaAccount?: boolean | User$zerodhaAccountArgs<ExtArgs>
    upstoxAccount?: boolean | User$upstoxAccountArgs<ExtArgs>
    predictionRuns?: boolean | User$predictionRunsArgs<ExtArgs>
    llmAnalysisRuns?: boolean | User$llmAnalysisRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "authMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    zerodhaAccount?: boolean | User$zerodhaAccountArgs<ExtArgs>
    upstoxAccount?: boolean | User$upstoxAccountArgs<ExtArgs>
    predictionRuns?: boolean | User$predictionRunsArgs<ExtArgs>
    llmAnalysisRuns?: boolean | User$llmAnalysisRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      portfolios: Prisma.$PortfolioPayload<ExtArgs>[]
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
      zerodhaAccount: Prisma.$ZerodhaAccountPayload<ExtArgs> | null
      upstoxAccount: Prisma.$UpstoxAccountPayload<ExtArgs> | null
      predictionRuns: Prisma.$PredictionRunPayload<ExtArgs>[]
      llmAnalysisRuns: Prisma.$LlmAnalysisRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      authMethod: $Enums.AuthMethod
      createdAt: Date
      updatedAt: Date
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
    portfolios<T extends User$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, User$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlists<T extends User$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zerodhaAccount<T extends User$zerodhaAccountArgs<ExtArgs> = {}>(args?: Subset<T, User$zerodhaAccountArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    upstoxAccount<T extends User$upstoxAccountArgs<ExtArgs> = {}>(args?: Subset<T, User$upstoxAccountArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    predictionRuns<T extends User$predictionRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$predictionRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    llmAnalysisRuns<T extends User$llmAnalysisRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$llmAnalysisRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly authMethod: FieldRef<"User", 'AuthMethod'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.portfolios
   */
  export type User$portfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * User.watchlists
   */
  export type User$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User.zerodhaAccount
   */
  export type User$zerodhaAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    where?: ZerodhaAccountWhereInput
  }

  /**
   * User.upstoxAccount
   */
  export type User$upstoxAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    where?: UpstoxAccountWhereInput
  }

  /**
   * User.predictionRuns
   */
  export type User$predictionRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    where?: PredictionRunWhereInput
    orderBy?: PredictionRunOrderByWithRelationInput | PredictionRunOrderByWithRelationInput[]
    cursor?: PredictionRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionRunScalarFieldEnum | PredictionRunScalarFieldEnum[]
  }

  /**
   * User.llmAnalysisRuns
   */
  export type User$llmAnalysisRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    where?: LlmAnalysisRunWhereInput
    orderBy?: LlmAnalysisRunOrderByWithRelationInput | LlmAnalysisRunOrderByWithRelationInput[]
    cursor?: LlmAnalysisRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LlmAnalysisRunScalarFieldEnum | LlmAnalysisRunScalarFieldEnum[]
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
   * Model ZerodhaAccount
   */

  export type AggregateZerodhaAccount = {
    _count: ZerodhaAccountCountAggregateOutputType | null
    _avg: ZerodhaAccountAvgAggregateOutputType | null
    _sum: ZerodhaAccountSumAggregateOutputType | null
    _min: ZerodhaAccountMinAggregateOutputType | null
    _max: ZerodhaAccountMaxAggregateOutputType | null
  }

  export type ZerodhaAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ZerodhaAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ZerodhaAccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: string | null
    accessToken: string | null
    isLinked: boolean | null
    linkedAt: Date | null
  }

  export type ZerodhaAccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: string | null
    accessToken: string | null
    isLinked: boolean | null
    linkedAt: Date | null
  }

  export type ZerodhaAccountCountAggregateOutputType = {
    id: number
    userId: number
    clientId: number
    accessToken: number
    isLinked: number
    linkedAt: number
    _all: number
  }


  export type ZerodhaAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ZerodhaAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ZerodhaAccountMinAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
  }

  export type ZerodhaAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
  }

  export type ZerodhaAccountCountAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
    _all?: true
  }

  export type ZerodhaAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZerodhaAccount to aggregate.
     */
    where?: ZerodhaAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZerodhaAccounts to fetch.
     */
    orderBy?: ZerodhaAccountOrderByWithRelationInput | ZerodhaAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZerodhaAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZerodhaAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZerodhaAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZerodhaAccounts
    **/
    _count?: true | ZerodhaAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZerodhaAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZerodhaAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZerodhaAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZerodhaAccountMaxAggregateInputType
  }

  export type GetZerodhaAccountAggregateType<T extends ZerodhaAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateZerodhaAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZerodhaAccount[P]>
      : GetScalarType<T[P], AggregateZerodhaAccount[P]>
  }




  export type ZerodhaAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZerodhaAccountWhereInput
    orderBy?: ZerodhaAccountOrderByWithAggregationInput | ZerodhaAccountOrderByWithAggregationInput[]
    by: ZerodhaAccountScalarFieldEnum[] | ZerodhaAccountScalarFieldEnum
    having?: ZerodhaAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZerodhaAccountCountAggregateInputType | true
    _avg?: ZerodhaAccountAvgAggregateInputType
    _sum?: ZerodhaAccountSumAggregateInputType
    _min?: ZerodhaAccountMinAggregateInputType
    _max?: ZerodhaAccountMaxAggregateInputType
  }

  export type ZerodhaAccountGroupByOutputType = {
    id: number
    userId: number
    clientId: string
    accessToken: string
    isLinked: boolean
    linkedAt: Date
    _count: ZerodhaAccountCountAggregateOutputType | null
    _avg: ZerodhaAccountAvgAggregateOutputType | null
    _sum: ZerodhaAccountSumAggregateOutputType | null
    _min: ZerodhaAccountMinAggregateOutputType | null
    _max: ZerodhaAccountMaxAggregateOutputType | null
  }

  type GetZerodhaAccountGroupByPayload<T extends ZerodhaAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZerodhaAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZerodhaAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZerodhaAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ZerodhaAccountGroupByOutputType[P]>
        }
      >
    >


  export type ZerodhaAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zerodhaAccount"]>

  export type ZerodhaAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zerodhaAccount"]>

  export type ZerodhaAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zerodhaAccount"]>

  export type ZerodhaAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
  }

  export type ZerodhaAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "clientId" | "accessToken" | "isLinked" | "linkedAt", ExtArgs["result"]["zerodhaAccount"]>
  export type ZerodhaAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZerodhaAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZerodhaAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ZerodhaAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZerodhaAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      clientId: string
      accessToken: string
      isLinked: boolean
      linkedAt: Date
    }, ExtArgs["result"]["zerodhaAccount"]>
    composites: {}
  }

  type ZerodhaAccountGetPayload<S extends boolean | null | undefined | ZerodhaAccountDefaultArgs> = $Result.GetResult<Prisma.$ZerodhaAccountPayload, S>

  type ZerodhaAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZerodhaAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZerodhaAccountCountAggregateInputType | true
    }

  export interface ZerodhaAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZerodhaAccount'], meta: { name: 'ZerodhaAccount' } }
    /**
     * Find zero or one ZerodhaAccount that matches the filter.
     * @param {ZerodhaAccountFindUniqueArgs} args - Arguments to find a ZerodhaAccount
     * @example
     * // Get one ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZerodhaAccountFindUniqueArgs>(args: SelectSubset<T, ZerodhaAccountFindUniqueArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZerodhaAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZerodhaAccountFindUniqueOrThrowArgs} args - Arguments to find a ZerodhaAccount
     * @example
     * // Get one ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZerodhaAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ZerodhaAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZerodhaAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountFindFirstArgs} args - Arguments to find a ZerodhaAccount
     * @example
     * // Get one ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZerodhaAccountFindFirstArgs>(args?: SelectSubset<T, ZerodhaAccountFindFirstArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZerodhaAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountFindFirstOrThrowArgs} args - Arguments to find a ZerodhaAccount
     * @example
     * // Get one ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZerodhaAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ZerodhaAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZerodhaAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZerodhaAccounts
     * const zerodhaAccounts = await prisma.zerodhaAccount.findMany()
     * 
     * // Get first 10 ZerodhaAccounts
     * const zerodhaAccounts = await prisma.zerodhaAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zerodhaAccountWithIdOnly = await prisma.zerodhaAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZerodhaAccountFindManyArgs>(args?: SelectSubset<T, ZerodhaAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZerodhaAccount.
     * @param {ZerodhaAccountCreateArgs} args - Arguments to create a ZerodhaAccount.
     * @example
     * // Create one ZerodhaAccount
     * const ZerodhaAccount = await prisma.zerodhaAccount.create({
     *   data: {
     *     // ... data to create a ZerodhaAccount
     *   }
     * })
     * 
     */
    create<T extends ZerodhaAccountCreateArgs>(args: SelectSubset<T, ZerodhaAccountCreateArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZerodhaAccounts.
     * @param {ZerodhaAccountCreateManyArgs} args - Arguments to create many ZerodhaAccounts.
     * @example
     * // Create many ZerodhaAccounts
     * const zerodhaAccount = await prisma.zerodhaAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZerodhaAccountCreateManyArgs>(args?: SelectSubset<T, ZerodhaAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZerodhaAccounts and returns the data saved in the database.
     * @param {ZerodhaAccountCreateManyAndReturnArgs} args - Arguments to create many ZerodhaAccounts.
     * @example
     * // Create many ZerodhaAccounts
     * const zerodhaAccount = await prisma.zerodhaAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZerodhaAccounts and only return the `id`
     * const zerodhaAccountWithIdOnly = await prisma.zerodhaAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZerodhaAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, ZerodhaAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZerodhaAccount.
     * @param {ZerodhaAccountDeleteArgs} args - Arguments to delete one ZerodhaAccount.
     * @example
     * // Delete one ZerodhaAccount
     * const ZerodhaAccount = await prisma.zerodhaAccount.delete({
     *   where: {
     *     // ... filter to delete one ZerodhaAccount
     *   }
     * })
     * 
     */
    delete<T extends ZerodhaAccountDeleteArgs>(args: SelectSubset<T, ZerodhaAccountDeleteArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZerodhaAccount.
     * @param {ZerodhaAccountUpdateArgs} args - Arguments to update one ZerodhaAccount.
     * @example
     * // Update one ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZerodhaAccountUpdateArgs>(args: SelectSubset<T, ZerodhaAccountUpdateArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZerodhaAccounts.
     * @param {ZerodhaAccountDeleteManyArgs} args - Arguments to filter ZerodhaAccounts to delete.
     * @example
     * // Delete a few ZerodhaAccounts
     * const { count } = await prisma.zerodhaAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZerodhaAccountDeleteManyArgs>(args?: SelectSubset<T, ZerodhaAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZerodhaAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZerodhaAccounts
     * const zerodhaAccount = await prisma.zerodhaAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZerodhaAccountUpdateManyArgs>(args: SelectSubset<T, ZerodhaAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZerodhaAccounts and returns the data updated in the database.
     * @param {ZerodhaAccountUpdateManyAndReturnArgs} args - Arguments to update many ZerodhaAccounts.
     * @example
     * // Update many ZerodhaAccounts
     * const zerodhaAccount = await prisma.zerodhaAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZerodhaAccounts and only return the `id`
     * const zerodhaAccountWithIdOnly = await prisma.zerodhaAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZerodhaAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, ZerodhaAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZerodhaAccount.
     * @param {ZerodhaAccountUpsertArgs} args - Arguments to update or create a ZerodhaAccount.
     * @example
     * // Update or create a ZerodhaAccount
     * const zerodhaAccount = await prisma.zerodhaAccount.upsert({
     *   create: {
     *     // ... data to create a ZerodhaAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZerodhaAccount we want to update
     *   }
     * })
     */
    upsert<T extends ZerodhaAccountUpsertArgs>(args: SelectSubset<T, ZerodhaAccountUpsertArgs<ExtArgs>>): Prisma__ZerodhaAccountClient<$Result.GetResult<Prisma.$ZerodhaAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZerodhaAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountCountArgs} args - Arguments to filter ZerodhaAccounts to count.
     * @example
     * // Count the number of ZerodhaAccounts
     * const count = await prisma.zerodhaAccount.count({
     *   where: {
     *     // ... the filter for the ZerodhaAccounts we want to count
     *   }
     * })
    **/
    count<T extends ZerodhaAccountCountArgs>(
      args?: Subset<T, ZerodhaAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZerodhaAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZerodhaAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZerodhaAccountAggregateArgs>(args: Subset<T, ZerodhaAccountAggregateArgs>): Prisma.PrismaPromise<GetZerodhaAccountAggregateType<T>>

    /**
     * Group by ZerodhaAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZerodhaAccountGroupByArgs} args - Group by arguments.
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
      T extends ZerodhaAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZerodhaAccountGroupByArgs['orderBy'] }
        : { orderBy?: ZerodhaAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZerodhaAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZerodhaAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZerodhaAccount model
   */
  readonly fields: ZerodhaAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZerodhaAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZerodhaAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ZerodhaAccount model
   */
  interface ZerodhaAccountFieldRefs {
    readonly id: FieldRef<"ZerodhaAccount", 'Int'>
    readonly userId: FieldRef<"ZerodhaAccount", 'Int'>
    readonly clientId: FieldRef<"ZerodhaAccount", 'String'>
    readonly accessToken: FieldRef<"ZerodhaAccount", 'String'>
    readonly isLinked: FieldRef<"ZerodhaAccount", 'Boolean'>
    readonly linkedAt: FieldRef<"ZerodhaAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZerodhaAccount findUnique
   */
  export type ZerodhaAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter, which ZerodhaAccount to fetch.
     */
    where: ZerodhaAccountWhereUniqueInput
  }

  /**
   * ZerodhaAccount findUniqueOrThrow
   */
  export type ZerodhaAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter, which ZerodhaAccount to fetch.
     */
    where: ZerodhaAccountWhereUniqueInput
  }

  /**
   * ZerodhaAccount findFirst
   */
  export type ZerodhaAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter, which ZerodhaAccount to fetch.
     */
    where?: ZerodhaAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZerodhaAccounts to fetch.
     */
    orderBy?: ZerodhaAccountOrderByWithRelationInput | ZerodhaAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZerodhaAccounts.
     */
    cursor?: ZerodhaAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZerodhaAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZerodhaAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZerodhaAccounts.
     */
    distinct?: ZerodhaAccountScalarFieldEnum | ZerodhaAccountScalarFieldEnum[]
  }

  /**
   * ZerodhaAccount findFirstOrThrow
   */
  export type ZerodhaAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter, which ZerodhaAccount to fetch.
     */
    where?: ZerodhaAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZerodhaAccounts to fetch.
     */
    orderBy?: ZerodhaAccountOrderByWithRelationInput | ZerodhaAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZerodhaAccounts.
     */
    cursor?: ZerodhaAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZerodhaAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZerodhaAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZerodhaAccounts.
     */
    distinct?: ZerodhaAccountScalarFieldEnum | ZerodhaAccountScalarFieldEnum[]
  }

  /**
   * ZerodhaAccount findMany
   */
  export type ZerodhaAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter, which ZerodhaAccounts to fetch.
     */
    where?: ZerodhaAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZerodhaAccounts to fetch.
     */
    orderBy?: ZerodhaAccountOrderByWithRelationInput | ZerodhaAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZerodhaAccounts.
     */
    cursor?: ZerodhaAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZerodhaAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZerodhaAccounts.
     */
    skip?: number
    distinct?: ZerodhaAccountScalarFieldEnum | ZerodhaAccountScalarFieldEnum[]
  }

  /**
   * ZerodhaAccount create
   */
  export type ZerodhaAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ZerodhaAccount.
     */
    data: XOR<ZerodhaAccountCreateInput, ZerodhaAccountUncheckedCreateInput>
  }

  /**
   * ZerodhaAccount createMany
   */
  export type ZerodhaAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZerodhaAccounts.
     */
    data: ZerodhaAccountCreateManyInput | ZerodhaAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZerodhaAccount createManyAndReturn
   */
  export type ZerodhaAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * The data used to create many ZerodhaAccounts.
     */
    data: ZerodhaAccountCreateManyInput | ZerodhaAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZerodhaAccount update
   */
  export type ZerodhaAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ZerodhaAccount.
     */
    data: XOR<ZerodhaAccountUpdateInput, ZerodhaAccountUncheckedUpdateInput>
    /**
     * Choose, which ZerodhaAccount to update.
     */
    where: ZerodhaAccountWhereUniqueInput
  }

  /**
   * ZerodhaAccount updateMany
   */
  export type ZerodhaAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZerodhaAccounts.
     */
    data: XOR<ZerodhaAccountUpdateManyMutationInput, ZerodhaAccountUncheckedUpdateManyInput>
    /**
     * Filter which ZerodhaAccounts to update
     */
    where?: ZerodhaAccountWhereInput
    /**
     * Limit how many ZerodhaAccounts to update.
     */
    limit?: number
  }

  /**
   * ZerodhaAccount updateManyAndReturn
   */
  export type ZerodhaAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * The data used to update ZerodhaAccounts.
     */
    data: XOR<ZerodhaAccountUpdateManyMutationInput, ZerodhaAccountUncheckedUpdateManyInput>
    /**
     * Filter which ZerodhaAccounts to update
     */
    where?: ZerodhaAccountWhereInput
    /**
     * Limit how many ZerodhaAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZerodhaAccount upsert
   */
  export type ZerodhaAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ZerodhaAccount to update in case it exists.
     */
    where: ZerodhaAccountWhereUniqueInput
    /**
     * In case the ZerodhaAccount found by the `where` argument doesn't exist, create a new ZerodhaAccount with this data.
     */
    create: XOR<ZerodhaAccountCreateInput, ZerodhaAccountUncheckedCreateInput>
    /**
     * In case the ZerodhaAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZerodhaAccountUpdateInput, ZerodhaAccountUncheckedUpdateInput>
  }

  /**
   * ZerodhaAccount delete
   */
  export type ZerodhaAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
    /**
     * Filter which ZerodhaAccount to delete.
     */
    where: ZerodhaAccountWhereUniqueInput
  }

  /**
   * ZerodhaAccount deleteMany
   */
  export type ZerodhaAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZerodhaAccounts to delete
     */
    where?: ZerodhaAccountWhereInput
    /**
     * Limit how many ZerodhaAccounts to delete.
     */
    limit?: number
  }

  /**
   * ZerodhaAccount without action
   */
  export type ZerodhaAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZerodhaAccount
     */
    select?: ZerodhaAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZerodhaAccount
     */
    omit?: ZerodhaAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZerodhaAccountInclude<ExtArgs> | null
  }


  /**
   * Model UpstoxAccount
   */

  export type AggregateUpstoxAccount = {
    _count: UpstoxAccountCountAggregateOutputType | null
    _avg: UpstoxAccountAvgAggregateOutputType | null
    _sum: UpstoxAccountSumAggregateOutputType | null
    _min: UpstoxAccountMinAggregateOutputType | null
    _max: UpstoxAccountMaxAggregateOutputType | null
  }

  export type UpstoxAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UpstoxAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UpstoxAccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: string | null
    accessToken: string | null
    isLinked: boolean | null
    linkedAt: Date | null
  }

  export type UpstoxAccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: string | null
    accessToken: string | null
    isLinked: boolean | null
    linkedAt: Date | null
  }

  export type UpstoxAccountCountAggregateOutputType = {
    id: number
    userId: number
    clientId: number
    accessToken: number
    isLinked: number
    linkedAt: number
    _all: number
  }


  export type UpstoxAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UpstoxAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UpstoxAccountMinAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
  }

  export type UpstoxAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
  }

  export type UpstoxAccountCountAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    accessToken?: true
    isLinked?: true
    linkedAt?: true
    _all?: true
  }

  export type UpstoxAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpstoxAccount to aggregate.
     */
    where?: UpstoxAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpstoxAccounts to fetch.
     */
    orderBy?: UpstoxAccountOrderByWithRelationInput | UpstoxAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpstoxAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpstoxAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpstoxAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpstoxAccounts
    **/
    _count?: true | UpstoxAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpstoxAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpstoxAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpstoxAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpstoxAccountMaxAggregateInputType
  }

  export type GetUpstoxAccountAggregateType<T extends UpstoxAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateUpstoxAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpstoxAccount[P]>
      : GetScalarType<T[P], AggregateUpstoxAccount[P]>
  }




  export type UpstoxAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpstoxAccountWhereInput
    orderBy?: UpstoxAccountOrderByWithAggregationInput | UpstoxAccountOrderByWithAggregationInput[]
    by: UpstoxAccountScalarFieldEnum[] | UpstoxAccountScalarFieldEnum
    having?: UpstoxAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpstoxAccountCountAggregateInputType | true
    _avg?: UpstoxAccountAvgAggregateInputType
    _sum?: UpstoxAccountSumAggregateInputType
    _min?: UpstoxAccountMinAggregateInputType
    _max?: UpstoxAccountMaxAggregateInputType
  }

  export type UpstoxAccountGroupByOutputType = {
    id: number
    userId: number
    clientId: string
    accessToken: string
    isLinked: boolean
    linkedAt: Date
    _count: UpstoxAccountCountAggregateOutputType | null
    _avg: UpstoxAccountAvgAggregateOutputType | null
    _sum: UpstoxAccountSumAggregateOutputType | null
    _min: UpstoxAccountMinAggregateOutputType | null
    _max: UpstoxAccountMaxAggregateOutputType | null
  }

  type GetUpstoxAccountGroupByPayload<T extends UpstoxAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpstoxAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpstoxAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpstoxAccountGroupByOutputType[P]>
            : GetScalarType<T[P], UpstoxAccountGroupByOutputType[P]>
        }
      >
    >


  export type UpstoxAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upstoxAccount"]>

  export type UpstoxAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upstoxAccount"]>

  export type UpstoxAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upstoxAccount"]>

  export type UpstoxAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    clientId?: boolean
    accessToken?: boolean
    isLinked?: boolean
    linkedAt?: boolean
  }

  export type UpstoxAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "clientId" | "accessToken" | "isLinked" | "linkedAt", ExtArgs["result"]["upstoxAccount"]>
  export type UpstoxAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpstoxAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpstoxAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UpstoxAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpstoxAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      clientId: string
      accessToken: string
      isLinked: boolean
      linkedAt: Date
    }, ExtArgs["result"]["upstoxAccount"]>
    composites: {}
  }

  type UpstoxAccountGetPayload<S extends boolean | null | undefined | UpstoxAccountDefaultArgs> = $Result.GetResult<Prisma.$UpstoxAccountPayload, S>

  type UpstoxAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpstoxAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpstoxAccountCountAggregateInputType | true
    }

  export interface UpstoxAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpstoxAccount'], meta: { name: 'UpstoxAccount' } }
    /**
     * Find zero or one UpstoxAccount that matches the filter.
     * @param {UpstoxAccountFindUniqueArgs} args - Arguments to find a UpstoxAccount
     * @example
     * // Get one UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpstoxAccountFindUniqueArgs>(args: SelectSubset<T, UpstoxAccountFindUniqueArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpstoxAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpstoxAccountFindUniqueOrThrowArgs} args - Arguments to find a UpstoxAccount
     * @example
     * // Get one UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpstoxAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, UpstoxAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpstoxAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountFindFirstArgs} args - Arguments to find a UpstoxAccount
     * @example
     * // Get one UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpstoxAccountFindFirstArgs>(args?: SelectSubset<T, UpstoxAccountFindFirstArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpstoxAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountFindFirstOrThrowArgs} args - Arguments to find a UpstoxAccount
     * @example
     * // Get one UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpstoxAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, UpstoxAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpstoxAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpstoxAccounts
     * const upstoxAccounts = await prisma.upstoxAccount.findMany()
     * 
     * // Get first 10 UpstoxAccounts
     * const upstoxAccounts = await prisma.upstoxAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upstoxAccountWithIdOnly = await prisma.upstoxAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpstoxAccountFindManyArgs>(args?: SelectSubset<T, UpstoxAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpstoxAccount.
     * @param {UpstoxAccountCreateArgs} args - Arguments to create a UpstoxAccount.
     * @example
     * // Create one UpstoxAccount
     * const UpstoxAccount = await prisma.upstoxAccount.create({
     *   data: {
     *     // ... data to create a UpstoxAccount
     *   }
     * })
     * 
     */
    create<T extends UpstoxAccountCreateArgs>(args: SelectSubset<T, UpstoxAccountCreateArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpstoxAccounts.
     * @param {UpstoxAccountCreateManyArgs} args - Arguments to create many UpstoxAccounts.
     * @example
     * // Create many UpstoxAccounts
     * const upstoxAccount = await prisma.upstoxAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpstoxAccountCreateManyArgs>(args?: SelectSubset<T, UpstoxAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpstoxAccounts and returns the data saved in the database.
     * @param {UpstoxAccountCreateManyAndReturnArgs} args - Arguments to create many UpstoxAccounts.
     * @example
     * // Create many UpstoxAccounts
     * const upstoxAccount = await prisma.upstoxAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpstoxAccounts and only return the `id`
     * const upstoxAccountWithIdOnly = await prisma.upstoxAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpstoxAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, UpstoxAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpstoxAccount.
     * @param {UpstoxAccountDeleteArgs} args - Arguments to delete one UpstoxAccount.
     * @example
     * // Delete one UpstoxAccount
     * const UpstoxAccount = await prisma.upstoxAccount.delete({
     *   where: {
     *     // ... filter to delete one UpstoxAccount
     *   }
     * })
     * 
     */
    delete<T extends UpstoxAccountDeleteArgs>(args: SelectSubset<T, UpstoxAccountDeleteArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpstoxAccount.
     * @param {UpstoxAccountUpdateArgs} args - Arguments to update one UpstoxAccount.
     * @example
     * // Update one UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpstoxAccountUpdateArgs>(args: SelectSubset<T, UpstoxAccountUpdateArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpstoxAccounts.
     * @param {UpstoxAccountDeleteManyArgs} args - Arguments to filter UpstoxAccounts to delete.
     * @example
     * // Delete a few UpstoxAccounts
     * const { count } = await prisma.upstoxAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpstoxAccountDeleteManyArgs>(args?: SelectSubset<T, UpstoxAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpstoxAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpstoxAccounts
     * const upstoxAccount = await prisma.upstoxAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpstoxAccountUpdateManyArgs>(args: SelectSubset<T, UpstoxAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpstoxAccounts and returns the data updated in the database.
     * @param {UpstoxAccountUpdateManyAndReturnArgs} args - Arguments to update many UpstoxAccounts.
     * @example
     * // Update many UpstoxAccounts
     * const upstoxAccount = await prisma.upstoxAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpstoxAccounts and only return the `id`
     * const upstoxAccountWithIdOnly = await prisma.upstoxAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends UpstoxAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, UpstoxAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpstoxAccount.
     * @param {UpstoxAccountUpsertArgs} args - Arguments to update or create a UpstoxAccount.
     * @example
     * // Update or create a UpstoxAccount
     * const upstoxAccount = await prisma.upstoxAccount.upsert({
     *   create: {
     *     // ... data to create a UpstoxAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpstoxAccount we want to update
     *   }
     * })
     */
    upsert<T extends UpstoxAccountUpsertArgs>(args: SelectSubset<T, UpstoxAccountUpsertArgs<ExtArgs>>): Prisma__UpstoxAccountClient<$Result.GetResult<Prisma.$UpstoxAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpstoxAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountCountArgs} args - Arguments to filter UpstoxAccounts to count.
     * @example
     * // Count the number of UpstoxAccounts
     * const count = await prisma.upstoxAccount.count({
     *   where: {
     *     // ... the filter for the UpstoxAccounts we want to count
     *   }
     * })
    **/
    count<T extends UpstoxAccountCountArgs>(
      args?: Subset<T, UpstoxAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpstoxAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpstoxAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpstoxAccountAggregateArgs>(args: Subset<T, UpstoxAccountAggregateArgs>): Prisma.PrismaPromise<GetUpstoxAccountAggregateType<T>>

    /**
     * Group by UpstoxAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpstoxAccountGroupByArgs} args - Group by arguments.
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
      T extends UpstoxAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpstoxAccountGroupByArgs['orderBy'] }
        : { orderBy?: UpstoxAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UpstoxAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpstoxAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpstoxAccount model
   */
  readonly fields: UpstoxAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpstoxAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpstoxAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UpstoxAccount model
   */
  interface UpstoxAccountFieldRefs {
    readonly id: FieldRef<"UpstoxAccount", 'Int'>
    readonly userId: FieldRef<"UpstoxAccount", 'Int'>
    readonly clientId: FieldRef<"UpstoxAccount", 'String'>
    readonly accessToken: FieldRef<"UpstoxAccount", 'String'>
    readonly isLinked: FieldRef<"UpstoxAccount", 'Boolean'>
    readonly linkedAt: FieldRef<"UpstoxAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UpstoxAccount findUnique
   */
  export type UpstoxAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter, which UpstoxAccount to fetch.
     */
    where: UpstoxAccountWhereUniqueInput
  }

  /**
   * UpstoxAccount findUniqueOrThrow
   */
  export type UpstoxAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter, which UpstoxAccount to fetch.
     */
    where: UpstoxAccountWhereUniqueInput
  }

  /**
   * UpstoxAccount findFirst
   */
  export type UpstoxAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter, which UpstoxAccount to fetch.
     */
    where?: UpstoxAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpstoxAccounts to fetch.
     */
    orderBy?: UpstoxAccountOrderByWithRelationInput | UpstoxAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpstoxAccounts.
     */
    cursor?: UpstoxAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpstoxAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpstoxAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpstoxAccounts.
     */
    distinct?: UpstoxAccountScalarFieldEnum | UpstoxAccountScalarFieldEnum[]
  }

  /**
   * UpstoxAccount findFirstOrThrow
   */
  export type UpstoxAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter, which UpstoxAccount to fetch.
     */
    where?: UpstoxAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpstoxAccounts to fetch.
     */
    orderBy?: UpstoxAccountOrderByWithRelationInput | UpstoxAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpstoxAccounts.
     */
    cursor?: UpstoxAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpstoxAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpstoxAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpstoxAccounts.
     */
    distinct?: UpstoxAccountScalarFieldEnum | UpstoxAccountScalarFieldEnum[]
  }

  /**
   * UpstoxAccount findMany
   */
  export type UpstoxAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter, which UpstoxAccounts to fetch.
     */
    where?: UpstoxAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpstoxAccounts to fetch.
     */
    orderBy?: UpstoxAccountOrderByWithRelationInput | UpstoxAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpstoxAccounts.
     */
    cursor?: UpstoxAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpstoxAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpstoxAccounts.
     */
    skip?: number
    distinct?: UpstoxAccountScalarFieldEnum | UpstoxAccountScalarFieldEnum[]
  }

  /**
   * UpstoxAccount create
   */
  export type UpstoxAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a UpstoxAccount.
     */
    data: XOR<UpstoxAccountCreateInput, UpstoxAccountUncheckedCreateInput>
  }

  /**
   * UpstoxAccount createMany
   */
  export type UpstoxAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpstoxAccounts.
     */
    data: UpstoxAccountCreateManyInput | UpstoxAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpstoxAccount createManyAndReturn
   */
  export type UpstoxAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * The data used to create many UpstoxAccounts.
     */
    data: UpstoxAccountCreateManyInput | UpstoxAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpstoxAccount update
   */
  export type UpstoxAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a UpstoxAccount.
     */
    data: XOR<UpstoxAccountUpdateInput, UpstoxAccountUncheckedUpdateInput>
    /**
     * Choose, which UpstoxAccount to update.
     */
    where: UpstoxAccountWhereUniqueInput
  }

  /**
   * UpstoxAccount updateMany
   */
  export type UpstoxAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpstoxAccounts.
     */
    data: XOR<UpstoxAccountUpdateManyMutationInput, UpstoxAccountUncheckedUpdateManyInput>
    /**
     * Filter which UpstoxAccounts to update
     */
    where?: UpstoxAccountWhereInput
    /**
     * Limit how many UpstoxAccounts to update.
     */
    limit?: number
  }

  /**
   * UpstoxAccount updateManyAndReturn
   */
  export type UpstoxAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * The data used to update UpstoxAccounts.
     */
    data: XOR<UpstoxAccountUpdateManyMutationInput, UpstoxAccountUncheckedUpdateManyInput>
    /**
     * Filter which UpstoxAccounts to update
     */
    where?: UpstoxAccountWhereInput
    /**
     * Limit how many UpstoxAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpstoxAccount upsert
   */
  export type UpstoxAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the UpstoxAccount to update in case it exists.
     */
    where: UpstoxAccountWhereUniqueInput
    /**
     * In case the UpstoxAccount found by the `where` argument doesn't exist, create a new UpstoxAccount with this data.
     */
    create: XOR<UpstoxAccountCreateInput, UpstoxAccountUncheckedCreateInput>
    /**
     * In case the UpstoxAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpstoxAccountUpdateInput, UpstoxAccountUncheckedUpdateInput>
  }

  /**
   * UpstoxAccount delete
   */
  export type UpstoxAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
    /**
     * Filter which UpstoxAccount to delete.
     */
    where: UpstoxAccountWhereUniqueInput
  }

  /**
   * UpstoxAccount deleteMany
   */
  export type UpstoxAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpstoxAccounts to delete
     */
    where?: UpstoxAccountWhereInput
    /**
     * Limit how many UpstoxAccounts to delete.
     */
    limit?: number
  }

  /**
   * UpstoxAccount without action
   */
  export type UpstoxAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpstoxAccount
     */
    select?: UpstoxAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpstoxAccount
     */
    omit?: UpstoxAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpstoxAccountInclude<ExtArgs> | null
  }


  /**
   * Model IndiaStock
   */

  export type AggregateIndiaStock = {
    _count: IndiaStockCountAggregateOutputType | null
    _avg: IndiaStockAvgAggregateOutputType | null
    _sum: IndiaStockSumAggregateOutputType | null
    _min: IndiaStockMinAggregateOutputType | null
    _max: IndiaStockMaxAggregateOutputType | null
  }

  export type IndiaStockAvgAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type IndiaStockSumAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type IndiaStockMinAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type IndiaStockMaxAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type IndiaStockCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: number
    _all: number
  }


  export type IndiaStockAvgAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type IndiaStockSumAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type IndiaStockMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type IndiaStockMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type IndiaStockCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
    _all?: true
  }

  export type IndiaStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndiaStock to aggregate.
     */
    where?: IndiaStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndiaStocks to fetch.
     */
    orderBy?: IndiaStockOrderByWithRelationInput | IndiaStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndiaStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndiaStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndiaStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndiaStocks
    **/
    _count?: true | IndiaStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndiaStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndiaStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndiaStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndiaStockMaxAggregateInputType
  }

  export type GetIndiaStockAggregateType<T extends IndiaStockAggregateArgs> = {
        [P in keyof T & keyof AggregateIndiaStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndiaStock[P]>
      : GetScalarType<T[P], AggregateIndiaStock[P]>
  }




  export type IndiaStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndiaStockWhereInput
    orderBy?: IndiaStockOrderByWithAggregationInput | IndiaStockOrderByWithAggregationInput[]
    by: IndiaStockScalarFieldEnum[] | IndiaStockScalarFieldEnum
    having?: IndiaStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndiaStockCountAggregateInputType | true
    _avg?: IndiaStockAvgAggregateInputType
    _sum?: IndiaStockSumAggregateInputType
    _min?: IndiaStockMinAggregateInputType
    _max?: IndiaStockMaxAggregateInputType
  }

  export type IndiaStockGroupByOutputType = {
    id: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: Date
    _count: IndiaStockCountAggregateOutputType | null
    _avg: IndiaStockAvgAggregateOutputType | null
    _sum: IndiaStockSumAggregateOutputType | null
    _min: IndiaStockMinAggregateOutputType | null
    _max: IndiaStockMaxAggregateOutputType | null
  }

  type GetIndiaStockGroupByPayload<T extends IndiaStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndiaStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndiaStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndiaStockGroupByOutputType[P]>
            : GetScalarType<T[P], IndiaStockGroupByOutputType[P]>
        }
      >
    >


  export type IndiaStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["indiaStock"]>

  export type IndiaStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["indiaStock"]>

  export type IndiaStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["indiaStock"]>

  export type IndiaStockSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }

  export type IndiaStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "prevClosePrice" | "openPrice" | "currentPrice" | "listedAt", ExtArgs["result"]["indiaStock"]>

  export type $IndiaStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndiaStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      symbol: string
      name: string
      prevClosePrice: number
      openPrice: number
      currentPrice: number
      listedAt: Date
    }, ExtArgs["result"]["indiaStock"]>
    composites: {}
  }

  type IndiaStockGetPayload<S extends boolean | null | undefined | IndiaStockDefaultArgs> = $Result.GetResult<Prisma.$IndiaStockPayload, S>

  type IndiaStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndiaStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndiaStockCountAggregateInputType | true
    }

  export interface IndiaStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndiaStock'], meta: { name: 'IndiaStock' } }
    /**
     * Find zero or one IndiaStock that matches the filter.
     * @param {IndiaStockFindUniqueArgs} args - Arguments to find a IndiaStock
     * @example
     * // Get one IndiaStock
     * const indiaStock = await prisma.indiaStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndiaStockFindUniqueArgs>(args: SelectSubset<T, IndiaStockFindUniqueArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndiaStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndiaStockFindUniqueOrThrowArgs} args - Arguments to find a IndiaStock
     * @example
     * // Get one IndiaStock
     * const indiaStock = await prisma.indiaStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndiaStockFindUniqueOrThrowArgs>(args: SelectSubset<T, IndiaStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndiaStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockFindFirstArgs} args - Arguments to find a IndiaStock
     * @example
     * // Get one IndiaStock
     * const indiaStock = await prisma.indiaStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndiaStockFindFirstArgs>(args?: SelectSubset<T, IndiaStockFindFirstArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndiaStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockFindFirstOrThrowArgs} args - Arguments to find a IndiaStock
     * @example
     * // Get one IndiaStock
     * const indiaStock = await prisma.indiaStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndiaStockFindFirstOrThrowArgs>(args?: SelectSubset<T, IndiaStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndiaStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndiaStocks
     * const indiaStocks = await prisma.indiaStock.findMany()
     * 
     * // Get first 10 IndiaStocks
     * const indiaStocks = await prisma.indiaStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indiaStockWithIdOnly = await prisma.indiaStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndiaStockFindManyArgs>(args?: SelectSubset<T, IndiaStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndiaStock.
     * @param {IndiaStockCreateArgs} args - Arguments to create a IndiaStock.
     * @example
     * // Create one IndiaStock
     * const IndiaStock = await prisma.indiaStock.create({
     *   data: {
     *     // ... data to create a IndiaStock
     *   }
     * })
     * 
     */
    create<T extends IndiaStockCreateArgs>(args: SelectSubset<T, IndiaStockCreateArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndiaStocks.
     * @param {IndiaStockCreateManyArgs} args - Arguments to create many IndiaStocks.
     * @example
     * // Create many IndiaStocks
     * const indiaStock = await prisma.indiaStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndiaStockCreateManyArgs>(args?: SelectSubset<T, IndiaStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndiaStocks and returns the data saved in the database.
     * @param {IndiaStockCreateManyAndReturnArgs} args - Arguments to create many IndiaStocks.
     * @example
     * // Create many IndiaStocks
     * const indiaStock = await prisma.indiaStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndiaStocks and only return the `id`
     * const indiaStockWithIdOnly = await prisma.indiaStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndiaStockCreateManyAndReturnArgs>(args?: SelectSubset<T, IndiaStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndiaStock.
     * @param {IndiaStockDeleteArgs} args - Arguments to delete one IndiaStock.
     * @example
     * // Delete one IndiaStock
     * const IndiaStock = await prisma.indiaStock.delete({
     *   where: {
     *     // ... filter to delete one IndiaStock
     *   }
     * })
     * 
     */
    delete<T extends IndiaStockDeleteArgs>(args: SelectSubset<T, IndiaStockDeleteArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndiaStock.
     * @param {IndiaStockUpdateArgs} args - Arguments to update one IndiaStock.
     * @example
     * // Update one IndiaStock
     * const indiaStock = await prisma.indiaStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndiaStockUpdateArgs>(args: SelectSubset<T, IndiaStockUpdateArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndiaStocks.
     * @param {IndiaStockDeleteManyArgs} args - Arguments to filter IndiaStocks to delete.
     * @example
     * // Delete a few IndiaStocks
     * const { count } = await prisma.indiaStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndiaStockDeleteManyArgs>(args?: SelectSubset<T, IndiaStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndiaStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndiaStocks
     * const indiaStock = await prisma.indiaStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndiaStockUpdateManyArgs>(args: SelectSubset<T, IndiaStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndiaStocks and returns the data updated in the database.
     * @param {IndiaStockUpdateManyAndReturnArgs} args - Arguments to update many IndiaStocks.
     * @example
     * // Update many IndiaStocks
     * const indiaStock = await prisma.indiaStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndiaStocks and only return the `id`
     * const indiaStockWithIdOnly = await prisma.indiaStock.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndiaStockUpdateManyAndReturnArgs>(args: SelectSubset<T, IndiaStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndiaStock.
     * @param {IndiaStockUpsertArgs} args - Arguments to update or create a IndiaStock.
     * @example
     * // Update or create a IndiaStock
     * const indiaStock = await prisma.indiaStock.upsert({
     *   create: {
     *     // ... data to create a IndiaStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndiaStock we want to update
     *   }
     * })
     */
    upsert<T extends IndiaStockUpsertArgs>(args: SelectSubset<T, IndiaStockUpsertArgs<ExtArgs>>): Prisma__IndiaStockClient<$Result.GetResult<Prisma.$IndiaStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndiaStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockCountArgs} args - Arguments to filter IndiaStocks to count.
     * @example
     * // Count the number of IndiaStocks
     * const count = await prisma.indiaStock.count({
     *   where: {
     *     // ... the filter for the IndiaStocks we want to count
     *   }
     * })
    **/
    count<T extends IndiaStockCountArgs>(
      args?: Subset<T, IndiaStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndiaStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndiaStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndiaStockAggregateArgs>(args: Subset<T, IndiaStockAggregateArgs>): Prisma.PrismaPromise<GetIndiaStockAggregateType<T>>

    /**
     * Group by IndiaStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndiaStockGroupByArgs} args - Group by arguments.
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
      T extends IndiaStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndiaStockGroupByArgs['orderBy'] }
        : { orderBy?: IndiaStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndiaStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndiaStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndiaStock model
   */
  readonly fields: IndiaStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndiaStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndiaStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IndiaStock model
   */
  interface IndiaStockFieldRefs {
    readonly id: FieldRef<"IndiaStock", 'Int'>
    readonly symbol: FieldRef<"IndiaStock", 'String'>
    readonly name: FieldRef<"IndiaStock", 'String'>
    readonly prevClosePrice: FieldRef<"IndiaStock", 'Float'>
    readonly openPrice: FieldRef<"IndiaStock", 'Float'>
    readonly currentPrice: FieldRef<"IndiaStock", 'Float'>
    readonly listedAt: FieldRef<"IndiaStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndiaStock findUnique
   */
  export type IndiaStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter, which IndiaStock to fetch.
     */
    where: IndiaStockWhereUniqueInput
  }

  /**
   * IndiaStock findUniqueOrThrow
   */
  export type IndiaStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter, which IndiaStock to fetch.
     */
    where: IndiaStockWhereUniqueInput
  }

  /**
   * IndiaStock findFirst
   */
  export type IndiaStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter, which IndiaStock to fetch.
     */
    where?: IndiaStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndiaStocks to fetch.
     */
    orderBy?: IndiaStockOrderByWithRelationInput | IndiaStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndiaStocks.
     */
    cursor?: IndiaStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndiaStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndiaStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndiaStocks.
     */
    distinct?: IndiaStockScalarFieldEnum | IndiaStockScalarFieldEnum[]
  }

  /**
   * IndiaStock findFirstOrThrow
   */
  export type IndiaStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter, which IndiaStock to fetch.
     */
    where?: IndiaStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndiaStocks to fetch.
     */
    orderBy?: IndiaStockOrderByWithRelationInput | IndiaStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndiaStocks.
     */
    cursor?: IndiaStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndiaStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndiaStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndiaStocks.
     */
    distinct?: IndiaStockScalarFieldEnum | IndiaStockScalarFieldEnum[]
  }

  /**
   * IndiaStock findMany
   */
  export type IndiaStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter, which IndiaStocks to fetch.
     */
    where?: IndiaStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndiaStocks to fetch.
     */
    orderBy?: IndiaStockOrderByWithRelationInput | IndiaStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndiaStocks.
     */
    cursor?: IndiaStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndiaStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndiaStocks.
     */
    skip?: number
    distinct?: IndiaStockScalarFieldEnum | IndiaStockScalarFieldEnum[]
  }

  /**
   * IndiaStock create
   */
  export type IndiaStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * The data needed to create a IndiaStock.
     */
    data: XOR<IndiaStockCreateInput, IndiaStockUncheckedCreateInput>
  }

  /**
   * IndiaStock createMany
   */
  export type IndiaStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndiaStocks.
     */
    data: IndiaStockCreateManyInput | IndiaStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndiaStock createManyAndReturn
   */
  export type IndiaStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * The data used to create many IndiaStocks.
     */
    data: IndiaStockCreateManyInput | IndiaStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndiaStock update
   */
  export type IndiaStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * The data needed to update a IndiaStock.
     */
    data: XOR<IndiaStockUpdateInput, IndiaStockUncheckedUpdateInput>
    /**
     * Choose, which IndiaStock to update.
     */
    where: IndiaStockWhereUniqueInput
  }

  /**
   * IndiaStock updateMany
   */
  export type IndiaStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndiaStocks.
     */
    data: XOR<IndiaStockUpdateManyMutationInput, IndiaStockUncheckedUpdateManyInput>
    /**
     * Filter which IndiaStocks to update
     */
    where?: IndiaStockWhereInput
    /**
     * Limit how many IndiaStocks to update.
     */
    limit?: number
  }

  /**
   * IndiaStock updateManyAndReturn
   */
  export type IndiaStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * The data used to update IndiaStocks.
     */
    data: XOR<IndiaStockUpdateManyMutationInput, IndiaStockUncheckedUpdateManyInput>
    /**
     * Filter which IndiaStocks to update
     */
    where?: IndiaStockWhereInput
    /**
     * Limit how many IndiaStocks to update.
     */
    limit?: number
  }

  /**
   * IndiaStock upsert
   */
  export type IndiaStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * The filter to search for the IndiaStock to update in case it exists.
     */
    where: IndiaStockWhereUniqueInput
    /**
     * In case the IndiaStock found by the `where` argument doesn't exist, create a new IndiaStock with this data.
     */
    create: XOR<IndiaStockCreateInput, IndiaStockUncheckedCreateInput>
    /**
     * In case the IndiaStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndiaStockUpdateInput, IndiaStockUncheckedUpdateInput>
  }

  /**
   * IndiaStock delete
   */
  export type IndiaStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
    /**
     * Filter which IndiaStock to delete.
     */
    where: IndiaStockWhereUniqueInput
  }

  /**
   * IndiaStock deleteMany
   */
  export type IndiaStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndiaStocks to delete
     */
    where?: IndiaStockWhereInput
    /**
     * Limit how many IndiaStocks to delete.
     */
    limit?: number
  }

  /**
   * IndiaStock without action
   */
  export type IndiaStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndiaStock
     */
    select?: IndiaStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndiaStock
     */
    omit?: IndiaStockOmit<ExtArgs> | null
  }


  /**
   * Model USStock
   */

  export type AggregateUSStock = {
    _count: USStockCountAggregateOutputType | null
    _avg: USStockAvgAggregateOutputType | null
    _sum: USStockSumAggregateOutputType | null
    _min: USStockMinAggregateOutputType | null
    _max: USStockMaxAggregateOutputType | null
  }

  export type USStockAvgAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type USStockSumAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type USStockMinAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type USStockMaxAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type USStockCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: number
    _all: number
  }


  export type USStockAvgAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type USStockSumAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type USStockMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type USStockMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type USStockCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
    _all?: true
  }

  export type USStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USStock to aggregate.
     */
    where?: USStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USStocks to fetch.
     */
    orderBy?: USStockOrderByWithRelationInput | USStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USStocks
    **/
    _count?: true | USStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USStockMaxAggregateInputType
  }

  export type GetUSStockAggregateType<T extends USStockAggregateArgs> = {
        [P in keyof T & keyof AggregateUSStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSStock[P]>
      : GetScalarType<T[P], AggregateUSStock[P]>
  }




  export type USStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USStockWhereInput
    orderBy?: USStockOrderByWithAggregationInput | USStockOrderByWithAggregationInput[]
    by: USStockScalarFieldEnum[] | USStockScalarFieldEnum
    having?: USStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USStockCountAggregateInputType | true
    _avg?: USStockAvgAggregateInputType
    _sum?: USStockSumAggregateInputType
    _min?: USStockMinAggregateInputType
    _max?: USStockMaxAggregateInputType
  }

  export type USStockGroupByOutputType = {
    id: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: Date
    _count: USStockCountAggregateOutputType | null
    _avg: USStockAvgAggregateOutputType | null
    _sum: USStockSumAggregateOutputType | null
    _min: USStockMinAggregateOutputType | null
    _max: USStockMaxAggregateOutputType | null
  }

  type GetUSStockGroupByPayload<T extends USStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USStockGroupByOutputType[P]>
            : GetScalarType<T[P], USStockGroupByOutputType[P]>
        }
      >
    >


  export type USStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["uSStock"]>

  export type USStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["uSStock"]>

  export type USStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["uSStock"]>

  export type USStockSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }

  export type USStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "prevClosePrice" | "openPrice" | "currentPrice" | "listedAt", ExtArgs["result"]["uSStock"]>

  export type $USStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      symbol: string
      name: string
      prevClosePrice: number
      openPrice: number
      currentPrice: number
      listedAt: Date
    }, ExtArgs["result"]["uSStock"]>
    composites: {}
  }

  type USStockGetPayload<S extends boolean | null | undefined | USStockDefaultArgs> = $Result.GetResult<Prisma.$USStockPayload, S>

  type USStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USStockCountAggregateInputType | true
    }

  export interface USStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USStock'], meta: { name: 'USStock' } }
    /**
     * Find zero or one USStock that matches the filter.
     * @param {USStockFindUniqueArgs} args - Arguments to find a USStock
     * @example
     * // Get one USStock
     * const uSStock = await prisma.uSStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USStockFindUniqueArgs>(args: SelectSubset<T, USStockFindUniqueArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USStockFindUniqueOrThrowArgs} args - Arguments to find a USStock
     * @example
     * // Get one USStock
     * const uSStock = await prisma.uSStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USStockFindUniqueOrThrowArgs>(args: SelectSubset<T, USStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockFindFirstArgs} args - Arguments to find a USStock
     * @example
     * // Get one USStock
     * const uSStock = await prisma.uSStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USStockFindFirstArgs>(args?: SelectSubset<T, USStockFindFirstArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockFindFirstOrThrowArgs} args - Arguments to find a USStock
     * @example
     * // Get one USStock
     * const uSStock = await prisma.uSStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USStockFindFirstOrThrowArgs>(args?: SelectSubset<T, USStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USStocks
     * const uSStocks = await prisma.uSStock.findMany()
     * 
     * // Get first 10 USStocks
     * const uSStocks = await prisma.uSStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSStockWithIdOnly = await prisma.uSStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends USStockFindManyArgs>(args?: SelectSubset<T, USStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USStock.
     * @param {USStockCreateArgs} args - Arguments to create a USStock.
     * @example
     * // Create one USStock
     * const USStock = await prisma.uSStock.create({
     *   data: {
     *     // ... data to create a USStock
     *   }
     * })
     * 
     */
    create<T extends USStockCreateArgs>(args: SelectSubset<T, USStockCreateArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USStocks.
     * @param {USStockCreateManyArgs} args - Arguments to create many USStocks.
     * @example
     * // Create many USStocks
     * const uSStock = await prisma.uSStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USStockCreateManyArgs>(args?: SelectSubset<T, USStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many USStocks and returns the data saved in the database.
     * @param {USStockCreateManyAndReturnArgs} args - Arguments to create many USStocks.
     * @example
     * // Create many USStocks
     * const uSStock = await prisma.uSStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many USStocks and only return the `id`
     * const uSStockWithIdOnly = await prisma.uSStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends USStockCreateManyAndReturnArgs>(args?: SelectSubset<T, USStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a USStock.
     * @param {USStockDeleteArgs} args - Arguments to delete one USStock.
     * @example
     * // Delete one USStock
     * const USStock = await prisma.uSStock.delete({
     *   where: {
     *     // ... filter to delete one USStock
     *   }
     * })
     * 
     */
    delete<T extends USStockDeleteArgs>(args: SelectSubset<T, USStockDeleteArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USStock.
     * @param {USStockUpdateArgs} args - Arguments to update one USStock.
     * @example
     * // Update one USStock
     * const uSStock = await prisma.uSStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USStockUpdateArgs>(args: SelectSubset<T, USStockUpdateArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USStocks.
     * @param {USStockDeleteManyArgs} args - Arguments to filter USStocks to delete.
     * @example
     * // Delete a few USStocks
     * const { count } = await prisma.uSStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USStockDeleteManyArgs>(args?: SelectSubset<T, USStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USStocks
     * const uSStock = await prisma.uSStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USStockUpdateManyArgs>(args: SelectSubset<T, USStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USStocks and returns the data updated in the database.
     * @param {USStockUpdateManyAndReturnArgs} args - Arguments to update many USStocks.
     * @example
     * // Update many USStocks
     * const uSStock = await prisma.uSStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more USStocks and only return the `id`
     * const uSStockWithIdOnly = await prisma.uSStock.updateManyAndReturn({
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
    updateManyAndReturn<T extends USStockUpdateManyAndReturnArgs>(args: SelectSubset<T, USStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one USStock.
     * @param {USStockUpsertArgs} args - Arguments to update or create a USStock.
     * @example
     * // Update or create a USStock
     * const uSStock = await prisma.uSStock.upsert({
     *   create: {
     *     // ... data to create a USStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USStock we want to update
     *   }
     * })
     */
    upsert<T extends USStockUpsertArgs>(args: SelectSubset<T, USStockUpsertArgs<ExtArgs>>): Prisma__USStockClient<$Result.GetResult<Prisma.$USStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockCountArgs} args - Arguments to filter USStocks to count.
     * @example
     * // Count the number of USStocks
     * const count = await prisma.uSStock.count({
     *   where: {
     *     // ... the filter for the USStocks we want to count
     *   }
     * })
    **/
    count<T extends USStockCountArgs>(
      args?: Subset<T, USStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USStockAggregateArgs>(args: Subset<T, USStockAggregateArgs>): Prisma.PrismaPromise<GetUSStockAggregateType<T>>

    /**
     * Group by USStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USStockGroupByArgs} args - Group by arguments.
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
      T extends USStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USStockGroupByArgs['orderBy'] }
        : { orderBy?: USStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USStock model
   */
  readonly fields: USStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the USStock model
   */
  interface USStockFieldRefs {
    readonly id: FieldRef<"USStock", 'Int'>
    readonly symbol: FieldRef<"USStock", 'String'>
    readonly name: FieldRef<"USStock", 'String'>
    readonly prevClosePrice: FieldRef<"USStock", 'Float'>
    readonly openPrice: FieldRef<"USStock", 'Float'>
    readonly currentPrice: FieldRef<"USStock", 'Float'>
    readonly listedAt: FieldRef<"USStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * USStock findUnique
   */
  export type USStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter, which USStock to fetch.
     */
    where: USStockWhereUniqueInput
  }

  /**
   * USStock findUniqueOrThrow
   */
  export type USStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter, which USStock to fetch.
     */
    where: USStockWhereUniqueInput
  }

  /**
   * USStock findFirst
   */
  export type USStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter, which USStock to fetch.
     */
    where?: USStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USStocks to fetch.
     */
    orderBy?: USStockOrderByWithRelationInput | USStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USStocks.
     */
    cursor?: USStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USStocks.
     */
    distinct?: USStockScalarFieldEnum | USStockScalarFieldEnum[]
  }

  /**
   * USStock findFirstOrThrow
   */
  export type USStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter, which USStock to fetch.
     */
    where?: USStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USStocks to fetch.
     */
    orderBy?: USStockOrderByWithRelationInput | USStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USStocks.
     */
    cursor?: USStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USStocks.
     */
    distinct?: USStockScalarFieldEnum | USStockScalarFieldEnum[]
  }

  /**
   * USStock findMany
   */
  export type USStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter, which USStocks to fetch.
     */
    where?: USStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USStocks to fetch.
     */
    orderBy?: USStockOrderByWithRelationInput | USStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USStocks.
     */
    cursor?: USStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USStocks.
     */
    skip?: number
    distinct?: USStockScalarFieldEnum | USStockScalarFieldEnum[]
  }

  /**
   * USStock create
   */
  export type USStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * The data needed to create a USStock.
     */
    data: XOR<USStockCreateInput, USStockUncheckedCreateInput>
  }

  /**
   * USStock createMany
   */
  export type USStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USStocks.
     */
    data: USStockCreateManyInput | USStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USStock createManyAndReturn
   */
  export type USStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * The data used to create many USStocks.
     */
    data: USStockCreateManyInput | USStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USStock update
   */
  export type USStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * The data needed to update a USStock.
     */
    data: XOR<USStockUpdateInput, USStockUncheckedUpdateInput>
    /**
     * Choose, which USStock to update.
     */
    where: USStockWhereUniqueInput
  }

  /**
   * USStock updateMany
   */
  export type USStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USStocks.
     */
    data: XOR<USStockUpdateManyMutationInput, USStockUncheckedUpdateManyInput>
    /**
     * Filter which USStocks to update
     */
    where?: USStockWhereInput
    /**
     * Limit how many USStocks to update.
     */
    limit?: number
  }

  /**
   * USStock updateManyAndReturn
   */
  export type USStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * The data used to update USStocks.
     */
    data: XOR<USStockUpdateManyMutationInput, USStockUncheckedUpdateManyInput>
    /**
     * Filter which USStocks to update
     */
    where?: USStockWhereInput
    /**
     * Limit how many USStocks to update.
     */
    limit?: number
  }

  /**
   * USStock upsert
   */
  export type USStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * The filter to search for the USStock to update in case it exists.
     */
    where: USStockWhereUniqueInput
    /**
     * In case the USStock found by the `where` argument doesn't exist, create a new USStock with this data.
     */
    create: XOR<USStockCreateInput, USStockUncheckedCreateInput>
    /**
     * In case the USStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USStockUpdateInput, USStockUncheckedUpdateInput>
  }

  /**
   * USStock delete
   */
  export type USStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
    /**
     * Filter which USStock to delete.
     */
    where: USStockWhereUniqueInput
  }

  /**
   * USStock deleteMany
   */
  export type USStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USStocks to delete
     */
    where?: USStockWhereInput
    /**
     * Limit how many USStocks to delete.
     */
    limit?: number
  }

  /**
   * USStock without action
   */
  export type USStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USStock
     */
    select?: USStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USStock
     */
    omit?: USStockOmit<ExtArgs> | null
  }


  /**
   * Model CryptoAsset
   */

  export type AggregateCryptoAsset = {
    _count: CryptoAssetCountAggregateOutputType | null
    _avg: CryptoAssetAvgAggregateOutputType | null
    _sum: CryptoAssetSumAggregateOutputType | null
    _min: CryptoAssetMinAggregateOutputType | null
    _max: CryptoAssetMaxAggregateOutputType | null
  }

  export type CryptoAssetAvgAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type CryptoAssetSumAggregateOutputType = {
    id: number | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
  }

  export type CryptoAssetMinAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type CryptoAssetMaxAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    prevClosePrice: number | null
    openPrice: number | null
    currentPrice: number | null
    listedAt: Date | null
  }

  export type CryptoAssetCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: number
    _all: number
  }


  export type CryptoAssetAvgAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type CryptoAssetSumAggregateInputType = {
    id?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
  }

  export type CryptoAssetMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type CryptoAssetMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
  }

  export type CryptoAssetCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    prevClosePrice?: true
    openPrice?: true
    currentPrice?: true
    listedAt?: true
    _all?: true
  }

  export type CryptoAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoAsset to aggregate.
     */
    where?: CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoAssets to fetch.
     */
    orderBy?: CryptoAssetOrderByWithRelationInput | CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CryptoAssets
    **/
    _count?: true | CryptoAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptoAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptoAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptoAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptoAssetMaxAggregateInputType
  }

  export type GetCryptoAssetAggregateType<T extends CryptoAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptoAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptoAsset[P]>
      : GetScalarType<T[P], AggregateCryptoAsset[P]>
  }




  export type CryptoAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoAssetWhereInput
    orderBy?: CryptoAssetOrderByWithAggregationInput | CryptoAssetOrderByWithAggregationInput[]
    by: CryptoAssetScalarFieldEnum[] | CryptoAssetScalarFieldEnum
    having?: CryptoAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptoAssetCountAggregateInputType | true
    _avg?: CryptoAssetAvgAggregateInputType
    _sum?: CryptoAssetSumAggregateInputType
    _min?: CryptoAssetMinAggregateInputType
    _max?: CryptoAssetMaxAggregateInputType
  }

  export type CryptoAssetGroupByOutputType = {
    id: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt: Date
    _count: CryptoAssetCountAggregateOutputType | null
    _avg: CryptoAssetAvgAggregateOutputType | null
    _sum: CryptoAssetSumAggregateOutputType | null
    _min: CryptoAssetMinAggregateOutputType | null
    _max: CryptoAssetMaxAggregateOutputType | null
  }

  type GetCryptoAssetGroupByPayload<T extends CryptoAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptoAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptoAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptoAssetGroupByOutputType[P]>
            : GetScalarType<T[P], CryptoAssetGroupByOutputType[P]>
        }
      >
    >


  export type CryptoAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["cryptoAsset"]>

  export type CryptoAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["cryptoAsset"]>

  export type CryptoAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }, ExtArgs["result"]["cryptoAsset"]>

  export type CryptoAssetSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    prevClosePrice?: boolean
    openPrice?: boolean
    currentPrice?: boolean
    listedAt?: boolean
  }

  export type CryptoAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "prevClosePrice" | "openPrice" | "currentPrice" | "listedAt", ExtArgs["result"]["cryptoAsset"]>

  export type $CryptoAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CryptoAsset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      symbol: string
      name: string
      prevClosePrice: number
      openPrice: number
      currentPrice: number
      listedAt: Date
    }, ExtArgs["result"]["cryptoAsset"]>
    composites: {}
  }

  type CryptoAssetGetPayload<S extends boolean | null | undefined | CryptoAssetDefaultArgs> = $Result.GetResult<Prisma.$CryptoAssetPayload, S>

  type CryptoAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptoAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptoAssetCountAggregateInputType | true
    }

  export interface CryptoAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CryptoAsset'], meta: { name: 'CryptoAsset' } }
    /**
     * Find zero or one CryptoAsset that matches the filter.
     * @param {CryptoAssetFindUniqueArgs} args - Arguments to find a CryptoAsset
     * @example
     * // Get one CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptoAssetFindUniqueArgs>(args: SelectSubset<T, CryptoAssetFindUniqueArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CryptoAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptoAssetFindUniqueOrThrowArgs} args - Arguments to find a CryptoAsset
     * @example
     * // Get one CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptoAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptoAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetFindFirstArgs} args - Arguments to find a CryptoAsset
     * @example
     * // Get one CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptoAssetFindFirstArgs>(args?: SelectSubset<T, CryptoAssetFindFirstArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetFindFirstOrThrowArgs} args - Arguments to find a CryptoAsset
     * @example
     * // Get one CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptoAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptoAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CryptoAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CryptoAssets
     * const cryptoAssets = await prisma.cryptoAsset.findMany()
     * 
     * // Get first 10 CryptoAssets
     * const cryptoAssets = await prisma.cryptoAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptoAssetWithIdOnly = await prisma.cryptoAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CryptoAssetFindManyArgs>(args?: SelectSubset<T, CryptoAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CryptoAsset.
     * @param {CryptoAssetCreateArgs} args - Arguments to create a CryptoAsset.
     * @example
     * // Create one CryptoAsset
     * const CryptoAsset = await prisma.cryptoAsset.create({
     *   data: {
     *     // ... data to create a CryptoAsset
     *   }
     * })
     * 
     */
    create<T extends CryptoAssetCreateArgs>(args: SelectSubset<T, CryptoAssetCreateArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CryptoAssets.
     * @param {CryptoAssetCreateManyArgs} args - Arguments to create many CryptoAssets.
     * @example
     * // Create many CryptoAssets
     * const cryptoAsset = await prisma.cryptoAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptoAssetCreateManyArgs>(args?: SelectSubset<T, CryptoAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CryptoAssets and returns the data saved in the database.
     * @param {CryptoAssetCreateManyAndReturnArgs} args - Arguments to create many CryptoAssets.
     * @example
     * // Create many CryptoAssets
     * const cryptoAsset = await prisma.cryptoAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CryptoAssets and only return the `id`
     * const cryptoAssetWithIdOnly = await prisma.cryptoAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CryptoAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, CryptoAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CryptoAsset.
     * @param {CryptoAssetDeleteArgs} args - Arguments to delete one CryptoAsset.
     * @example
     * // Delete one CryptoAsset
     * const CryptoAsset = await prisma.cryptoAsset.delete({
     *   where: {
     *     // ... filter to delete one CryptoAsset
     *   }
     * })
     * 
     */
    delete<T extends CryptoAssetDeleteArgs>(args: SelectSubset<T, CryptoAssetDeleteArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CryptoAsset.
     * @param {CryptoAssetUpdateArgs} args - Arguments to update one CryptoAsset.
     * @example
     * // Update one CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptoAssetUpdateArgs>(args: SelectSubset<T, CryptoAssetUpdateArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CryptoAssets.
     * @param {CryptoAssetDeleteManyArgs} args - Arguments to filter CryptoAssets to delete.
     * @example
     * // Delete a few CryptoAssets
     * const { count } = await prisma.cryptoAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptoAssetDeleteManyArgs>(args?: SelectSubset<T, CryptoAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CryptoAssets
     * const cryptoAsset = await prisma.cryptoAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptoAssetUpdateManyArgs>(args: SelectSubset<T, CryptoAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoAssets and returns the data updated in the database.
     * @param {CryptoAssetUpdateManyAndReturnArgs} args - Arguments to update many CryptoAssets.
     * @example
     * // Update many CryptoAssets
     * const cryptoAsset = await prisma.cryptoAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CryptoAssets and only return the `id`
     * const cryptoAssetWithIdOnly = await prisma.cryptoAsset.updateManyAndReturn({
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
    updateManyAndReturn<T extends CryptoAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, CryptoAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CryptoAsset.
     * @param {CryptoAssetUpsertArgs} args - Arguments to update or create a CryptoAsset.
     * @example
     * // Update or create a CryptoAsset
     * const cryptoAsset = await prisma.cryptoAsset.upsert({
     *   create: {
     *     // ... data to create a CryptoAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CryptoAsset we want to update
     *   }
     * })
     */
    upsert<T extends CryptoAssetUpsertArgs>(args: SelectSubset<T, CryptoAssetUpsertArgs<ExtArgs>>): Prisma__CryptoAssetClient<$Result.GetResult<Prisma.$CryptoAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CryptoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetCountArgs} args - Arguments to filter CryptoAssets to count.
     * @example
     * // Count the number of CryptoAssets
     * const count = await prisma.cryptoAsset.count({
     *   where: {
     *     // ... the filter for the CryptoAssets we want to count
     *   }
     * })
    **/
    count<T extends CryptoAssetCountArgs>(
      args?: Subset<T, CryptoAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptoAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CryptoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CryptoAssetAggregateArgs>(args: Subset<T, CryptoAssetAggregateArgs>): Prisma.PrismaPromise<GetCryptoAssetAggregateType<T>>

    /**
     * Group by CryptoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAssetGroupByArgs} args - Group by arguments.
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
      T extends CryptoAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptoAssetGroupByArgs['orderBy'] }
        : { orderBy?: CryptoAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CryptoAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptoAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CryptoAsset model
   */
  readonly fields: CryptoAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CryptoAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptoAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CryptoAsset model
   */
  interface CryptoAssetFieldRefs {
    readonly id: FieldRef<"CryptoAsset", 'Int'>
    readonly symbol: FieldRef<"CryptoAsset", 'String'>
    readonly name: FieldRef<"CryptoAsset", 'String'>
    readonly prevClosePrice: FieldRef<"CryptoAsset", 'Float'>
    readonly openPrice: FieldRef<"CryptoAsset", 'Float'>
    readonly currentPrice: FieldRef<"CryptoAsset", 'Float'>
    readonly listedAt: FieldRef<"CryptoAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CryptoAsset findUnique
   */
  export type CryptoAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter, which CryptoAsset to fetch.
     */
    where: CryptoAssetWhereUniqueInput
  }

  /**
   * CryptoAsset findUniqueOrThrow
   */
  export type CryptoAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter, which CryptoAsset to fetch.
     */
    where: CryptoAssetWhereUniqueInput
  }

  /**
   * CryptoAsset findFirst
   */
  export type CryptoAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter, which CryptoAsset to fetch.
     */
    where?: CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoAssets to fetch.
     */
    orderBy?: CryptoAssetOrderByWithRelationInput | CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoAssets.
     */
    cursor?: CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoAssets.
     */
    distinct?: CryptoAssetScalarFieldEnum | CryptoAssetScalarFieldEnum[]
  }

  /**
   * CryptoAsset findFirstOrThrow
   */
  export type CryptoAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter, which CryptoAsset to fetch.
     */
    where?: CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoAssets to fetch.
     */
    orderBy?: CryptoAssetOrderByWithRelationInput | CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoAssets.
     */
    cursor?: CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoAssets.
     */
    distinct?: CryptoAssetScalarFieldEnum | CryptoAssetScalarFieldEnum[]
  }

  /**
   * CryptoAsset findMany
   */
  export type CryptoAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter, which CryptoAssets to fetch.
     */
    where?: CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoAssets to fetch.
     */
    orderBy?: CryptoAssetOrderByWithRelationInput | CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CryptoAssets.
     */
    cursor?: CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoAssets.
     */
    skip?: number
    distinct?: CryptoAssetScalarFieldEnum | CryptoAssetScalarFieldEnum[]
  }

  /**
   * CryptoAsset create
   */
  export type CryptoAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * The data needed to create a CryptoAsset.
     */
    data: XOR<CryptoAssetCreateInput, CryptoAssetUncheckedCreateInput>
  }

  /**
   * CryptoAsset createMany
   */
  export type CryptoAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CryptoAssets.
     */
    data: CryptoAssetCreateManyInput | CryptoAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CryptoAsset createManyAndReturn
   */
  export type CryptoAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * The data used to create many CryptoAssets.
     */
    data: CryptoAssetCreateManyInput | CryptoAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CryptoAsset update
   */
  export type CryptoAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * The data needed to update a CryptoAsset.
     */
    data: XOR<CryptoAssetUpdateInput, CryptoAssetUncheckedUpdateInput>
    /**
     * Choose, which CryptoAsset to update.
     */
    where: CryptoAssetWhereUniqueInput
  }

  /**
   * CryptoAsset updateMany
   */
  export type CryptoAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CryptoAssets.
     */
    data: XOR<CryptoAssetUpdateManyMutationInput, CryptoAssetUncheckedUpdateManyInput>
    /**
     * Filter which CryptoAssets to update
     */
    where?: CryptoAssetWhereInput
    /**
     * Limit how many CryptoAssets to update.
     */
    limit?: number
  }

  /**
   * CryptoAsset updateManyAndReturn
   */
  export type CryptoAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * The data used to update CryptoAssets.
     */
    data: XOR<CryptoAssetUpdateManyMutationInput, CryptoAssetUncheckedUpdateManyInput>
    /**
     * Filter which CryptoAssets to update
     */
    where?: CryptoAssetWhereInput
    /**
     * Limit how many CryptoAssets to update.
     */
    limit?: number
  }

  /**
   * CryptoAsset upsert
   */
  export type CryptoAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * The filter to search for the CryptoAsset to update in case it exists.
     */
    where: CryptoAssetWhereUniqueInput
    /**
     * In case the CryptoAsset found by the `where` argument doesn't exist, create a new CryptoAsset with this data.
     */
    create: XOR<CryptoAssetCreateInput, CryptoAssetUncheckedCreateInput>
    /**
     * In case the CryptoAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptoAssetUpdateInput, CryptoAssetUncheckedUpdateInput>
  }

  /**
   * CryptoAsset delete
   */
  export type CryptoAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
    /**
     * Filter which CryptoAsset to delete.
     */
    where: CryptoAssetWhereUniqueInput
  }

  /**
   * CryptoAsset deleteMany
   */
  export type CryptoAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoAssets to delete
     */
    where?: CryptoAssetWhereInput
    /**
     * Limit how many CryptoAssets to delete.
     */
    limit?: number
  }

  /**
   * CryptoAsset without action
   */
  export type CryptoAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoAsset
     */
    select?: CryptoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoAsset
     */
    omit?: CryptoAssetOmit<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    quantity: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
    userId: number | null
    quantity: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.PortfolioType | null
    stockSymbol: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.PortfolioType | null
    stockSymbol: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    stockSymbol: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
    userId?: true
    quantity?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
    userId?: true
    quantity?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "stockSymbol" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.PortfolioType
      stockSymbol: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
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
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
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
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'Int'>
    readonly userId: FieldRef<"Portfolio", 'Int'>
    readonly type: FieldRef<"Portfolio", 'PortfolioType'>
    readonly stockSymbol: FieldRef<"Portfolio", 'String'>
    readonly quantity: FieldRef<"Portfolio", 'Int'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WatchlistSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.WatchlistType | null
    stockSymbol: string | null
    createdAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.WatchlistType | null
    stockSymbol: string | null
    createdAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    stockSymbol: number
    createdAt: number
    _all: number
  }


  export type WatchlistAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WatchlistSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WatchlistMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    createdAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    createdAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    stockSymbol?: true
    createdAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _avg?: WatchlistAvgAggregateInputType
    _sum?: WatchlistSumAggregateInputType
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    stockSymbol?: boolean
    createdAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "stockSymbol" | "createdAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.WatchlistType
      stockSymbol: string
      createdAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'Int'>
    readonly userId: FieldRef<"Watchlist", 'Int'>
    readonly type: FieldRef<"Watchlist", 'WatchlistType'>
    readonly stockSymbol: FieldRef<"Watchlist", 'String'>
    readonly createdAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model PredictionRun
   */

  export type AggregatePredictionRun = {
    _count: PredictionRunCountAggregateOutputType | null
    _avg: PredictionRunAvgAggregateOutputType | null
    _sum: PredictionRunSumAggregateOutputType | null
    _min: PredictionRunMinAggregateOutputType | null
    _max: PredictionRunMaxAggregateOutputType | null
  }

  export type PredictionRunAvgAggregateOutputType = {
    userId: number | null
  }

  export type PredictionRunSumAggregateOutputType = {
    userId: number | null
  }

  export type PredictionRunMinAggregateOutputType = {
    id: string | null
    userId: number | null
    stockSymbol: string | null
    market: string | null
    runIdFromML: string | null
    status: $Enums.RunStatus | null
    requestedAt: Date | null
    completedAt: Date | null
    pdfReportUrl: string | null
    emailSentStatus: string | null
    mlServiceMessage: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionRunMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    stockSymbol: string | null
    market: string | null
    runIdFromML: string | null
    status: $Enums.RunStatus | null
    requestedAt: Date | null
    completedAt: Date | null
    pdfReportUrl: string | null
    emailSentStatus: string | null
    mlServiceMessage: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionRunCountAggregateOutputType = {
    id: number
    userId: number
    stockSymbol: number
    market: number
    runIdFromML: number
    status: number
    requestedAt: number
    completedAt: number
    lstmResultsJson: number
    gruResultsJson: number
    transformerResultsJson: number
    polynomialResultsJson: number
    tradingSuggestionJson: number
    aiAnalysisJson: number
    plotUrlsJson: number
    pdfReportUrl: number
    emailSentStatus: number
    mlServiceMessage: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredictionRunAvgAggregateInputType = {
    userId?: true
  }

  export type PredictionRunSumAggregateInputType = {
    userId?: true
  }

  export type PredictionRunMinAggregateInputType = {
    id?: true
    userId?: true
    stockSymbol?: true
    market?: true
    runIdFromML?: true
    status?: true
    requestedAt?: true
    completedAt?: true
    pdfReportUrl?: true
    emailSentStatus?: true
    mlServiceMessage?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionRunMaxAggregateInputType = {
    id?: true
    userId?: true
    stockSymbol?: true
    market?: true
    runIdFromML?: true
    status?: true
    requestedAt?: true
    completedAt?: true
    pdfReportUrl?: true
    emailSentStatus?: true
    mlServiceMessage?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionRunCountAggregateInputType = {
    id?: true
    userId?: true
    stockSymbol?: true
    market?: true
    runIdFromML?: true
    status?: true
    requestedAt?: true
    completedAt?: true
    lstmResultsJson?: true
    gruResultsJson?: true
    transformerResultsJson?: true
    polynomialResultsJson?: true
    tradingSuggestionJson?: true
    aiAnalysisJson?: true
    plotUrlsJson?: true
    pdfReportUrl?: true
    emailSentStatus?: true
    mlServiceMessage?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredictionRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionRun to aggregate.
     */
    where?: PredictionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionRuns to fetch.
     */
    orderBy?: PredictionRunOrderByWithRelationInput | PredictionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredictionRuns
    **/
    _count?: true | PredictionRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionRunMaxAggregateInputType
  }

  export type GetPredictionRunAggregateType<T extends PredictionRunAggregateArgs> = {
        [P in keyof T & keyof AggregatePredictionRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredictionRun[P]>
      : GetScalarType<T[P], AggregatePredictionRun[P]>
  }




  export type PredictionRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionRunWhereInput
    orderBy?: PredictionRunOrderByWithAggregationInput | PredictionRunOrderByWithAggregationInput[]
    by: PredictionRunScalarFieldEnum[] | PredictionRunScalarFieldEnum
    having?: PredictionRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionRunCountAggregateInputType | true
    _avg?: PredictionRunAvgAggregateInputType
    _sum?: PredictionRunSumAggregateInputType
    _min?: PredictionRunMinAggregateInputType
    _max?: PredictionRunMaxAggregateInputType
  }

  export type PredictionRunGroupByOutputType = {
    id: string
    userId: number | null
    stockSymbol: string
    market: string
    runIdFromML: string | null
    status: $Enums.RunStatus
    requestedAt: Date
    completedAt: Date | null
    lstmResultsJson: JsonValue | null
    gruResultsJson: JsonValue | null
    transformerResultsJson: JsonValue | null
    polynomialResultsJson: JsonValue | null
    tradingSuggestionJson: JsonValue | null
    aiAnalysisJson: JsonValue | null
    plotUrlsJson: JsonValue | null
    pdfReportUrl: string | null
    emailSentStatus: string | null
    mlServiceMessage: string | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: PredictionRunCountAggregateOutputType | null
    _avg: PredictionRunAvgAggregateOutputType | null
    _sum: PredictionRunSumAggregateOutputType | null
    _min: PredictionRunMinAggregateOutputType | null
    _max: PredictionRunMaxAggregateOutputType | null
  }

  type GetPredictionRunGroupByPayload<T extends PredictionRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionRunGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionRunGroupByOutputType[P]>
        }
      >
    >


  export type PredictionRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockSymbol?: boolean
    market?: boolean
    runIdFromML?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    lstmResultsJson?: boolean
    gruResultsJson?: boolean
    transformerResultsJson?: boolean
    polynomialResultsJson?: boolean
    tradingSuggestionJson?: boolean
    aiAnalysisJson?: boolean
    plotUrlsJson?: boolean
    pdfReportUrl?: boolean
    emailSentStatus?: boolean
    mlServiceMessage?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["predictionRun"]>

  export type PredictionRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockSymbol?: boolean
    market?: boolean
    runIdFromML?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    lstmResultsJson?: boolean
    gruResultsJson?: boolean
    transformerResultsJson?: boolean
    polynomialResultsJson?: boolean
    tradingSuggestionJson?: boolean
    aiAnalysisJson?: boolean
    plotUrlsJson?: boolean
    pdfReportUrl?: boolean
    emailSentStatus?: boolean
    mlServiceMessage?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["predictionRun"]>

  export type PredictionRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockSymbol?: boolean
    market?: boolean
    runIdFromML?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    lstmResultsJson?: boolean
    gruResultsJson?: boolean
    transformerResultsJson?: boolean
    polynomialResultsJson?: boolean
    tradingSuggestionJson?: boolean
    aiAnalysisJson?: boolean
    plotUrlsJson?: boolean
    pdfReportUrl?: boolean
    emailSentStatus?: boolean
    mlServiceMessage?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["predictionRun"]>

  export type PredictionRunSelectScalar = {
    id?: boolean
    userId?: boolean
    stockSymbol?: boolean
    market?: boolean
    runIdFromML?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    lstmResultsJson?: boolean
    gruResultsJson?: boolean
    transformerResultsJson?: boolean
    polynomialResultsJson?: boolean
    tradingSuggestionJson?: boolean
    aiAnalysisJson?: boolean
    plotUrlsJson?: boolean
    pdfReportUrl?: boolean
    emailSentStatus?: boolean
    mlServiceMessage?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredictionRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stockSymbol" | "market" | "runIdFromML" | "status" | "requestedAt" | "completedAt" | "lstmResultsJson" | "gruResultsJson" | "transformerResultsJson" | "polynomialResultsJson" | "tradingSuggestionJson" | "aiAnalysisJson" | "plotUrlsJson" | "pdfReportUrl" | "emailSentStatus" | "mlServiceMessage" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["predictionRun"]>
  export type PredictionRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }
  export type PredictionRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }
  export type PredictionRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PredictionRun$userArgs<ExtArgs>
  }

  export type $PredictionRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredictionRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number | null
      stockSymbol: string
      market: string
      runIdFromML: string | null
      status: $Enums.RunStatus
      requestedAt: Date
      completedAt: Date | null
      lstmResultsJson: Prisma.JsonValue | null
      gruResultsJson: Prisma.JsonValue | null
      transformerResultsJson: Prisma.JsonValue | null
      polynomialResultsJson: Prisma.JsonValue | null
      tradingSuggestionJson: Prisma.JsonValue | null
      aiAnalysisJson: Prisma.JsonValue | null
      plotUrlsJson: Prisma.JsonValue | null
      pdfReportUrl: string | null
      emailSentStatus: string | null
      mlServiceMessage: string | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["predictionRun"]>
    composites: {}
  }

  type PredictionRunGetPayload<S extends boolean | null | undefined | PredictionRunDefaultArgs> = $Result.GetResult<Prisma.$PredictionRunPayload, S>

  type PredictionRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionRunCountAggregateInputType | true
    }

  export interface PredictionRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredictionRun'], meta: { name: 'PredictionRun' } }
    /**
     * Find zero or one PredictionRun that matches the filter.
     * @param {PredictionRunFindUniqueArgs} args - Arguments to find a PredictionRun
     * @example
     * // Get one PredictionRun
     * const predictionRun = await prisma.predictionRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionRunFindUniqueArgs>(args: SelectSubset<T, PredictionRunFindUniqueArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredictionRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionRunFindUniqueOrThrowArgs} args - Arguments to find a PredictionRun
     * @example
     * // Get one PredictionRun
     * const predictionRun = await prisma.predictionRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionRunFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunFindFirstArgs} args - Arguments to find a PredictionRun
     * @example
     * // Get one PredictionRun
     * const predictionRun = await prisma.predictionRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionRunFindFirstArgs>(args?: SelectSubset<T, PredictionRunFindFirstArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunFindFirstOrThrowArgs} args - Arguments to find a PredictionRun
     * @example
     * // Get one PredictionRun
     * const predictionRun = await prisma.predictionRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionRunFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredictionRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredictionRuns
     * const predictionRuns = await prisma.predictionRun.findMany()
     * 
     * // Get first 10 PredictionRuns
     * const predictionRuns = await prisma.predictionRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionRunWithIdOnly = await prisma.predictionRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionRunFindManyArgs>(args?: SelectSubset<T, PredictionRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredictionRun.
     * @param {PredictionRunCreateArgs} args - Arguments to create a PredictionRun.
     * @example
     * // Create one PredictionRun
     * const PredictionRun = await prisma.predictionRun.create({
     *   data: {
     *     // ... data to create a PredictionRun
     *   }
     * })
     * 
     */
    create<T extends PredictionRunCreateArgs>(args: SelectSubset<T, PredictionRunCreateArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredictionRuns.
     * @param {PredictionRunCreateManyArgs} args - Arguments to create many PredictionRuns.
     * @example
     * // Create many PredictionRuns
     * const predictionRun = await prisma.predictionRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionRunCreateManyArgs>(args?: SelectSubset<T, PredictionRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredictionRuns and returns the data saved in the database.
     * @param {PredictionRunCreateManyAndReturnArgs} args - Arguments to create many PredictionRuns.
     * @example
     * // Create many PredictionRuns
     * const predictionRun = await prisma.predictionRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredictionRuns and only return the `id`
     * const predictionRunWithIdOnly = await prisma.predictionRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionRunCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredictionRun.
     * @param {PredictionRunDeleteArgs} args - Arguments to delete one PredictionRun.
     * @example
     * // Delete one PredictionRun
     * const PredictionRun = await prisma.predictionRun.delete({
     *   where: {
     *     // ... filter to delete one PredictionRun
     *   }
     * })
     * 
     */
    delete<T extends PredictionRunDeleteArgs>(args: SelectSubset<T, PredictionRunDeleteArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredictionRun.
     * @param {PredictionRunUpdateArgs} args - Arguments to update one PredictionRun.
     * @example
     * // Update one PredictionRun
     * const predictionRun = await prisma.predictionRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionRunUpdateArgs>(args: SelectSubset<T, PredictionRunUpdateArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredictionRuns.
     * @param {PredictionRunDeleteManyArgs} args - Arguments to filter PredictionRuns to delete.
     * @example
     * // Delete a few PredictionRuns
     * const { count } = await prisma.predictionRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionRunDeleteManyArgs>(args?: SelectSubset<T, PredictionRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredictionRuns
     * const predictionRun = await prisma.predictionRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionRunUpdateManyArgs>(args: SelectSubset<T, PredictionRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionRuns and returns the data updated in the database.
     * @param {PredictionRunUpdateManyAndReturnArgs} args - Arguments to update many PredictionRuns.
     * @example
     * // Update many PredictionRuns
     * const predictionRun = await prisma.predictionRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredictionRuns and only return the `id`
     * const predictionRunWithIdOnly = await prisma.predictionRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends PredictionRunUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredictionRun.
     * @param {PredictionRunUpsertArgs} args - Arguments to update or create a PredictionRun.
     * @example
     * // Update or create a PredictionRun
     * const predictionRun = await prisma.predictionRun.upsert({
     *   create: {
     *     // ... data to create a PredictionRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredictionRun we want to update
     *   }
     * })
     */
    upsert<T extends PredictionRunUpsertArgs>(args: SelectSubset<T, PredictionRunUpsertArgs<ExtArgs>>): Prisma__PredictionRunClient<$Result.GetResult<Prisma.$PredictionRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredictionRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunCountArgs} args - Arguments to filter PredictionRuns to count.
     * @example
     * // Count the number of PredictionRuns
     * const count = await prisma.predictionRun.count({
     *   where: {
     *     // ... the filter for the PredictionRuns we want to count
     *   }
     * })
    **/
    count<T extends PredictionRunCountArgs>(
      args?: Subset<T, PredictionRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredictionRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredictionRunAggregateArgs>(args: Subset<T, PredictionRunAggregateArgs>): Prisma.PrismaPromise<GetPredictionRunAggregateType<T>>

    /**
     * Group by PredictionRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionRunGroupByArgs} args - Group by arguments.
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
      T extends PredictionRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionRunGroupByArgs['orderBy'] }
        : { orderBy?: PredictionRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredictionRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredictionRun model
   */
  readonly fields: PredictionRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredictionRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PredictionRun$userArgs<ExtArgs> = {}>(args?: Subset<T, PredictionRun$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PredictionRun model
   */
  interface PredictionRunFieldRefs {
    readonly id: FieldRef<"PredictionRun", 'String'>
    readonly userId: FieldRef<"PredictionRun", 'Int'>
    readonly stockSymbol: FieldRef<"PredictionRun", 'String'>
    readonly market: FieldRef<"PredictionRun", 'String'>
    readonly runIdFromML: FieldRef<"PredictionRun", 'String'>
    readonly status: FieldRef<"PredictionRun", 'RunStatus'>
    readonly requestedAt: FieldRef<"PredictionRun", 'DateTime'>
    readonly completedAt: FieldRef<"PredictionRun", 'DateTime'>
    readonly lstmResultsJson: FieldRef<"PredictionRun", 'Json'>
    readonly gruResultsJson: FieldRef<"PredictionRun", 'Json'>
    readonly transformerResultsJson: FieldRef<"PredictionRun", 'Json'>
    readonly polynomialResultsJson: FieldRef<"PredictionRun", 'Json'>
    readonly tradingSuggestionJson: FieldRef<"PredictionRun", 'Json'>
    readonly aiAnalysisJson: FieldRef<"PredictionRun", 'Json'>
    readonly plotUrlsJson: FieldRef<"PredictionRun", 'Json'>
    readonly pdfReportUrl: FieldRef<"PredictionRun", 'String'>
    readonly emailSentStatus: FieldRef<"PredictionRun", 'String'>
    readonly mlServiceMessage: FieldRef<"PredictionRun", 'String'>
    readonly errorMessage: FieldRef<"PredictionRun", 'String'>
    readonly createdAt: FieldRef<"PredictionRun", 'DateTime'>
    readonly updatedAt: FieldRef<"PredictionRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredictionRun findUnique
   */
  export type PredictionRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter, which PredictionRun to fetch.
     */
    where: PredictionRunWhereUniqueInput
  }

  /**
   * PredictionRun findUniqueOrThrow
   */
  export type PredictionRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter, which PredictionRun to fetch.
     */
    where: PredictionRunWhereUniqueInput
  }

  /**
   * PredictionRun findFirst
   */
  export type PredictionRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter, which PredictionRun to fetch.
     */
    where?: PredictionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionRuns to fetch.
     */
    orderBy?: PredictionRunOrderByWithRelationInput | PredictionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionRuns.
     */
    cursor?: PredictionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionRuns.
     */
    distinct?: PredictionRunScalarFieldEnum | PredictionRunScalarFieldEnum[]
  }

  /**
   * PredictionRun findFirstOrThrow
   */
  export type PredictionRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter, which PredictionRun to fetch.
     */
    where?: PredictionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionRuns to fetch.
     */
    orderBy?: PredictionRunOrderByWithRelationInput | PredictionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionRuns.
     */
    cursor?: PredictionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionRuns.
     */
    distinct?: PredictionRunScalarFieldEnum | PredictionRunScalarFieldEnum[]
  }

  /**
   * PredictionRun findMany
   */
  export type PredictionRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter, which PredictionRuns to fetch.
     */
    where?: PredictionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionRuns to fetch.
     */
    orderBy?: PredictionRunOrderByWithRelationInput | PredictionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredictionRuns.
     */
    cursor?: PredictionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionRuns.
     */
    skip?: number
    distinct?: PredictionRunScalarFieldEnum | PredictionRunScalarFieldEnum[]
  }

  /**
   * PredictionRun create
   */
  export type PredictionRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * The data needed to create a PredictionRun.
     */
    data: XOR<PredictionRunCreateInput, PredictionRunUncheckedCreateInput>
  }

  /**
   * PredictionRun createMany
   */
  export type PredictionRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredictionRuns.
     */
    data: PredictionRunCreateManyInput | PredictionRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredictionRun createManyAndReturn
   */
  export type PredictionRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * The data used to create many PredictionRuns.
     */
    data: PredictionRunCreateManyInput | PredictionRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionRun update
   */
  export type PredictionRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * The data needed to update a PredictionRun.
     */
    data: XOR<PredictionRunUpdateInput, PredictionRunUncheckedUpdateInput>
    /**
     * Choose, which PredictionRun to update.
     */
    where: PredictionRunWhereUniqueInput
  }

  /**
   * PredictionRun updateMany
   */
  export type PredictionRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredictionRuns.
     */
    data: XOR<PredictionRunUpdateManyMutationInput, PredictionRunUncheckedUpdateManyInput>
    /**
     * Filter which PredictionRuns to update
     */
    where?: PredictionRunWhereInput
    /**
     * Limit how many PredictionRuns to update.
     */
    limit?: number
  }

  /**
   * PredictionRun updateManyAndReturn
   */
  export type PredictionRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * The data used to update PredictionRuns.
     */
    data: XOR<PredictionRunUpdateManyMutationInput, PredictionRunUncheckedUpdateManyInput>
    /**
     * Filter which PredictionRuns to update
     */
    where?: PredictionRunWhereInput
    /**
     * Limit how many PredictionRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionRun upsert
   */
  export type PredictionRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * The filter to search for the PredictionRun to update in case it exists.
     */
    where: PredictionRunWhereUniqueInput
    /**
     * In case the PredictionRun found by the `where` argument doesn't exist, create a new PredictionRun with this data.
     */
    create: XOR<PredictionRunCreateInput, PredictionRunUncheckedCreateInput>
    /**
     * In case the PredictionRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionRunUpdateInput, PredictionRunUncheckedUpdateInput>
  }

  /**
   * PredictionRun delete
   */
  export type PredictionRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
    /**
     * Filter which PredictionRun to delete.
     */
    where: PredictionRunWhereUniqueInput
  }

  /**
   * PredictionRun deleteMany
   */
  export type PredictionRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionRuns to delete
     */
    where?: PredictionRunWhereInput
    /**
     * Limit how many PredictionRuns to delete.
     */
    limit?: number
  }

  /**
   * PredictionRun.user
   */
  export type PredictionRun$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * PredictionRun without action
   */
  export type PredictionRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionRun
     */
    select?: PredictionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionRun
     */
    omit?: PredictionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionRunInclude<ExtArgs> | null
  }


  /**
   * Model LlmAnalysisRun
   */

  export type AggregateLlmAnalysisRun = {
    _count: LlmAnalysisRunCountAggregateOutputType | null
    _avg: LlmAnalysisRunAvgAggregateOutputType | null
    _sum: LlmAnalysisRunSumAggregateOutputType | null
    _min: LlmAnalysisRunMinAggregateOutputType | null
    _max: LlmAnalysisRunMaxAggregateOutputType | null
  }

  export type LlmAnalysisRunAvgAggregateOutputType = {
    userId: number | null
  }

  export type LlmAnalysisRunSumAggregateOutputType = {
    userId: number | null
  }

  export type LlmAnalysisRunMinAggregateOutputType = {
    id: string | null
    userId: number | null
    userQuery: string | null
    stockSymbol: string | null
    market: string | null
    requestedAt: Date | null
    status: $Enums.LlmRunStatus | null
    completedAt: Date | null
    errorMessage: string | null
    llmIdeaOutput: string | null
    llmReportOutput: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LlmAnalysisRunMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    userQuery: string | null
    stockSymbol: string | null
    market: string | null
    requestedAt: Date | null
    status: $Enums.LlmRunStatus | null
    completedAt: Date | null
    errorMessage: string | null
    llmIdeaOutput: string | null
    llmReportOutput: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LlmAnalysisRunCountAggregateOutputType = {
    id: number
    userId: number
    userQuery: number
    stockSymbol: number
    market: number
    requestedAt: number
    status: number
    completedAt: number
    errorMessage: number
    screenerDataSnapshot: number
    nseMarketDataSnapshot: number
    llmIdeaOutput: number
    llmReportOutput: number
    llmConclusionJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LlmAnalysisRunAvgAggregateInputType = {
    userId?: true
  }

  export type LlmAnalysisRunSumAggregateInputType = {
    userId?: true
  }

  export type LlmAnalysisRunMinAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    stockSymbol?: true
    market?: true
    requestedAt?: true
    status?: true
    completedAt?: true
    errorMessage?: true
    llmIdeaOutput?: true
    llmReportOutput?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LlmAnalysisRunMaxAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    stockSymbol?: true
    market?: true
    requestedAt?: true
    status?: true
    completedAt?: true
    errorMessage?: true
    llmIdeaOutput?: true
    llmReportOutput?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LlmAnalysisRunCountAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    stockSymbol?: true
    market?: true
    requestedAt?: true
    status?: true
    completedAt?: true
    errorMessage?: true
    screenerDataSnapshot?: true
    nseMarketDataSnapshot?: true
    llmIdeaOutput?: true
    llmReportOutput?: true
    llmConclusionJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LlmAnalysisRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmAnalysisRun to aggregate.
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmAnalysisRuns to fetch.
     */
    orderBy?: LlmAnalysisRunOrderByWithRelationInput | LlmAnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LlmAnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmAnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmAnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LlmAnalysisRuns
    **/
    _count?: true | LlmAnalysisRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LlmAnalysisRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LlmAnalysisRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LlmAnalysisRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LlmAnalysisRunMaxAggregateInputType
  }

  export type GetLlmAnalysisRunAggregateType<T extends LlmAnalysisRunAggregateArgs> = {
        [P in keyof T & keyof AggregateLlmAnalysisRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLlmAnalysisRun[P]>
      : GetScalarType<T[P], AggregateLlmAnalysisRun[P]>
  }




  export type LlmAnalysisRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmAnalysisRunWhereInput
    orderBy?: LlmAnalysisRunOrderByWithAggregationInput | LlmAnalysisRunOrderByWithAggregationInput[]
    by: LlmAnalysisRunScalarFieldEnum[] | LlmAnalysisRunScalarFieldEnum
    having?: LlmAnalysisRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LlmAnalysisRunCountAggregateInputType | true
    _avg?: LlmAnalysisRunAvgAggregateInputType
    _sum?: LlmAnalysisRunSumAggregateInputType
    _min?: LlmAnalysisRunMinAggregateInputType
    _max?: LlmAnalysisRunMaxAggregateInputType
  }

  export type LlmAnalysisRunGroupByOutputType = {
    id: string
    userId: number | null
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt: Date
    status: $Enums.LlmRunStatus
    completedAt: Date | null
    errorMessage: string | null
    screenerDataSnapshot: JsonValue | null
    nseMarketDataSnapshot: JsonValue | null
    llmIdeaOutput: string | null
    llmReportOutput: string | null
    llmConclusionJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: LlmAnalysisRunCountAggregateOutputType | null
    _avg: LlmAnalysisRunAvgAggregateOutputType | null
    _sum: LlmAnalysisRunSumAggregateOutputType | null
    _min: LlmAnalysisRunMinAggregateOutputType | null
    _max: LlmAnalysisRunMaxAggregateOutputType | null
  }

  type GetLlmAnalysisRunGroupByPayload<T extends LlmAnalysisRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LlmAnalysisRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LlmAnalysisRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LlmAnalysisRunGroupByOutputType[P]>
            : GetScalarType<T[P], LlmAnalysisRunGroupByOutputType[P]>
        }
      >
    >


  export type LlmAnalysisRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    stockSymbol?: boolean
    market?: boolean
    requestedAt?: boolean
    status?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    screenerDataSnapshot?: boolean
    nseMarketDataSnapshot?: boolean
    llmIdeaOutput?: boolean
    llmReportOutput?: boolean
    llmConclusionJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["llmAnalysisRun"]>

  export type LlmAnalysisRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    stockSymbol?: boolean
    market?: boolean
    requestedAt?: boolean
    status?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    screenerDataSnapshot?: boolean
    nseMarketDataSnapshot?: boolean
    llmIdeaOutput?: boolean
    llmReportOutput?: boolean
    llmConclusionJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["llmAnalysisRun"]>

  export type LlmAnalysisRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    stockSymbol?: boolean
    market?: boolean
    requestedAt?: boolean
    status?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    screenerDataSnapshot?: boolean
    nseMarketDataSnapshot?: boolean
    llmIdeaOutput?: boolean
    llmReportOutput?: boolean
    llmConclusionJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["llmAnalysisRun"]>

  export type LlmAnalysisRunSelectScalar = {
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    stockSymbol?: boolean
    market?: boolean
    requestedAt?: boolean
    status?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    screenerDataSnapshot?: boolean
    nseMarketDataSnapshot?: boolean
    llmIdeaOutput?: boolean
    llmReportOutput?: boolean
    llmConclusionJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LlmAnalysisRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userQuery" | "stockSymbol" | "market" | "requestedAt" | "status" | "completedAt" | "errorMessage" | "screenerDataSnapshot" | "nseMarketDataSnapshot" | "llmIdeaOutput" | "llmReportOutput" | "llmConclusionJson" | "createdAt" | "updatedAt", ExtArgs["result"]["llmAnalysisRun"]>
  export type LlmAnalysisRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }
  export type LlmAnalysisRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }
  export type LlmAnalysisRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LlmAnalysisRun$userArgs<ExtArgs>
  }

  export type $LlmAnalysisRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LlmAnalysisRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number | null
      userQuery: string
      stockSymbol: string
      market: string
      requestedAt: Date
      status: $Enums.LlmRunStatus
      completedAt: Date | null
      errorMessage: string | null
      screenerDataSnapshot: Prisma.JsonValue | null
      nseMarketDataSnapshot: Prisma.JsonValue | null
      llmIdeaOutput: string | null
      llmReportOutput: string | null
      llmConclusionJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["llmAnalysisRun"]>
    composites: {}
  }

  type LlmAnalysisRunGetPayload<S extends boolean | null | undefined | LlmAnalysisRunDefaultArgs> = $Result.GetResult<Prisma.$LlmAnalysisRunPayload, S>

  type LlmAnalysisRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LlmAnalysisRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LlmAnalysisRunCountAggregateInputType | true
    }

  export interface LlmAnalysisRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LlmAnalysisRun'], meta: { name: 'LlmAnalysisRun' } }
    /**
     * Find zero or one LlmAnalysisRun that matches the filter.
     * @param {LlmAnalysisRunFindUniqueArgs} args - Arguments to find a LlmAnalysisRun
     * @example
     * // Get one LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LlmAnalysisRunFindUniqueArgs>(args: SelectSubset<T, LlmAnalysisRunFindUniqueArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LlmAnalysisRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LlmAnalysisRunFindUniqueOrThrowArgs} args - Arguments to find a LlmAnalysisRun
     * @example
     * // Get one LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LlmAnalysisRunFindUniqueOrThrowArgs>(args: SelectSubset<T, LlmAnalysisRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LlmAnalysisRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunFindFirstArgs} args - Arguments to find a LlmAnalysisRun
     * @example
     * // Get one LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LlmAnalysisRunFindFirstArgs>(args?: SelectSubset<T, LlmAnalysisRunFindFirstArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LlmAnalysisRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunFindFirstOrThrowArgs} args - Arguments to find a LlmAnalysisRun
     * @example
     * // Get one LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LlmAnalysisRunFindFirstOrThrowArgs>(args?: SelectSubset<T, LlmAnalysisRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LlmAnalysisRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LlmAnalysisRuns
     * const llmAnalysisRuns = await prisma.llmAnalysisRun.findMany()
     * 
     * // Get first 10 LlmAnalysisRuns
     * const llmAnalysisRuns = await prisma.llmAnalysisRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const llmAnalysisRunWithIdOnly = await prisma.llmAnalysisRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LlmAnalysisRunFindManyArgs>(args?: SelectSubset<T, LlmAnalysisRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LlmAnalysisRun.
     * @param {LlmAnalysisRunCreateArgs} args - Arguments to create a LlmAnalysisRun.
     * @example
     * // Create one LlmAnalysisRun
     * const LlmAnalysisRun = await prisma.llmAnalysisRun.create({
     *   data: {
     *     // ... data to create a LlmAnalysisRun
     *   }
     * })
     * 
     */
    create<T extends LlmAnalysisRunCreateArgs>(args: SelectSubset<T, LlmAnalysisRunCreateArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LlmAnalysisRuns.
     * @param {LlmAnalysisRunCreateManyArgs} args - Arguments to create many LlmAnalysisRuns.
     * @example
     * // Create many LlmAnalysisRuns
     * const llmAnalysisRun = await prisma.llmAnalysisRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LlmAnalysisRunCreateManyArgs>(args?: SelectSubset<T, LlmAnalysisRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LlmAnalysisRuns and returns the data saved in the database.
     * @param {LlmAnalysisRunCreateManyAndReturnArgs} args - Arguments to create many LlmAnalysisRuns.
     * @example
     * // Create many LlmAnalysisRuns
     * const llmAnalysisRun = await prisma.llmAnalysisRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LlmAnalysisRuns and only return the `id`
     * const llmAnalysisRunWithIdOnly = await prisma.llmAnalysisRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LlmAnalysisRunCreateManyAndReturnArgs>(args?: SelectSubset<T, LlmAnalysisRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LlmAnalysisRun.
     * @param {LlmAnalysisRunDeleteArgs} args - Arguments to delete one LlmAnalysisRun.
     * @example
     * // Delete one LlmAnalysisRun
     * const LlmAnalysisRun = await prisma.llmAnalysisRun.delete({
     *   where: {
     *     // ... filter to delete one LlmAnalysisRun
     *   }
     * })
     * 
     */
    delete<T extends LlmAnalysisRunDeleteArgs>(args: SelectSubset<T, LlmAnalysisRunDeleteArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LlmAnalysisRun.
     * @param {LlmAnalysisRunUpdateArgs} args - Arguments to update one LlmAnalysisRun.
     * @example
     * // Update one LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LlmAnalysisRunUpdateArgs>(args: SelectSubset<T, LlmAnalysisRunUpdateArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LlmAnalysisRuns.
     * @param {LlmAnalysisRunDeleteManyArgs} args - Arguments to filter LlmAnalysisRuns to delete.
     * @example
     * // Delete a few LlmAnalysisRuns
     * const { count } = await prisma.llmAnalysisRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LlmAnalysisRunDeleteManyArgs>(args?: SelectSubset<T, LlmAnalysisRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LlmAnalysisRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LlmAnalysisRuns
     * const llmAnalysisRun = await prisma.llmAnalysisRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LlmAnalysisRunUpdateManyArgs>(args: SelectSubset<T, LlmAnalysisRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LlmAnalysisRuns and returns the data updated in the database.
     * @param {LlmAnalysisRunUpdateManyAndReturnArgs} args - Arguments to update many LlmAnalysisRuns.
     * @example
     * // Update many LlmAnalysisRuns
     * const llmAnalysisRun = await prisma.llmAnalysisRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LlmAnalysisRuns and only return the `id`
     * const llmAnalysisRunWithIdOnly = await prisma.llmAnalysisRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends LlmAnalysisRunUpdateManyAndReturnArgs>(args: SelectSubset<T, LlmAnalysisRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LlmAnalysisRun.
     * @param {LlmAnalysisRunUpsertArgs} args - Arguments to update or create a LlmAnalysisRun.
     * @example
     * // Update or create a LlmAnalysisRun
     * const llmAnalysisRun = await prisma.llmAnalysisRun.upsert({
     *   create: {
     *     // ... data to create a LlmAnalysisRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LlmAnalysisRun we want to update
     *   }
     * })
     */
    upsert<T extends LlmAnalysisRunUpsertArgs>(args: SelectSubset<T, LlmAnalysisRunUpsertArgs<ExtArgs>>): Prisma__LlmAnalysisRunClient<$Result.GetResult<Prisma.$LlmAnalysisRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LlmAnalysisRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunCountArgs} args - Arguments to filter LlmAnalysisRuns to count.
     * @example
     * // Count the number of LlmAnalysisRuns
     * const count = await prisma.llmAnalysisRun.count({
     *   where: {
     *     // ... the filter for the LlmAnalysisRuns we want to count
     *   }
     * })
    **/
    count<T extends LlmAnalysisRunCountArgs>(
      args?: Subset<T, LlmAnalysisRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LlmAnalysisRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LlmAnalysisRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LlmAnalysisRunAggregateArgs>(args: Subset<T, LlmAnalysisRunAggregateArgs>): Prisma.PrismaPromise<GetLlmAnalysisRunAggregateType<T>>

    /**
     * Group by LlmAnalysisRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmAnalysisRunGroupByArgs} args - Group by arguments.
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
      T extends LlmAnalysisRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LlmAnalysisRunGroupByArgs['orderBy'] }
        : { orderBy?: LlmAnalysisRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LlmAnalysisRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLlmAnalysisRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LlmAnalysisRun model
   */
  readonly fields: LlmAnalysisRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LlmAnalysisRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LlmAnalysisRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LlmAnalysisRun$userArgs<ExtArgs> = {}>(args?: Subset<T, LlmAnalysisRun$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LlmAnalysisRun model
   */
  interface LlmAnalysisRunFieldRefs {
    readonly id: FieldRef<"LlmAnalysisRun", 'String'>
    readonly userId: FieldRef<"LlmAnalysisRun", 'Int'>
    readonly userQuery: FieldRef<"LlmAnalysisRun", 'String'>
    readonly stockSymbol: FieldRef<"LlmAnalysisRun", 'String'>
    readonly market: FieldRef<"LlmAnalysisRun", 'String'>
    readonly requestedAt: FieldRef<"LlmAnalysisRun", 'DateTime'>
    readonly status: FieldRef<"LlmAnalysisRun", 'LlmRunStatus'>
    readonly completedAt: FieldRef<"LlmAnalysisRun", 'DateTime'>
    readonly errorMessage: FieldRef<"LlmAnalysisRun", 'String'>
    readonly screenerDataSnapshot: FieldRef<"LlmAnalysisRun", 'Json'>
    readonly nseMarketDataSnapshot: FieldRef<"LlmAnalysisRun", 'Json'>
    readonly llmIdeaOutput: FieldRef<"LlmAnalysisRun", 'String'>
    readonly llmReportOutput: FieldRef<"LlmAnalysisRun", 'String'>
    readonly llmConclusionJson: FieldRef<"LlmAnalysisRun", 'Json'>
    readonly createdAt: FieldRef<"LlmAnalysisRun", 'DateTime'>
    readonly updatedAt: FieldRef<"LlmAnalysisRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LlmAnalysisRun findUnique
   */
  export type LlmAnalysisRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which LlmAnalysisRun to fetch.
     */
    where: LlmAnalysisRunWhereUniqueInput
  }

  /**
   * LlmAnalysisRun findUniqueOrThrow
   */
  export type LlmAnalysisRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which LlmAnalysisRun to fetch.
     */
    where: LlmAnalysisRunWhereUniqueInput
  }

  /**
   * LlmAnalysisRun findFirst
   */
  export type LlmAnalysisRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which LlmAnalysisRun to fetch.
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmAnalysisRuns to fetch.
     */
    orderBy?: LlmAnalysisRunOrderByWithRelationInput | LlmAnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmAnalysisRuns.
     */
    cursor?: LlmAnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmAnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmAnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmAnalysisRuns.
     */
    distinct?: LlmAnalysisRunScalarFieldEnum | LlmAnalysisRunScalarFieldEnum[]
  }

  /**
   * LlmAnalysisRun findFirstOrThrow
   */
  export type LlmAnalysisRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which LlmAnalysisRun to fetch.
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmAnalysisRuns to fetch.
     */
    orderBy?: LlmAnalysisRunOrderByWithRelationInput | LlmAnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmAnalysisRuns.
     */
    cursor?: LlmAnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmAnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmAnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmAnalysisRuns.
     */
    distinct?: LlmAnalysisRunScalarFieldEnum | LlmAnalysisRunScalarFieldEnum[]
  }

  /**
   * LlmAnalysisRun findMany
   */
  export type LlmAnalysisRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which LlmAnalysisRuns to fetch.
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmAnalysisRuns to fetch.
     */
    orderBy?: LlmAnalysisRunOrderByWithRelationInput | LlmAnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LlmAnalysisRuns.
     */
    cursor?: LlmAnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmAnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmAnalysisRuns.
     */
    skip?: number
    distinct?: LlmAnalysisRunScalarFieldEnum | LlmAnalysisRunScalarFieldEnum[]
  }

  /**
   * LlmAnalysisRun create
   */
  export type LlmAnalysisRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * The data needed to create a LlmAnalysisRun.
     */
    data: XOR<LlmAnalysisRunCreateInput, LlmAnalysisRunUncheckedCreateInput>
  }

  /**
   * LlmAnalysisRun createMany
   */
  export type LlmAnalysisRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LlmAnalysisRuns.
     */
    data: LlmAnalysisRunCreateManyInput | LlmAnalysisRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LlmAnalysisRun createManyAndReturn
   */
  export type LlmAnalysisRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * The data used to create many LlmAnalysisRuns.
     */
    data: LlmAnalysisRunCreateManyInput | LlmAnalysisRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LlmAnalysisRun update
   */
  export type LlmAnalysisRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * The data needed to update a LlmAnalysisRun.
     */
    data: XOR<LlmAnalysisRunUpdateInput, LlmAnalysisRunUncheckedUpdateInput>
    /**
     * Choose, which LlmAnalysisRun to update.
     */
    where: LlmAnalysisRunWhereUniqueInput
  }

  /**
   * LlmAnalysisRun updateMany
   */
  export type LlmAnalysisRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LlmAnalysisRuns.
     */
    data: XOR<LlmAnalysisRunUpdateManyMutationInput, LlmAnalysisRunUncheckedUpdateManyInput>
    /**
     * Filter which LlmAnalysisRuns to update
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * Limit how many LlmAnalysisRuns to update.
     */
    limit?: number
  }

  /**
   * LlmAnalysisRun updateManyAndReturn
   */
  export type LlmAnalysisRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * The data used to update LlmAnalysisRuns.
     */
    data: XOR<LlmAnalysisRunUpdateManyMutationInput, LlmAnalysisRunUncheckedUpdateManyInput>
    /**
     * Filter which LlmAnalysisRuns to update
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * Limit how many LlmAnalysisRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LlmAnalysisRun upsert
   */
  export type LlmAnalysisRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * The filter to search for the LlmAnalysisRun to update in case it exists.
     */
    where: LlmAnalysisRunWhereUniqueInput
    /**
     * In case the LlmAnalysisRun found by the `where` argument doesn't exist, create a new LlmAnalysisRun with this data.
     */
    create: XOR<LlmAnalysisRunCreateInput, LlmAnalysisRunUncheckedCreateInput>
    /**
     * In case the LlmAnalysisRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LlmAnalysisRunUpdateInput, LlmAnalysisRunUncheckedUpdateInput>
  }

  /**
   * LlmAnalysisRun delete
   */
  export type LlmAnalysisRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
    /**
     * Filter which LlmAnalysisRun to delete.
     */
    where: LlmAnalysisRunWhereUniqueInput
  }

  /**
   * LlmAnalysisRun deleteMany
   */
  export type LlmAnalysisRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmAnalysisRuns to delete
     */
    where?: LlmAnalysisRunWhereInput
    /**
     * Limit how many LlmAnalysisRuns to delete.
     */
    limit?: number
  }

  /**
   * LlmAnalysisRun.user
   */
  export type LlmAnalysisRun$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * LlmAnalysisRun without action
   */
  export type LlmAnalysisRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmAnalysisRun
     */
    select?: LlmAnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmAnalysisRun
     */
    omit?: LlmAnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmAnalysisRunInclude<ExtArgs> | null
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
    authMethod: 'authMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZerodhaAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clientId: 'clientId',
    accessToken: 'accessToken',
    isLinked: 'isLinked',
    linkedAt: 'linkedAt'
  };

  export type ZerodhaAccountScalarFieldEnum = (typeof ZerodhaAccountScalarFieldEnum)[keyof typeof ZerodhaAccountScalarFieldEnum]


  export const UpstoxAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clientId: 'clientId',
    accessToken: 'accessToken',
    isLinked: 'isLinked',
    linkedAt: 'linkedAt'
  };

  export type UpstoxAccountScalarFieldEnum = (typeof UpstoxAccountScalarFieldEnum)[keyof typeof UpstoxAccountScalarFieldEnum]


  export const IndiaStockScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    prevClosePrice: 'prevClosePrice',
    openPrice: 'openPrice',
    currentPrice: 'currentPrice',
    listedAt: 'listedAt'
  };

  export type IndiaStockScalarFieldEnum = (typeof IndiaStockScalarFieldEnum)[keyof typeof IndiaStockScalarFieldEnum]


  export const USStockScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    prevClosePrice: 'prevClosePrice',
    openPrice: 'openPrice',
    currentPrice: 'currentPrice',
    listedAt: 'listedAt'
  };

  export type USStockScalarFieldEnum = (typeof USStockScalarFieldEnum)[keyof typeof USStockScalarFieldEnum]


  export const CryptoAssetScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    prevClosePrice: 'prevClosePrice',
    openPrice: 'openPrice',
    currentPrice: 'currentPrice',
    listedAt: 'listedAt'
  };

  export type CryptoAssetScalarFieldEnum = (typeof CryptoAssetScalarFieldEnum)[keyof typeof CryptoAssetScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    stockSymbol: 'stockSymbol',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    stockSymbol: 'stockSymbol',
    createdAt: 'createdAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const PredictionRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stockSymbol: 'stockSymbol',
    market: 'market',
    runIdFromML: 'runIdFromML',
    status: 'status',
    requestedAt: 'requestedAt',
    completedAt: 'completedAt',
    lstmResultsJson: 'lstmResultsJson',
    gruResultsJson: 'gruResultsJson',
    transformerResultsJson: 'transformerResultsJson',
    polynomialResultsJson: 'polynomialResultsJson',
    tradingSuggestionJson: 'tradingSuggestionJson',
    aiAnalysisJson: 'aiAnalysisJson',
    plotUrlsJson: 'plotUrlsJson',
    pdfReportUrl: 'pdfReportUrl',
    emailSentStatus: 'emailSentStatus',
    mlServiceMessage: 'mlServiceMessage',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredictionRunScalarFieldEnum = (typeof PredictionRunScalarFieldEnum)[keyof typeof PredictionRunScalarFieldEnum]


  export const LlmAnalysisRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userQuery: 'userQuery',
    stockSymbol: 'stockSymbol',
    market: 'market',
    requestedAt: 'requestedAt',
    status: 'status',
    completedAt: 'completedAt',
    errorMessage: 'errorMessage',
    screenerDataSnapshot: 'screenerDataSnapshot',
    nseMarketDataSnapshot: 'nseMarketDataSnapshot',
    llmIdeaOutput: 'llmIdeaOutput',
    llmReportOutput: 'llmReportOutput',
    llmConclusionJson: 'llmConclusionJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LlmAnalysisRunScalarFieldEnum = (typeof LlmAnalysisRunScalarFieldEnum)[keyof typeof LlmAnalysisRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'AuthMethod'
   */
  export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>
    


  /**
   * Reference to a field of type 'AuthMethod[]'
   */
  export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PortfolioType'
   */
  export type EnumPortfolioTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioType'>
    


  /**
   * Reference to a field of type 'PortfolioType[]'
   */
  export type ListEnumPortfolioTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioType[]'>
    


  /**
   * Reference to a field of type 'WatchlistType'
   */
  export type EnumWatchlistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistType'>
    


  /**
   * Reference to a field of type 'WatchlistType[]'
   */
  export type ListEnumWatchlistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistType[]'>
    


  /**
   * Reference to a field of type 'RunStatus'
   */
  export type EnumRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RunStatus'>
    


  /**
   * Reference to a field of type 'RunStatus[]'
   */
  export type ListEnumRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RunStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LlmRunStatus'
   */
  export type EnumLlmRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LlmRunStatus'>
    


  /**
   * Reference to a field of type 'LlmRunStatus[]'
   */
  export type ListEnumLlmRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LlmRunStatus[]'>
    
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
    password?: StringNullableFilter<"User"> | string | null
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    portfolios?: PortfolioListRelationFilter
    watchlists?: WatchlistListRelationFilter
    zerodhaAccount?: XOR<ZerodhaAccountNullableScalarRelationFilter, ZerodhaAccountWhereInput> | null
    upstoxAccount?: XOR<UpstoxAccountNullableScalarRelationFilter, UpstoxAccountWhereInput> | null
    predictionRuns?: PredictionRunListRelationFilter
    llmAnalysisRuns?: LlmAnalysisRunListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolios?: PortfolioOrderByRelationAggregateInput
    watchlists?: WatchlistOrderByRelationAggregateInput
    zerodhaAccount?: ZerodhaAccountOrderByWithRelationInput
    upstoxAccount?: UpstoxAccountOrderByWithRelationInput
    predictionRuns?: PredictionRunOrderByRelationAggregateInput
    llmAnalysisRuns?: LlmAnalysisRunOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    portfolios?: PortfolioListRelationFilter
    watchlists?: WatchlistListRelationFilter
    zerodhaAccount?: XOR<ZerodhaAccountNullableScalarRelationFilter, ZerodhaAccountWhereInput> | null
    upstoxAccount?: XOR<UpstoxAccountNullableScalarRelationFilter, UpstoxAccountWhereInput> | null
    predictionRuns?: PredictionRunListRelationFilter
    llmAnalysisRuns?: LlmAnalysisRunListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    authMethod?: EnumAuthMethodWithAggregatesFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ZerodhaAccountWhereInput = {
    AND?: ZerodhaAccountWhereInput | ZerodhaAccountWhereInput[]
    OR?: ZerodhaAccountWhereInput[]
    NOT?: ZerodhaAccountWhereInput | ZerodhaAccountWhereInput[]
    id?: IntFilter<"ZerodhaAccount"> | number
    userId?: IntFilter<"ZerodhaAccount"> | number
    clientId?: StringFilter<"ZerodhaAccount"> | string
    accessToken?: StringFilter<"ZerodhaAccount"> | string
    isLinked?: BoolFilter<"ZerodhaAccount"> | boolean
    linkedAt?: DateTimeFilter<"ZerodhaAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ZerodhaAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ZerodhaAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ZerodhaAccountWhereInput | ZerodhaAccountWhereInput[]
    OR?: ZerodhaAccountWhereInput[]
    NOT?: ZerodhaAccountWhereInput | ZerodhaAccountWhereInput[]
    clientId?: StringFilter<"ZerodhaAccount"> | string
    accessToken?: StringFilter<"ZerodhaAccount"> | string
    isLinked?: BoolFilter<"ZerodhaAccount"> | boolean
    linkedAt?: DateTimeFilter<"ZerodhaAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ZerodhaAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
    _count?: ZerodhaAccountCountOrderByAggregateInput
    _avg?: ZerodhaAccountAvgOrderByAggregateInput
    _max?: ZerodhaAccountMaxOrderByAggregateInput
    _min?: ZerodhaAccountMinOrderByAggregateInput
    _sum?: ZerodhaAccountSumOrderByAggregateInput
  }

  export type ZerodhaAccountScalarWhereWithAggregatesInput = {
    AND?: ZerodhaAccountScalarWhereWithAggregatesInput | ZerodhaAccountScalarWhereWithAggregatesInput[]
    OR?: ZerodhaAccountScalarWhereWithAggregatesInput[]
    NOT?: ZerodhaAccountScalarWhereWithAggregatesInput | ZerodhaAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ZerodhaAccount"> | number
    userId?: IntWithAggregatesFilter<"ZerodhaAccount"> | number
    clientId?: StringWithAggregatesFilter<"ZerodhaAccount"> | string
    accessToken?: StringWithAggregatesFilter<"ZerodhaAccount"> | string
    isLinked?: BoolWithAggregatesFilter<"ZerodhaAccount"> | boolean
    linkedAt?: DateTimeWithAggregatesFilter<"ZerodhaAccount"> | Date | string
  }

  export type UpstoxAccountWhereInput = {
    AND?: UpstoxAccountWhereInput | UpstoxAccountWhereInput[]
    OR?: UpstoxAccountWhereInput[]
    NOT?: UpstoxAccountWhereInput | UpstoxAccountWhereInput[]
    id?: IntFilter<"UpstoxAccount"> | number
    userId?: IntFilter<"UpstoxAccount"> | number
    clientId?: StringFilter<"UpstoxAccount"> | string
    accessToken?: StringFilter<"UpstoxAccount"> | string
    isLinked?: BoolFilter<"UpstoxAccount"> | boolean
    linkedAt?: DateTimeFilter<"UpstoxAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UpstoxAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UpstoxAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UpstoxAccountWhereInput | UpstoxAccountWhereInput[]
    OR?: UpstoxAccountWhereInput[]
    NOT?: UpstoxAccountWhereInput | UpstoxAccountWhereInput[]
    clientId?: StringFilter<"UpstoxAccount"> | string
    accessToken?: StringFilter<"UpstoxAccount"> | string
    isLinked?: BoolFilter<"UpstoxAccount"> | boolean
    linkedAt?: DateTimeFilter<"UpstoxAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UpstoxAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
    _count?: UpstoxAccountCountOrderByAggregateInput
    _avg?: UpstoxAccountAvgOrderByAggregateInput
    _max?: UpstoxAccountMaxOrderByAggregateInput
    _min?: UpstoxAccountMinOrderByAggregateInput
    _sum?: UpstoxAccountSumOrderByAggregateInput
  }

  export type UpstoxAccountScalarWhereWithAggregatesInput = {
    AND?: UpstoxAccountScalarWhereWithAggregatesInput | UpstoxAccountScalarWhereWithAggregatesInput[]
    OR?: UpstoxAccountScalarWhereWithAggregatesInput[]
    NOT?: UpstoxAccountScalarWhereWithAggregatesInput | UpstoxAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UpstoxAccount"> | number
    userId?: IntWithAggregatesFilter<"UpstoxAccount"> | number
    clientId?: StringWithAggregatesFilter<"UpstoxAccount"> | string
    accessToken?: StringWithAggregatesFilter<"UpstoxAccount"> | string
    isLinked?: BoolWithAggregatesFilter<"UpstoxAccount"> | boolean
    linkedAt?: DateTimeWithAggregatesFilter<"UpstoxAccount"> | Date | string
  }

  export type IndiaStockWhereInput = {
    AND?: IndiaStockWhereInput | IndiaStockWhereInput[]
    OR?: IndiaStockWhereInput[]
    NOT?: IndiaStockWhereInput | IndiaStockWhereInput[]
    id?: IntFilter<"IndiaStock"> | number
    symbol?: StringFilter<"IndiaStock"> | string
    name?: StringFilter<"IndiaStock"> | string
    prevClosePrice?: FloatFilter<"IndiaStock"> | number
    openPrice?: FloatFilter<"IndiaStock"> | number
    currentPrice?: FloatFilter<"IndiaStock"> | number
    listedAt?: DateTimeFilter<"IndiaStock"> | Date | string
  }

  export type IndiaStockOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type IndiaStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symbol?: string
    AND?: IndiaStockWhereInput | IndiaStockWhereInput[]
    OR?: IndiaStockWhereInput[]
    NOT?: IndiaStockWhereInput | IndiaStockWhereInput[]
    name?: StringFilter<"IndiaStock"> | string
    prevClosePrice?: FloatFilter<"IndiaStock"> | number
    openPrice?: FloatFilter<"IndiaStock"> | number
    currentPrice?: FloatFilter<"IndiaStock"> | number
    listedAt?: DateTimeFilter<"IndiaStock"> | Date | string
  }, "id" | "symbol">

  export type IndiaStockOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
    _count?: IndiaStockCountOrderByAggregateInput
    _avg?: IndiaStockAvgOrderByAggregateInput
    _max?: IndiaStockMaxOrderByAggregateInput
    _min?: IndiaStockMinOrderByAggregateInput
    _sum?: IndiaStockSumOrderByAggregateInput
  }

  export type IndiaStockScalarWhereWithAggregatesInput = {
    AND?: IndiaStockScalarWhereWithAggregatesInput | IndiaStockScalarWhereWithAggregatesInput[]
    OR?: IndiaStockScalarWhereWithAggregatesInput[]
    NOT?: IndiaStockScalarWhereWithAggregatesInput | IndiaStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndiaStock"> | number
    symbol?: StringWithAggregatesFilter<"IndiaStock"> | string
    name?: StringWithAggregatesFilter<"IndiaStock"> | string
    prevClosePrice?: FloatWithAggregatesFilter<"IndiaStock"> | number
    openPrice?: FloatWithAggregatesFilter<"IndiaStock"> | number
    currentPrice?: FloatWithAggregatesFilter<"IndiaStock"> | number
    listedAt?: DateTimeWithAggregatesFilter<"IndiaStock"> | Date | string
  }

  export type USStockWhereInput = {
    AND?: USStockWhereInput | USStockWhereInput[]
    OR?: USStockWhereInput[]
    NOT?: USStockWhereInput | USStockWhereInput[]
    id?: IntFilter<"USStock"> | number
    symbol?: StringFilter<"USStock"> | string
    name?: StringFilter<"USStock"> | string
    prevClosePrice?: FloatFilter<"USStock"> | number
    openPrice?: FloatFilter<"USStock"> | number
    currentPrice?: FloatFilter<"USStock"> | number
    listedAt?: DateTimeFilter<"USStock"> | Date | string
  }

  export type USStockOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type USStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symbol?: string
    AND?: USStockWhereInput | USStockWhereInput[]
    OR?: USStockWhereInput[]
    NOT?: USStockWhereInput | USStockWhereInput[]
    name?: StringFilter<"USStock"> | string
    prevClosePrice?: FloatFilter<"USStock"> | number
    openPrice?: FloatFilter<"USStock"> | number
    currentPrice?: FloatFilter<"USStock"> | number
    listedAt?: DateTimeFilter<"USStock"> | Date | string
  }, "id" | "symbol">

  export type USStockOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
    _count?: USStockCountOrderByAggregateInput
    _avg?: USStockAvgOrderByAggregateInput
    _max?: USStockMaxOrderByAggregateInput
    _min?: USStockMinOrderByAggregateInput
    _sum?: USStockSumOrderByAggregateInput
  }

  export type USStockScalarWhereWithAggregatesInput = {
    AND?: USStockScalarWhereWithAggregatesInput | USStockScalarWhereWithAggregatesInput[]
    OR?: USStockScalarWhereWithAggregatesInput[]
    NOT?: USStockScalarWhereWithAggregatesInput | USStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"USStock"> | number
    symbol?: StringWithAggregatesFilter<"USStock"> | string
    name?: StringWithAggregatesFilter<"USStock"> | string
    prevClosePrice?: FloatWithAggregatesFilter<"USStock"> | number
    openPrice?: FloatWithAggregatesFilter<"USStock"> | number
    currentPrice?: FloatWithAggregatesFilter<"USStock"> | number
    listedAt?: DateTimeWithAggregatesFilter<"USStock"> | Date | string
  }

  export type CryptoAssetWhereInput = {
    AND?: CryptoAssetWhereInput | CryptoAssetWhereInput[]
    OR?: CryptoAssetWhereInput[]
    NOT?: CryptoAssetWhereInput | CryptoAssetWhereInput[]
    id?: IntFilter<"CryptoAsset"> | number
    symbol?: StringFilter<"CryptoAsset"> | string
    name?: StringFilter<"CryptoAsset"> | string
    prevClosePrice?: FloatFilter<"CryptoAsset"> | number
    openPrice?: FloatFilter<"CryptoAsset"> | number
    currentPrice?: FloatFilter<"CryptoAsset"> | number
    listedAt?: DateTimeFilter<"CryptoAsset"> | Date | string
  }

  export type CryptoAssetOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type CryptoAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symbol?: string
    AND?: CryptoAssetWhereInput | CryptoAssetWhereInput[]
    OR?: CryptoAssetWhereInput[]
    NOT?: CryptoAssetWhereInput | CryptoAssetWhereInput[]
    name?: StringFilter<"CryptoAsset"> | string
    prevClosePrice?: FloatFilter<"CryptoAsset"> | number
    openPrice?: FloatFilter<"CryptoAsset"> | number
    currentPrice?: FloatFilter<"CryptoAsset"> | number
    listedAt?: DateTimeFilter<"CryptoAsset"> | Date | string
  }, "id" | "symbol">

  export type CryptoAssetOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
    _count?: CryptoAssetCountOrderByAggregateInput
    _avg?: CryptoAssetAvgOrderByAggregateInput
    _max?: CryptoAssetMaxOrderByAggregateInput
    _min?: CryptoAssetMinOrderByAggregateInput
    _sum?: CryptoAssetSumOrderByAggregateInput
  }

  export type CryptoAssetScalarWhereWithAggregatesInput = {
    AND?: CryptoAssetScalarWhereWithAggregatesInput | CryptoAssetScalarWhereWithAggregatesInput[]
    OR?: CryptoAssetScalarWhereWithAggregatesInput[]
    NOT?: CryptoAssetScalarWhereWithAggregatesInput | CryptoAssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CryptoAsset"> | number
    symbol?: StringWithAggregatesFilter<"CryptoAsset"> | string
    name?: StringWithAggregatesFilter<"CryptoAsset"> | string
    prevClosePrice?: FloatWithAggregatesFilter<"CryptoAsset"> | number
    openPrice?: FloatWithAggregatesFilter<"CryptoAsset"> | number
    currentPrice?: FloatWithAggregatesFilter<"CryptoAsset"> | number
    listedAt?: DateTimeWithAggregatesFilter<"CryptoAsset"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    userId?: IntFilter<"Portfolio"> | number
    type?: EnumPortfolioTypeFilter<"Portfolio"> | $Enums.PortfolioType
    stockSymbol?: StringFilter<"Portfolio"> | string
    quantity?: IntFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    userId?: IntFilter<"Portfolio"> | number
    type?: EnumPortfolioTypeFilter<"Portfolio"> | $Enums.PortfolioType
    stockSymbol?: StringFilter<"Portfolio"> | string
    quantity?: IntFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portfolio"> | number
    userId?: IntWithAggregatesFilter<"Portfolio"> | number
    type?: EnumPortfolioTypeWithAggregatesFilter<"Portfolio"> | $Enums.PortfolioType
    stockSymbol?: StringWithAggregatesFilter<"Portfolio"> | string
    quantity?: IntWithAggregatesFilter<"Portfolio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: IntFilter<"Watchlist"> | number
    userId?: IntFilter<"Watchlist"> | number
    type?: EnumWatchlistTypeFilter<"Watchlist"> | $Enums.WatchlistType
    stockSymbol?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    userId?: IntFilter<"Watchlist"> | number
    type?: EnumWatchlistTypeFilter<"Watchlist"> | $Enums.WatchlistType
    stockSymbol?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    createdAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _avg?: WatchlistAvgOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
    _sum?: WatchlistSumOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Watchlist"> | number
    userId?: IntWithAggregatesFilter<"Watchlist"> | number
    type?: EnumWatchlistTypeWithAggregatesFilter<"Watchlist"> | $Enums.WatchlistType
    stockSymbol?: StringWithAggregatesFilter<"Watchlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type PredictionRunWhereInput = {
    AND?: PredictionRunWhereInput | PredictionRunWhereInput[]
    OR?: PredictionRunWhereInput[]
    NOT?: PredictionRunWhereInput | PredictionRunWhereInput[]
    id?: StringFilter<"PredictionRun"> | string
    userId?: IntNullableFilter<"PredictionRun"> | number | null
    stockSymbol?: StringFilter<"PredictionRun"> | string
    market?: StringFilter<"PredictionRun"> | string
    runIdFromML?: StringNullableFilter<"PredictionRun"> | string | null
    status?: EnumRunStatusFilter<"PredictionRun"> | $Enums.RunStatus
    requestedAt?: DateTimeFilter<"PredictionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"PredictionRun"> | Date | string | null
    lstmResultsJson?: JsonNullableFilter<"PredictionRun">
    gruResultsJson?: JsonNullableFilter<"PredictionRun">
    transformerResultsJson?: JsonNullableFilter<"PredictionRun">
    polynomialResultsJson?: JsonNullableFilter<"PredictionRun">
    tradingSuggestionJson?: JsonNullableFilter<"PredictionRun">
    aiAnalysisJson?: JsonNullableFilter<"PredictionRun">
    plotUrlsJson?: JsonNullableFilter<"PredictionRun">
    pdfReportUrl?: StringNullableFilter<"PredictionRun"> | string | null
    emailSentStatus?: StringNullableFilter<"PredictionRun"> | string | null
    mlServiceMessage?: StringNullableFilter<"PredictionRun"> | string | null
    errorMessage?: StringNullableFilter<"PredictionRun"> | string | null
    createdAt?: DateTimeFilter<"PredictionRun"> | Date | string
    updatedAt?: DateTimeFilter<"PredictionRun"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PredictionRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    runIdFromML?: SortOrderInput | SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    lstmResultsJson?: SortOrderInput | SortOrder
    gruResultsJson?: SortOrderInput | SortOrder
    transformerResultsJson?: SortOrderInput | SortOrder
    polynomialResultsJson?: SortOrderInput | SortOrder
    tradingSuggestionJson?: SortOrderInput | SortOrder
    aiAnalysisJson?: SortOrderInput | SortOrder
    plotUrlsJson?: SortOrderInput | SortOrder
    pdfReportUrl?: SortOrderInput | SortOrder
    emailSentStatus?: SortOrderInput | SortOrder
    mlServiceMessage?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PredictionRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runIdFromML?: string
    AND?: PredictionRunWhereInput | PredictionRunWhereInput[]
    OR?: PredictionRunWhereInput[]
    NOT?: PredictionRunWhereInput | PredictionRunWhereInput[]
    userId?: IntNullableFilter<"PredictionRun"> | number | null
    stockSymbol?: StringFilter<"PredictionRun"> | string
    market?: StringFilter<"PredictionRun"> | string
    status?: EnumRunStatusFilter<"PredictionRun"> | $Enums.RunStatus
    requestedAt?: DateTimeFilter<"PredictionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"PredictionRun"> | Date | string | null
    lstmResultsJson?: JsonNullableFilter<"PredictionRun">
    gruResultsJson?: JsonNullableFilter<"PredictionRun">
    transformerResultsJson?: JsonNullableFilter<"PredictionRun">
    polynomialResultsJson?: JsonNullableFilter<"PredictionRun">
    tradingSuggestionJson?: JsonNullableFilter<"PredictionRun">
    aiAnalysisJson?: JsonNullableFilter<"PredictionRun">
    plotUrlsJson?: JsonNullableFilter<"PredictionRun">
    pdfReportUrl?: StringNullableFilter<"PredictionRun"> | string | null
    emailSentStatus?: StringNullableFilter<"PredictionRun"> | string | null
    mlServiceMessage?: StringNullableFilter<"PredictionRun"> | string | null
    errorMessage?: StringNullableFilter<"PredictionRun"> | string | null
    createdAt?: DateTimeFilter<"PredictionRun"> | Date | string
    updatedAt?: DateTimeFilter<"PredictionRun"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "runIdFromML">

  export type PredictionRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    runIdFromML?: SortOrderInput | SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    lstmResultsJson?: SortOrderInput | SortOrder
    gruResultsJson?: SortOrderInput | SortOrder
    transformerResultsJson?: SortOrderInput | SortOrder
    polynomialResultsJson?: SortOrderInput | SortOrder
    tradingSuggestionJson?: SortOrderInput | SortOrder
    aiAnalysisJson?: SortOrderInput | SortOrder
    plotUrlsJson?: SortOrderInput | SortOrder
    pdfReportUrl?: SortOrderInput | SortOrder
    emailSentStatus?: SortOrderInput | SortOrder
    mlServiceMessage?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredictionRunCountOrderByAggregateInput
    _avg?: PredictionRunAvgOrderByAggregateInput
    _max?: PredictionRunMaxOrderByAggregateInput
    _min?: PredictionRunMinOrderByAggregateInput
    _sum?: PredictionRunSumOrderByAggregateInput
  }

  export type PredictionRunScalarWhereWithAggregatesInput = {
    AND?: PredictionRunScalarWhereWithAggregatesInput | PredictionRunScalarWhereWithAggregatesInput[]
    OR?: PredictionRunScalarWhereWithAggregatesInput[]
    NOT?: PredictionRunScalarWhereWithAggregatesInput | PredictionRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PredictionRun"> | string
    userId?: IntNullableWithAggregatesFilter<"PredictionRun"> | number | null
    stockSymbol?: StringWithAggregatesFilter<"PredictionRun"> | string
    market?: StringWithAggregatesFilter<"PredictionRun"> | string
    runIdFromML?: StringNullableWithAggregatesFilter<"PredictionRun"> | string | null
    status?: EnumRunStatusWithAggregatesFilter<"PredictionRun"> | $Enums.RunStatus
    requestedAt?: DateTimeWithAggregatesFilter<"PredictionRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"PredictionRun"> | Date | string | null
    lstmResultsJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    gruResultsJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    transformerResultsJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    polynomialResultsJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    tradingSuggestionJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    aiAnalysisJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    plotUrlsJson?: JsonNullableWithAggregatesFilter<"PredictionRun">
    pdfReportUrl?: StringNullableWithAggregatesFilter<"PredictionRun"> | string | null
    emailSentStatus?: StringNullableWithAggregatesFilter<"PredictionRun"> | string | null
    mlServiceMessage?: StringNullableWithAggregatesFilter<"PredictionRun"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"PredictionRun"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PredictionRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PredictionRun"> | Date | string
  }

  export type LlmAnalysisRunWhereInput = {
    AND?: LlmAnalysisRunWhereInput | LlmAnalysisRunWhereInput[]
    OR?: LlmAnalysisRunWhereInput[]
    NOT?: LlmAnalysisRunWhereInput | LlmAnalysisRunWhereInput[]
    id?: StringFilter<"LlmAnalysisRun"> | string
    userId?: IntNullableFilter<"LlmAnalysisRun"> | number | null
    userQuery?: StringFilter<"LlmAnalysisRun"> | string
    stockSymbol?: StringFilter<"LlmAnalysisRun"> | string
    market?: StringFilter<"LlmAnalysisRun"> | string
    requestedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    status?: EnumLlmRunStatusFilter<"LlmAnalysisRun"> | $Enums.LlmRunStatus
    completedAt?: DateTimeNullableFilter<"LlmAnalysisRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    screenerDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    nseMarketDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    llmIdeaOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmReportOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmConclusionJson?: JsonNullableFilter<"LlmAnalysisRun">
    createdAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    updatedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LlmAnalysisRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userQuery?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    screenerDataSnapshot?: SortOrderInput | SortOrder
    nseMarketDataSnapshot?: SortOrderInput | SortOrder
    llmIdeaOutput?: SortOrderInput | SortOrder
    llmReportOutput?: SortOrderInput | SortOrder
    llmConclusionJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LlmAnalysisRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LlmAnalysisRunWhereInput | LlmAnalysisRunWhereInput[]
    OR?: LlmAnalysisRunWhereInput[]
    NOT?: LlmAnalysisRunWhereInput | LlmAnalysisRunWhereInput[]
    userId?: IntNullableFilter<"LlmAnalysisRun"> | number | null
    userQuery?: StringFilter<"LlmAnalysisRun"> | string
    stockSymbol?: StringFilter<"LlmAnalysisRun"> | string
    market?: StringFilter<"LlmAnalysisRun"> | string
    requestedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    status?: EnumLlmRunStatusFilter<"LlmAnalysisRun"> | $Enums.LlmRunStatus
    completedAt?: DateTimeNullableFilter<"LlmAnalysisRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    screenerDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    nseMarketDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    llmIdeaOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmReportOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmConclusionJson?: JsonNullableFilter<"LlmAnalysisRun">
    createdAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    updatedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LlmAnalysisRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userQuery?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    screenerDataSnapshot?: SortOrderInput | SortOrder
    nseMarketDataSnapshot?: SortOrderInput | SortOrder
    llmIdeaOutput?: SortOrderInput | SortOrder
    llmReportOutput?: SortOrderInput | SortOrder
    llmConclusionJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LlmAnalysisRunCountOrderByAggregateInput
    _avg?: LlmAnalysisRunAvgOrderByAggregateInput
    _max?: LlmAnalysisRunMaxOrderByAggregateInput
    _min?: LlmAnalysisRunMinOrderByAggregateInput
    _sum?: LlmAnalysisRunSumOrderByAggregateInput
  }

  export type LlmAnalysisRunScalarWhereWithAggregatesInput = {
    AND?: LlmAnalysisRunScalarWhereWithAggregatesInput | LlmAnalysisRunScalarWhereWithAggregatesInput[]
    OR?: LlmAnalysisRunScalarWhereWithAggregatesInput[]
    NOT?: LlmAnalysisRunScalarWhereWithAggregatesInput | LlmAnalysisRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LlmAnalysisRun"> | string
    userId?: IntNullableWithAggregatesFilter<"LlmAnalysisRun"> | number | null
    userQuery?: StringWithAggregatesFilter<"LlmAnalysisRun"> | string
    stockSymbol?: StringWithAggregatesFilter<"LlmAnalysisRun"> | string
    market?: StringWithAggregatesFilter<"LlmAnalysisRun"> | string
    requestedAt?: DateTimeWithAggregatesFilter<"LlmAnalysisRun"> | Date | string
    status?: EnumLlmRunStatusWithAggregatesFilter<"LlmAnalysisRun"> | $Enums.LlmRunStatus
    completedAt?: DateTimeNullableWithAggregatesFilter<"LlmAnalysisRun"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"LlmAnalysisRun"> | string | null
    screenerDataSnapshot?: JsonNullableWithAggregatesFilter<"LlmAnalysisRun">
    nseMarketDataSnapshot?: JsonNullableWithAggregatesFilter<"LlmAnalysisRun">
    llmIdeaOutput?: StringNullableWithAggregatesFilter<"LlmAnalysisRun"> | string | null
    llmReportOutput?: StringNullableWithAggregatesFilter<"LlmAnalysisRun"> | string | null
    llmConclusionJson?: JsonNullableWithAggregatesFilter<"LlmAnalysisRun">
    createdAt?: DateTimeWithAggregatesFilter<"LlmAnalysisRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LlmAnalysisRun"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZerodhaAccountCreateInput = {
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
    user: UserCreateNestedOneWithoutZerodhaAccountInput
  }

  export type ZerodhaAccountUncheckedCreateInput = {
    id?: number
    userId: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type ZerodhaAccountUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutZerodhaAccountNestedInput
  }

  export type ZerodhaAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZerodhaAccountCreateManyInput = {
    id?: number
    userId: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type ZerodhaAccountUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZerodhaAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpstoxAccountCreateInput = {
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
    user: UserCreateNestedOneWithoutUpstoxAccountInput
  }

  export type UpstoxAccountUncheckedCreateInput = {
    id?: number
    userId: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type UpstoxAccountUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUpstoxAccountNestedInput
  }

  export type UpstoxAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpstoxAccountCreateManyInput = {
    id?: number
    userId: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type UpstoxAccountUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpstoxAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndiaStockCreateInput = {
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type IndiaStockUncheckedCreateInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type IndiaStockUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndiaStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndiaStockCreateManyInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type IndiaStockUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndiaStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USStockCreateInput = {
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type USStockUncheckedCreateInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type USStockUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USStockCreateManyInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type USStockUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoAssetCreateInput = {
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type CryptoAssetUncheckedCreateInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type CryptoAssetUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoAssetCreateManyInput = {
    id?: number
    symbol: string
    name: string
    prevClosePrice: number
    openPrice: number
    currentPrice: number
    listedAt?: Date | string
  }

  export type CryptoAssetUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prevClosePrice?: FloatFieldUpdateOperationsInput | number
    openPrice?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    listedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateInput = {
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
  }

  export type WatchlistUpdateInput = {
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunCreateInput = {
    id?: string
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPredictionRunsInput
  }

  export type PredictionRunUncheckedCreateInput = {
    id?: string
    userId?: number | null
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPredictionRunsNestedInput
  }

  export type PredictionRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunCreateManyInput = {
    id?: string
    userId?: number | null
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunCreateInput = {
    id?: string
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLlmAnalysisRunsInput
  }

  export type LlmAnalysisRunUncheckedCreateInput = {
    id?: string
    userId?: number | null
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LlmAnalysisRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLlmAnalysisRunsNestedInput
  }

  export type LlmAnalysisRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunCreateManyInput = {
    id?: string
    userId?: number | null
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LlmAnalysisRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
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

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type ZerodhaAccountNullableScalarRelationFilter = {
    is?: ZerodhaAccountWhereInput | null
    isNot?: ZerodhaAccountWhereInput | null
  }

  export type UpstoxAccountNullableScalarRelationFilter = {
    is?: UpstoxAccountWhereInput | null
    isNot?: UpstoxAccountWhereInput | null
  }

  export type PredictionRunListRelationFilter = {
    every?: PredictionRunWhereInput
    some?: PredictionRunWhereInput
    none?: PredictionRunWhereInput
  }

  export type LlmAnalysisRunListRelationFilter = {
    every?: LlmAnalysisRunWhereInput
    some?: LlmAnalysisRunWhereInput
    none?: LlmAnalysisRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PredictionRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LlmAnalysisRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ZerodhaAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type ZerodhaAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ZerodhaAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type ZerodhaAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type ZerodhaAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UpstoxAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type UpstoxAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UpstoxAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type UpstoxAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    accessToken?: SortOrder
    isLinked?: SortOrder
    linkedAt?: SortOrder
  }

  export type UpstoxAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type IndiaStockCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type IndiaStockAvgOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
  }

  export type IndiaStockMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type IndiaStockMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type IndiaStockSumOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
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

  export type USStockCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type USStockAvgOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
  }

  export type USStockMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type USStockMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type USStockSumOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
  }

  export type CryptoAssetCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type CryptoAssetAvgOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
  }

  export type CryptoAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type CryptoAssetMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
    listedAt?: SortOrder
  }

  export type CryptoAssetSumOrderByAggregateInput = {
    id?: SortOrder
    prevClosePrice?: SortOrder
    openPrice?: SortOrder
    currentPrice?: SortOrder
  }

  export type EnumPortfolioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioTypeFilter<$PrismaModel> | $Enums.PortfolioType
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumPortfolioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioTypeFilter<$PrismaModel>
    _max?: NestedEnumPortfolioTypeFilter<$PrismaModel>
  }

  export type EnumWatchlistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistType | EnumWatchlistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistTypeFilter<$PrismaModel> | $Enums.WatchlistType
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    stockSymbol?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumWatchlistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistType | EnumWatchlistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistTypeWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistTypeFilter<$PrismaModel>
    _max?: NestedEnumWatchlistTypeFilter<$PrismaModel>
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

  export type EnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PredictionRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    runIdFromML?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
    lstmResultsJson?: SortOrder
    gruResultsJson?: SortOrder
    transformerResultsJson?: SortOrder
    polynomialResultsJson?: SortOrder
    tradingSuggestionJson?: SortOrder
    aiAnalysisJson?: SortOrder
    plotUrlsJson?: SortOrder
    pdfReportUrl?: SortOrder
    emailSentStatus?: SortOrder
    mlServiceMessage?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionRunAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PredictionRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    runIdFromML?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
    pdfReportUrl?: SortOrder
    emailSentStatus?: SortOrder
    mlServiceMessage?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    runIdFromML?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
    pdfReportUrl?: SortOrder
    emailSentStatus?: SortOrder
    mlServiceMessage?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionRunSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type EnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumLlmRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmRunStatus | EnumLlmRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmRunStatusFilter<$PrismaModel> | $Enums.LlmRunStatus
  }

  export type LlmAnalysisRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    screenerDataSnapshot?: SortOrder
    nseMarketDataSnapshot?: SortOrder
    llmIdeaOutput?: SortOrder
    llmReportOutput?: SortOrder
    llmConclusionJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LlmAnalysisRunAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type LlmAnalysisRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    llmIdeaOutput?: SortOrder
    llmReportOutput?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LlmAnalysisRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    stockSymbol?: SortOrder
    market?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    llmIdeaOutput?: SortOrder
    llmReportOutput?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LlmAnalysisRunSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumLlmRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmRunStatus | EnumLlmRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.LlmRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLlmRunStatusFilter<$PrismaModel>
    _max?: NestedEnumLlmRunStatusFilter<$PrismaModel>
  }

  export type PortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type ZerodhaAccountCreateNestedOneWithoutUserInput = {
    create?: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: ZerodhaAccountCreateOrConnectWithoutUserInput
    connect?: ZerodhaAccountWhereUniqueInput
  }

  export type UpstoxAccountCreateNestedOneWithoutUserInput = {
    create?: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UpstoxAccountCreateOrConnectWithoutUserInput
    connect?: UpstoxAccountWhereUniqueInput
  }

  export type PredictionRunCreateNestedManyWithoutUserInput = {
    create?: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput> | PredictionRunCreateWithoutUserInput[] | PredictionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionRunCreateOrConnectWithoutUserInput | PredictionRunCreateOrConnectWithoutUserInput[]
    createMany?: PredictionRunCreateManyUserInputEnvelope
    connect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
  }

  export type LlmAnalysisRunCreateNestedManyWithoutUserInput = {
    create?: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput> | LlmAnalysisRunCreateWithoutUserInput[] | LlmAnalysisRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmAnalysisRunCreateOrConnectWithoutUserInput | LlmAnalysisRunCreateOrConnectWithoutUserInput[]
    createMany?: LlmAnalysisRunCreateManyUserInputEnvelope
    connect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: ZerodhaAccountCreateOrConnectWithoutUserInput
    connect?: ZerodhaAccountWhereUniqueInput
  }

  export type UpstoxAccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UpstoxAccountCreateOrConnectWithoutUserInput
    connect?: UpstoxAccountWhereUniqueInput
  }

  export type PredictionRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput> | PredictionRunCreateWithoutUserInput[] | PredictionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionRunCreateOrConnectWithoutUserInput | PredictionRunCreateOrConnectWithoutUserInput[]
    createMany?: PredictionRunCreateManyUserInputEnvelope
    connect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
  }

  export type LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput> | LlmAnalysisRunCreateWithoutUserInput[] | LlmAnalysisRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmAnalysisRunCreateOrConnectWithoutUserInput | LlmAnalysisRunCreateOrConnectWithoutUserInput[]
    createMany?: LlmAnalysisRunCreateManyUserInputEnvelope
    connect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type ZerodhaAccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: ZerodhaAccountCreateOrConnectWithoutUserInput
    upsert?: ZerodhaAccountUpsertWithoutUserInput
    disconnect?: ZerodhaAccountWhereInput | boolean
    delete?: ZerodhaAccountWhereInput | boolean
    connect?: ZerodhaAccountWhereUniqueInput
    update?: XOR<XOR<ZerodhaAccountUpdateToOneWithWhereWithoutUserInput, ZerodhaAccountUpdateWithoutUserInput>, ZerodhaAccountUncheckedUpdateWithoutUserInput>
  }

  export type UpstoxAccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UpstoxAccountCreateOrConnectWithoutUserInput
    upsert?: UpstoxAccountUpsertWithoutUserInput
    disconnect?: UpstoxAccountWhereInput | boolean
    delete?: UpstoxAccountWhereInput | boolean
    connect?: UpstoxAccountWhereUniqueInput
    update?: XOR<XOR<UpstoxAccountUpdateToOneWithWhereWithoutUserInput, UpstoxAccountUpdateWithoutUserInput>, UpstoxAccountUncheckedUpdateWithoutUserInput>
  }

  export type PredictionRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput> | PredictionRunCreateWithoutUserInput[] | PredictionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionRunCreateOrConnectWithoutUserInput | PredictionRunCreateOrConnectWithoutUserInput[]
    upsert?: PredictionRunUpsertWithWhereUniqueWithoutUserInput | PredictionRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PredictionRunCreateManyUserInputEnvelope
    set?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    disconnect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    delete?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    connect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    update?: PredictionRunUpdateWithWhereUniqueWithoutUserInput | PredictionRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PredictionRunUpdateManyWithWhereWithoutUserInput | PredictionRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PredictionRunScalarWhereInput | PredictionRunScalarWhereInput[]
  }

  export type LlmAnalysisRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput> | LlmAnalysisRunCreateWithoutUserInput[] | LlmAnalysisRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmAnalysisRunCreateOrConnectWithoutUserInput | LlmAnalysisRunCreateOrConnectWithoutUserInput[]
    upsert?: LlmAnalysisRunUpsertWithWhereUniqueWithoutUserInput | LlmAnalysisRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LlmAnalysisRunCreateManyUserInputEnvelope
    set?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    disconnect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    delete?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    connect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    update?: LlmAnalysisRunUpdateWithWhereUniqueWithoutUserInput | LlmAnalysisRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LlmAnalysisRunUpdateManyWithWhereWithoutUserInput | LlmAnalysisRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LlmAnalysisRunScalarWhereInput | LlmAnalysisRunScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: ZerodhaAccountCreateOrConnectWithoutUserInput
    upsert?: ZerodhaAccountUpsertWithoutUserInput
    disconnect?: ZerodhaAccountWhereInput | boolean
    delete?: ZerodhaAccountWhereInput | boolean
    connect?: ZerodhaAccountWhereUniqueInput
    update?: XOR<XOR<ZerodhaAccountUpdateToOneWithWhereWithoutUserInput, ZerodhaAccountUpdateWithoutUserInput>, ZerodhaAccountUncheckedUpdateWithoutUserInput>
  }

  export type UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UpstoxAccountCreateOrConnectWithoutUserInput
    upsert?: UpstoxAccountUpsertWithoutUserInput
    disconnect?: UpstoxAccountWhereInput | boolean
    delete?: UpstoxAccountWhereInput | boolean
    connect?: UpstoxAccountWhereUniqueInput
    update?: XOR<XOR<UpstoxAccountUpdateToOneWithWhereWithoutUserInput, UpstoxAccountUpdateWithoutUserInput>, UpstoxAccountUncheckedUpdateWithoutUserInput>
  }

  export type PredictionRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput> | PredictionRunCreateWithoutUserInput[] | PredictionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionRunCreateOrConnectWithoutUserInput | PredictionRunCreateOrConnectWithoutUserInput[]
    upsert?: PredictionRunUpsertWithWhereUniqueWithoutUserInput | PredictionRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PredictionRunCreateManyUserInputEnvelope
    set?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    disconnect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    delete?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    connect?: PredictionRunWhereUniqueInput | PredictionRunWhereUniqueInput[]
    update?: PredictionRunUpdateWithWhereUniqueWithoutUserInput | PredictionRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PredictionRunUpdateManyWithWhereWithoutUserInput | PredictionRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PredictionRunScalarWhereInput | PredictionRunScalarWhereInput[]
  }

  export type LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput> | LlmAnalysisRunCreateWithoutUserInput[] | LlmAnalysisRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmAnalysisRunCreateOrConnectWithoutUserInput | LlmAnalysisRunCreateOrConnectWithoutUserInput[]
    upsert?: LlmAnalysisRunUpsertWithWhereUniqueWithoutUserInput | LlmAnalysisRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LlmAnalysisRunCreateManyUserInputEnvelope
    set?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    disconnect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    delete?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    connect?: LlmAnalysisRunWhereUniqueInput | LlmAnalysisRunWhereUniqueInput[]
    update?: LlmAnalysisRunUpdateWithWhereUniqueWithoutUserInput | LlmAnalysisRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LlmAnalysisRunUpdateManyWithWhereWithoutUserInput | LlmAnalysisRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LlmAnalysisRunScalarWhereInput | LlmAnalysisRunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutZerodhaAccountInput = {
    create?: XOR<UserCreateWithoutZerodhaAccountInput, UserUncheckedCreateWithoutZerodhaAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutZerodhaAccountInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutZerodhaAccountNestedInput = {
    create?: XOR<UserCreateWithoutZerodhaAccountInput, UserUncheckedCreateWithoutZerodhaAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutZerodhaAccountInput
    upsert?: UserUpsertWithoutZerodhaAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutZerodhaAccountInput, UserUpdateWithoutZerodhaAccountInput>, UserUncheckedUpdateWithoutZerodhaAccountInput>
  }

  export type UserCreateNestedOneWithoutUpstoxAccountInput = {
    create?: XOR<UserCreateWithoutUpstoxAccountInput, UserUncheckedCreateWithoutUpstoxAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpstoxAccountInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUpstoxAccountNestedInput = {
    create?: XOR<UserCreateWithoutUpstoxAccountInput, UserUncheckedCreateWithoutUpstoxAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpstoxAccountInput
    upsert?: UserUpsertWithoutUpstoxAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpstoxAccountInput, UserUpdateWithoutUpstoxAccountInput>, UserUncheckedUpdateWithoutUpstoxAccountInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPortfolioTypeFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioType
  }

  export type UserUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    upsert?: UserUpsertWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfoliosInput, UserUpdateWithoutPortfoliosInput>, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type UserCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWatchlistTypeFieldUpdateOperationsInput = {
    set?: $Enums.WatchlistType
  }

  export type UserUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    upsert?: UserUpsertWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistsInput, UserUpdateWithoutWatchlistsInput>, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserCreateNestedOneWithoutPredictionRunsInput = {
    create?: XOR<UserCreateWithoutPredictionRunsInput, UserUncheckedCreateWithoutPredictionRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionRunsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.RunStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutPredictionRunsNestedInput = {
    create?: XOR<UserCreateWithoutPredictionRunsInput, UserUncheckedCreateWithoutPredictionRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionRunsInput
    upsert?: UserUpsertWithoutPredictionRunsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPredictionRunsInput, UserUpdateWithoutPredictionRunsInput>, UserUncheckedUpdateWithoutPredictionRunsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutLlmAnalysisRunsInput = {
    create?: XOR<UserCreateWithoutLlmAnalysisRunsInput, UserUncheckedCreateWithoutLlmAnalysisRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmAnalysisRunsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLlmRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.LlmRunStatus
  }

  export type UserUpdateOneWithoutLlmAnalysisRunsNestedInput = {
    create?: XOR<UserCreateWithoutLlmAnalysisRunsInput, UserUncheckedCreateWithoutLlmAnalysisRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmAnalysisRunsInput
    upsert?: UserUpsertWithoutLlmAnalysisRunsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLlmAnalysisRunsInput, UserUpdateWithoutLlmAnalysisRunsInput>, UserUncheckedUpdateWithoutLlmAnalysisRunsInput>
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

  export type NestedEnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
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

  export type NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPortfolioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioTypeFilter<$PrismaModel> | $Enums.PortfolioType
  }

  export type NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioType[] | ListEnumPortfolioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioTypeFilter<$PrismaModel>
    _max?: NestedEnumPortfolioTypeFilter<$PrismaModel>
  }

  export type NestedEnumWatchlistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistType | EnumWatchlistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistTypeFilter<$PrismaModel> | $Enums.WatchlistType
  }

  export type NestedEnumWatchlistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistType | EnumWatchlistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistType[] | ListEnumWatchlistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistTypeWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistTypeFilter<$PrismaModel>
    _max?: NestedEnumWatchlistTypeFilter<$PrismaModel>
  }

  export type NestedEnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RunStatus[] | ListEnumRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumLlmRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmRunStatus | EnumLlmRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmRunStatusFilter<$PrismaModel> | $Enums.LlmRunStatus
  }

  export type NestedEnumLlmRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmRunStatus | EnumLlmRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmRunStatus[] | ListEnumLlmRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.LlmRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLlmRunStatusFilter<$PrismaModel>
    _max?: NestedEnumLlmRunStatusFilter<$PrismaModel>
  }

  export type PortfolioCreateWithoutUserInput = {
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCreateOrConnectWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioCreateManyUserInputEnvelope = {
    data: PortfolioCreateManyUserInput | PortfolioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutUserInput = {
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ZerodhaAccountCreateWithoutUserInput = {
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type ZerodhaAccountUncheckedCreateWithoutUserInput = {
    id?: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type ZerodhaAccountCreateOrConnectWithoutUserInput = {
    where: ZerodhaAccountWhereUniqueInput
    create: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
  }

  export type UpstoxAccountCreateWithoutUserInput = {
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type UpstoxAccountUncheckedCreateWithoutUserInput = {
    id?: number
    clientId: string
    accessToken: string
    isLinked?: boolean
    linkedAt?: Date | string
  }

  export type UpstoxAccountCreateOrConnectWithoutUserInput = {
    where: UpstoxAccountWhereUniqueInput
    create: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
  }

  export type PredictionRunCreateWithoutUserInput = {
    id?: string
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionRunUncheckedCreateWithoutUserInput = {
    id?: string
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionRunCreateOrConnectWithoutUserInput = {
    where: PredictionRunWhereUniqueInput
    create: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput>
  }

  export type PredictionRunCreateManyUserInputEnvelope = {
    data: PredictionRunCreateManyUserInput | PredictionRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LlmAnalysisRunCreateWithoutUserInput = {
    id?: string
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LlmAnalysisRunUncheckedCreateWithoutUserInput = {
    id?: string
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LlmAnalysisRunCreateOrConnectWithoutUserInput = {
    where: LlmAnalysisRunWhereUniqueInput
    create: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput>
  }

  export type LlmAnalysisRunCreateManyUserInputEnvelope = {
    data: LlmAnalysisRunCreateManyUserInput | LlmAnalysisRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutUserInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    OR?: PortfolioScalarWhereInput[]
    NOT?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    userId?: IntFilter<"Portfolio"> | number
    type?: EnumPortfolioTypeFilter<"Portfolio"> | $Enums.PortfolioType
    stockSymbol?: StringFilter<"Portfolio"> | string
    quantity?: IntFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: IntFilter<"Watchlist"> | number
    userId?: IntFilter<"Watchlist"> | number
    type?: EnumWatchlistTypeFilter<"Watchlist"> | $Enums.WatchlistType
    stockSymbol?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type ZerodhaAccountUpsertWithoutUserInput = {
    update: XOR<ZerodhaAccountUpdateWithoutUserInput, ZerodhaAccountUncheckedUpdateWithoutUserInput>
    create: XOR<ZerodhaAccountCreateWithoutUserInput, ZerodhaAccountUncheckedCreateWithoutUserInput>
    where?: ZerodhaAccountWhereInput
  }

  export type ZerodhaAccountUpdateToOneWithWhereWithoutUserInput = {
    where?: ZerodhaAccountWhereInput
    data: XOR<ZerodhaAccountUpdateWithoutUserInput, ZerodhaAccountUncheckedUpdateWithoutUserInput>
  }

  export type ZerodhaAccountUpdateWithoutUserInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZerodhaAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpstoxAccountUpsertWithoutUserInput = {
    update: XOR<UpstoxAccountUpdateWithoutUserInput, UpstoxAccountUncheckedUpdateWithoutUserInput>
    create: XOR<UpstoxAccountCreateWithoutUserInput, UpstoxAccountUncheckedCreateWithoutUserInput>
    where?: UpstoxAccountWhereInput
  }

  export type UpstoxAccountUpdateToOneWithWhereWithoutUserInput = {
    where?: UpstoxAccountWhereInput
    data: XOR<UpstoxAccountUpdateWithoutUserInput, UpstoxAccountUncheckedUpdateWithoutUserInput>
  }

  export type UpstoxAccountUpdateWithoutUserInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpstoxAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    isLinked?: BoolFieldUpdateOperationsInput | boolean
    linkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunUpsertWithWhereUniqueWithoutUserInput = {
    where: PredictionRunWhereUniqueInput
    update: XOR<PredictionRunUpdateWithoutUserInput, PredictionRunUncheckedUpdateWithoutUserInput>
    create: XOR<PredictionRunCreateWithoutUserInput, PredictionRunUncheckedCreateWithoutUserInput>
  }

  export type PredictionRunUpdateWithWhereUniqueWithoutUserInput = {
    where: PredictionRunWhereUniqueInput
    data: XOR<PredictionRunUpdateWithoutUserInput, PredictionRunUncheckedUpdateWithoutUserInput>
  }

  export type PredictionRunUpdateManyWithWhereWithoutUserInput = {
    where: PredictionRunScalarWhereInput
    data: XOR<PredictionRunUpdateManyMutationInput, PredictionRunUncheckedUpdateManyWithoutUserInput>
  }

  export type PredictionRunScalarWhereInput = {
    AND?: PredictionRunScalarWhereInput | PredictionRunScalarWhereInput[]
    OR?: PredictionRunScalarWhereInput[]
    NOT?: PredictionRunScalarWhereInput | PredictionRunScalarWhereInput[]
    id?: StringFilter<"PredictionRun"> | string
    userId?: IntNullableFilter<"PredictionRun"> | number | null
    stockSymbol?: StringFilter<"PredictionRun"> | string
    market?: StringFilter<"PredictionRun"> | string
    runIdFromML?: StringNullableFilter<"PredictionRun"> | string | null
    status?: EnumRunStatusFilter<"PredictionRun"> | $Enums.RunStatus
    requestedAt?: DateTimeFilter<"PredictionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"PredictionRun"> | Date | string | null
    lstmResultsJson?: JsonNullableFilter<"PredictionRun">
    gruResultsJson?: JsonNullableFilter<"PredictionRun">
    transformerResultsJson?: JsonNullableFilter<"PredictionRun">
    polynomialResultsJson?: JsonNullableFilter<"PredictionRun">
    tradingSuggestionJson?: JsonNullableFilter<"PredictionRun">
    aiAnalysisJson?: JsonNullableFilter<"PredictionRun">
    plotUrlsJson?: JsonNullableFilter<"PredictionRun">
    pdfReportUrl?: StringNullableFilter<"PredictionRun"> | string | null
    emailSentStatus?: StringNullableFilter<"PredictionRun"> | string | null
    mlServiceMessage?: StringNullableFilter<"PredictionRun"> | string | null
    errorMessage?: StringNullableFilter<"PredictionRun"> | string | null
    createdAt?: DateTimeFilter<"PredictionRun"> | Date | string
    updatedAt?: DateTimeFilter<"PredictionRun"> | Date | string
  }

  export type LlmAnalysisRunUpsertWithWhereUniqueWithoutUserInput = {
    where: LlmAnalysisRunWhereUniqueInput
    update: XOR<LlmAnalysisRunUpdateWithoutUserInput, LlmAnalysisRunUncheckedUpdateWithoutUserInput>
    create: XOR<LlmAnalysisRunCreateWithoutUserInput, LlmAnalysisRunUncheckedCreateWithoutUserInput>
  }

  export type LlmAnalysisRunUpdateWithWhereUniqueWithoutUserInput = {
    where: LlmAnalysisRunWhereUniqueInput
    data: XOR<LlmAnalysisRunUpdateWithoutUserInput, LlmAnalysisRunUncheckedUpdateWithoutUserInput>
  }

  export type LlmAnalysisRunUpdateManyWithWhereWithoutUserInput = {
    where: LlmAnalysisRunScalarWhereInput
    data: XOR<LlmAnalysisRunUpdateManyMutationInput, LlmAnalysisRunUncheckedUpdateManyWithoutUserInput>
  }

  export type LlmAnalysisRunScalarWhereInput = {
    AND?: LlmAnalysisRunScalarWhereInput | LlmAnalysisRunScalarWhereInput[]
    OR?: LlmAnalysisRunScalarWhereInput[]
    NOT?: LlmAnalysisRunScalarWhereInput | LlmAnalysisRunScalarWhereInput[]
    id?: StringFilter<"LlmAnalysisRun"> | string
    userId?: IntNullableFilter<"LlmAnalysisRun"> | number | null
    userQuery?: StringFilter<"LlmAnalysisRun"> | string
    stockSymbol?: StringFilter<"LlmAnalysisRun"> | string
    market?: StringFilter<"LlmAnalysisRun"> | string
    requestedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    status?: EnumLlmRunStatusFilter<"LlmAnalysisRun"> | $Enums.LlmRunStatus
    completedAt?: DateTimeNullableFilter<"LlmAnalysisRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    screenerDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    nseMarketDataSnapshot?: JsonNullableFilter<"LlmAnalysisRun">
    llmIdeaOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmReportOutput?: StringNullableFilter<"LlmAnalysisRun"> | string | null
    llmConclusionJson?: JsonNullableFilter<"LlmAnalysisRun">
    createdAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
    updatedAt?: DateTimeFilter<"LlmAnalysisRun"> | Date | string
  }

  export type UserCreateWithoutZerodhaAccountInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutZerodhaAccountInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutZerodhaAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutZerodhaAccountInput, UserUncheckedCreateWithoutZerodhaAccountInput>
  }

  export type UserUpsertWithoutZerodhaAccountInput = {
    update: XOR<UserUpdateWithoutZerodhaAccountInput, UserUncheckedUpdateWithoutZerodhaAccountInput>
    create: XOR<UserCreateWithoutZerodhaAccountInput, UserUncheckedCreateWithoutZerodhaAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutZerodhaAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutZerodhaAccountInput, UserUncheckedUpdateWithoutZerodhaAccountInput>
  }

  export type UserUpdateWithoutZerodhaAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutZerodhaAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUpstoxAccountInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpstoxAccountInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpstoxAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpstoxAccountInput, UserUncheckedCreateWithoutUpstoxAccountInput>
  }

  export type UserUpsertWithoutUpstoxAccountInput = {
    update: XOR<UserUpdateWithoutUpstoxAccountInput, UserUncheckedUpdateWithoutUpstoxAccountInput>
    create: XOR<UserCreateWithoutUpstoxAccountInput, UserUncheckedCreateWithoutUpstoxAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpstoxAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpstoxAccountInput, UserUncheckedUpdateWithoutUpstoxAccountInput>
  }

  export type UserUpdateWithoutUpstoxAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpstoxAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPortfoliosInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPortfoliosInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPortfoliosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
  }

  export type UserUpsertWithoutPortfoliosInput = {
    update: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type UserUpdateWithoutPortfoliosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfoliosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWatchlistsInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
  }

  export type UserUpsertWithoutWatchlistsInput = {
    update: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserUpdateWithoutWatchlistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPredictionRunsInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPredictionRunsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPredictionRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPredictionRunsInput, UserUncheckedCreateWithoutPredictionRunsInput>
  }

  export type UserUpsertWithoutPredictionRunsInput = {
    update: XOR<UserUpdateWithoutPredictionRunsInput, UserUncheckedUpdateWithoutPredictionRunsInput>
    create: XOR<UserCreateWithoutPredictionRunsInput, UserUncheckedCreateWithoutPredictionRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPredictionRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPredictionRunsInput, UserUncheckedUpdateWithoutPredictionRunsInput>
  }

  export type UserUpdateWithoutPredictionRunsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPredictionRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    llmAnalysisRuns?: LlmAnalysisRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLlmAnalysisRunsInput = {
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLlmAnalysisRunsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    authMethod: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    zerodhaAccount?: ZerodhaAccountUncheckedCreateNestedOneWithoutUserInput
    upstoxAccount?: UpstoxAccountUncheckedCreateNestedOneWithoutUserInput
    predictionRuns?: PredictionRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLlmAnalysisRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLlmAnalysisRunsInput, UserUncheckedCreateWithoutLlmAnalysisRunsInput>
  }

  export type UserUpsertWithoutLlmAnalysisRunsInput = {
    update: XOR<UserUpdateWithoutLlmAnalysisRunsInput, UserUncheckedUpdateWithoutLlmAnalysisRunsInput>
    create: XOR<UserCreateWithoutLlmAnalysisRunsInput, UserUncheckedCreateWithoutLlmAnalysisRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLlmAnalysisRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLlmAnalysisRunsInput, UserUncheckedUpdateWithoutLlmAnalysisRunsInput>
  }

  export type UserUpdateWithoutLlmAnalysisRunsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLlmAnalysisRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    zerodhaAccount?: ZerodhaAccountUncheckedUpdateOneWithoutUserNestedInput
    upstoxAccount?: UpstoxAccountUncheckedUpdateOneWithoutUserNestedInput
    predictionRuns?: PredictionRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PortfolioCreateManyUserInput = {
    id?: number
    type: $Enums.PortfolioType
    stockSymbol: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: number
    type: $Enums.WatchlistType
    stockSymbol: string
    createdAt?: Date | string
  }

  export type PredictionRunCreateManyUserInput = {
    id?: string
    stockSymbol: string
    market: string
    runIdFromML?: string | null
    status?: $Enums.RunStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: string | null
    emailSentStatus?: string | null
    mlServiceMessage?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LlmAnalysisRunCreateManyUserInput = {
    id?: string
    userQuery: string
    stockSymbol: string
    market: string
    requestedAt?: Date | string
    status?: $Enums.LlmRunStatus
    completedAt?: Date | string | null
    errorMessage?: string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: string | null
    llmReportOutput?: string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateWithoutUserInput = {
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumWatchlistTypeFieldUpdateOperationsInput | $Enums.WatchlistType
    stockSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    runIdFromML?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lstmResultsJson?: NullableJsonNullValueInput | InputJsonValue
    gruResultsJson?: NullableJsonNullValueInput | InputJsonValue
    transformerResultsJson?: NullableJsonNullValueInput | InputJsonValue
    polynomialResultsJson?: NullableJsonNullValueInput | InputJsonValue
    tradingSuggestionJson?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisJson?: NullableJsonNullValueInput | InputJsonValue
    plotUrlsJson?: NullableJsonNullValueInput | InputJsonValue
    pdfReportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailSentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mlServiceMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmAnalysisRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    stockSymbol?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLlmRunStatusFieldUpdateOperationsInput | $Enums.LlmRunStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    screenerDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    nseMarketDataSnapshot?: NullableJsonNullValueInput | InputJsonValue
    llmIdeaOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmReportOutput?: NullableStringFieldUpdateOperationsInput | string | null
    llmConclusionJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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