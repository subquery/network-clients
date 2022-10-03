export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigFloat: bigint | string;
  BigInt: bigint;
  Cursor: string;
  Date: Date;
  Datetime: Date;
  JSON: any;
};

export type AcceptedOffer = Node & {
  readonly __typename: 'AcceptedOffer';
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly id: Scalars['String'];
  /** Reads a single `Indexer` that is related to this `AcceptedOffer`. */
  readonly indexer: Maybe<Indexer>;
  readonly indexerId: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads a single `Offer` that is related to this `AcceptedOffer`. */
  readonly offer: Maybe<Offer>;
  readonly offerId: Scalars['String'];
  /** Reads a single `ServiceAgreement` that is related to this `AcceptedOffer`. */
  readonly serviceAgreement: Maybe<ServiceAgreement>;
  readonly serviceAgreementId: Scalars['String'];
};

export type AcceptedOfferAggregates = {
  readonly __typename: 'AcceptedOfferAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<AcceptedOfferAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<AcceptedOfferDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<AcceptedOfferMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<AcceptedOfferMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<AcceptedOfferStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<AcceptedOfferStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<AcceptedOfferSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<AcceptedOfferVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<AcceptedOfferVarianceSampleAggregates>;
};

export type AcceptedOfferAverageAggregates = {
  readonly __typename: 'AcceptedOfferAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type AcceptedOfferDistinctCountAggregates = {
  readonly __typename: 'AcceptedOfferDistinctCountAggregates';
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerId across the matching connection */
  readonly indexerId: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of offerId across the matching connection */
  readonly offerId: Maybe<Scalars['BigInt']>;
  /** Distinct count of serviceAgreementId across the matching connection */
  readonly serviceAgreementId: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `AcceptedOffer` object types. All fields are combined with a logical ‘and.’ */
export type AcceptedOfferFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<AcceptedOfferFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerId` field. */
  readonly indexerId: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<AcceptedOfferFilter>;
  /** Filter by the object’s `offerId` field. */
  readonly offerId: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<AcceptedOfferFilter>>;
  /** Filter by the object’s `serviceAgreementId` field. */
  readonly serviceAgreementId: InputMaybe<StringFilter>;
};

export type AcceptedOfferMaxAggregates = {
  readonly __typename: 'AcceptedOfferMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type AcceptedOfferMinAggregates = {
  readonly __typename: 'AcceptedOfferMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type AcceptedOfferStddevPopulationAggregates = {
  readonly __typename: 'AcceptedOfferStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type AcceptedOfferStddevSampleAggregates = {
  readonly __typename: 'AcceptedOfferStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type AcceptedOfferSumAggregates = {
  readonly __typename: 'AcceptedOfferSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type AcceptedOfferVariancePopulationAggregates = {
  readonly __typename: 'AcceptedOfferVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type AcceptedOfferVarianceSampleAggregates = {
  readonly __typename: 'AcceptedOfferVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `AcceptedOffer` values. */
export type AcceptedOffersConnection = {
  readonly __typename: 'AcceptedOffersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<AcceptedOfferAggregates>;
  /** A list of edges which contains the `AcceptedOffer` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AcceptedOffersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<AcceptedOfferAggregates>>;
  /** A list of `AcceptedOffer` objects. */
  readonly nodes: ReadonlyArray<Maybe<AcceptedOffer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `AcceptedOffer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `AcceptedOffer` values. */
export type AcceptedOffersConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<AcceptedOffersGroupBy>;
  having: InputMaybe<AcceptedOffersHavingInput>;
};

/** A `AcceptedOffer` edge in the connection. */
export type AcceptedOffersEdge = {
  readonly __typename: 'AcceptedOffersEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `AcceptedOffer` at the end of the edge. */
  readonly node: Maybe<AcceptedOffer>;
};

/** Grouping methods for `AcceptedOffer` for usage during aggregation. */
export enum AcceptedOffersGroupBy {
  CREATED_BLOCK = 'CREATED_BLOCK',
  INDEXER_ID = 'INDEXER_ID',
  LAST_EVENT = 'LAST_EVENT',
  OFFER_ID = 'OFFER_ID',
  SERVICE_AGREEMENT_ID = 'SERVICE_AGREEMENT_ID',
}

export type AcceptedOffersHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `AcceptedOffer` aggregates. */
export type AcceptedOffersHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<AcceptedOffersHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<AcceptedOffersHavingInput>>;
  readonly average: InputMaybe<AcceptedOffersHavingAverageInput>;
  readonly distinctCount: InputMaybe<AcceptedOffersHavingDistinctCountInput>;
  readonly max: InputMaybe<AcceptedOffersHavingMaxInput>;
  readonly min: InputMaybe<AcceptedOffersHavingMinInput>;
  readonly stddevPopulation: InputMaybe<AcceptedOffersHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<AcceptedOffersHavingStddevSampleInput>;
  readonly sum: InputMaybe<AcceptedOffersHavingSumInput>;
  readonly variancePopulation: InputMaybe<AcceptedOffersHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<AcceptedOffersHavingVarianceSampleInput>;
};

export type AcceptedOffersHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type AcceptedOffersHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `AcceptedOffer`. */
export enum AcceptedOffersOrderBy {
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ID_ASC = 'INDEXER_ID_ASC',
  INDEXER_ID_DESC = 'INDEXER_ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  OFFER_ID_ASC = 'OFFER_ID_ASC',
  OFFER_ID_DESC = 'OFFER_ID_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  SERVICE_AGREEMENT_ID_ASC = 'SERVICE_AGREEMENT_ID_ASC',
  SERVICE_AGREEMENT_ID_DESC = 'SERVICE_AGREEMENT_ID_DESC',
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['BigFloat']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

export enum ChannelStatus {
  CHALLENGE = 'CHALLENGE',
  FINALIZED = 'FINALIZED',
  OPEN = 'OPEN',
}

/** A filter to be used against ChannelStatus fields. All fields are combined with a logical ‘and.’ */
export type ChannelStatusFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<ChannelStatus>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<ChannelStatus>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<ChannelStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<ChannelStatus>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<ChannelStatus>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<ChannelStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<ChannelStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<ChannelStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<ChannelStatus>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<ChannelStatus>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Datetime']>>;
};

export type Delegation = Node & {
  readonly __typename: 'Delegation';
  readonly amount: Scalars['JSON'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads a single `Delegator` that is related to this `Delegation`. */
  readonly delegator: Maybe<Delegator>;
  readonly delegatorId: Scalars['String'];
  readonly id: Scalars['String'];
  /** Reads a single `Indexer` that is related to this `Delegation`. */
  readonly indexer: Maybe<Indexer>;
  readonly indexerId: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

export type DelegationAggregates = {
  readonly __typename: 'DelegationAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<DelegationAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<DelegationDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<DelegationMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<DelegationMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<DelegationStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<DelegationStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<DelegationSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<DelegationVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<DelegationVarianceSampleAggregates>;
};

export type DelegationAverageAggregates = {
  readonly __typename: 'DelegationAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegationDistinctCountAggregates = {
  readonly __typename: 'DelegationDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of delegatorId across the matching connection */
  readonly delegatorId: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerId across the matching connection */
  readonly indexerId: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Delegation` object types. All fields are combined with a logical ‘and.’ */
export type DelegationFilter = {
  /** Filter by the object’s `amount` field. */
  readonly amount: InputMaybe<JSONFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<DelegationFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `delegatorId` field. */
  readonly delegatorId: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerId` field. */
  readonly indexerId: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<DelegationFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<DelegationFilter>>;
};

export type DelegationMaxAggregates = {
  readonly __typename: 'DelegationMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DelegationMinAggregates = {
  readonly __typename: 'DelegationMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DelegationStddevPopulationAggregates = {
  readonly __typename: 'DelegationStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegationStddevSampleAggregates = {
  readonly __typename: 'DelegationStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegationSumAggregates = {
  readonly __typename: 'DelegationSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type DelegationVariancePopulationAggregates = {
  readonly __typename: 'DelegationVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegationVarianceSampleAggregates = {
  readonly __typename: 'DelegationVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Delegation` values. */
export type DelegationsConnection = {
  readonly __typename: 'DelegationsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DelegationAggregates>;
  /** A list of edges which contains the `Delegation` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DelegationsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DelegationAggregates>>;
  /** A list of `Delegation` objects. */
  readonly nodes: ReadonlyArray<Maybe<Delegation>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Delegation` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Delegation` values. */
export type DelegationsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<DelegationsGroupBy>;
  having: InputMaybe<DelegationsHavingInput>;
};

/** A `Delegation` edge in the connection. */
export type DelegationsEdge = {
  readonly __typename: 'DelegationsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Delegation` at the end of the edge. */
  readonly node: Maybe<Delegation>;
};

/** Grouping methods for `Delegation` for usage during aggregation. */
export enum DelegationsGroupBy {
  AMOUNT = 'AMOUNT',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DELEGATOR_ID = 'DELEGATOR_ID',
  INDEXER_ID = 'INDEXER_ID',
  LAST_EVENT = 'LAST_EVENT',
}

export type DelegationsHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Delegation` aggregates. */
export type DelegationsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<DelegationsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DelegationsHavingInput>>;
  readonly average: InputMaybe<DelegationsHavingAverageInput>;
  readonly distinctCount: InputMaybe<DelegationsHavingDistinctCountInput>;
  readonly max: InputMaybe<DelegationsHavingMaxInput>;
  readonly min: InputMaybe<DelegationsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<DelegationsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<DelegationsHavingStddevSampleInput>;
  readonly sum: InputMaybe<DelegationsHavingSumInput>;
  readonly variancePopulation: InputMaybe<DelegationsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<DelegationsHavingVarianceSampleInput>;
};

export type DelegationsHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegationsHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Delegation`. */
export enum DelegationsOrderBy {
  AMOUNT_ASC = 'AMOUNT_ASC',
  AMOUNT_DESC = 'AMOUNT_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATOR_ID_ASC = 'DELEGATOR_ID_ASC',
  DELEGATOR_ID_DESC = 'DELEGATOR_ID_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ID_ASC = 'INDEXER_ID_ASC',
  INDEXER_ID_DESC = 'INDEXER_ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
}

export type Delegator = Node & {
  readonly __typename: 'Delegator';
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Delegation`. */
  readonly delegations: DelegationsConnection;
  readonly id: Scalars['String'];
  /** Reads and enables pagination through a set of `Indexer`. */
  readonly indexersByDelegationDelegatorIdAndIndexerId: DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyConnection;
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly totalDelegations: Scalars['JSON'];
};

export type DelegatordelegationsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegationsOrderBy>>;
};

export type DelegatorindexersByDelegationDelegatorIdAndIndexerIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexersOrderBy>>;
};

export type DelegatorAggregates = {
  readonly __typename: 'DelegatorAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<DelegatorAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<DelegatorDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<DelegatorMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<DelegatorMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<DelegatorStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<DelegatorStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<DelegatorSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<DelegatorVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<DelegatorVarianceSampleAggregates>;
};

export type DelegatorAverageAggregates = {
  readonly __typename: 'DelegatorAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegatorDistinctCountAggregates = {
  readonly __typename: 'DelegatorDistinctCountAggregates';
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of totalDelegations across the matching connection */
  readonly totalDelegations: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Delegator` object types. All fields are combined with a logical ‘and.’ */
export type DelegatorFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<DelegatorFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<DelegatorFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<DelegatorFilter>>;
  /** Filter by the object’s `totalDelegations` field. */
  readonly totalDelegations: InputMaybe<JSONFilter>;
};

/** A connection to a list of `Indexer` values, with data from `Delegation`. */
export type DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyConnection = {
  readonly __typename: 'DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<IndexerAggregates>;
  /** A list of edges which contains the `Indexer`, info from the `Delegation`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<IndexerAggregates>>;
  /** A list of `Indexer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Indexer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Indexer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Indexer` values, with data from `Delegation`. */
export type DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<IndexersGroupBy>;
    having: InputMaybe<IndexersHavingInput>;
  };

/** A `Indexer` edge in the connection, with data from `Delegation`. */
export type DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyEdge = {
  readonly __typename: 'DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Delegation`. */
  readonly delegations: DelegationsConnection;
  /** The `Indexer` at the end of the edge. */
  readonly node: Maybe<Indexer>;
};

/** A `Indexer` edge in the connection, with data from `Delegation`. */
export type DelegatorIndexersByDelegationDelegatorIdAndIndexerIdManyToManyEdgedelegationsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegationsOrderBy>>;
};

export type DelegatorMaxAggregates = {
  readonly __typename: 'DelegatorMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DelegatorMinAggregates = {
  readonly __typename: 'DelegatorMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DelegatorStddevPopulationAggregates = {
  readonly __typename: 'DelegatorStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegatorStddevSampleAggregates = {
  readonly __typename: 'DelegatorStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegatorSumAggregates = {
  readonly __typename: 'DelegatorSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type DelegatorVariancePopulationAggregates = {
  readonly __typename: 'DelegatorVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DelegatorVarianceSampleAggregates = {
  readonly __typename: 'DelegatorVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Delegator` values. */
export type DelegatorsConnection = {
  readonly __typename: 'DelegatorsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DelegatorAggregates>;
  /** A list of edges which contains the `Delegator` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DelegatorsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DelegatorAggregates>>;
  /** A list of `Delegator` objects. */
  readonly nodes: ReadonlyArray<Maybe<Delegator>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Delegator` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Delegator` values. */
export type DelegatorsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<DelegatorsGroupBy>;
  having: InputMaybe<DelegatorsHavingInput>;
};

/** A `Delegator` edge in the connection. */
export type DelegatorsEdge = {
  readonly __typename: 'DelegatorsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Delegator` at the end of the edge. */
  readonly node: Maybe<Delegator>;
};

/** Grouping methods for `Delegator` for usage during aggregation. */
export enum DelegatorsGroupBy {
  CREATED_BLOCK = 'CREATED_BLOCK',
  LAST_EVENT = 'LAST_EVENT',
  TOTAL_DELEGATIONS = 'TOTAL_DELEGATIONS',
}

export type DelegatorsHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Delegator` aggregates. */
export type DelegatorsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<DelegatorsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DelegatorsHavingInput>>;
  readonly average: InputMaybe<DelegatorsHavingAverageInput>;
  readonly distinctCount: InputMaybe<DelegatorsHavingDistinctCountInput>;
  readonly max: InputMaybe<DelegatorsHavingMaxInput>;
  readonly min: InputMaybe<DelegatorsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<DelegatorsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<DelegatorsHavingStddevSampleInput>;
  readonly sum: InputMaybe<DelegatorsHavingSumInput>;
  readonly variancePopulation: InputMaybe<DelegatorsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<DelegatorsHavingVarianceSampleInput>;
};

export type DelegatorsHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type DelegatorsHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Delegator`. */
export enum DelegatorsOrderBy {
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATIONS_AVERAGE_AMOUNT_ASC = 'DELEGATIONS_AVERAGE_AMOUNT_ASC',
  DELEGATIONS_AVERAGE_AMOUNT_DESC = 'DELEGATIONS_AVERAGE_AMOUNT_DESC',
  DELEGATIONS_AVERAGE_CREATED_BLOCK_ASC = 'DELEGATIONS_AVERAGE_CREATED_BLOCK_ASC',
  DELEGATIONS_AVERAGE_CREATED_BLOCK_DESC = 'DELEGATIONS_AVERAGE_CREATED_BLOCK_DESC',
  DELEGATIONS_AVERAGE_DELEGATOR_ID_ASC = 'DELEGATIONS_AVERAGE_DELEGATOR_ID_ASC',
  DELEGATIONS_AVERAGE_DELEGATOR_ID_DESC = 'DELEGATIONS_AVERAGE_DELEGATOR_ID_DESC',
  DELEGATIONS_AVERAGE_ID_ASC = 'DELEGATIONS_AVERAGE_ID_ASC',
  DELEGATIONS_AVERAGE_ID_DESC = 'DELEGATIONS_AVERAGE_ID_DESC',
  DELEGATIONS_AVERAGE_INDEXER_ID_ASC = 'DELEGATIONS_AVERAGE_INDEXER_ID_ASC',
  DELEGATIONS_AVERAGE_INDEXER_ID_DESC = 'DELEGATIONS_AVERAGE_INDEXER_ID_DESC',
  DELEGATIONS_AVERAGE_LAST_EVENT_ASC = 'DELEGATIONS_AVERAGE_LAST_EVENT_ASC',
  DELEGATIONS_AVERAGE_LAST_EVENT_DESC = 'DELEGATIONS_AVERAGE_LAST_EVENT_DESC',
  DELEGATIONS_COUNT_ASC = 'DELEGATIONS_COUNT_ASC',
  DELEGATIONS_COUNT_DESC = 'DELEGATIONS_COUNT_DESC',
  DELEGATIONS_DISTINCT_COUNT_AMOUNT_ASC = 'DELEGATIONS_DISTINCT_COUNT_AMOUNT_ASC',
  DELEGATIONS_DISTINCT_COUNT_AMOUNT_DESC = 'DELEGATIONS_DISTINCT_COUNT_AMOUNT_DESC',
  DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_ASC = 'DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_ASC',
  DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_DESC = 'DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_DESC',
  DELEGATIONS_MAX_AMOUNT_ASC = 'DELEGATIONS_MAX_AMOUNT_ASC',
  DELEGATIONS_MAX_AMOUNT_DESC = 'DELEGATIONS_MAX_AMOUNT_DESC',
  DELEGATIONS_MAX_CREATED_BLOCK_ASC = 'DELEGATIONS_MAX_CREATED_BLOCK_ASC',
  DELEGATIONS_MAX_CREATED_BLOCK_DESC = 'DELEGATIONS_MAX_CREATED_BLOCK_DESC',
  DELEGATIONS_MAX_DELEGATOR_ID_ASC = 'DELEGATIONS_MAX_DELEGATOR_ID_ASC',
  DELEGATIONS_MAX_DELEGATOR_ID_DESC = 'DELEGATIONS_MAX_DELEGATOR_ID_DESC',
  DELEGATIONS_MAX_ID_ASC = 'DELEGATIONS_MAX_ID_ASC',
  DELEGATIONS_MAX_ID_DESC = 'DELEGATIONS_MAX_ID_DESC',
  DELEGATIONS_MAX_INDEXER_ID_ASC = 'DELEGATIONS_MAX_INDEXER_ID_ASC',
  DELEGATIONS_MAX_INDEXER_ID_DESC = 'DELEGATIONS_MAX_INDEXER_ID_DESC',
  DELEGATIONS_MAX_LAST_EVENT_ASC = 'DELEGATIONS_MAX_LAST_EVENT_ASC',
  DELEGATIONS_MAX_LAST_EVENT_DESC = 'DELEGATIONS_MAX_LAST_EVENT_DESC',
  DELEGATIONS_MIN_AMOUNT_ASC = 'DELEGATIONS_MIN_AMOUNT_ASC',
  DELEGATIONS_MIN_AMOUNT_DESC = 'DELEGATIONS_MIN_AMOUNT_DESC',
  DELEGATIONS_MIN_CREATED_BLOCK_ASC = 'DELEGATIONS_MIN_CREATED_BLOCK_ASC',
  DELEGATIONS_MIN_CREATED_BLOCK_DESC = 'DELEGATIONS_MIN_CREATED_BLOCK_DESC',
  DELEGATIONS_MIN_DELEGATOR_ID_ASC = 'DELEGATIONS_MIN_DELEGATOR_ID_ASC',
  DELEGATIONS_MIN_DELEGATOR_ID_DESC = 'DELEGATIONS_MIN_DELEGATOR_ID_DESC',
  DELEGATIONS_MIN_ID_ASC = 'DELEGATIONS_MIN_ID_ASC',
  DELEGATIONS_MIN_ID_DESC = 'DELEGATIONS_MIN_ID_DESC',
  DELEGATIONS_MIN_INDEXER_ID_ASC = 'DELEGATIONS_MIN_INDEXER_ID_ASC',
  DELEGATIONS_MIN_INDEXER_ID_DESC = 'DELEGATIONS_MIN_INDEXER_ID_DESC',
  DELEGATIONS_MIN_LAST_EVENT_ASC = 'DELEGATIONS_MIN_LAST_EVENT_ASC',
  DELEGATIONS_MIN_LAST_EVENT_DESC = 'DELEGATIONS_MIN_LAST_EVENT_DESC',
  DELEGATIONS_STDDEV_POPULATION_AMOUNT_ASC = 'DELEGATIONS_STDDEV_POPULATION_AMOUNT_ASC',
  DELEGATIONS_STDDEV_POPULATION_AMOUNT_DESC = 'DELEGATIONS_STDDEV_POPULATION_AMOUNT_DESC',
  DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_ASC = 'DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_ASC',
  DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_DESC = 'DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_DESC',
  DELEGATIONS_STDDEV_SAMPLE_AMOUNT_ASC = 'DELEGATIONS_STDDEV_SAMPLE_AMOUNT_ASC',
  DELEGATIONS_STDDEV_SAMPLE_AMOUNT_DESC = 'DELEGATIONS_STDDEV_SAMPLE_AMOUNT_DESC',
  DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  DELEGATIONS_SUM_AMOUNT_ASC = 'DELEGATIONS_SUM_AMOUNT_ASC',
  DELEGATIONS_SUM_AMOUNT_DESC = 'DELEGATIONS_SUM_AMOUNT_DESC',
  DELEGATIONS_SUM_CREATED_BLOCK_ASC = 'DELEGATIONS_SUM_CREATED_BLOCK_ASC',
  DELEGATIONS_SUM_CREATED_BLOCK_DESC = 'DELEGATIONS_SUM_CREATED_BLOCK_DESC',
  DELEGATIONS_SUM_DELEGATOR_ID_ASC = 'DELEGATIONS_SUM_DELEGATOR_ID_ASC',
  DELEGATIONS_SUM_DELEGATOR_ID_DESC = 'DELEGATIONS_SUM_DELEGATOR_ID_DESC',
  DELEGATIONS_SUM_ID_ASC = 'DELEGATIONS_SUM_ID_ASC',
  DELEGATIONS_SUM_ID_DESC = 'DELEGATIONS_SUM_ID_DESC',
  DELEGATIONS_SUM_INDEXER_ID_ASC = 'DELEGATIONS_SUM_INDEXER_ID_ASC',
  DELEGATIONS_SUM_INDEXER_ID_DESC = 'DELEGATIONS_SUM_INDEXER_ID_DESC',
  DELEGATIONS_SUM_LAST_EVENT_ASC = 'DELEGATIONS_SUM_LAST_EVENT_ASC',
  DELEGATIONS_SUM_LAST_EVENT_DESC = 'DELEGATIONS_SUM_LAST_EVENT_DESC',
  DELEGATIONS_VARIANCE_POPULATION_AMOUNT_ASC = 'DELEGATIONS_VARIANCE_POPULATION_AMOUNT_ASC',
  DELEGATIONS_VARIANCE_POPULATION_AMOUNT_DESC = 'DELEGATIONS_VARIANCE_POPULATION_AMOUNT_DESC',
  DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  TOTAL_DELEGATIONS_ASC = 'TOTAL_DELEGATIONS_ASC',
  TOTAL_DELEGATIONS_DESC = 'TOTAL_DELEGATIONS_DESC',
}

export type Deployment = Node & {
  readonly __typename: 'Deployment';
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly createdTimestamp: Scalars['Datetime'];
  readonly id: Scalars['String'];
  /** Reads and enables pagination through a set of `DeploymentIndexer`. */
  readonly indexers: DeploymentIndexersConnection;
  /** Reads and enables pagination through a set of `Indexer`. */
  readonly indexersByDeploymentIndexerDeploymentIdAndIndexerId: DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyConnection;
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offers: OffersConnection;
  /** Reads and enables pagination through a set of `PlanTemplate`. */
  readonly planTemplatesByOfferDeploymentIdAndPlanTemplateId: DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyConnection;
  /** Reads and enables pagination through a set of `PlanTemplate`. */
  readonly planTemplatesByPlanDeploymentIdAndPlanTemplateId: DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyConnection;
  /** Reads and enables pagination through a set of `PlanTemplate`. */
  readonly planTemplatesByServiceAgreementDeploymentIdAndPlanTemplateId: DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Plan`. */
  readonly plans: PlansConnection;
  /** Reads a single `Project` that is related to this `Deployment`. */
  readonly project: Maybe<Project>;
  readonly projectId: Scalars['String'];
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreements: ServiceAgreementsConnection;
  readonly version: Scalars['String'];
};

export type DeploymentindexersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentIndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentIndexersOrderBy>>;
};

export type DeploymentindexersByDeploymentIndexerDeploymentIdAndIndexerIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexersOrderBy>>;
};

export type DeploymentoffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

export type DeploymentplanTemplatesByOfferDeploymentIdAndPlanTemplateIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanTemplateFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlanTemplatesOrderBy>>;
};

export type DeploymentplanTemplatesByPlanDeploymentIdAndPlanTemplateIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanTemplateFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlanTemplatesOrderBy>>;
};

export type DeploymentplanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanTemplateFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlanTemplatesOrderBy>>;
};

export type DeploymentplansArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlansOrderBy>>;
};

export type DeploymentserviceAgreementsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ServiceAgreementFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
};

export type DeploymentAggregates = {
  readonly __typename: 'DeploymentAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<DeploymentAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<DeploymentDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<DeploymentMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<DeploymentMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<DeploymentStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<DeploymentStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<DeploymentSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<DeploymentVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<DeploymentVarianceSampleAggregates>;
};

export type DeploymentAverageAggregates = {
  readonly __typename: 'DeploymentAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentDistinctCountAggregates = {
  readonly __typename: 'DeploymentDistinctCountAggregates';
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdTimestamp across the matching connection */
  readonly createdTimestamp: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of projectId across the matching connection */
  readonly projectId: Maybe<Scalars['BigInt']>;
  /** Distinct count of version across the matching connection */
  readonly version: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Deployment` object types. All fields are combined with a logical ‘and.’ */
export type DeploymentFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<DeploymentFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdTimestamp` field. */
  readonly createdTimestamp: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<DeploymentFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<DeploymentFilter>>;
  /** Filter by the object’s `projectId` field. */
  readonly projectId: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  readonly version: InputMaybe<StringFilter>;
};

export type DeploymentIndexer = Node & {
  readonly __typename: 'DeploymentIndexer';
  readonly blockHeight: Scalars['BigFloat'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads a single `Deployment` that is related to this `DeploymentIndexer`. */
  readonly deployment: Maybe<Deployment>;
  readonly deploymentId: Scalars['String'];
  readonly id: Scalars['String'];
  /** Reads a single `Indexer` that is related to this `DeploymentIndexer`. */
  readonly indexer: Maybe<Indexer>;
  readonly indexerId: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly mmrRoot: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly status: Status;
  readonly timestamp: Maybe<Scalars['Datetime']>;
};

export type DeploymentIndexerAggregates = {
  readonly __typename: 'DeploymentIndexerAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<DeploymentIndexerAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<DeploymentIndexerDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<DeploymentIndexerMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<DeploymentIndexerMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<DeploymentIndexerStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<DeploymentIndexerStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<DeploymentIndexerSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<DeploymentIndexerVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<DeploymentIndexerVarianceSampleAggregates>;
};

export type DeploymentIndexerAverageAggregates = {
  readonly __typename: 'DeploymentIndexerAverageAggregates';
  /** Mean average of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentIndexerDistinctCountAggregates = {
  readonly __typename: 'DeploymentIndexerDistinctCountAggregates';
  /** Distinct count of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of deploymentId across the matching connection */
  readonly deploymentId: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerId across the matching connection */
  readonly indexerId: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of mmrRoot across the matching connection */
  readonly mmrRoot: Maybe<Scalars['BigInt']>;
  /** Distinct count of status across the matching connection */
  readonly status: Maybe<Scalars['BigInt']>;
  /** Distinct count of timestamp across the matching connection */
  readonly timestamp: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `DeploymentIndexer` object types. All fields are combined with a logical ‘and.’ */
export type DeploymentIndexerFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<DeploymentIndexerFilter>>;
  /** Filter by the object’s `blockHeight` field. */
  readonly blockHeight: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `deploymentId` field. */
  readonly deploymentId: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerId` field. */
  readonly indexerId: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `mmrRoot` field. */
  readonly mmrRoot: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<DeploymentIndexerFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<DeploymentIndexerFilter>>;
  /** Filter by the object’s `status` field. */
  readonly status: InputMaybe<StatusFilter>;
  /** Filter by the object’s `timestamp` field. */
  readonly timestamp: InputMaybe<DatetimeFilter>;
};

export type DeploymentIndexerMaxAggregates = {
  readonly __typename: 'DeploymentIndexerMaxAggregates';
  /** Maximum of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DeploymentIndexerMinAggregates = {
  readonly __typename: 'DeploymentIndexerMinAggregates';
  /** Minimum of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DeploymentIndexerStddevPopulationAggregates = {
  readonly __typename: 'DeploymentIndexerStddevPopulationAggregates';
  /** Population standard deviation of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentIndexerStddevSampleAggregates = {
  readonly __typename: 'DeploymentIndexerStddevSampleAggregates';
  /** Sample standard deviation of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentIndexerSumAggregates = {
  readonly __typename: 'DeploymentIndexerSumAggregates';
  /** Sum of blockHeight across the matching connection */
  readonly blockHeight: Scalars['BigFloat'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type DeploymentIndexerVariancePopulationAggregates = {
  readonly __typename: 'DeploymentIndexerVariancePopulationAggregates';
  /** Population variance of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentIndexerVarianceSampleAggregates = {
  readonly __typename: 'DeploymentIndexerVarianceSampleAggregates';
  /** Sample variance of blockHeight across the matching connection */
  readonly blockHeight: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Indexer` values, with data from `DeploymentIndexer`. */
export type DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyConnection = {
  readonly __typename: 'DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<IndexerAggregates>;
  /** A list of edges which contains the `Indexer`, info from the `DeploymentIndexer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<IndexerAggregates>>;
  /** A list of `Indexer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Indexer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Indexer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Indexer` values, with data from `DeploymentIndexer`. */
export type DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<IndexersGroupBy>;
    having: InputMaybe<IndexersHavingInput>;
  };

/** A `Indexer` edge in the connection, with data from `DeploymentIndexer`. */
export type DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyEdge = {
  readonly __typename: 'DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `DeploymentIndexer`. */
  readonly deploymentIndexers: DeploymentIndexersConnection;
  /** The `Indexer` at the end of the edge. */
  readonly node: Maybe<Indexer>;
};

/** A `Indexer` edge in the connection, with data from `DeploymentIndexer`. */
export type DeploymentIndexersByDeploymentIndexerDeploymentIdAndIndexerIdManyToManyEdgedeploymentIndexersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<DeploymentIndexerFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<DeploymentIndexersOrderBy>>;
  };

/** A connection to a list of `DeploymentIndexer` values. */
export type DeploymentIndexersConnection = {
  readonly __typename: 'DeploymentIndexersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DeploymentIndexerAggregates>;
  /** A list of edges which contains the `DeploymentIndexer` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeploymentIndexersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentIndexerAggregates>>;
  /** A list of `DeploymentIndexer` objects. */
  readonly nodes: ReadonlyArray<Maybe<DeploymentIndexer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `DeploymentIndexer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `DeploymentIndexer` values. */
export type DeploymentIndexersConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<DeploymentIndexersGroupBy>;
  having: InputMaybe<DeploymentIndexersHavingInput>;
};

/** A `DeploymentIndexer` edge in the connection. */
export type DeploymentIndexersEdge = {
  readonly __typename: 'DeploymentIndexersEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `DeploymentIndexer` at the end of the edge. */
  readonly node: Maybe<DeploymentIndexer>;
};

/** Grouping methods for `DeploymentIndexer` for usage during aggregation. */
export enum DeploymentIndexersGroupBy {
  BLOCK_HEIGHT = 'BLOCK_HEIGHT',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DEPLOYMENT_ID = 'DEPLOYMENT_ID',
  INDEXER_ID = 'INDEXER_ID',
  LAST_EVENT = 'LAST_EVENT',
  MMR_ROOT = 'MMR_ROOT',
  STATUS = 'STATUS',
  TIMESTAMP = 'TIMESTAMP',
  TIMESTAMP_TRUNCATED_TO_DAY = 'TIMESTAMP_TRUNCATED_TO_DAY',
  TIMESTAMP_TRUNCATED_TO_HOUR = 'TIMESTAMP_TRUNCATED_TO_HOUR',
}

export type DeploymentIndexersHavingAverageInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingDistinctCountInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `DeploymentIndexer` aggregates. */
export type DeploymentIndexersHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<DeploymentIndexersHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DeploymentIndexersHavingInput>>;
  readonly average: InputMaybe<DeploymentIndexersHavingAverageInput>;
  readonly distinctCount: InputMaybe<DeploymentIndexersHavingDistinctCountInput>;
  readonly max: InputMaybe<DeploymentIndexersHavingMaxInput>;
  readonly min: InputMaybe<DeploymentIndexersHavingMinInput>;
  readonly stddevPopulation: InputMaybe<DeploymentIndexersHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<DeploymentIndexersHavingStddevSampleInput>;
  readonly sum: InputMaybe<DeploymentIndexersHavingSumInput>;
  readonly variancePopulation: InputMaybe<DeploymentIndexersHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<DeploymentIndexersHavingVarianceSampleInput>;
};

export type DeploymentIndexersHavingMaxInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingMinInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingStddevPopulationInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingStddevSampleInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingSumInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingVariancePopulationInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentIndexersHavingVarianceSampleInput = {
  readonly blockHeight: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly timestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `DeploymentIndexer`. */
export enum DeploymentIndexersOrderBy {
  BLOCK_HEIGHT_ASC = 'BLOCK_HEIGHT_ASC',
  BLOCK_HEIGHT_DESC = 'BLOCK_HEIGHT_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DEPLOYMENT_ID_ASC = 'DEPLOYMENT_ID_ASC',
  DEPLOYMENT_ID_DESC = 'DEPLOYMENT_ID_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ID_ASC = 'INDEXER_ID_ASC',
  INDEXER_ID_DESC = 'INDEXER_ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  MMR_ROOT_ASC = 'MMR_ROOT_ASC',
  MMR_ROOT_DESC = 'MMR_ROOT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  STATUS_ASC = 'STATUS_ASC',
  STATUS_DESC = 'STATUS_DESC',
  TIMESTAMP_ASC = 'TIMESTAMP_ASC',
  TIMESTAMP_DESC = 'TIMESTAMP_DESC',
}

export type DeploymentMaxAggregates = {
  readonly __typename: 'DeploymentMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type DeploymentMinAggregates = {
  readonly __typename: 'DeploymentMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

/** A connection to a list of `PlanTemplate` values, with data from `Offer`. */
export type DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyConnection = {
  readonly __typename: 'DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<PlanTemplateAggregates>;
  /** A list of edges which contains the `PlanTemplate`, info from the `Offer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<PlanTemplateAggregates>>;
  /** A list of `PlanTemplate` objects. */
  readonly nodes: ReadonlyArray<Maybe<PlanTemplate>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `PlanTemplate` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `PlanTemplate` values, with data from `Offer`. */
export type DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<PlanTemplatesGroupBy>;
    having: InputMaybe<PlanTemplatesHavingInput>;
  };

/** A `PlanTemplate` edge in the connection, with data from `Offer`. */
export type DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyEdge = {
  readonly __typename: 'DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `PlanTemplate` at the end of the edge. */
  readonly node: Maybe<PlanTemplate>;
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offers: OffersConnection;
};

/** A `PlanTemplate` edge in the connection, with data from `Offer`. */
export type DeploymentPlanTemplatesByOfferDeploymentIdAndPlanTemplateIdManyToManyEdgeoffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

/** A connection to a list of `PlanTemplate` values, with data from `Plan`. */
export type DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyConnection = {
  readonly __typename: 'DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<PlanTemplateAggregates>;
  /** A list of edges which contains the `PlanTemplate`, info from the `Plan`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<PlanTemplateAggregates>>;
  /** A list of `PlanTemplate` objects. */
  readonly nodes: ReadonlyArray<Maybe<PlanTemplate>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `PlanTemplate` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `PlanTemplate` values, with data from `Plan`. */
export type DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<PlanTemplatesGroupBy>;
    having: InputMaybe<PlanTemplatesHavingInput>;
  };

/** A `PlanTemplate` edge in the connection, with data from `Plan`. */
export type DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyEdge = {
  readonly __typename: 'DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `PlanTemplate` at the end of the edge. */
  readonly node: Maybe<PlanTemplate>;
  /** Reads and enables pagination through a set of `Plan`. */
  readonly plans: PlansConnection;
};

/** A `PlanTemplate` edge in the connection, with data from `Plan`. */
export type DeploymentPlanTemplatesByPlanDeploymentIdAndPlanTemplateIdManyToManyEdgeplansArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlansOrderBy>>;
};

/** A connection to a list of `PlanTemplate` values, with data from `ServiceAgreement`. */
export type DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyConnection =
  {
    readonly __typename: 'DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<PlanTemplateAggregates>;
    /** A list of edges which contains the `PlanTemplate`, info from the `ServiceAgreement`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<PlanTemplateAggregates>>;
    /** A list of `PlanTemplate` objects. */
    readonly nodes: ReadonlyArray<Maybe<PlanTemplate>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `PlanTemplate` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `PlanTemplate` values, with data from `ServiceAgreement`. */
export type DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<PlanTemplatesGroupBy>;
    having: InputMaybe<PlanTemplatesHavingInput>;
  };

/** A `PlanTemplate` edge in the connection, with data from `ServiceAgreement`. */
export type DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyEdge = {
  readonly __typename: 'DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `PlanTemplate` at the end of the edge. */
  readonly node: Maybe<PlanTemplate>;
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreements: ServiceAgreementsConnection;
};

/** A `PlanTemplate` edge in the connection, with data from `ServiceAgreement`. */
export type DeploymentPlanTemplatesByServiceAgreementDeploymentIdAndPlanTemplateIdManyToManyEdgeserviceAgreementsArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<ServiceAgreementFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
  };

export type DeploymentStddevPopulationAggregates = {
  readonly __typename: 'DeploymentStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentStddevSampleAggregates = {
  readonly __typename: 'DeploymentStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentSumAggregates = {
  readonly __typename: 'DeploymentSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type DeploymentVariancePopulationAggregates = {
  readonly __typename: 'DeploymentVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type DeploymentVarianceSampleAggregates = {
  readonly __typename: 'DeploymentVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Deployment` values. */
export type DeploymentsConnection = {
  readonly __typename: 'DeploymentsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DeploymentAggregates>;
  /** A list of edges which contains the `Deployment` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeploymentsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentAggregates>>;
  /** A list of `Deployment` objects. */
  readonly nodes: ReadonlyArray<Maybe<Deployment>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Deployment` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Deployment` values. */
export type DeploymentsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<DeploymentsGroupBy>;
  having: InputMaybe<DeploymentsHavingInput>;
};

/** A `Deployment` edge in the connection. */
export type DeploymentsEdge = {
  readonly __typename: 'DeploymentsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Deployment` at the end of the edge. */
  readonly node: Maybe<Deployment>;
};

/** Grouping methods for `Deployment` for usage during aggregation. */
export enum DeploymentsGroupBy {
  CREATED_BLOCK = 'CREATED_BLOCK',
  CREATED_TIMESTAMP = 'CREATED_TIMESTAMP',
  CREATED_TIMESTAMP_TRUNCATED_TO_DAY = 'CREATED_TIMESTAMP_TRUNCATED_TO_DAY',
  CREATED_TIMESTAMP_TRUNCATED_TO_HOUR = 'CREATED_TIMESTAMP_TRUNCATED_TO_HOUR',
  LAST_EVENT = 'LAST_EVENT',
  PROJECT_ID = 'PROJECT_ID',
  VERSION = 'VERSION',
}

export type DeploymentsHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Deployment` aggregates. */
export type DeploymentsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<DeploymentsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DeploymentsHavingInput>>;
  readonly average: InputMaybe<DeploymentsHavingAverageInput>;
  readonly distinctCount: InputMaybe<DeploymentsHavingDistinctCountInput>;
  readonly max: InputMaybe<DeploymentsHavingMaxInput>;
  readonly min: InputMaybe<DeploymentsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<DeploymentsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<DeploymentsHavingStddevSampleInput>;
  readonly sum: InputMaybe<DeploymentsHavingSumInput>;
  readonly variancePopulation: InputMaybe<DeploymentsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<DeploymentsHavingVarianceSampleInput>;
};

export type DeploymentsHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type DeploymentsHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `Deployment`. */
export enum DeploymentsOrderBy {
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  CREATED_TIMESTAMP_ASC = 'CREATED_TIMESTAMP_ASC',
  CREATED_TIMESTAMP_DESC = 'CREATED_TIMESTAMP_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXERS_AVERAGE_BLOCK_HEIGHT_ASC = 'INDEXERS_AVERAGE_BLOCK_HEIGHT_ASC',
  INDEXERS_AVERAGE_BLOCK_HEIGHT_DESC = 'INDEXERS_AVERAGE_BLOCK_HEIGHT_DESC',
  INDEXERS_AVERAGE_CREATED_BLOCK_ASC = 'INDEXERS_AVERAGE_CREATED_BLOCK_ASC',
  INDEXERS_AVERAGE_CREATED_BLOCK_DESC = 'INDEXERS_AVERAGE_CREATED_BLOCK_DESC',
  INDEXERS_AVERAGE_DEPLOYMENT_ID_ASC = 'INDEXERS_AVERAGE_DEPLOYMENT_ID_ASC',
  INDEXERS_AVERAGE_DEPLOYMENT_ID_DESC = 'INDEXERS_AVERAGE_DEPLOYMENT_ID_DESC',
  INDEXERS_AVERAGE_ID_ASC = 'INDEXERS_AVERAGE_ID_ASC',
  INDEXERS_AVERAGE_ID_DESC = 'INDEXERS_AVERAGE_ID_DESC',
  INDEXERS_AVERAGE_INDEXER_ID_ASC = 'INDEXERS_AVERAGE_INDEXER_ID_ASC',
  INDEXERS_AVERAGE_INDEXER_ID_DESC = 'INDEXERS_AVERAGE_INDEXER_ID_DESC',
  INDEXERS_AVERAGE_LAST_EVENT_ASC = 'INDEXERS_AVERAGE_LAST_EVENT_ASC',
  INDEXERS_AVERAGE_LAST_EVENT_DESC = 'INDEXERS_AVERAGE_LAST_EVENT_DESC',
  INDEXERS_AVERAGE_MMR_ROOT_ASC = 'INDEXERS_AVERAGE_MMR_ROOT_ASC',
  INDEXERS_AVERAGE_MMR_ROOT_DESC = 'INDEXERS_AVERAGE_MMR_ROOT_DESC',
  INDEXERS_AVERAGE_STATUS_ASC = 'INDEXERS_AVERAGE_STATUS_ASC',
  INDEXERS_AVERAGE_STATUS_DESC = 'INDEXERS_AVERAGE_STATUS_DESC',
  INDEXERS_AVERAGE_TIMESTAMP_ASC = 'INDEXERS_AVERAGE_TIMESTAMP_ASC',
  INDEXERS_AVERAGE_TIMESTAMP_DESC = 'INDEXERS_AVERAGE_TIMESTAMP_DESC',
  INDEXERS_COUNT_ASC = 'INDEXERS_COUNT_ASC',
  INDEXERS_COUNT_DESC = 'INDEXERS_COUNT_DESC',
  INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_ASC = 'INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_ASC',
  INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_DESC = 'INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_DESC',
  INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  INDEXERS_DISTINCT_COUNT_ID_ASC = 'INDEXERS_DISTINCT_COUNT_ID_ASC',
  INDEXERS_DISTINCT_COUNT_ID_DESC = 'INDEXERS_DISTINCT_COUNT_ID_DESC',
  INDEXERS_DISTINCT_COUNT_INDEXER_ID_ASC = 'INDEXERS_DISTINCT_COUNT_INDEXER_ID_ASC',
  INDEXERS_DISTINCT_COUNT_INDEXER_ID_DESC = 'INDEXERS_DISTINCT_COUNT_INDEXER_ID_DESC',
  INDEXERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'INDEXERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  INDEXERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'INDEXERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  INDEXERS_DISTINCT_COUNT_MMR_ROOT_ASC = 'INDEXERS_DISTINCT_COUNT_MMR_ROOT_ASC',
  INDEXERS_DISTINCT_COUNT_MMR_ROOT_DESC = 'INDEXERS_DISTINCT_COUNT_MMR_ROOT_DESC',
  INDEXERS_DISTINCT_COUNT_STATUS_ASC = 'INDEXERS_DISTINCT_COUNT_STATUS_ASC',
  INDEXERS_DISTINCT_COUNT_STATUS_DESC = 'INDEXERS_DISTINCT_COUNT_STATUS_DESC',
  INDEXERS_DISTINCT_COUNT_TIMESTAMP_ASC = 'INDEXERS_DISTINCT_COUNT_TIMESTAMP_ASC',
  INDEXERS_DISTINCT_COUNT_TIMESTAMP_DESC = 'INDEXERS_DISTINCT_COUNT_TIMESTAMP_DESC',
  INDEXERS_MAX_BLOCK_HEIGHT_ASC = 'INDEXERS_MAX_BLOCK_HEIGHT_ASC',
  INDEXERS_MAX_BLOCK_HEIGHT_DESC = 'INDEXERS_MAX_BLOCK_HEIGHT_DESC',
  INDEXERS_MAX_CREATED_BLOCK_ASC = 'INDEXERS_MAX_CREATED_BLOCK_ASC',
  INDEXERS_MAX_CREATED_BLOCK_DESC = 'INDEXERS_MAX_CREATED_BLOCK_DESC',
  INDEXERS_MAX_DEPLOYMENT_ID_ASC = 'INDEXERS_MAX_DEPLOYMENT_ID_ASC',
  INDEXERS_MAX_DEPLOYMENT_ID_DESC = 'INDEXERS_MAX_DEPLOYMENT_ID_DESC',
  INDEXERS_MAX_ID_ASC = 'INDEXERS_MAX_ID_ASC',
  INDEXERS_MAX_ID_DESC = 'INDEXERS_MAX_ID_DESC',
  INDEXERS_MAX_INDEXER_ID_ASC = 'INDEXERS_MAX_INDEXER_ID_ASC',
  INDEXERS_MAX_INDEXER_ID_DESC = 'INDEXERS_MAX_INDEXER_ID_DESC',
  INDEXERS_MAX_LAST_EVENT_ASC = 'INDEXERS_MAX_LAST_EVENT_ASC',
  INDEXERS_MAX_LAST_EVENT_DESC = 'INDEXERS_MAX_LAST_EVENT_DESC',
  INDEXERS_MAX_MMR_ROOT_ASC = 'INDEXERS_MAX_MMR_ROOT_ASC',
  INDEXERS_MAX_MMR_ROOT_DESC = 'INDEXERS_MAX_MMR_ROOT_DESC',
  INDEXERS_MAX_STATUS_ASC = 'INDEXERS_MAX_STATUS_ASC',
  INDEXERS_MAX_STATUS_DESC = 'INDEXERS_MAX_STATUS_DESC',
  INDEXERS_MAX_TIMESTAMP_ASC = 'INDEXERS_MAX_TIMESTAMP_ASC',
  INDEXERS_MAX_TIMESTAMP_DESC = 'INDEXERS_MAX_TIMESTAMP_DESC',
  INDEXERS_MIN_BLOCK_HEIGHT_ASC = 'INDEXERS_MIN_BLOCK_HEIGHT_ASC',
  INDEXERS_MIN_BLOCK_HEIGHT_DESC = 'INDEXERS_MIN_BLOCK_HEIGHT_DESC',
  INDEXERS_MIN_CREATED_BLOCK_ASC = 'INDEXERS_MIN_CREATED_BLOCK_ASC',
  INDEXERS_MIN_CREATED_BLOCK_DESC = 'INDEXERS_MIN_CREATED_BLOCK_DESC',
  INDEXERS_MIN_DEPLOYMENT_ID_ASC = 'INDEXERS_MIN_DEPLOYMENT_ID_ASC',
  INDEXERS_MIN_DEPLOYMENT_ID_DESC = 'INDEXERS_MIN_DEPLOYMENT_ID_DESC',
  INDEXERS_MIN_ID_ASC = 'INDEXERS_MIN_ID_ASC',
  INDEXERS_MIN_ID_DESC = 'INDEXERS_MIN_ID_DESC',
  INDEXERS_MIN_INDEXER_ID_ASC = 'INDEXERS_MIN_INDEXER_ID_ASC',
  INDEXERS_MIN_INDEXER_ID_DESC = 'INDEXERS_MIN_INDEXER_ID_DESC',
  INDEXERS_MIN_LAST_EVENT_ASC = 'INDEXERS_MIN_LAST_EVENT_ASC',
  INDEXERS_MIN_LAST_EVENT_DESC = 'INDEXERS_MIN_LAST_EVENT_DESC',
  INDEXERS_MIN_MMR_ROOT_ASC = 'INDEXERS_MIN_MMR_ROOT_ASC',
  INDEXERS_MIN_MMR_ROOT_DESC = 'INDEXERS_MIN_MMR_ROOT_DESC',
  INDEXERS_MIN_STATUS_ASC = 'INDEXERS_MIN_STATUS_ASC',
  INDEXERS_MIN_STATUS_DESC = 'INDEXERS_MIN_STATUS_DESC',
  INDEXERS_MIN_TIMESTAMP_ASC = 'INDEXERS_MIN_TIMESTAMP_ASC',
  INDEXERS_MIN_TIMESTAMP_DESC = 'INDEXERS_MIN_TIMESTAMP_DESC',
  INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_ASC = 'INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_ASC',
  INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_DESC = 'INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_DESC',
  INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  INDEXERS_STDDEV_POPULATION_ID_ASC = 'INDEXERS_STDDEV_POPULATION_ID_ASC',
  INDEXERS_STDDEV_POPULATION_ID_DESC = 'INDEXERS_STDDEV_POPULATION_ID_DESC',
  INDEXERS_STDDEV_POPULATION_INDEXER_ID_ASC = 'INDEXERS_STDDEV_POPULATION_INDEXER_ID_ASC',
  INDEXERS_STDDEV_POPULATION_INDEXER_ID_DESC = 'INDEXERS_STDDEV_POPULATION_INDEXER_ID_DESC',
  INDEXERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'INDEXERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  INDEXERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'INDEXERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  INDEXERS_STDDEV_POPULATION_MMR_ROOT_ASC = 'INDEXERS_STDDEV_POPULATION_MMR_ROOT_ASC',
  INDEXERS_STDDEV_POPULATION_MMR_ROOT_DESC = 'INDEXERS_STDDEV_POPULATION_MMR_ROOT_DESC',
  INDEXERS_STDDEV_POPULATION_STATUS_ASC = 'INDEXERS_STDDEV_POPULATION_STATUS_ASC',
  INDEXERS_STDDEV_POPULATION_STATUS_DESC = 'INDEXERS_STDDEV_POPULATION_STATUS_DESC',
  INDEXERS_STDDEV_POPULATION_TIMESTAMP_ASC = 'INDEXERS_STDDEV_POPULATION_TIMESTAMP_ASC',
  INDEXERS_STDDEV_POPULATION_TIMESTAMP_DESC = 'INDEXERS_STDDEV_POPULATION_TIMESTAMP_DESC',
  INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_ASC = 'INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_ASC',
  INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_DESC = 'INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_DESC',
  INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  INDEXERS_STDDEV_SAMPLE_ID_ASC = 'INDEXERS_STDDEV_SAMPLE_ID_ASC',
  INDEXERS_STDDEV_SAMPLE_ID_DESC = 'INDEXERS_STDDEV_SAMPLE_ID_DESC',
  INDEXERS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'INDEXERS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  INDEXERS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'INDEXERS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  INDEXERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'INDEXERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  INDEXERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'INDEXERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  INDEXERS_STDDEV_SAMPLE_MMR_ROOT_ASC = 'INDEXERS_STDDEV_SAMPLE_MMR_ROOT_ASC',
  INDEXERS_STDDEV_SAMPLE_MMR_ROOT_DESC = 'INDEXERS_STDDEV_SAMPLE_MMR_ROOT_DESC',
  INDEXERS_STDDEV_SAMPLE_STATUS_ASC = 'INDEXERS_STDDEV_SAMPLE_STATUS_ASC',
  INDEXERS_STDDEV_SAMPLE_STATUS_DESC = 'INDEXERS_STDDEV_SAMPLE_STATUS_DESC',
  INDEXERS_STDDEV_SAMPLE_TIMESTAMP_ASC = 'INDEXERS_STDDEV_SAMPLE_TIMESTAMP_ASC',
  INDEXERS_STDDEV_SAMPLE_TIMESTAMP_DESC = 'INDEXERS_STDDEV_SAMPLE_TIMESTAMP_DESC',
  INDEXERS_SUM_BLOCK_HEIGHT_ASC = 'INDEXERS_SUM_BLOCK_HEIGHT_ASC',
  INDEXERS_SUM_BLOCK_HEIGHT_DESC = 'INDEXERS_SUM_BLOCK_HEIGHT_DESC',
  INDEXERS_SUM_CREATED_BLOCK_ASC = 'INDEXERS_SUM_CREATED_BLOCK_ASC',
  INDEXERS_SUM_CREATED_BLOCK_DESC = 'INDEXERS_SUM_CREATED_BLOCK_DESC',
  INDEXERS_SUM_DEPLOYMENT_ID_ASC = 'INDEXERS_SUM_DEPLOYMENT_ID_ASC',
  INDEXERS_SUM_DEPLOYMENT_ID_DESC = 'INDEXERS_SUM_DEPLOYMENT_ID_DESC',
  INDEXERS_SUM_ID_ASC = 'INDEXERS_SUM_ID_ASC',
  INDEXERS_SUM_ID_DESC = 'INDEXERS_SUM_ID_DESC',
  INDEXERS_SUM_INDEXER_ID_ASC = 'INDEXERS_SUM_INDEXER_ID_ASC',
  INDEXERS_SUM_INDEXER_ID_DESC = 'INDEXERS_SUM_INDEXER_ID_DESC',
  INDEXERS_SUM_LAST_EVENT_ASC = 'INDEXERS_SUM_LAST_EVENT_ASC',
  INDEXERS_SUM_LAST_EVENT_DESC = 'INDEXERS_SUM_LAST_EVENT_DESC',
  INDEXERS_SUM_MMR_ROOT_ASC = 'INDEXERS_SUM_MMR_ROOT_ASC',
  INDEXERS_SUM_MMR_ROOT_DESC = 'INDEXERS_SUM_MMR_ROOT_DESC',
  INDEXERS_SUM_STATUS_ASC = 'INDEXERS_SUM_STATUS_ASC',
  INDEXERS_SUM_STATUS_DESC = 'INDEXERS_SUM_STATUS_DESC',
  INDEXERS_SUM_TIMESTAMP_ASC = 'INDEXERS_SUM_TIMESTAMP_ASC',
  INDEXERS_SUM_TIMESTAMP_DESC = 'INDEXERS_SUM_TIMESTAMP_DESC',
  INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_ASC = 'INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_ASC',
  INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_DESC = 'INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_DESC',
  INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  INDEXERS_VARIANCE_POPULATION_ID_ASC = 'INDEXERS_VARIANCE_POPULATION_ID_ASC',
  INDEXERS_VARIANCE_POPULATION_ID_DESC = 'INDEXERS_VARIANCE_POPULATION_ID_DESC',
  INDEXERS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'INDEXERS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  INDEXERS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'INDEXERS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  INDEXERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'INDEXERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  INDEXERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'INDEXERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  INDEXERS_VARIANCE_POPULATION_MMR_ROOT_ASC = 'INDEXERS_VARIANCE_POPULATION_MMR_ROOT_ASC',
  INDEXERS_VARIANCE_POPULATION_MMR_ROOT_DESC = 'INDEXERS_VARIANCE_POPULATION_MMR_ROOT_DESC',
  INDEXERS_VARIANCE_POPULATION_STATUS_ASC = 'INDEXERS_VARIANCE_POPULATION_STATUS_ASC',
  INDEXERS_VARIANCE_POPULATION_STATUS_DESC = 'INDEXERS_VARIANCE_POPULATION_STATUS_DESC',
  INDEXERS_VARIANCE_POPULATION_TIMESTAMP_ASC = 'INDEXERS_VARIANCE_POPULATION_TIMESTAMP_ASC',
  INDEXERS_VARIANCE_POPULATION_TIMESTAMP_DESC = 'INDEXERS_VARIANCE_POPULATION_TIMESTAMP_DESC',
  INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_ASC = 'INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_ASC',
  INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_DESC = 'INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_DESC',
  INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  INDEXERS_VARIANCE_SAMPLE_ID_ASC = 'INDEXERS_VARIANCE_SAMPLE_ID_ASC',
  INDEXERS_VARIANCE_SAMPLE_ID_DESC = 'INDEXERS_VARIANCE_SAMPLE_ID_DESC',
  INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_ASC = 'INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_ASC',
  INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_DESC = 'INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_DESC',
  INDEXERS_VARIANCE_SAMPLE_STATUS_ASC = 'INDEXERS_VARIANCE_SAMPLE_STATUS_ASC',
  INDEXERS_VARIANCE_SAMPLE_STATUS_DESC = 'INDEXERS_VARIANCE_SAMPLE_STATUS_DESC',
  INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_ASC = 'INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_ASC',
  INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_DESC = 'INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  OFFERS_AVERAGE_ACCEPTED_ASC = 'OFFERS_AVERAGE_ACCEPTED_ASC',
  OFFERS_AVERAGE_ACCEPTED_DESC = 'OFFERS_AVERAGE_ACCEPTED_DESC',
  OFFERS_AVERAGE_CONSUMER_ASC = 'OFFERS_AVERAGE_CONSUMER_ASC',
  OFFERS_AVERAGE_CONSUMER_DESC = 'OFFERS_AVERAGE_CONSUMER_DESC',
  OFFERS_AVERAGE_CREATED_BLOCK_ASC = 'OFFERS_AVERAGE_CREATED_BLOCK_ASC',
  OFFERS_AVERAGE_CREATED_BLOCK_DESC = 'OFFERS_AVERAGE_CREATED_BLOCK_DESC',
  OFFERS_AVERAGE_DEPLOYMENT_ID_ASC = 'OFFERS_AVERAGE_DEPLOYMENT_ID_ASC',
  OFFERS_AVERAGE_DEPLOYMENT_ID_DESC = 'OFFERS_AVERAGE_DEPLOYMENT_ID_DESC',
  OFFERS_AVERAGE_DEPOSIT_ASC = 'OFFERS_AVERAGE_DEPOSIT_ASC',
  OFFERS_AVERAGE_DEPOSIT_DESC = 'OFFERS_AVERAGE_DEPOSIT_DESC',
  OFFERS_AVERAGE_EXPIRE_DATE_ASC = 'OFFERS_AVERAGE_EXPIRE_DATE_ASC',
  OFFERS_AVERAGE_EXPIRE_DATE_DESC = 'OFFERS_AVERAGE_EXPIRE_DATE_DESC',
  OFFERS_AVERAGE_ID_ASC = 'OFFERS_AVERAGE_ID_ASC',
  OFFERS_AVERAGE_ID_DESC = 'OFFERS_AVERAGE_ID_DESC',
  OFFERS_AVERAGE_LAST_EVENT_ASC = 'OFFERS_AVERAGE_LAST_EVENT_ASC',
  OFFERS_AVERAGE_LAST_EVENT_DESC = 'OFFERS_AVERAGE_LAST_EVENT_DESC',
  OFFERS_AVERAGE_LIMIT_ASC = 'OFFERS_AVERAGE_LIMIT_ASC',
  OFFERS_AVERAGE_LIMIT_DESC = 'OFFERS_AVERAGE_LIMIT_DESC',
  OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_AVERAGE_REACH_LIMIT_ASC = 'OFFERS_AVERAGE_REACH_LIMIT_ASC',
  OFFERS_AVERAGE_REACH_LIMIT_DESC = 'OFFERS_AVERAGE_REACH_LIMIT_DESC',
  OFFERS_AVERAGE_WITHDRAWN_ASC = 'OFFERS_AVERAGE_WITHDRAWN_ASC',
  OFFERS_AVERAGE_WITHDRAWN_DESC = 'OFFERS_AVERAGE_WITHDRAWN_DESC',
  OFFERS_AVERAGE_WITHDRAW_PENALTY_ASC = 'OFFERS_AVERAGE_WITHDRAW_PENALTY_ASC',
  OFFERS_AVERAGE_WITHDRAW_PENALTY_DESC = 'OFFERS_AVERAGE_WITHDRAW_PENALTY_DESC',
  OFFERS_COUNT_ASC = 'OFFERS_COUNT_ASC',
  OFFERS_COUNT_DESC = 'OFFERS_COUNT_DESC',
  OFFERS_DISTINCT_COUNT_ACCEPTED_ASC = 'OFFERS_DISTINCT_COUNT_ACCEPTED_ASC',
  OFFERS_DISTINCT_COUNT_ACCEPTED_DESC = 'OFFERS_DISTINCT_COUNT_ACCEPTED_DESC',
  OFFERS_DISTINCT_COUNT_CONSUMER_ASC = 'OFFERS_DISTINCT_COUNT_CONSUMER_ASC',
  OFFERS_DISTINCT_COUNT_CONSUMER_DESC = 'OFFERS_DISTINCT_COUNT_CONSUMER_DESC',
  OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  OFFERS_DISTINCT_COUNT_DEPOSIT_ASC = 'OFFERS_DISTINCT_COUNT_DEPOSIT_ASC',
  OFFERS_DISTINCT_COUNT_DEPOSIT_DESC = 'OFFERS_DISTINCT_COUNT_DEPOSIT_DESC',
  OFFERS_DISTINCT_COUNT_EXPIRE_DATE_ASC = 'OFFERS_DISTINCT_COUNT_EXPIRE_DATE_ASC',
  OFFERS_DISTINCT_COUNT_EXPIRE_DATE_DESC = 'OFFERS_DISTINCT_COUNT_EXPIRE_DATE_DESC',
  OFFERS_DISTINCT_COUNT_ID_ASC = 'OFFERS_DISTINCT_COUNT_ID_ASC',
  OFFERS_DISTINCT_COUNT_ID_DESC = 'OFFERS_DISTINCT_COUNT_ID_DESC',
  OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  OFFERS_DISTINCT_COUNT_LIMIT_ASC = 'OFFERS_DISTINCT_COUNT_LIMIT_ASC',
  OFFERS_DISTINCT_COUNT_LIMIT_DESC = 'OFFERS_DISTINCT_COUNT_LIMIT_DESC',
  OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  OFFERS_DISTINCT_COUNT_REACH_LIMIT_ASC = 'OFFERS_DISTINCT_COUNT_REACH_LIMIT_ASC',
  OFFERS_DISTINCT_COUNT_REACH_LIMIT_DESC = 'OFFERS_DISTINCT_COUNT_REACH_LIMIT_DESC',
  OFFERS_DISTINCT_COUNT_WITHDRAWN_ASC = 'OFFERS_DISTINCT_COUNT_WITHDRAWN_ASC',
  OFFERS_DISTINCT_COUNT_WITHDRAWN_DESC = 'OFFERS_DISTINCT_COUNT_WITHDRAWN_DESC',
  OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_ASC = 'OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_ASC',
  OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_DESC = 'OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_DESC',
  OFFERS_MAX_ACCEPTED_ASC = 'OFFERS_MAX_ACCEPTED_ASC',
  OFFERS_MAX_ACCEPTED_DESC = 'OFFERS_MAX_ACCEPTED_DESC',
  OFFERS_MAX_CONSUMER_ASC = 'OFFERS_MAX_CONSUMER_ASC',
  OFFERS_MAX_CONSUMER_DESC = 'OFFERS_MAX_CONSUMER_DESC',
  OFFERS_MAX_CREATED_BLOCK_ASC = 'OFFERS_MAX_CREATED_BLOCK_ASC',
  OFFERS_MAX_CREATED_BLOCK_DESC = 'OFFERS_MAX_CREATED_BLOCK_DESC',
  OFFERS_MAX_DEPLOYMENT_ID_ASC = 'OFFERS_MAX_DEPLOYMENT_ID_ASC',
  OFFERS_MAX_DEPLOYMENT_ID_DESC = 'OFFERS_MAX_DEPLOYMENT_ID_DESC',
  OFFERS_MAX_DEPOSIT_ASC = 'OFFERS_MAX_DEPOSIT_ASC',
  OFFERS_MAX_DEPOSIT_DESC = 'OFFERS_MAX_DEPOSIT_DESC',
  OFFERS_MAX_EXPIRE_DATE_ASC = 'OFFERS_MAX_EXPIRE_DATE_ASC',
  OFFERS_MAX_EXPIRE_DATE_DESC = 'OFFERS_MAX_EXPIRE_DATE_DESC',
  OFFERS_MAX_ID_ASC = 'OFFERS_MAX_ID_ASC',
  OFFERS_MAX_ID_DESC = 'OFFERS_MAX_ID_DESC',
  OFFERS_MAX_LAST_EVENT_ASC = 'OFFERS_MAX_LAST_EVENT_ASC',
  OFFERS_MAX_LAST_EVENT_DESC = 'OFFERS_MAX_LAST_EVENT_DESC',
  OFFERS_MAX_LIMIT_ASC = 'OFFERS_MAX_LIMIT_ASC',
  OFFERS_MAX_LIMIT_DESC = 'OFFERS_MAX_LIMIT_DESC',
  OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_MAX_PLAN_TEMPLATE_ID_ASC = 'OFFERS_MAX_PLAN_TEMPLATE_ID_ASC',
  OFFERS_MAX_PLAN_TEMPLATE_ID_DESC = 'OFFERS_MAX_PLAN_TEMPLATE_ID_DESC',
  OFFERS_MAX_REACH_LIMIT_ASC = 'OFFERS_MAX_REACH_LIMIT_ASC',
  OFFERS_MAX_REACH_LIMIT_DESC = 'OFFERS_MAX_REACH_LIMIT_DESC',
  OFFERS_MAX_WITHDRAWN_ASC = 'OFFERS_MAX_WITHDRAWN_ASC',
  OFFERS_MAX_WITHDRAWN_DESC = 'OFFERS_MAX_WITHDRAWN_DESC',
  OFFERS_MAX_WITHDRAW_PENALTY_ASC = 'OFFERS_MAX_WITHDRAW_PENALTY_ASC',
  OFFERS_MAX_WITHDRAW_PENALTY_DESC = 'OFFERS_MAX_WITHDRAW_PENALTY_DESC',
  OFFERS_MIN_ACCEPTED_ASC = 'OFFERS_MIN_ACCEPTED_ASC',
  OFFERS_MIN_ACCEPTED_DESC = 'OFFERS_MIN_ACCEPTED_DESC',
  OFFERS_MIN_CONSUMER_ASC = 'OFFERS_MIN_CONSUMER_ASC',
  OFFERS_MIN_CONSUMER_DESC = 'OFFERS_MIN_CONSUMER_DESC',
  OFFERS_MIN_CREATED_BLOCK_ASC = 'OFFERS_MIN_CREATED_BLOCK_ASC',
  OFFERS_MIN_CREATED_BLOCK_DESC = 'OFFERS_MIN_CREATED_BLOCK_DESC',
  OFFERS_MIN_DEPLOYMENT_ID_ASC = 'OFFERS_MIN_DEPLOYMENT_ID_ASC',
  OFFERS_MIN_DEPLOYMENT_ID_DESC = 'OFFERS_MIN_DEPLOYMENT_ID_DESC',
  OFFERS_MIN_DEPOSIT_ASC = 'OFFERS_MIN_DEPOSIT_ASC',
  OFFERS_MIN_DEPOSIT_DESC = 'OFFERS_MIN_DEPOSIT_DESC',
  OFFERS_MIN_EXPIRE_DATE_ASC = 'OFFERS_MIN_EXPIRE_DATE_ASC',
  OFFERS_MIN_EXPIRE_DATE_DESC = 'OFFERS_MIN_EXPIRE_DATE_DESC',
  OFFERS_MIN_ID_ASC = 'OFFERS_MIN_ID_ASC',
  OFFERS_MIN_ID_DESC = 'OFFERS_MIN_ID_DESC',
  OFFERS_MIN_LAST_EVENT_ASC = 'OFFERS_MIN_LAST_EVENT_ASC',
  OFFERS_MIN_LAST_EVENT_DESC = 'OFFERS_MIN_LAST_EVENT_DESC',
  OFFERS_MIN_LIMIT_ASC = 'OFFERS_MIN_LIMIT_ASC',
  OFFERS_MIN_LIMIT_DESC = 'OFFERS_MIN_LIMIT_DESC',
  OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_MIN_PLAN_TEMPLATE_ID_ASC = 'OFFERS_MIN_PLAN_TEMPLATE_ID_ASC',
  OFFERS_MIN_PLAN_TEMPLATE_ID_DESC = 'OFFERS_MIN_PLAN_TEMPLATE_ID_DESC',
  OFFERS_MIN_REACH_LIMIT_ASC = 'OFFERS_MIN_REACH_LIMIT_ASC',
  OFFERS_MIN_REACH_LIMIT_DESC = 'OFFERS_MIN_REACH_LIMIT_DESC',
  OFFERS_MIN_WITHDRAWN_ASC = 'OFFERS_MIN_WITHDRAWN_ASC',
  OFFERS_MIN_WITHDRAWN_DESC = 'OFFERS_MIN_WITHDRAWN_DESC',
  OFFERS_MIN_WITHDRAW_PENALTY_ASC = 'OFFERS_MIN_WITHDRAW_PENALTY_ASC',
  OFFERS_MIN_WITHDRAW_PENALTY_DESC = 'OFFERS_MIN_WITHDRAW_PENALTY_DESC',
  OFFERS_STDDEV_POPULATION_ACCEPTED_ASC = 'OFFERS_STDDEV_POPULATION_ACCEPTED_ASC',
  OFFERS_STDDEV_POPULATION_ACCEPTED_DESC = 'OFFERS_STDDEV_POPULATION_ACCEPTED_DESC',
  OFFERS_STDDEV_POPULATION_CONSUMER_ASC = 'OFFERS_STDDEV_POPULATION_CONSUMER_ASC',
  OFFERS_STDDEV_POPULATION_CONSUMER_DESC = 'OFFERS_STDDEV_POPULATION_CONSUMER_DESC',
  OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  OFFERS_STDDEV_POPULATION_DEPOSIT_ASC = 'OFFERS_STDDEV_POPULATION_DEPOSIT_ASC',
  OFFERS_STDDEV_POPULATION_DEPOSIT_DESC = 'OFFERS_STDDEV_POPULATION_DEPOSIT_DESC',
  OFFERS_STDDEV_POPULATION_EXPIRE_DATE_ASC = 'OFFERS_STDDEV_POPULATION_EXPIRE_DATE_ASC',
  OFFERS_STDDEV_POPULATION_EXPIRE_DATE_DESC = 'OFFERS_STDDEV_POPULATION_EXPIRE_DATE_DESC',
  OFFERS_STDDEV_POPULATION_ID_ASC = 'OFFERS_STDDEV_POPULATION_ID_ASC',
  OFFERS_STDDEV_POPULATION_ID_DESC = 'OFFERS_STDDEV_POPULATION_ID_DESC',
  OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  OFFERS_STDDEV_POPULATION_LIMIT_ASC = 'OFFERS_STDDEV_POPULATION_LIMIT_ASC',
  OFFERS_STDDEV_POPULATION_LIMIT_DESC = 'OFFERS_STDDEV_POPULATION_LIMIT_DESC',
  OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  OFFERS_STDDEV_POPULATION_REACH_LIMIT_ASC = 'OFFERS_STDDEV_POPULATION_REACH_LIMIT_ASC',
  OFFERS_STDDEV_POPULATION_REACH_LIMIT_DESC = 'OFFERS_STDDEV_POPULATION_REACH_LIMIT_DESC',
  OFFERS_STDDEV_POPULATION_WITHDRAWN_ASC = 'OFFERS_STDDEV_POPULATION_WITHDRAWN_ASC',
  OFFERS_STDDEV_POPULATION_WITHDRAWN_DESC = 'OFFERS_STDDEV_POPULATION_WITHDRAWN_DESC',
  OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_ASC = 'OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_ASC',
  OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_DESC = 'OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_DESC',
  OFFERS_STDDEV_SAMPLE_ACCEPTED_ASC = 'OFFERS_STDDEV_SAMPLE_ACCEPTED_ASC',
  OFFERS_STDDEV_SAMPLE_ACCEPTED_DESC = 'OFFERS_STDDEV_SAMPLE_ACCEPTED_DESC',
  OFFERS_STDDEV_SAMPLE_CONSUMER_ASC = 'OFFERS_STDDEV_SAMPLE_CONSUMER_ASC',
  OFFERS_STDDEV_SAMPLE_CONSUMER_DESC = 'OFFERS_STDDEV_SAMPLE_CONSUMER_DESC',
  OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  OFFERS_STDDEV_SAMPLE_DEPOSIT_ASC = 'OFFERS_STDDEV_SAMPLE_DEPOSIT_ASC',
  OFFERS_STDDEV_SAMPLE_DEPOSIT_DESC = 'OFFERS_STDDEV_SAMPLE_DEPOSIT_DESC',
  OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_ASC = 'OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_ASC',
  OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_DESC = 'OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_DESC',
  OFFERS_STDDEV_SAMPLE_ID_ASC = 'OFFERS_STDDEV_SAMPLE_ID_ASC',
  OFFERS_STDDEV_SAMPLE_ID_DESC = 'OFFERS_STDDEV_SAMPLE_ID_DESC',
  OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  OFFERS_STDDEV_SAMPLE_LIMIT_ASC = 'OFFERS_STDDEV_SAMPLE_LIMIT_ASC',
  OFFERS_STDDEV_SAMPLE_LIMIT_DESC = 'OFFERS_STDDEV_SAMPLE_LIMIT_DESC',
  OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_STDDEV_SAMPLE_REACH_LIMIT_ASC = 'OFFERS_STDDEV_SAMPLE_REACH_LIMIT_ASC',
  OFFERS_STDDEV_SAMPLE_REACH_LIMIT_DESC = 'OFFERS_STDDEV_SAMPLE_REACH_LIMIT_DESC',
  OFFERS_STDDEV_SAMPLE_WITHDRAWN_ASC = 'OFFERS_STDDEV_SAMPLE_WITHDRAWN_ASC',
  OFFERS_STDDEV_SAMPLE_WITHDRAWN_DESC = 'OFFERS_STDDEV_SAMPLE_WITHDRAWN_DESC',
  OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_ASC = 'OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_ASC',
  OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_DESC = 'OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_DESC',
  OFFERS_SUM_ACCEPTED_ASC = 'OFFERS_SUM_ACCEPTED_ASC',
  OFFERS_SUM_ACCEPTED_DESC = 'OFFERS_SUM_ACCEPTED_DESC',
  OFFERS_SUM_CONSUMER_ASC = 'OFFERS_SUM_CONSUMER_ASC',
  OFFERS_SUM_CONSUMER_DESC = 'OFFERS_SUM_CONSUMER_DESC',
  OFFERS_SUM_CREATED_BLOCK_ASC = 'OFFERS_SUM_CREATED_BLOCK_ASC',
  OFFERS_SUM_CREATED_BLOCK_DESC = 'OFFERS_SUM_CREATED_BLOCK_DESC',
  OFFERS_SUM_DEPLOYMENT_ID_ASC = 'OFFERS_SUM_DEPLOYMENT_ID_ASC',
  OFFERS_SUM_DEPLOYMENT_ID_DESC = 'OFFERS_SUM_DEPLOYMENT_ID_DESC',
  OFFERS_SUM_DEPOSIT_ASC = 'OFFERS_SUM_DEPOSIT_ASC',
  OFFERS_SUM_DEPOSIT_DESC = 'OFFERS_SUM_DEPOSIT_DESC',
  OFFERS_SUM_EXPIRE_DATE_ASC = 'OFFERS_SUM_EXPIRE_DATE_ASC',
  OFFERS_SUM_EXPIRE_DATE_DESC = 'OFFERS_SUM_EXPIRE_DATE_DESC',
  OFFERS_SUM_ID_ASC = 'OFFERS_SUM_ID_ASC',
  OFFERS_SUM_ID_DESC = 'OFFERS_SUM_ID_DESC',
  OFFERS_SUM_LAST_EVENT_ASC = 'OFFERS_SUM_LAST_EVENT_ASC',
  OFFERS_SUM_LAST_EVENT_DESC = 'OFFERS_SUM_LAST_EVENT_DESC',
  OFFERS_SUM_LIMIT_ASC = 'OFFERS_SUM_LIMIT_ASC',
  OFFERS_SUM_LIMIT_DESC = 'OFFERS_SUM_LIMIT_DESC',
  OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_SUM_PLAN_TEMPLATE_ID_ASC = 'OFFERS_SUM_PLAN_TEMPLATE_ID_ASC',
  OFFERS_SUM_PLAN_TEMPLATE_ID_DESC = 'OFFERS_SUM_PLAN_TEMPLATE_ID_DESC',
  OFFERS_SUM_REACH_LIMIT_ASC = 'OFFERS_SUM_REACH_LIMIT_ASC',
  OFFERS_SUM_REACH_LIMIT_DESC = 'OFFERS_SUM_REACH_LIMIT_DESC',
  OFFERS_SUM_WITHDRAWN_ASC = 'OFFERS_SUM_WITHDRAWN_ASC',
  OFFERS_SUM_WITHDRAWN_DESC = 'OFFERS_SUM_WITHDRAWN_DESC',
  OFFERS_SUM_WITHDRAW_PENALTY_ASC = 'OFFERS_SUM_WITHDRAW_PENALTY_ASC',
  OFFERS_SUM_WITHDRAW_PENALTY_DESC = 'OFFERS_SUM_WITHDRAW_PENALTY_DESC',
  OFFERS_VARIANCE_POPULATION_ACCEPTED_ASC = 'OFFERS_VARIANCE_POPULATION_ACCEPTED_ASC',
  OFFERS_VARIANCE_POPULATION_ACCEPTED_DESC = 'OFFERS_VARIANCE_POPULATION_ACCEPTED_DESC',
  OFFERS_VARIANCE_POPULATION_CONSUMER_ASC = 'OFFERS_VARIANCE_POPULATION_CONSUMER_ASC',
  OFFERS_VARIANCE_POPULATION_CONSUMER_DESC = 'OFFERS_VARIANCE_POPULATION_CONSUMER_DESC',
  OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  OFFERS_VARIANCE_POPULATION_DEPOSIT_ASC = 'OFFERS_VARIANCE_POPULATION_DEPOSIT_ASC',
  OFFERS_VARIANCE_POPULATION_DEPOSIT_DESC = 'OFFERS_VARIANCE_POPULATION_DEPOSIT_DESC',
  OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_ASC = 'OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_ASC',
  OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_DESC = 'OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_DESC',
  OFFERS_VARIANCE_POPULATION_ID_ASC = 'OFFERS_VARIANCE_POPULATION_ID_ASC',
  OFFERS_VARIANCE_POPULATION_ID_DESC = 'OFFERS_VARIANCE_POPULATION_ID_DESC',
  OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  OFFERS_VARIANCE_POPULATION_LIMIT_ASC = 'OFFERS_VARIANCE_POPULATION_LIMIT_ASC',
  OFFERS_VARIANCE_POPULATION_LIMIT_DESC = 'OFFERS_VARIANCE_POPULATION_LIMIT_DESC',
  OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  OFFERS_VARIANCE_POPULATION_REACH_LIMIT_ASC = 'OFFERS_VARIANCE_POPULATION_REACH_LIMIT_ASC',
  OFFERS_VARIANCE_POPULATION_REACH_LIMIT_DESC = 'OFFERS_VARIANCE_POPULATION_REACH_LIMIT_DESC',
  OFFERS_VARIANCE_POPULATION_WITHDRAWN_ASC = 'OFFERS_VARIANCE_POPULATION_WITHDRAWN_ASC',
  OFFERS_VARIANCE_POPULATION_WITHDRAWN_DESC = 'OFFERS_VARIANCE_POPULATION_WITHDRAWN_DESC',
  OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_ASC = 'OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_ASC',
  OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_DESC = 'OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_DESC',
  OFFERS_VARIANCE_SAMPLE_ACCEPTED_ASC = 'OFFERS_VARIANCE_SAMPLE_ACCEPTED_ASC',
  OFFERS_VARIANCE_SAMPLE_ACCEPTED_DESC = 'OFFERS_VARIANCE_SAMPLE_ACCEPTED_DESC',
  OFFERS_VARIANCE_SAMPLE_CONSUMER_ASC = 'OFFERS_VARIANCE_SAMPLE_CONSUMER_ASC',
  OFFERS_VARIANCE_SAMPLE_CONSUMER_DESC = 'OFFERS_VARIANCE_SAMPLE_CONSUMER_DESC',
  OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_DEPOSIT_ASC = 'OFFERS_VARIANCE_SAMPLE_DEPOSIT_ASC',
  OFFERS_VARIANCE_SAMPLE_DEPOSIT_DESC = 'OFFERS_VARIANCE_SAMPLE_DEPOSIT_DESC',
  OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_ASC = 'OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_ASC',
  OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_DESC = 'OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_DESC',
  OFFERS_VARIANCE_SAMPLE_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  OFFERS_VARIANCE_SAMPLE_LIMIT_ASC = 'OFFERS_VARIANCE_SAMPLE_LIMIT_ASC',
  OFFERS_VARIANCE_SAMPLE_LIMIT_DESC = 'OFFERS_VARIANCE_SAMPLE_LIMIT_DESC',
  OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_ASC = 'OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_ASC',
  OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_DESC = 'OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_DESC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAWN_ASC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAWN_ASC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAWN_DESC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAWN_DESC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_ASC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_ASC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_DESC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_DESC',
  PLANS_AVERAGE_ACTIVE_ASC = 'PLANS_AVERAGE_ACTIVE_ASC',
  PLANS_AVERAGE_ACTIVE_DESC = 'PLANS_AVERAGE_ACTIVE_DESC',
  PLANS_AVERAGE_CREATED_BLOCK_ASC = 'PLANS_AVERAGE_CREATED_BLOCK_ASC',
  PLANS_AVERAGE_CREATED_BLOCK_DESC = 'PLANS_AVERAGE_CREATED_BLOCK_DESC',
  PLANS_AVERAGE_CREATOR_ASC = 'PLANS_AVERAGE_CREATOR_ASC',
  PLANS_AVERAGE_CREATOR_DESC = 'PLANS_AVERAGE_CREATOR_DESC',
  PLANS_AVERAGE_DEPLOYMENT_ID_ASC = 'PLANS_AVERAGE_DEPLOYMENT_ID_ASC',
  PLANS_AVERAGE_DEPLOYMENT_ID_DESC = 'PLANS_AVERAGE_DEPLOYMENT_ID_DESC',
  PLANS_AVERAGE_ID_ASC = 'PLANS_AVERAGE_ID_ASC',
  PLANS_AVERAGE_ID_DESC = 'PLANS_AVERAGE_ID_DESC',
  PLANS_AVERAGE_LAST_EVENT_ASC = 'PLANS_AVERAGE_LAST_EVENT_ASC',
  PLANS_AVERAGE_LAST_EVENT_DESC = 'PLANS_AVERAGE_LAST_EVENT_DESC',
  PLANS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'PLANS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  PLANS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'PLANS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  PLANS_AVERAGE_PRICE_ASC = 'PLANS_AVERAGE_PRICE_ASC',
  PLANS_AVERAGE_PRICE_DESC = 'PLANS_AVERAGE_PRICE_DESC',
  PLANS_COUNT_ASC = 'PLANS_COUNT_ASC',
  PLANS_COUNT_DESC = 'PLANS_COUNT_DESC',
  PLANS_DISTINCT_COUNT_ACTIVE_ASC = 'PLANS_DISTINCT_COUNT_ACTIVE_ASC',
  PLANS_DISTINCT_COUNT_ACTIVE_DESC = 'PLANS_DISTINCT_COUNT_ACTIVE_DESC',
  PLANS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'PLANS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  PLANS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'PLANS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  PLANS_DISTINCT_COUNT_CREATOR_ASC = 'PLANS_DISTINCT_COUNT_CREATOR_ASC',
  PLANS_DISTINCT_COUNT_CREATOR_DESC = 'PLANS_DISTINCT_COUNT_CREATOR_DESC',
  PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  PLANS_DISTINCT_COUNT_ID_ASC = 'PLANS_DISTINCT_COUNT_ID_ASC',
  PLANS_DISTINCT_COUNT_ID_DESC = 'PLANS_DISTINCT_COUNT_ID_DESC',
  PLANS_DISTINCT_COUNT_LAST_EVENT_ASC = 'PLANS_DISTINCT_COUNT_LAST_EVENT_ASC',
  PLANS_DISTINCT_COUNT_LAST_EVENT_DESC = 'PLANS_DISTINCT_COUNT_LAST_EVENT_DESC',
  PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  PLANS_DISTINCT_COUNT_PRICE_ASC = 'PLANS_DISTINCT_COUNT_PRICE_ASC',
  PLANS_DISTINCT_COUNT_PRICE_DESC = 'PLANS_DISTINCT_COUNT_PRICE_DESC',
  PLANS_MAX_ACTIVE_ASC = 'PLANS_MAX_ACTIVE_ASC',
  PLANS_MAX_ACTIVE_DESC = 'PLANS_MAX_ACTIVE_DESC',
  PLANS_MAX_CREATED_BLOCK_ASC = 'PLANS_MAX_CREATED_BLOCK_ASC',
  PLANS_MAX_CREATED_BLOCK_DESC = 'PLANS_MAX_CREATED_BLOCK_DESC',
  PLANS_MAX_CREATOR_ASC = 'PLANS_MAX_CREATOR_ASC',
  PLANS_MAX_CREATOR_DESC = 'PLANS_MAX_CREATOR_DESC',
  PLANS_MAX_DEPLOYMENT_ID_ASC = 'PLANS_MAX_DEPLOYMENT_ID_ASC',
  PLANS_MAX_DEPLOYMENT_ID_DESC = 'PLANS_MAX_DEPLOYMENT_ID_DESC',
  PLANS_MAX_ID_ASC = 'PLANS_MAX_ID_ASC',
  PLANS_MAX_ID_DESC = 'PLANS_MAX_ID_DESC',
  PLANS_MAX_LAST_EVENT_ASC = 'PLANS_MAX_LAST_EVENT_ASC',
  PLANS_MAX_LAST_EVENT_DESC = 'PLANS_MAX_LAST_EVENT_DESC',
  PLANS_MAX_PLAN_TEMPLATE_ID_ASC = 'PLANS_MAX_PLAN_TEMPLATE_ID_ASC',
  PLANS_MAX_PLAN_TEMPLATE_ID_DESC = 'PLANS_MAX_PLAN_TEMPLATE_ID_DESC',
  PLANS_MAX_PRICE_ASC = 'PLANS_MAX_PRICE_ASC',
  PLANS_MAX_PRICE_DESC = 'PLANS_MAX_PRICE_DESC',
  PLANS_MIN_ACTIVE_ASC = 'PLANS_MIN_ACTIVE_ASC',
  PLANS_MIN_ACTIVE_DESC = 'PLANS_MIN_ACTIVE_DESC',
  PLANS_MIN_CREATED_BLOCK_ASC = 'PLANS_MIN_CREATED_BLOCK_ASC',
  PLANS_MIN_CREATED_BLOCK_DESC = 'PLANS_MIN_CREATED_BLOCK_DESC',
  PLANS_MIN_CREATOR_ASC = 'PLANS_MIN_CREATOR_ASC',
  PLANS_MIN_CREATOR_DESC = 'PLANS_MIN_CREATOR_DESC',
  PLANS_MIN_DEPLOYMENT_ID_ASC = 'PLANS_MIN_DEPLOYMENT_ID_ASC',
  PLANS_MIN_DEPLOYMENT_ID_DESC = 'PLANS_MIN_DEPLOYMENT_ID_DESC',
  PLANS_MIN_ID_ASC = 'PLANS_MIN_ID_ASC',
  PLANS_MIN_ID_DESC = 'PLANS_MIN_ID_DESC',
  PLANS_MIN_LAST_EVENT_ASC = 'PLANS_MIN_LAST_EVENT_ASC',
  PLANS_MIN_LAST_EVENT_DESC = 'PLANS_MIN_LAST_EVENT_DESC',
  PLANS_MIN_PLAN_TEMPLATE_ID_ASC = 'PLANS_MIN_PLAN_TEMPLATE_ID_ASC',
  PLANS_MIN_PLAN_TEMPLATE_ID_DESC = 'PLANS_MIN_PLAN_TEMPLATE_ID_DESC',
  PLANS_MIN_PRICE_ASC = 'PLANS_MIN_PRICE_ASC',
  PLANS_MIN_PRICE_DESC = 'PLANS_MIN_PRICE_DESC',
  PLANS_STDDEV_POPULATION_ACTIVE_ASC = 'PLANS_STDDEV_POPULATION_ACTIVE_ASC',
  PLANS_STDDEV_POPULATION_ACTIVE_DESC = 'PLANS_STDDEV_POPULATION_ACTIVE_DESC',
  PLANS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'PLANS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  PLANS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'PLANS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  PLANS_STDDEV_POPULATION_CREATOR_ASC = 'PLANS_STDDEV_POPULATION_CREATOR_ASC',
  PLANS_STDDEV_POPULATION_CREATOR_DESC = 'PLANS_STDDEV_POPULATION_CREATOR_DESC',
  PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  PLANS_STDDEV_POPULATION_ID_ASC = 'PLANS_STDDEV_POPULATION_ID_ASC',
  PLANS_STDDEV_POPULATION_ID_DESC = 'PLANS_STDDEV_POPULATION_ID_DESC',
  PLANS_STDDEV_POPULATION_LAST_EVENT_ASC = 'PLANS_STDDEV_POPULATION_LAST_EVENT_ASC',
  PLANS_STDDEV_POPULATION_LAST_EVENT_DESC = 'PLANS_STDDEV_POPULATION_LAST_EVENT_DESC',
  PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  PLANS_STDDEV_POPULATION_PRICE_ASC = 'PLANS_STDDEV_POPULATION_PRICE_ASC',
  PLANS_STDDEV_POPULATION_PRICE_DESC = 'PLANS_STDDEV_POPULATION_PRICE_DESC',
  PLANS_STDDEV_SAMPLE_ACTIVE_ASC = 'PLANS_STDDEV_SAMPLE_ACTIVE_ASC',
  PLANS_STDDEV_SAMPLE_ACTIVE_DESC = 'PLANS_STDDEV_SAMPLE_ACTIVE_DESC',
  PLANS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'PLANS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  PLANS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'PLANS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  PLANS_STDDEV_SAMPLE_CREATOR_ASC = 'PLANS_STDDEV_SAMPLE_CREATOR_ASC',
  PLANS_STDDEV_SAMPLE_CREATOR_DESC = 'PLANS_STDDEV_SAMPLE_CREATOR_DESC',
  PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  PLANS_STDDEV_SAMPLE_ID_ASC = 'PLANS_STDDEV_SAMPLE_ID_ASC',
  PLANS_STDDEV_SAMPLE_ID_DESC = 'PLANS_STDDEV_SAMPLE_ID_DESC',
  PLANS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'PLANS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  PLANS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'PLANS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  PLANS_STDDEV_SAMPLE_PRICE_ASC = 'PLANS_STDDEV_SAMPLE_PRICE_ASC',
  PLANS_STDDEV_SAMPLE_PRICE_DESC = 'PLANS_STDDEV_SAMPLE_PRICE_DESC',
  PLANS_SUM_ACTIVE_ASC = 'PLANS_SUM_ACTIVE_ASC',
  PLANS_SUM_ACTIVE_DESC = 'PLANS_SUM_ACTIVE_DESC',
  PLANS_SUM_CREATED_BLOCK_ASC = 'PLANS_SUM_CREATED_BLOCK_ASC',
  PLANS_SUM_CREATED_BLOCK_DESC = 'PLANS_SUM_CREATED_BLOCK_DESC',
  PLANS_SUM_CREATOR_ASC = 'PLANS_SUM_CREATOR_ASC',
  PLANS_SUM_CREATOR_DESC = 'PLANS_SUM_CREATOR_DESC',
  PLANS_SUM_DEPLOYMENT_ID_ASC = 'PLANS_SUM_DEPLOYMENT_ID_ASC',
  PLANS_SUM_DEPLOYMENT_ID_DESC = 'PLANS_SUM_DEPLOYMENT_ID_DESC',
  PLANS_SUM_ID_ASC = 'PLANS_SUM_ID_ASC',
  PLANS_SUM_ID_DESC = 'PLANS_SUM_ID_DESC',
  PLANS_SUM_LAST_EVENT_ASC = 'PLANS_SUM_LAST_EVENT_ASC',
  PLANS_SUM_LAST_EVENT_DESC = 'PLANS_SUM_LAST_EVENT_DESC',
  PLANS_SUM_PLAN_TEMPLATE_ID_ASC = 'PLANS_SUM_PLAN_TEMPLATE_ID_ASC',
  PLANS_SUM_PLAN_TEMPLATE_ID_DESC = 'PLANS_SUM_PLAN_TEMPLATE_ID_DESC',
  PLANS_SUM_PRICE_ASC = 'PLANS_SUM_PRICE_ASC',
  PLANS_SUM_PRICE_DESC = 'PLANS_SUM_PRICE_DESC',
  PLANS_VARIANCE_POPULATION_ACTIVE_ASC = 'PLANS_VARIANCE_POPULATION_ACTIVE_ASC',
  PLANS_VARIANCE_POPULATION_ACTIVE_DESC = 'PLANS_VARIANCE_POPULATION_ACTIVE_DESC',
  PLANS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'PLANS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  PLANS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'PLANS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  PLANS_VARIANCE_POPULATION_CREATOR_ASC = 'PLANS_VARIANCE_POPULATION_CREATOR_ASC',
  PLANS_VARIANCE_POPULATION_CREATOR_DESC = 'PLANS_VARIANCE_POPULATION_CREATOR_DESC',
  PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  PLANS_VARIANCE_POPULATION_ID_ASC = 'PLANS_VARIANCE_POPULATION_ID_ASC',
  PLANS_VARIANCE_POPULATION_ID_DESC = 'PLANS_VARIANCE_POPULATION_ID_DESC',
  PLANS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'PLANS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  PLANS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'PLANS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  PLANS_VARIANCE_POPULATION_PRICE_ASC = 'PLANS_VARIANCE_POPULATION_PRICE_ASC',
  PLANS_VARIANCE_POPULATION_PRICE_DESC = 'PLANS_VARIANCE_POPULATION_PRICE_DESC',
  PLANS_VARIANCE_SAMPLE_ACTIVE_ASC = 'PLANS_VARIANCE_SAMPLE_ACTIVE_ASC',
  PLANS_VARIANCE_SAMPLE_ACTIVE_DESC = 'PLANS_VARIANCE_SAMPLE_ACTIVE_DESC',
  PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  PLANS_VARIANCE_SAMPLE_CREATOR_ASC = 'PLANS_VARIANCE_SAMPLE_CREATOR_ASC',
  PLANS_VARIANCE_SAMPLE_CREATOR_DESC = 'PLANS_VARIANCE_SAMPLE_CREATOR_DESC',
  PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  PLANS_VARIANCE_SAMPLE_ID_ASC = 'PLANS_VARIANCE_SAMPLE_ID_ASC',
  PLANS_VARIANCE_SAMPLE_ID_DESC = 'PLANS_VARIANCE_SAMPLE_ID_DESC',
  PLANS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'PLANS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  PLANS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'PLANS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  PLANS_VARIANCE_SAMPLE_PRICE_ASC = 'PLANS_VARIANCE_SAMPLE_PRICE_ASC',
  PLANS_VARIANCE_SAMPLE_PRICE_DESC = 'PLANS_VARIANCE_SAMPLE_PRICE_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  PROJECT_ID_ASC = 'PROJECT_ID_ASC',
  PROJECT_ID_DESC = 'PROJECT_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_END_TIME_ASC = 'SERVICE_AGREEMENTS_AVERAGE_END_TIME_ASC',
  SERVICE_AGREEMENTS_AVERAGE_END_TIME_DESC = 'SERVICE_AGREEMENTS_AVERAGE_END_TIME_DESC',
  SERVICE_AGREEMENTS_AVERAGE_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_AVERAGE_PERIOD_ASC = 'SERVICE_AGREEMENTS_AVERAGE_PERIOD_ASC',
  SERVICE_AGREEMENTS_AVERAGE_PERIOD_DESC = 'SERVICE_AGREEMENTS_AVERAGE_PERIOD_DESC',
  SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_START_TIME_ASC = 'SERVICE_AGREEMENTS_AVERAGE_START_TIME_ASC',
  SERVICE_AGREEMENTS_AVERAGE_START_TIME_DESC = 'SERVICE_AGREEMENTS_AVERAGE_START_TIME_DESC',
  SERVICE_AGREEMENTS_COUNT_ASC = 'SERVICE_AGREEMENTS_COUNT_ASC',
  SERVICE_AGREEMENTS_COUNT_DESC = 'SERVICE_AGREEMENTS_COUNT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_DESC',
  SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_MAX_END_TIME_ASC = 'SERVICE_AGREEMENTS_MAX_END_TIME_ASC',
  SERVICE_AGREEMENTS_MAX_END_TIME_DESC = 'SERVICE_AGREEMENTS_MAX_END_TIME_DESC',
  SERVICE_AGREEMENTS_MAX_ID_ASC = 'SERVICE_AGREEMENTS_MAX_ID_ASC',
  SERVICE_AGREEMENTS_MAX_ID_DESC = 'SERVICE_AGREEMENTS_MAX_ID_DESC',
  SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MAX_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_MAX_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_MAX_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_MAX_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_MAX_PERIOD_ASC = 'SERVICE_AGREEMENTS_MAX_PERIOD_ASC',
  SERVICE_AGREEMENTS_MAX_PERIOD_DESC = 'SERVICE_AGREEMENTS_MAX_PERIOD_DESC',
  SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_MAX_START_TIME_ASC = 'SERVICE_AGREEMENTS_MAX_START_TIME_ASC',
  SERVICE_AGREEMENTS_MAX_START_TIME_DESC = 'SERVICE_AGREEMENTS_MAX_START_TIME_DESC',
  SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_MIN_END_TIME_ASC = 'SERVICE_AGREEMENTS_MIN_END_TIME_ASC',
  SERVICE_AGREEMENTS_MIN_END_TIME_DESC = 'SERVICE_AGREEMENTS_MIN_END_TIME_DESC',
  SERVICE_AGREEMENTS_MIN_ID_ASC = 'SERVICE_AGREEMENTS_MIN_ID_ASC',
  SERVICE_AGREEMENTS_MIN_ID_DESC = 'SERVICE_AGREEMENTS_MIN_ID_DESC',
  SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MIN_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_MIN_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_MIN_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_MIN_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_MIN_PERIOD_ASC = 'SERVICE_AGREEMENTS_MIN_PERIOD_ASC',
  SERVICE_AGREEMENTS_MIN_PERIOD_DESC = 'SERVICE_AGREEMENTS_MIN_PERIOD_DESC',
  SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_MIN_START_TIME_ASC = 'SERVICE_AGREEMENTS_MIN_START_TIME_ASC',
  SERVICE_AGREEMENTS_MIN_START_TIME_DESC = 'SERVICE_AGREEMENTS_MIN_START_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_DESC',
  SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_SUM_END_TIME_ASC = 'SERVICE_AGREEMENTS_SUM_END_TIME_ASC',
  SERVICE_AGREEMENTS_SUM_END_TIME_DESC = 'SERVICE_AGREEMENTS_SUM_END_TIME_DESC',
  SERVICE_AGREEMENTS_SUM_ID_ASC = 'SERVICE_AGREEMENTS_SUM_ID_ASC',
  SERVICE_AGREEMENTS_SUM_ID_DESC = 'SERVICE_AGREEMENTS_SUM_ID_DESC',
  SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_SUM_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_SUM_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_SUM_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_SUM_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_SUM_PERIOD_ASC = 'SERVICE_AGREEMENTS_SUM_PERIOD_ASC',
  SERVICE_AGREEMENTS_SUM_PERIOD_DESC = 'SERVICE_AGREEMENTS_SUM_PERIOD_DESC',
  SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_SUM_START_TIME_ASC = 'SERVICE_AGREEMENTS_SUM_START_TIME_ASC',
  SERVICE_AGREEMENTS_SUM_START_TIME_DESC = 'SERVICE_AGREEMENTS_SUM_START_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_DESC',
  VERSION_ASC = 'VERSION_ASC',
  VERSION_DESC = 'VERSION_DESC',
}

export type Era = Node & {
  readonly __typename: 'Era';
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly endTime: Maybe<Scalars['Datetime']>;
  readonly forceNext: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly startTime: Scalars['Datetime'];
};

export type EraAggregates = {
  readonly __typename: 'EraAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<EraAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<EraDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<EraMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<EraMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<EraStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<EraStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<EraSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<EraVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<EraVarianceSampleAggregates>;
};

export type EraAverageAggregates = {
  readonly __typename: 'EraAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type EraDistinctCountAggregates = {
  readonly __typename: 'EraDistinctCountAggregates';
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of endTime across the matching connection */
  readonly endTime: Maybe<Scalars['BigInt']>;
  /** Distinct count of forceNext across the matching connection */
  readonly forceNext: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of startTime across the matching connection */
  readonly startTime: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Era` object types. All fields are combined with a logical ‘and.’ */
export type EraFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<EraFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `endTime` field. */
  readonly endTime: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `forceNext` field. */
  readonly forceNext: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<EraFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<EraFilter>>;
  /** Filter by the object’s `startTime` field. */
  readonly startTime: InputMaybe<DatetimeFilter>;
};

export type EraMaxAggregates = {
  readonly __typename: 'EraMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type EraMinAggregates = {
  readonly __typename: 'EraMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type EraStddevPopulationAggregates = {
  readonly __typename: 'EraStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type EraStddevSampleAggregates = {
  readonly __typename: 'EraStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type EraSumAggregates = {
  readonly __typename: 'EraSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type EraVariancePopulationAggregates = {
  readonly __typename: 'EraVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type EraVarianceSampleAggregates = {
  readonly __typename: 'EraVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Era` values. */
export type ErasConnection = {
  readonly __typename: 'ErasConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<EraAggregates>;
  /** A list of edges which contains the `Era` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ErasEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<EraAggregates>>;
  /** A list of `Era` objects. */
  readonly nodes: ReadonlyArray<Maybe<Era>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Era` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Era` values. */
export type ErasConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<ErasGroupBy>;
  having: InputMaybe<ErasHavingInput>;
};

/** A `Era` edge in the connection. */
export type ErasEdge = {
  readonly __typename: 'ErasEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Era` at the end of the edge. */
  readonly node: Maybe<Era>;
};

/** Grouping methods for `Era` for usage during aggregation. */
export enum ErasGroupBy {
  CREATED_BLOCK = 'CREATED_BLOCK',
  END_TIME = 'END_TIME',
  END_TIME_TRUNCATED_TO_DAY = 'END_TIME_TRUNCATED_TO_DAY',
  END_TIME_TRUNCATED_TO_HOUR = 'END_TIME_TRUNCATED_TO_HOUR',
  FORCE_NEXT = 'FORCE_NEXT',
  LAST_EVENT = 'LAST_EVENT',
  START_TIME = 'START_TIME',
  START_TIME_TRUNCATED_TO_DAY = 'START_TIME_TRUNCATED_TO_DAY',
  START_TIME_TRUNCATED_TO_HOUR = 'START_TIME_TRUNCATED_TO_HOUR',
}

export type ErasHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Era` aggregates. */
export type ErasHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<ErasHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ErasHavingInput>>;
  readonly average: InputMaybe<ErasHavingAverageInput>;
  readonly distinctCount: InputMaybe<ErasHavingDistinctCountInput>;
  readonly max: InputMaybe<ErasHavingMaxInput>;
  readonly min: InputMaybe<ErasHavingMinInput>;
  readonly stddevPopulation: InputMaybe<ErasHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<ErasHavingStddevSampleInput>;
  readonly sum: InputMaybe<ErasHavingSumInput>;
  readonly variancePopulation: InputMaybe<ErasHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<ErasHavingVarianceSampleInput>;
};

export type ErasHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ErasHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `Era`. */
export enum ErasOrderBy {
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  END_TIME_ASC = 'END_TIME_ASC',
  END_TIME_DESC = 'END_TIME_DESC',
  FORCE_NEXT_ASC = 'FORCE_NEXT_ASC',
  FORCE_NEXT_DESC = 'FORCE_NEXT_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  START_TIME_ASC = 'START_TIME_ASC',
  START_TIME_DESC = 'START_TIME_DESC',
}

export type Exception = Node & {
  readonly __typename: 'Exception';
  readonly error: Scalars['String'];
  readonly handler: Scalars['String'];
  readonly id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

export type ExceptionAggregates = {
  readonly __typename: 'ExceptionAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<ExceptionDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type ExceptionDistinctCountAggregates = {
  readonly __typename: 'ExceptionDistinctCountAggregates';
  /** Distinct count of error across the matching connection */
  readonly error: Maybe<Scalars['BigInt']>;
  /** Distinct count of handler across the matching connection */
  readonly handler: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Exception` object types. All fields are combined with a logical ‘and.’ */
export type ExceptionFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<ExceptionFilter>>;
  /** Filter by the object’s `error` field. */
  readonly error: InputMaybe<StringFilter>;
  /** Filter by the object’s `handler` field. */
  readonly handler: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<ExceptionFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<ExceptionFilter>>;
};

/** A connection to a list of `Exception` values. */
export type ExceptionsConnection = {
  readonly __typename: 'ExceptionsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<ExceptionAggregates>;
  /** A list of edges which contains the `Exception` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ExceptionsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<ExceptionAggregates>>;
  /** A list of `Exception` objects. */
  readonly nodes: ReadonlyArray<Maybe<Exception>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Exception` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Exception` values. */
export type ExceptionsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<ExceptionsGroupBy>;
  having: InputMaybe<ExceptionsHavingInput>;
};

/** A `Exception` edge in the connection. */
export type ExceptionsEdge = {
  readonly __typename: 'ExceptionsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Exception` at the end of the edge. */
  readonly node: Maybe<Exception>;
};

/** Grouping methods for `Exception` for usage during aggregation. */
export enum ExceptionsGroupBy {
  ERROR = 'ERROR',
  HANDLER = 'HANDLER',
}

/** Conditions for `Exception` aggregates. */
export type ExceptionsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<ExceptionsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ExceptionsHavingInput>>;
};

/** Methods to use when ordering `Exception`. */
export enum ExceptionsOrderBy {
  ERROR_ASC = 'ERROR_ASC',
  ERROR_DESC = 'ERROR_DESC',
  HANDLER_ASC = 'HANDLER_ASC',
  HANDLER_DESC = 'HANDLER_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
}

export type HavingBigfloatFilter = {
  readonly equalTo: InputMaybe<Scalars['BigFloat']>;
  readonly greaterThan: InputMaybe<Scalars['BigFloat']>;
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['BigFloat']>;
  readonly lessThan: InputMaybe<Scalars['BigFloat']>;
  readonly lessThanOrEqualTo: InputMaybe<Scalars['BigFloat']>;
  readonly notEqualTo: InputMaybe<Scalars['BigFloat']>;
};

export type HavingDatetimeFilter = {
  readonly equalTo: InputMaybe<Scalars['Datetime']>;
  readonly greaterThan: InputMaybe<Scalars['Datetime']>;
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['Datetime']>;
  readonly lessThan: InputMaybe<Scalars['Datetime']>;
  readonly lessThanOrEqualTo: InputMaybe<Scalars['Datetime']>;
  readonly notEqualTo: InputMaybe<Scalars['Datetime']>;
};

export type HavingIntFilter = {
  readonly equalTo: InputMaybe<Scalars['Int']>;
  readonly greaterThan: InputMaybe<Scalars['Int']>;
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['Int']>;
  readonly lessThan: InputMaybe<Scalars['Int']>;
  readonly lessThanOrEqualTo: InputMaybe<Scalars['Int']>;
  readonly notEqualTo: InputMaybe<Scalars['Int']>;
};

export type Indexer = Node & {
  readonly __typename: 'Indexer';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  readonly active: Scalars['Boolean'];
  readonly commission: Scalars['JSON'];
  readonly controller: Maybe<Scalars['String']>;
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Delegation`. */
  readonly delegations: DelegationsConnection;
  /** Reads and enables pagination through a set of `Delegator`. */
  readonly delegatorsByDelegationIndexerIdAndDelegatorId: IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `DeploymentIndexer`. */
  readonly deploymentIndexers: DeploymentIndexersConnection;
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deploymentsByDeploymentIndexerIndexerIdAndDeploymentId: IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyConnection;
  readonly id: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly lastRewardedEra: Maybe<Scalars['String']>;
  readonly metadata: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offersByAcceptedOfferIndexerIdAndOfferId: IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyConnection;
  /** Reads and enables pagination through a set of `IndexerReward`. */
  readonly rewards: IndexerRewardsConnection;
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementId: IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyConnection;
  readonly totalStake: Scalars['JSON'];
};

export type IndexeracceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

export type IndexerdelegationsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegationsOrderBy>>;
};

export type IndexerdelegatorsByDelegationIndexerIdAndDelegatorIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegatorFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegatorsOrderBy>>;
};

export type IndexerdeploymentIndexersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentIndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentIndexersOrderBy>>;
};

export type IndexerdeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

export type IndexeroffersByAcceptedOfferIndexerIdAndOfferIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

export type IndexerrewardsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerRewardFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexerRewardsOrderBy>>;
};

export type IndexerserviceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ServiceAgreementFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
};

export type IndexerAggregates = {
  readonly __typename: 'IndexerAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<IndexerAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<IndexerDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<IndexerMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<IndexerMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<IndexerStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<IndexerStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<IndexerSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<IndexerVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<IndexerVarianceSampleAggregates>;
};

export type IndexerAverageAggregates = {
  readonly __typename: 'IndexerAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Delegator` values, with data from `Delegation`. */
export type IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyConnection = {
  readonly __typename: 'IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DelegatorAggregates>;
  /** A list of edges which contains the `Delegator`, info from the `Delegation`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DelegatorAggregates>>;
  /** A list of `Delegator` objects. */
  readonly nodes: ReadonlyArray<Maybe<Delegator>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Delegator` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Delegator` values, with data from `Delegation`. */
export type IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<DelegatorsGroupBy>;
    having: InputMaybe<DelegatorsHavingInput>;
  };

/** A `Delegator` edge in the connection, with data from `Delegation`. */
export type IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyEdge = {
  readonly __typename: 'IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Delegation`. */
  readonly delegations: DelegationsConnection;
  /** The `Delegator` at the end of the edge. */
  readonly node: Maybe<Delegator>;
};

/** A `Delegator` edge in the connection, with data from `Delegation`. */
export type IndexerDelegatorsByDelegationIndexerIdAndDelegatorIdManyToManyEdgedelegationsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegationsOrderBy>>;
};

/** A connection to a list of `Deployment` values, with data from `DeploymentIndexer`. */
export type IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyConnection = {
  readonly __typename: 'IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DeploymentAggregates>;
  /** A list of edges which contains the `Deployment`, info from the `DeploymentIndexer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentAggregates>>;
  /** A list of `Deployment` objects. */
  readonly nodes: ReadonlyArray<Maybe<Deployment>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Deployment` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Deployment` values, with data from `DeploymentIndexer`. */
export type IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<DeploymentsGroupBy>;
    having: InputMaybe<DeploymentsHavingInput>;
  };

/** A `Deployment` edge in the connection, with data from `DeploymentIndexer`. */
export type IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyEdge = {
  readonly __typename: 'IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `DeploymentIndexer`. */
  readonly indexers: DeploymentIndexersConnection;
  /** The `Deployment` at the end of the edge. */
  readonly node: Maybe<Deployment>;
};

/** A `Deployment` edge in the connection, with data from `DeploymentIndexer`. */
export type IndexerDeploymentsByDeploymentIndexerIndexerIdAndDeploymentIdManyToManyEdgeindexersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<DeploymentIndexerFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<DeploymentIndexersOrderBy>>;
  };

export type IndexerDistinctCountAggregates = {
  readonly __typename: 'IndexerDistinctCountAggregates';
  /** Distinct count of active across the matching connection */
  readonly active: Maybe<Scalars['BigInt']>;
  /** Distinct count of commission across the matching connection */
  readonly commission: Maybe<Scalars['BigInt']>;
  /** Distinct count of controller across the matching connection */
  readonly controller: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastRewardedEra across the matching connection */
  readonly lastRewardedEra: Maybe<Scalars['BigInt']>;
  /** Distinct count of metadata across the matching connection */
  readonly metadata: Maybe<Scalars['BigInt']>;
  /** Distinct count of totalStake across the matching connection */
  readonly totalStake: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Indexer` object types. All fields are combined with a logical ‘and.’ */
export type IndexerFilter = {
  /** Filter by the object’s `active` field. */
  readonly active: InputMaybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<IndexerFilter>>;
  /** Filter by the object’s `commission` field. */
  readonly commission: InputMaybe<JSONFilter>;
  /** Filter by the object’s `controller` field. */
  readonly controller: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastRewardedEra` field. */
  readonly lastRewardedEra: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  readonly metadata: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<IndexerFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<IndexerFilter>>;
  /** Filter by the object’s `totalStake` field. */
  readonly totalStake: InputMaybe<JSONFilter>;
};

export type IndexerMaxAggregates = {
  readonly __typename: 'IndexerMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type IndexerMinAggregates = {
  readonly __typename: 'IndexerMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Offer` values, with data from `AcceptedOffer`. */
export type IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyConnection = {
  readonly __typename: 'IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<OfferAggregates>;
  /** A list of edges which contains the `Offer`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<OfferAggregates>>;
  /** A list of `Offer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Offer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Offer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Offer` values, with data from `AcceptedOffer`. */
export type IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<OffersGroupBy>;
    having: InputMaybe<OffersHavingInput>;
  };

/** A `Offer` edge in the connection, with data from `AcceptedOffer`. */
export type IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyEdge = {
  readonly __typename: 'IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Offer` at the end of the edge. */
  readonly node: Maybe<Offer>;
};

/** A `Offer` edge in the connection, with data from `AcceptedOffer`. */
export type IndexerOffersByAcceptedOfferIndexerIdAndOfferIdManyToManyEdgeacceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

export type IndexerReward = Node & {
  readonly __typename: 'IndexerReward';
  readonly additions: Scalars['BigFloat'];
  readonly amount: Scalars['BigFloat'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly eraIdx: Scalars['String'];
  readonly id: Scalars['String'];
  /** Reads a single `Indexer` that is related to this `IndexerReward`. */
  readonly indexer: Maybe<Indexer>;
  readonly indexerId: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly removals: Scalars['BigFloat'];
};

export type IndexerRewardAggregates = {
  readonly __typename: 'IndexerRewardAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<IndexerRewardAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<IndexerRewardDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<IndexerRewardMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<IndexerRewardMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<IndexerRewardStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<IndexerRewardStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<IndexerRewardSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<IndexerRewardVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<IndexerRewardVarianceSampleAggregates>;
};

export type IndexerRewardAverageAggregates = {
  readonly __typename: 'IndexerRewardAverageAggregates';
  /** Mean average of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Mean average of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardDistinctCountAggregates = {
  readonly __typename: 'IndexerRewardDistinctCountAggregates';
  /** Distinct count of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigInt']>;
  /** Distinct count of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of eraIdx across the matching connection */
  readonly eraIdx: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerId across the matching connection */
  readonly indexerId: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `IndexerReward` object types. All fields are combined with a logical ‘and.’ */
export type IndexerRewardFilter = {
  /** Filter by the object’s `additions` field. */
  readonly additions: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `amount` field. */
  readonly amount: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<IndexerRewardFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `eraIdx` field. */
  readonly eraIdx: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerId` field. */
  readonly indexerId: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<IndexerRewardFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<IndexerRewardFilter>>;
  /** Filter by the object’s `removals` field. */
  readonly removals: InputMaybe<BigFloatFilter>;
};

export type IndexerRewardMaxAggregates = {
  readonly __typename: 'IndexerRewardMaxAggregates';
  /** Maximum of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Maximum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardMinAggregates = {
  readonly __typename: 'IndexerRewardMinAggregates';
  /** Minimum of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Minimum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardStddevPopulationAggregates = {
  readonly __typename: 'IndexerRewardStddevPopulationAggregates';
  /** Population standard deviation of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardStddevSampleAggregates = {
  readonly __typename: 'IndexerRewardStddevSampleAggregates';
  /** Sample standard deviation of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardSumAggregates = {
  readonly __typename: 'IndexerRewardSumAggregates';
  /** Sum of additions across the matching connection */
  readonly additions: Scalars['BigFloat'];
  /** Sum of amount across the matching connection */
  readonly amount: Scalars['BigFloat'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of removals across the matching connection */
  readonly removals: Scalars['BigFloat'];
};

export type IndexerRewardVariancePopulationAggregates = {
  readonly __typename: 'IndexerRewardVariancePopulationAggregates';
  /** Population variance of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Population variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

export type IndexerRewardVarianceSampleAggregates = {
  readonly __typename: 'IndexerRewardVarianceSampleAggregates';
  /** Sample variance of additions across the matching connection */
  readonly additions: Maybe<Scalars['BigFloat']>;
  /** Sample variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of removals across the matching connection */
  readonly removals: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `IndexerReward` values. */
export type IndexerRewardsConnection = {
  readonly __typename: 'IndexerRewardsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<IndexerRewardAggregates>;
  /** A list of edges which contains the `IndexerReward` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<IndexerRewardsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<IndexerRewardAggregates>>;
  /** A list of `IndexerReward` objects. */
  readonly nodes: ReadonlyArray<Maybe<IndexerReward>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `IndexerReward` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `IndexerReward` values. */
export type IndexerRewardsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<IndexerRewardsGroupBy>;
  having: InputMaybe<IndexerRewardsHavingInput>;
};

/** A `IndexerReward` edge in the connection. */
export type IndexerRewardsEdge = {
  readonly __typename: 'IndexerRewardsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `IndexerReward` at the end of the edge. */
  readonly node: Maybe<IndexerReward>;
};

/** Grouping methods for `IndexerReward` for usage during aggregation. */
export enum IndexerRewardsGroupBy {
  ADDITIONS = 'ADDITIONS',
  AMOUNT = 'AMOUNT',
  CREATED_BLOCK = 'CREATED_BLOCK',
  ERA_IDX = 'ERA_IDX',
  INDEXER_ID = 'INDEXER_ID',
  LAST_EVENT = 'LAST_EVENT',
  REMOVALS = 'REMOVALS',
}

export type IndexerRewardsHavingAverageInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingDistinctCountInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `IndexerReward` aggregates. */
export type IndexerRewardsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<IndexerRewardsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<IndexerRewardsHavingInput>>;
  readonly average: InputMaybe<IndexerRewardsHavingAverageInput>;
  readonly distinctCount: InputMaybe<IndexerRewardsHavingDistinctCountInput>;
  readonly max: InputMaybe<IndexerRewardsHavingMaxInput>;
  readonly min: InputMaybe<IndexerRewardsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<IndexerRewardsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<IndexerRewardsHavingStddevSampleInput>;
  readonly sum: InputMaybe<IndexerRewardsHavingSumInput>;
  readonly variancePopulation: InputMaybe<IndexerRewardsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<IndexerRewardsHavingVarianceSampleInput>;
};

export type IndexerRewardsHavingMaxInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingMinInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingStddevPopulationInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingStddevSampleInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingSumInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingVariancePopulationInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

export type IndexerRewardsHavingVarianceSampleInput = {
  readonly additions: InputMaybe<HavingBigfloatFilter>;
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly removals: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `IndexerReward`. */
export enum IndexerRewardsOrderBy {
  ADDITIONS_ASC = 'ADDITIONS_ASC',
  ADDITIONS_DESC = 'ADDITIONS_DESC',
  AMOUNT_ASC = 'AMOUNT_ASC',
  AMOUNT_DESC = 'AMOUNT_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  ERA_IDX_ASC = 'ERA_IDX_ASC',
  ERA_IDX_DESC = 'ERA_IDX_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ID_ASC = 'INDEXER_ID_ASC',
  INDEXER_ID_DESC = 'INDEXER_ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  REMOVALS_ASC = 'REMOVALS_ASC',
  REMOVALS_DESC = 'REMOVALS_DESC',
}

/** A connection to a list of `ServiceAgreement` values, with data from `AcceptedOffer`. */
export type IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyConnection =
  {
    readonly __typename: 'IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<ServiceAgreementAggregates>;
    /** A list of edges which contains the `ServiceAgreement`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<ServiceAgreementAggregates>>;
    /** A list of `ServiceAgreement` objects. */
    readonly nodes: ReadonlyArray<Maybe<ServiceAgreement>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `ServiceAgreement` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `ServiceAgreement` values, with data from `AcceptedOffer`. */
export type IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<ServiceAgreementsGroupBy>;
    having: InputMaybe<ServiceAgreementsHavingInput>;
  };

/** A `ServiceAgreement` edge in the connection, with data from `AcceptedOffer`. */
export type IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyEdge = {
  readonly __typename: 'IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `ServiceAgreement` at the end of the edge. */
  readonly node: Maybe<ServiceAgreement>;
};

/** A `ServiceAgreement` edge in the connection, with data from `AcceptedOffer`. */
export type IndexerServiceAgreementsByAcceptedOfferIndexerIdAndServiceAgreementIdManyToManyEdgeacceptedOffersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<AcceptedOfferFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
  };

export type IndexerStddevPopulationAggregates = {
  readonly __typename: 'IndexerStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type IndexerStddevSampleAggregates = {
  readonly __typename: 'IndexerStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type IndexerSumAggregates = {
  readonly __typename: 'IndexerSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type IndexerVariancePopulationAggregates = {
  readonly __typename: 'IndexerVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type IndexerVarianceSampleAggregates = {
  readonly __typename: 'IndexerVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Indexer` values. */
export type IndexersConnection = {
  readonly __typename: 'IndexersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<IndexerAggregates>;
  /** A list of edges which contains the `Indexer` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<IndexersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<IndexerAggregates>>;
  /** A list of `Indexer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Indexer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Indexer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Indexer` values. */
export type IndexersConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<IndexersGroupBy>;
  having: InputMaybe<IndexersHavingInput>;
};

/** A `Indexer` edge in the connection. */
export type IndexersEdge = {
  readonly __typename: 'IndexersEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Indexer` at the end of the edge. */
  readonly node: Maybe<Indexer>;
};

/** Grouping methods for `Indexer` for usage during aggregation. */
export enum IndexersGroupBy {
  ACTIVE = 'ACTIVE',
  COMMISSION = 'COMMISSION',
  CONTROLLER = 'CONTROLLER',
  CREATED_BLOCK = 'CREATED_BLOCK',
  LAST_EVENT = 'LAST_EVENT',
  LAST_REWARDED_ERA = 'LAST_REWARDED_ERA',
  METADATA = 'METADATA',
  TOTAL_STAKE = 'TOTAL_STAKE',
}

export type IndexersHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Indexer` aggregates. */
export type IndexersHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<IndexersHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<IndexersHavingInput>>;
  readonly average: InputMaybe<IndexersHavingAverageInput>;
  readonly distinctCount: InputMaybe<IndexersHavingDistinctCountInput>;
  readonly max: InputMaybe<IndexersHavingMaxInput>;
  readonly min: InputMaybe<IndexersHavingMinInput>;
  readonly stddevPopulation: InputMaybe<IndexersHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<IndexersHavingStddevSampleInput>;
  readonly sum: InputMaybe<IndexersHavingSumInput>;
  readonly variancePopulation: InputMaybe<IndexersHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<IndexersHavingVarianceSampleInput>;
};

export type IndexersHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type IndexersHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Indexer`. */
export enum IndexersOrderBy {
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_AVERAGE_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_COUNT_ASC = 'ACCEPTED_OFFERS_COUNT_ASC',
  ACCEPTED_OFFERS_COUNT_DESC = 'ACCEPTED_OFFERS_COUNT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MAX_ID_ASC = 'ACCEPTED_OFFERS_MAX_ID_ASC',
  ACCEPTED_OFFERS_MAX_ID_DESC = 'ACCEPTED_OFFERS_MAX_ID_DESC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MIN_ID_ASC = 'ACCEPTED_OFFERS_MIN_ID_ASC',
  ACCEPTED_OFFERS_MIN_ID_DESC = 'ACCEPTED_OFFERS_MIN_ID_DESC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_SUM_ID_ASC = 'ACCEPTED_OFFERS_SUM_ID_ASC',
  ACCEPTED_OFFERS_SUM_ID_DESC = 'ACCEPTED_OFFERS_SUM_ID_DESC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_ASC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_ASC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_DESC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_DESC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  ACTIVE_ASC = 'ACTIVE_ASC',
  ACTIVE_DESC = 'ACTIVE_DESC',
  COMMISSION_ASC = 'COMMISSION_ASC',
  COMMISSION_DESC = 'COMMISSION_DESC',
  CONTROLLER_ASC = 'CONTROLLER_ASC',
  CONTROLLER_DESC = 'CONTROLLER_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATIONS_AVERAGE_AMOUNT_ASC = 'DELEGATIONS_AVERAGE_AMOUNT_ASC',
  DELEGATIONS_AVERAGE_AMOUNT_DESC = 'DELEGATIONS_AVERAGE_AMOUNT_DESC',
  DELEGATIONS_AVERAGE_CREATED_BLOCK_ASC = 'DELEGATIONS_AVERAGE_CREATED_BLOCK_ASC',
  DELEGATIONS_AVERAGE_CREATED_BLOCK_DESC = 'DELEGATIONS_AVERAGE_CREATED_BLOCK_DESC',
  DELEGATIONS_AVERAGE_DELEGATOR_ID_ASC = 'DELEGATIONS_AVERAGE_DELEGATOR_ID_ASC',
  DELEGATIONS_AVERAGE_DELEGATOR_ID_DESC = 'DELEGATIONS_AVERAGE_DELEGATOR_ID_DESC',
  DELEGATIONS_AVERAGE_ID_ASC = 'DELEGATIONS_AVERAGE_ID_ASC',
  DELEGATIONS_AVERAGE_ID_DESC = 'DELEGATIONS_AVERAGE_ID_DESC',
  DELEGATIONS_AVERAGE_INDEXER_ID_ASC = 'DELEGATIONS_AVERAGE_INDEXER_ID_ASC',
  DELEGATIONS_AVERAGE_INDEXER_ID_DESC = 'DELEGATIONS_AVERAGE_INDEXER_ID_DESC',
  DELEGATIONS_AVERAGE_LAST_EVENT_ASC = 'DELEGATIONS_AVERAGE_LAST_EVENT_ASC',
  DELEGATIONS_AVERAGE_LAST_EVENT_DESC = 'DELEGATIONS_AVERAGE_LAST_EVENT_DESC',
  DELEGATIONS_COUNT_ASC = 'DELEGATIONS_COUNT_ASC',
  DELEGATIONS_COUNT_DESC = 'DELEGATIONS_COUNT_DESC',
  DELEGATIONS_DISTINCT_COUNT_AMOUNT_ASC = 'DELEGATIONS_DISTINCT_COUNT_AMOUNT_ASC',
  DELEGATIONS_DISTINCT_COUNT_AMOUNT_DESC = 'DELEGATIONS_DISTINCT_COUNT_AMOUNT_DESC',
  DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'DELEGATIONS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_DELEGATOR_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_ASC = 'DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_ASC',
  DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_DESC = 'DELEGATIONS_DISTINCT_COUNT_INDEXER_ID_DESC',
  DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_ASC = 'DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_ASC',
  DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_DESC = 'DELEGATIONS_DISTINCT_COUNT_LAST_EVENT_DESC',
  DELEGATIONS_MAX_AMOUNT_ASC = 'DELEGATIONS_MAX_AMOUNT_ASC',
  DELEGATIONS_MAX_AMOUNT_DESC = 'DELEGATIONS_MAX_AMOUNT_DESC',
  DELEGATIONS_MAX_CREATED_BLOCK_ASC = 'DELEGATIONS_MAX_CREATED_BLOCK_ASC',
  DELEGATIONS_MAX_CREATED_BLOCK_DESC = 'DELEGATIONS_MAX_CREATED_BLOCK_DESC',
  DELEGATIONS_MAX_DELEGATOR_ID_ASC = 'DELEGATIONS_MAX_DELEGATOR_ID_ASC',
  DELEGATIONS_MAX_DELEGATOR_ID_DESC = 'DELEGATIONS_MAX_DELEGATOR_ID_DESC',
  DELEGATIONS_MAX_ID_ASC = 'DELEGATIONS_MAX_ID_ASC',
  DELEGATIONS_MAX_ID_DESC = 'DELEGATIONS_MAX_ID_DESC',
  DELEGATIONS_MAX_INDEXER_ID_ASC = 'DELEGATIONS_MAX_INDEXER_ID_ASC',
  DELEGATIONS_MAX_INDEXER_ID_DESC = 'DELEGATIONS_MAX_INDEXER_ID_DESC',
  DELEGATIONS_MAX_LAST_EVENT_ASC = 'DELEGATIONS_MAX_LAST_EVENT_ASC',
  DELEGATIONS_MAX_LAST_EVENT_DESC = 'DELEGATIONS_MAX_LAST_EVENT_DESC',
  DELEGATIONS_MIN_AMOUNT_ASC = 'DELEGATIONS_MIN_AMOUNT_ASC',
  DELEGATIONS_MIN_AMOUNT_DESC = 'DELEGATIONS_MIN_AMOUNT_DESC',
  DELEGATIONS_MIN_CREATED_BLOCK_ASC = 'DELEGATIONS_MIN_CREATED_BLOCK_ASC',
  DELEGATIONS_MIN_CREATED_BLOCK_DESC = 'DELEGATIONS_MIN_CREATED_BLOCK_DESC',
  DELEGATIONS_MIN_DELEGATOR_ID_ASC = 'DELEGATIONS_MIN_DELEGATOR_ID_ASC',
  DELEGATIONS_MIN_DELEGATOR_ID_DESC = 'DELEGATIONS_MIN_DELEGATOR_ID_DESC',
  DELEGATIONS_MIN_ID_ASC = 'DELEGATIONS_MIN_ID_ASC',
  DELEGATIONS_MIN_ID_DESC = 'DELEGATIONS_MIN_ID_DESC',
  DELEGATIONS_MIN_INDEXER_ID_ASC = 'DELEGATIONS_MIN_INDEXER_ID_ASC',
  DELEGATIONS_MIN_INDEXER_ID_DESC = 'DELEGATIONS_MIN_INDEXER_ID_DESC',
  DELEGATIONS_MIN_LAST_EVENT_ASC = 'DELEGATIONS_MIN_LAST_EVENT_ASC',
  DELEGATIONS_MIN_LAST_EVENT_DESC = 'DELEGATIONS_MIN_LAST_EVENT_DESC',
  DELEGATIONS_STDDEV_POPULATION_AMOUNT_ASC = 'DELEGATIONS_STDDEV_POPULATION_AMOUNT_ASC',
  DELEGATIONS_STDDEV_POPULATION_AMOUNT_DESC = 'DELEGATIONS_STDDEV_POPULATION_AMOUNT_DESC',
  DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'DELEGATIONS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_DELEGATOR_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_ASC = 'DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_ASC',
  DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_DESC = 'DELEGATIONS_STDDEV_POPULATION_INDEXER_ID_DESC',
  DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_ASC = 'DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_ASC',
  DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_DESC = 'DELEGATIONS_STDDEV_POPULATION_LAST_EVENT_DESC',
  DELEGATIONS_STDDEV_SAMPLE_AMOUNT_ASC = 'DELEGATIONS_STDDEV_SAMPLE_AMOUNT_ASC',
  DELEGATIONS_STDDEV_SAMPLE_AMOUNT_DESC = 'DELEGATIONS_STDDEV_SAMPLE_AMOUNT_DESC',
  DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'DELEGATIONS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_DELEGATOR_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'DELEGATIONS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'DELEGATIONS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  DELEGATIONS_SUM_AMOUNT_ASC = 'DELEGATIONS_SUM_AMOUNT_ASC',
  DELEGATIONS_SUM_AMOUNT_DESC = 'DELEGATIONS_SUM_AMOUNT_DESC',
  DELEGATIONS_SUM_CREATED_BLOCK_ASC = 'DELEGATIONS_SUM_CREATED_BLOCK_ASC',
  DELEGATIONS_SUM_CREATED_BLOCK_DESC = 'DELEGATIONS_SUM_CREATED_BLOCK_DESC',
  DELEGATIONS_SUM_DELEGATOR_ID_ASC = 'DELEGATIONS_SUM_DELEGATOR_ID_ASC',
  DELEGATIONS_SUM_DELEGATOR_ID_DESC = 'DELEGATIONS_SUM_DELEGATOR_ID_DESC',
  DELEGATIONS_SUM_ID_ASC = 'DELEGATIONS_SUM_ID_ASC',
  DELEGATIONS_SUM_ID_DESC = 'DELEGATIONS_SUM_ID_DESC',
  DELEGATIONS_SUM_INDEXER_ID_ASC = 'DELEGATIONS_SUM_INDEXER_ID_ASC',
  DELEGATIONS_SUM_INDEXER_ID_DESC = 'DELEGATIONS_SUM_INDEXER_ID_DESC',
  DELEGATIONS_SUM_LAST_EVENT_ASC = 'DELEGATIONS_SUM_LAST_EVENT_ASC',
  DELEGATIONS_SUM_LAST_EVENT_DESC = 'DELEGATIONS_SUM_LAST_EVENT_DESC',
  DELEGATIONS_VARIANCE_POPULATION_AMOUNT_ASC = 'DELEGATIONS_VARIANCE_POPULATION_AMOUNT_ASC',
  DELEGATIONS_VARIANCE_POPULATION_AMOUNT_DESC = 'DELEGATIONS_VARIANCE_POPULATION_AMOUNT_DESC',
  DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'DELEGATIONS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_DELEGATOR_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'DELEGATIONS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'DELEGATIONS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_AMOUNT_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_DELEGATOR_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'DELEGATIONS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_ID_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_ID_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_ID_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_ID_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_STATUS_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_STATUS_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_STATUS_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_STATUS_DESC',
  DEPLOYMENT_INDEXERS_AVERAGE_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_AVERAGE_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_AVERAGE_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_AVERAGE_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_COUNT_ASC = 'DEPLOYMENT_INDEXERS_COUNT_ASC',
  DEPLOYMENT_INDEXERS_COUNT_DESC = 'DEPLOYMENT_INDEXERS_COUNT_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_ID_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_ID_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_ID_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_ID_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_STATUS_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_STATUS_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_STATUS_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_STATUS_DESC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_DISTINCT_COUNT_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_DISTINCT_COUNT_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_MAX_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_MAX_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_MAX_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_MAX_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_MAX_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_MAX_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_MAX_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_MAX_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_MAX_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_MAX_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_MAX_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_MAX_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_MAX_ID_ASC = 'DEPLOYMENT_INDEXERS_MAX_ID_ASC',
  DEPLOYMENT_INDEXERS_MAX_ID_DESC = 'DEPLOYMENT_INDEXERS_MAX_ID_DESC',
  DEPLOYMENT_INDEXERS_MAX_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_MAX_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_MAX_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_MAX_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_MAX_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_MAX_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_MAX_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_MAX_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_MAX_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_MAX_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_MAX_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_MAX_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_MAX_STATUS_ASC = 'DEPLOYMENT_INDEXERS_MAX_STATUS_ASC',
  DEPLOYMENT_INDEXERS_MAX_STATUS_DESC = 'DEPLOYMENT_INDEXERS_MAX_STATUS_DESC',
  DEPLOYMENT_INDEXERS_MAX_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_MAX_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_MAX_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_MAX_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_MIN_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_MIN_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_MIN_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_MIN_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_MIN_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_MIN_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_MIN_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_MIN_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_MIN_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_MIN_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_MIN_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_MIN_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_MIN_ID_ASC = 'DEPLOYMENT_INDEXERS_MIN_ID_ASC',
  DEPLOYMENT_INDEXERS_MIN_ID_DESC = 'DEPLOYMENT_INDEXERS_MIN_ID_DESC',
  DEPLOYMENT_INDEXERS_MIN_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_MIN_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_MIN_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_MIN_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_MIN_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_MIN_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_MIN_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_MIN_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_MIN_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_MIN_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_MIN_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_MIN_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_MIN_STATUS_ASC = 'DEPLOYMENT_INDEXERS_MIN_STATUS_ASC',
  DEPLOYMENT_INDEXERS_MIN_STATUS_DESC = 'DEPLOYMENT_INDEXERS_MIN_STATUS_DESC',
  DEPLOYMENT_INDEXERS_MIN_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_MIN_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_MIN_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_MIN_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_STATUS_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_STATUS_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_STATUS_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_STATUS_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_POPULATION_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_POPULATION_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_STATUS_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_STATUS_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_STATUS_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_STATUS_DESC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_STDDEV_SAMPLE_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_SUM_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_SUM_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_SUM_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_SUM_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_SUM_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_SUM_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_SUM_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_SUM_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_SUM_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_SUM_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_SUM_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_SUM_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_SUM_ID_ASC = 'DEPLOYMENT_INDEXERS_SUM_ID_ASC',
  DEPLOYMENT_INDEXERS_SUM_ID_DESC = 'DEPLOYMENT_INDEXERS_SUM_ID_DESC',
  DEPLOYMENT_INDEXERS_SUM_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_SUM_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_SUM_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_SUM_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_SUM_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_SUM_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_SUM_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_SUM_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_SUM_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_SUM_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_SUM_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_SUM_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_SUM_STATUS_ASC = 'DEPLOYMENT_INDEXERS_SUM_STATUS_ASC',
  DEPLOYMENT_INDEXERS_SUM_STATUS_DESC = 'DEPLOYMENT_INDEXERS_SUM_STATUS_DESC',
  DEPLOYMENT_INDEXERS_SUM_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_SUM_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_SUM_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_SUM_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_STATUS_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_STATUS_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_STATUS_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_STATUS_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_POPULATION_TIMESTAMP_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_BLOCK_HEIGHT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_MMR_ROOT_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_STATUS_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_STATUS_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_STATUS_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_STATUS_DESC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_ASC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_ASC',
  DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_DESC = 'DEPLOYMENT_INDEXERS_VARIANCE_SAMPLE_TIMESTAMP_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  LAST_REWARDED_ERA_ASC = 'LAST_REWARDED_ERA_ASC',
  LAST_REWARDED_ERA_DESC = 'LAST_REWARDED_ERA_DESC',
  METADATA_ASC = 'METADATA_ASC',
  METADATA_DESC = 'METADATA_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  REWARDS_AVERAGE_ADDITIONS_ASC = 'REWARDS_AVERAGE_ADDITIONS_ASC',
  REWARDS_AVERAGE_ADDITIONS_DESC = 'REWARDS_AVERAGE_ADDITIONS_DESC',
  REWARDS_AVERAGE_AMOUNT_ASC = 'REWARDS_AVERAGE_AMOUNT_ASC',
  REWARDS_AVERAGE_AMOUNT_DESC = 'REWARDS_AVERAGE_AMOUNT_DESC',
  REWARDS_AVERAGE_CREATED_BLOCK_ASC = 'REWARDS_AVERAGE_CREATED_BLOCK_ASC',
  REWARDS_AVERAGE_CREATED_BLOCK_DESC = 'REWARDS_AVERAGE_CREATED_BLOCK_DESC',
  REWARDS_AVERAGE_ERA_IDX_ASC = 'REWARDS_AVERAGE_ERA_IDX_ASC',
  REWARDS_AVERAGE_ERA_IDX_DESC = 'REWARDS_AVERAGE_ERA_IDX_DESC',
  REWARDS_AVERAGE_ID_ASC = 'REWARDS_AVERAGE_ID_ASC',
  REWARDS_AVERAGE_ID_DESC = 'REWARDS_AVERAGE_ID_DESC',
  REWARDS_AVERAGE_INDEXER_ID_ASC = 'REWARDS_AVERAGE_INDEXER_ID_ASC',
  REWARDS_AVERAGE_INDEXER_ID_DESC = 'REWARDS_AVERAGE_INDEXER_ID_DESC',
  REWARDS_AVERAGE_LAST_EVENT_ASC = 'REWARDS_AVERAGE_LAST_EVENT_ASC',
  REWARDS_AVERAGE_LAST_EVENT_DESC = 'REWARDS_AVERAGE_LAST_EVENT_DESC',
  REWARDS_AVERAGE_REMOVALS_ASC = 'REWARDS_AVERAGE_REMOVALS_ASC',
  REWARDS_AVERAGE_REMOVALS_DESC = 'REWARDS_AVERAGE_REMOVALS_DESC',
  REWARDS_COUNT_ASC = 'REWARDS_COUNT_ASC',
  REWARDS_COUNT_DESC = 'REWARDS_COUNT_DESC',
  REWARDS_DISTINCT_COUNT_ADDITIONS_ASC = 'REWARDS_DISTINCT_COUNT_ADDITIONS_ASC',
  REWARDS_DISTINCT_COUNT_ADDITIONS_DESC = 'REWARDS_DISTINCT_COUNT_ADDITIONS_DESC',
  REWARDS_DISTINCT_COUNT_AMOUNT_ASC = 'REWARDS_DISTINCT_COUNT_AMOUNT_ASC',
  REWARDS_DISTINCT_COUNT_AMOUNT_DESC = 'REWARDS_DISTINCT_COUNT_AMOUNT_DESC',
  REWARDS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'REWARDS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  REWARDS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'REWARDS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  REWARDS_DISTINCT_COUNT_ERA_IDX_ASC = 'REWARDS_DISTINCT_COUNT_ERA_IDX_ASC',
  REWARDS_DISTINCT_COUNT_ERA_IDX_DESC = 'REWARDS_DISTINCT_COUNT_ERA_IDX_DESC',
  REWARDS_DISTINCT_COUNT_ID_ASC = 'REWARDS_DISTINCT_COUNT_ID_ASC',
  REWARDS_DISTINCT_COUNT_ID_DESC = 'REWARDS_DISTINCT_COUNT_ID_DESC',
  REWARDS_DISTINCT_COUNT_INDEXER_ID_ASC = 'REWARDS_DISTINCT_COUNT_INDEXER_ID_ASC',
  REWARDS_DISTINCT_COUNT_INDEXER_ID_DESC = 'REWARDS_DISTINCT_COUNT_INDEXER_ID_DESC',
  REWARDS_DISTINCT_COUNT_LAST_EVENT_ASC = 'REWARDS_DISTINCT_COUNT_LAST_EVENT_ASC',
  REWARDS_DISTINCT_COUNT_LAST_EVENT_DESC = 'REWARDS_DISTINCT_COUNT_LAST_EVENT_DESC',
  REWARDS_DISTINCT_COUNT_REMOVALS_ASC = 'REWARDS_DISTINCT_COUNT_REMOVALS_ASC',
  REWARDS_DISTINCT_COUNT_REMOVALS_DESC = 'REWARDS_DISTINCT_COUNT_REMOVALS_DESC',
  REWARDS_MAX_ADDITIONS_ASC = 'REWARDS_MAX_ADDITIONS_ASC',
  REWARDS_MAX_ADDITIONS_DESC = 'REWARDS_MAX_ADDITIONS_DESC',
  REWARDS_MAX_AMOUNT_ASC = 'REWARDS_MAX_AMOUNT_ASC',
  REWARDS_MAX_AMOUNT_DESC = 'REWARDS_MAX_AMOUNT_DESC',
  REWARDS_MAX_CREATED_BLOCK_ASC = 'REWARDS_MAX_CREATED_BLOCK_ASC',
  REWARDS_MAX_CREATED_BLOCK_DESC = 'REWARDS_MAX_CREATED_BLOCK_DESC',
  REWARDS_MAX_ERA_IDX_ASC = 'REWARDS_MAX_ERA_IDX_ASC',
  REWARDS_MAX_ERA_IDX_DESC = 'REWARDS_MAX_ERA_IDX_DESC',
  REWARDS_MAX_ID_ASC = 'REWARDS_MAX_ID_ASC',
  REWARDS_MAX_ID_DESC = 'REWARDS_MAX_ID_DESC',
  REWARDS_MAX_INDEXER_ID_ASC = 'REWARDS_MAX_INDEXER_ID_ASC',
  REWARDS_MAX_INDEXER_ID_DESC = 'REWARDS_MAX_INDEXER_ID_DESC',
  REWARDS_MAX_LAST_EVENT_ASC = 'REWARDS_MAX_LAST_EVENT_ASC',
  REWARDS_MAX_LAST_EVENT_DESC = 'REWARDS_MAX_LAST_EVENT_DESC',
  REWARDS_MAX_REMOVALS_ASC = 'REWARDS_MAX_REMOVALS_ASC',
  REWARDS_MAX_REMOVALS_DESC = 'REWARDS_MAX_REMOVALS_DESC',
  REWARDS_MIN_ADDITIONS_ASC = 'REWARDS_MIN_ADDITIONS_ASC',
  REWARDS_MIN_ADDITIONS_DESC = 'REWARDS_MIN_ADDITIONS_DESC',
  REWARDS_MIN_AMOUNT_ASC = 'REWARDS_MIN_AMOUNT_ASC',
  REWARDS_MIN_AMOUNT_DESC = 'REWARDS_MIN_AMOUNT_DESC',
  REWARDS_MIN_CREATED_BLOCK_ASC = 'REWARDS_MIN_CREATED_BLOCK_ASC',
  REWARDS_MIN_CREATED_BLOCK_DESC = 'REWARDS_MIN_CREATED_BLOCK_DESC',
  REWARDS_MIN_ERA_IDX_ASC = 'REWARDS_MIN_ERA_IDX_ASC',
  REWARDS_MIN_ERA_IDX_DESC = 'REWARDS_MIN_ERA_IDX_DESC',
  REWARDS_MIN_ID_ASC = 'REWARDS_MIN_ID_ASC',
  REWARDS_MIN_ID_DESC = 'REWARDS_MIN_ID_DESC',
  REWARDS_MIN_INDEXER_ID_ASC = 'REWARDS_MIN_INDEXER_ID_ASC',
  REWARDS_MIN_INDEXER_ID_DESC = 'REWARDS_MIN_INDEXER_ID_DESC',
  REWARDS_MIN_LAST_EVENT_ASC = 'REWARDS_MIN_LAST_EVENT_ASC',
  REWARDS_MIN_LAST_EVENT_DESC = 'REWARDS_MIN_LAST_EVENT_DESC',
  REWARDS_MIN_REMOVALS_ASC = 'REWARDS_MIN_REMOVALS_ASC',
  REWARDS_MIN_REMOVALS_DESC = 'REWARDS_MIN_REMOVALS_DESC',
  REWARDS_STDDEV_POPULATION_ADDITIONS_ASC = 'REWARDS_STDDEV_POPULATION_ADDITIONS_ASC',
  REWARDS_STDDEV_POPULATION_ADDITIONS_DESC = 'REWARDS_STDDEV_POPULATION_ADDITIONS_DESC',
  REWARDS_STDDEV_POPULATION_AMOUNT_ASC = 'REWARDS_STDDEV_POPULATION_AMOUNT_ASC',
  REWARDS_STDDEV_POPULATION_AMOUNT_DESC = 'REWARDS_STDDEV_POPULATION_AMOUNT_DESC',
  REWARDS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'REWARDS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  REWARDS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'REWARDS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  REWARDS_STDDEV_POPULATION_ERA_IDX_ASC = 'REWARDS_STDDEV_POPULATION_ERA_IDX_ASC',
  REWARDS_STDDEV_POPULATION_ERA_IDX_DESC = 'REWARDS_STDDEV_POPULATION_ERA_IDX_DESC',
  REWARDS_STDDEV_POPULATION_ID_ASC = 'REWARDS_STDDEV_POPULATION_ID_ASC',
  REWARDS_STDDEV_POPULATION_ID_DESC = 'REWARDS_STDDEV_POPULATION_ID_DESC',
  REWARDS_STDDEV_POPULATION_INDEXER_ID_ASC = 'REWARDS_STDDEV_POPULATION_INDEXER_ID_ASC',
  REWARDS_STDDEV_POPULATION_INDEXER_ID_DESC = 'REWARDS_STDDEV_POPULATION_INDEXER_ID_DESC',
  REWARDS_STDDEV_POPULATION_LAST_EVENT_ASC = 'REWARDS_STDDEV_POPULATION_LAST_EVENT_ASC',
  REWARDS_STDDEV_POPULATION_LAST_EVENT_DESC = 'REWARDS_STDDEV_POPULATION_LAST_EVENT_DESC',
  REWARDS_STDDEV_POPULATION_REMOVALS_ASC = 'REWARDS_STDDEV_POPULATION_REMOVALS_ASC',
  REWARDS_STDDEV_POPULATION_REMOVALS_DESC = 'REWARDS_STDDEV_POPULATION_REMOVALS_DESC',
  REWARDS_STDDEV_SAMPLE_ADDITIONS_ASC = 'REWARDS_STDDEV_SAMPLE_ADDITIONS_ASC',
  REWARDS_STDDEV_SAMPLE_ADDITIONS_DESC = 'REWARDS_STDDEV_SAMPLE_ADDITIONS_DESC',
  REWARDS_STDDEV_SAMPLE_AMOUNT_ASC = 'REWARDS_STDDEV_SAMPLE_AMOUNT_ASC',
  REWARDS_STDDEV_SAMPLE_AMOUNT_DESC = 'REWARDS_STDDEV_SAMPLE_AMOUNT_DESC',
  REWARDS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'REWARDS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  REWARDS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'REWARDS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  REWARDS_STDDEV_SAMPLE_ERA_IDX_ASC = 'REWARDS_STDDEV_SAMPLE_ERA_IDX_ASC',
  REWARDS_STDDEV_SAMPLE_ERA_IDX_DESC = 'REWARDS_STDDEV_SAMPLE_ERA_IDX_DESC',
  REWARDS_STDDEV_SAMPLE_ID_ASC = 'REWARDS_STDDEV_SAMPLE_ID_ASC',
  REWARDS_STDDEV_SAMPLE_ID_DESC = 'REWARDS_STDDEV_SAMPLE_ID_DESC',
  REWARDS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'REWARDS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  REWARDS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'REWARDS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  REWARDS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'REWARDS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  REWARDS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'REWARDS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  REWARDS_STDDEV_SAMPLE_REMOVALS_ASC = 'REWARDS_STDDEV_SAMPLE_REMOVALS_ASC',
  REWARDS_STDDEV_SAMPLE_REMOVALS_DESC = 'REWARDS_STDDEV_SAMPLE_REMOVALS_DESC',
  REWARDS_SUM_ADDITIONS_ASC = 'REWARDS_SUM_ADDITIONS_ASC',
  REWARDS_SUM_ADDITIONS_DESC = 'REWARDS_SUM_ADDITIONS_DESC',
  REWARDS_SUM_AMOUNT_ASC = 'REWARDS_SUM_AMOUNT_ASC',
  REWARDS_SUM_AMOUNT_DESC = 'REWARDS_SUM_AMOUNT_DESC',
  REWARDS_SUM_CREATED_BLOCK_ASC = 'REWARDS_SUM_CREATED_BLOCK_ASC',
  REWARDS_SUM_CREATED_BLOCK_DESC = 'REWARDS_SUM_CREATED_BLOCK_DESC',
  REWARDS_SUM_ERA_IDX_ASC = 'REWARDS_SUM_ERA_IDX_ASC',
  REWARDS_SUM_ERA_IDX_DESC = 'REWARDS_SUM_ERA_IDX_DESC',
  REWARDS_SUM_ID_ASC = 'REWARDS_SUM_ID_ASC',
  REWARDS_SUM_ID_DESC = 'REWARDS_SUM_ID_DESC',
  REWARDS_SUM_INDEXER_ID_ASC = 'REWARDS_SUM_INDEXER_ID_ASC',
  REWARDS_SUM_INDEXER_ID_DESC = 'REWARDS_SUM_INDEXER_ID_DESC',
  REWARDS_SUM_LAST_EVENT_ASC = 'REWARDS_SUM_LAST_EVENT_ASC',
  REWARDS_SUM_LAST_EVENT_DESC = 'REWARDS_SUM_LAST_EVENT_DESC',
  REWARDS_SUM_REMOVALS_ASC = 'REWARDS_SUM_REMOVALS_ASC',
  REWARDS_SUM_REMOVALS_DESC = 'REWARDS_SUM_REMOVALS_DESC',
  REWARDS_VARIANCE_POPULATION_ADDITIONS_ASC = 'REWARDS_VARIANCE_POPULATION_ADDITIONS_ASC',
  REWARDS_VARIANCE_POPULATION_ADDITIONS_DESC = 'REWARDS_VARIANCE_POPULATION_ADDITIONS_DESC',
  REWARDS_VARIANCE_POPULATION_AMOUNT_ASC = 'REWARDS_VARIANCE_POPULATION_AMOUNT_ASC',
  REWARDS_VARIANCE_POPULATION_AMOUNT_DESC = 'REWARDS_VARIANCE_POPULATION_AMOUNT_DESC',
  REWARDS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'REWARDS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  REWARDS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'REWARDS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  REWARDS_VARIANCE_POPULATION_ERA_IDX_ASC = 'REWARDS_VARIANCE_POPULATION_ERA_IDX_ASC',
  REWARDS_VARIANCE_POPULATION_ERA_IDX_DESC = 'REWARDS_VARIANCE_POPULATION_ERA_IDX_DESC',
  REWARDS_VARIANCE_POPULATION_ID_ASC = 'REWARDS_VARIANCE_POPULATION_ID_ASC',
  REWARDS_VARIANCE_POPULATION_ID_DESC = 'REWARDS_VARIANCE_POPULATION_ID_DESC',
  REWARDS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'REWARDS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  REWARDS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'REWARDS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  REWARDS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'REWARDS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  REWARDS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'REWARDS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  REWARDS_VARIANCE_POPULATION_REMOVALS_ASC = 'REWARDS_VARIANCE_POPULATION_REMOVALS_ASC',
  REWARDS_VARIANCE_POPULATION_REMOVALS_DESC = 'REWARDS_VARIANCE_POPULATION_REMOVALS_DESC',
  REWARDS_VARIANCE_SAMPLE_ADDITIONS_ASC = 'REWARDS_VARIANCE_SAMPLE_ADDITIONS_ASC',
  REWARDS_VARIANCE_SAMPLE_ADDITIONS_DESC = 'REWARDS_VARIANCE_SAMPLE_ADDITIONS_DESC',
  REWARDS_VARIANCE_SAMPLE_AMOUNT_ASC = 'REWARDS_VARIANCE_SAMPLE_AMOUNT_ASC',
  REWARDS_VARIANCE_SAMPLE_AMOUNT_DESC = 'REWARDS_VARIANCE_SAMPLE_AMOUNT_DESC',
  REWARDS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'REWARDS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  REWARDS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'REWARDS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  REWARDS_VARIANCE_SAMPLE_ERA_IDX_ASC = 'REWARDS_VARIANCE_SAMPLE_ERA_IDX_ASC',
  REWARDS_VARIANCE_SAMPLE_ERA_IDX_DESC = 'REWARDS_VARIANCE_SAMPLE_ERA_IDX_DESC',
  REWARDS_VARIANCE_SAMPLE_ID_ASC = 'REWARDS_VARIANCE_SAMPLE_ID_ASC',
  REWARDS_VARIANCE_SAMPLE_ID_DESC = 'REWARDS_VARIANCE_SAMPLE_ID_DESC',
  REWARDS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'REWARDS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  REWARDS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'REWARDS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  REWARDS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'REWARDS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  REWARDS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'REWARDS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  REWARDS_VARIANCE_SAMPLE_REMOVALS_ASC = 'REWARDS_VARIANCE_SAMPLE_REMOVALS_ASC',
  REWARDS_VARIANCE_SAMPLE_REMOVALS_DESC = 'REWARDS_VARIANCE_SAMPLE_REMOVALS_DESC',
  TOTAL_STAKE_ASC = 'TOTAL_STAKE_ASC',
  TOTAL_STAKE_DESC = 'TOTAL_STAKE_DESC',
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JSONFilter = {
  /** Contained by the specified JSON. */
  readonly containedBy: InputMaybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  readonly contains: InputMaybe<Scalars['JSON']>;
  /** Contains all of the specified keys. */
  readonly containsAllKeys: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Contains any of the specified keys. */
  readonly containsAnyKeys: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Contains the specified key. */
  readonly containsKey: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['JSON']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['JSON']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['JSON']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['JSON']>>;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

export type Offer = Node & {
  readonly __typename: 'Offer';
  readonly accepted: Scalars['Int'];
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  readonly consumer: Scalars['String'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads a single `Deployment` that is related to this `Offer`. */
  readonly deployment: Maybe<Deployment>;
  readonly deploymentId: Scalars['String'];
  readonly deposit: Scalars['BigFloat'];
  readonly expireDate: Scalars['Datetime'];
  readonly id: Scalars['String'];
  /** Reads and enables pagination through a set of `Indexer`. */
  readonly indexersByAcceptedOfferOfferIdAndIndexerId: OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyConnection;
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly limit: Scalars['Int'];
  readonly minimumAcceptHeight: Scalars['BigFloat'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads a single `PlanTemplate` that is related to this `Offer`. */
  readonly planTemplate: Maybe<PlanTemplate>;
  readonly planTemplateId: Scalars['String'];
  readonly reachLimit: Scalars['Boolean'];
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreementsByAcceptedOfferOfferIdAndServiceAgreementId: OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyConnection;
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
  readonly withdrawn: Scalars['Boolean'];
};

export type OfferacceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

export type OfferindexersByAcceptedOfferOfferIdAndIndexerIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexersOrderBy>>;
};

export type OfferserviceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ServiceAgreementFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
};

export type OfferAggregates = {
  readonly __typename: 'OfferAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<OfferAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<OfferDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<OfferMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<OfferMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<OfferStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<OfferStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<OfferSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<OfferVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<OfferVarianceSampleAggregates>;
};

export type OfferAverageAggregates = {
  readonly __typename: 'OfferAverageAggregates';
  /** Mean average of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Mean average of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigFloat']>;
  /** Mean average of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Mean average of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

export type OfferDistinctCountAggregates = {
  readonly __typename: 'OfferDistinctCountAggregates';
  /** Distinct count of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigInt']>;
  /** Distinct count of consumer across the matching connection */
  readonly consumer: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of deploymentId across the matching connection */
  readonly deploymentId: Maybe<Scalars['BigInt']>;
  /** Distinct count of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigInt']>;
  /** Distinct count of expireDate across the matching connection */
  readonly expireDate: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigInt']>;
  /** Distinct count of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigInt']>;
  /** Distinct count of planTemplateId across the matching connection */
  readonly planTemplateId: Maybe<Scalars['BigInt']>;
  /** Distinct count of reachLimit across the matching connection */
  readonly reachLimit: Maybe<Scalars['BigInt']>;
  /** Distinct count of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigInt']>;
  /** Distinct count of withdrawn across the matching connection */
  readonly withdrawn: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Offer` object types. All fields are combined with a logical ‘and.’ */
export type OfferFilter = {
  /** Filter by the object’s `accepted` field. */
  readonly accepted: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<OfferFilter>>;
  /** Filter by the object’s `consumer` field. */
  readonly consumer: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `deploymentId` field. */
  readonly deploymentId: InputMaybe<StringFilter>;
  /** Filter by the object’s `deposit` field. */
  readonly deposit: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `expireDate` field. */
  readonly expireDate: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `limit` field. */
  readonly limit: InputMaybe<IntFilter>;
  /** Filter by the object’s `minimumAcceptHeight` field. */
  readonly minimumAcceptHeight: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<OfferFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<OfferFilter>>;
  /** Filter by the object’s `planTemplateId` field. */
  readonly planTemplateId: InputMaybe<StringFilter>;
  /** Filter by the object’s `reachLimit` field. */
  readonly reachLimit: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `withdrawPenalty` field. */
  readonly withdrawPenalty: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `withdrawn` field. */
  readonly withdrawn: InputMaybe<BooleanFilter>;
};

/** A connection to a list of `Indexer` values, with data from `AcceptedOffer`. */
export type OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyConnection = {
  readonly __typename: 'OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<IndexerAggregates>;
  /** A list of edges which contains the `Indexer`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<IndexerAggregates>>;
  /** A list of `Indexer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Indexer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Indexer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Indexer` values, with data from `AcceptedOffer`. */
export type OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<IndexersGroupBy>;
    having: InputMaybe<IndexersHavingInput>;
  };

/** A `Indexer` edge in the connection, with data from `AcceptedOffer`. */
export type OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyEdge = {
  readonly __typename: 'OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Indexer` at the end of the edge. */
  readonly node: Maybe<Indexer>;
};

/** A `Indexer` edge in the connection, with data from `AcceptedOffer`. */
export type OfferIndexersByAcceptedOfferOfferIdAndIndexerIdManyToManyEdgeacceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

export type OfferMaxAggregates = {
  readonly __typename: 'OfferMaxAggregates';
  /** Maximum of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['Int']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Maximum of limit across the matching connection */
  readonly limit: Maybe<Scalars['Int']>;
  /** Maximum of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Maximum of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

export type OfferMinAggregates = {
  readonly __typename: 'OfferMinAggregates';
  /** Minimum of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['Int']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Minimum of limit across the matching connection */
  readonly limit: Maybe<Scalars['Int']>;
  /** Minimum of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Minimum of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `ServiceAgreement` values, with data from `AcceptedOffer`. */
export type OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyConnection =
  {
    readonly __typename: 'OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<ServiceAgreementAggregates>;
    /** A list of edges which contains the `ServiceAgreement`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<ServiceAgreementAggregates>>;
    /** A list of `ServiceAgreement` objects. */
    readonly nodes: ReadonlyArray<Maybe<ServiceAgreement>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `ServiceAgreement` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `ServiceAgreement` values, with data from `AcceptedOffer`. */
export type OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<ServiceAgreementsGroupBy>;
    having: InputMaybe<ServiceAgreementsHavingInput>;
  };

/** A `ServiceAgreement` edge in the connection, with data from `AcceptedOffer`. */
export type OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyEdge = {
  readonly __typename: 'OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `ServiceAgreement` at the end of the edge. */
  readonly node: Maybe<ServiceAgreement>;
};

/** A `ServiceAgreement` edge in the connection, with data from `AcceptedOffer`. */
export type OfferServiceAgreementsByAcceptedOfferOfferIdAndServiceAgreementIdManyToManyEdgeacceptedOffersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<AcceptedOfferFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
  };

export type OfferStddevPopulationAggregates = {
  readonly __typename: 'OfferStddevPopulationAggregates';
  /** Population standard deviation of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

export type OfferStddevSampleAggregates = {
  readonly __typename: 'OfferStddevSampleAggregates';
  /** Sample standard deviation of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

export type OfferSumAggregates = {
  readonly __typename: 'OfferSumAggregates';
  /** Sum of accepted across the matching connection */
  readonly accepted: Scalars['BigInt'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of deposit across the matching connection */
  readonly deposit: Scalars['BigFloat'];
  /** Sum of limit across the matching connection */
  readonly limit: Scalars['BigInt'];
  /** Sum of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Scalars['BigFloat'];
  /** Sum of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Scalars['BigFloat'];
};

export type OfferVariancePopulationAggregates = {
  readonly __typename: 'OfferVariancePopulationAggregates';
  /** Population variance of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Population variance of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigFloat']>;
  /** Population variance of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Population variance of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

export type OfferVarianceSampleAggregates = {
  readonly __typename: 'OfferVarianceSampleAggregates';
  /** Sample variance of accepted across the matching connection */
  readonly accepted: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of deposit across the matching connection */
  readonly deposit: Maybe<Scalars['BigFloat']>;
  /** Sample variance of limit across the matching connection */
  readonly limit: Maybe<Scalars['BigFloat']>;
  /** Sample variance of minimumAcceptHeight across the matching connection */
  readonly minimumAcceptHeight: Maybe<Scalars['BigFloat']>;
  /** Sample variance of withdrawPenalty across the matching connection */
  readonly withdrawPenalty: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Offer` values. */
export type OffersConnection = {
  readonly __typename: 'OffersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<OfferAggregates>;
  /** A list of edges which contains the `Offer` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<OffersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<OfferAggregates>>;
  /** A list of `Offer` objects. */
  readonly nodes: ReadonlyArray<Maybe<Offer>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Offer` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Offer` values. */
export type OffersConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<OffersGroupBy>;
  having: InputMaybe<OffersHavingInput>;
};

/** A `Offer` edge in the connection. */
export type OffersEdge = {
  readonly __typename: 'OffersEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Offer` at the end of the edge. */
  readonly node: Maybe<Offer>;
};

/** Grouping methods for `Offer` for usage during aggregation. */
export enum OffersGroupBy {
  ACCEPTED = 'ACCEPTED',
  CONSUMER = 'CONSUMER',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DEPLOYMENT_ID = 'DEPLOYMENT_ID',
  DEPOSIT = 'DEPOSIT',
  EXPIRE_DATE = 'EXPIRE_DATE',
  EXPIRE_DATE_TRUNCATED_TO_DAY = 'EXPIRE_DATE_TRUNCATED_TO_DAY',
  EXPIRE_DATE_TRUNCATED_TO_HOUR = 'EXPIRE_DATE_TRUNCATED_TO_HOUR',
  LAST_EVENT = 'LAST_EVENT',
  LIMIT = 'LIMIT',
  MINIMUM_ACCEPT_HEIGHT = 'MINIMUM_ACCEPT_HEIGHT',
  PLAN_TEMPLATE_ID = 'PLAN_TEMPLATE_ID',
  REACH_LIMIT = 'REACH_LIMIT',
  WITHDRAWN = 'WITHDRAWN',
  WITHDRAW_PENALTY = 'WITHDRAW_PENALTY',
}

export type OffersHavingAverageInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingDistinctCountInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Offer` aggregates. */
export type OffersHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<OffersHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<OffersHavingInput>>;
  readonly average: InputMaybe<OffersHavingAverageInput>;
  readonly distinctCount: InputMaybe<OffersHavingDistinctCountInput>;
  readonly max: InputMaybe<OffersHavingMaxInput>;
  readonly min: InputMaybe<OffersHavingMinInput>;
  readonly stddevPopulation: InputMaybe<OffersHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<OffersHavingStddevSampleInput>;
  readonly sum: InputMaybe<OffersHavingSumInput>;
  readonly variancePopulation: InputMaybe<OffersHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<OffersHavingVarianceSampleInput>;
};

export type OffersHavingMaxInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingMinInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingStddevPopulationInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingStddevSampleInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingSumInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingVariancePopulationInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

export type OffersHavingVarianceSampleInput = {
  readonly accepted: InputMaybe<HavingIntFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly deposit: InputMaybe<HavingBigfloatFilter>;
  readonly expireDate: InputMaybe<HavingDatetimeFilter>;
  readonly limit: InputMaybe<HavingIntFilter>;
  readonly minimumAcceptHeight: InputMaybe<HavingBigfloatFilter>;
  readonly withdrawPenalty: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Offer`. */
export enum OffersOrderBy {
  ACCEPTED_ASC = 'ACCEPTED_ASC',
  ACCEPTED_DESC = 'ACCEPTED_DESC',
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_AVERAGE_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_COUNT_ASC = 'ACCEPTED_OFFERS_COUNT_ASC',
  ACCEPTED_OFFERS_COUNT_DESC = 'ACCEPTED_OFFERS_COUNT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MAX_ID_ASC = 'ACCEPTED_OFFERS_MAX_ID_ASC',
  ACCEPTED_OFFERS_MAX_ID_DESC = 'ACCEPTED_OFFERS_MAX_ID_DESC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MIN_ID_ASC = 'ACCEPTED_OFFERS_MIN_ID_ASC',
  ACCEPTED_OFFERS_MIN_ID_DESC = 'ACCEPTED_OFFERS_MIN_ID_DESC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_SUM_ID_ASC = 'ACCEPTED_OFFERS_SUM_ID_ASC',
  ACCEPTED_OFFERS_SUM_ID_DESC = 'ACCEPTED_OFFERS_SUM_ID_DESC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_ASC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_ASC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_DESC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_DESC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  CONSUMER_ASC = 'CONSUMER_ASC',
  CONSUMER_DESC = 'CONSUMER_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DEPLOYMENT_ID_ASC = 'DEPLOYMENT_ID_ASC',
  DEPLOYMENT_ID_DESC = 'DEPLOYMENT_ID_DESC',
  DEPOSIT_ASC = 'DEPOSIT_ASC',
  DEPOSIT_DESC = 'DEPOSIT_DESC',
  EXPIRE_DATE_ASC = 'EXPIRE_DATE_ASC',
  EXPIRE_DATE_DESC = 'EXPIRE_DATE_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  LIMIT_ASC = 'LIMIT_ASC',
  LIMIT_DESC = 'LIMIT_DESC',
  MINIMUM_ACCEPT_HEIGHT_ASC = 'MINIMUM_ACCEPT_HEIGHT_ASC',
  MINIMUM_ACCEPT_HEIGHT_DESC = 'MINIMUM_ACCEPT_HEIGHT_DESC',
  NATURAL = 'NATURAL',
  PLAN_TEMPLATE_ID_ASC = 'PLAN_TEMPLATE_ID_ASC',
  PLAN_TEMPLATE_ID_DESC = 'PLAN_TEMPLATE_ID_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  REACH_LIMIT_ASC = 'REACH_LIMIT_ASC',
  REACH_LIMIT_DESC = 'REACH_LIMIT_DESC',
  WITHDRAWN_ASC = 'WITHDRAWN_ASC',
  WITHDRAWN_DESC = 'WITHDRAWN_DESC',
  WITHDRAW_PENALTY_ASC = 'WITHDRAW_PENALTY_ASC',
  WITHDRAW_PENALTY_DESC = 'WITHDRAW_PENALTY_DESC',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['Cursor']>;
};

export type Plan = Node & {
  readonly __typename: 'Plan';
  readonly active: Scalars['Boolean'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly creator: Scalars['String'];
  /** Reads a single `Deployment` that is related to this `Plan`. */
  readonly deployment: Maybe<Deployment>;
  readonly deploymentId: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads a single `PlanTemplate` that is related to this `Plan`. */
  readonly planTemplate: Maybe<PlanTemplate>;
  readonly planTemplateId: Scalars['String'];
  readonly price: Scalars['BigFloat'];
};

export type PlanAggregates = {
  readonly __typename: 'PlanAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<PlanAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<PlanDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<PlanMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<PlanMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<PlanStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<PlanStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<PlanSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<PlanVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<PlanVarianceSampleAggregates>;
};

export type PlanAverageAggregates = {
  readonly __typename: 'PlanAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanDistinctCountAggregates = {
  readonly __typename: 'PlanDistinctCountAggregates';
  /** Distinct count of active across the matching connection */
  readonly active: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of creator across the matching connection */
  readonly creator: Maybe<Scalars['BigInt']>;
  /** Distinct count of deploymentId across the matching connection */
  readonly deploymentId: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of planTemplateId across the matching connection */
  readonly planTemplateId: Maybe<Scalars['BigInt']>;
  /** Distinct count of price across the matching connection */
  readonly price: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Plan` object types. All fields are combined with a logical ‘and.’ */
export type PlanFilter = {
  /** Filter by the object’s `active` field. */
  readonly active: InputMaybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<PlanFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `creator` field. */
  readonly creator: InputMaybe<StringFilter>;
  /** Filter by the object’s `deploymentId` field. */
  readonly deploymentId: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<PlanFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<PlanFilter>>;
  /** Filter by the object’s `planTemplateId` field. */
  readonly planTemplateId: InputMaybe<StringFilter>;
  /** Filter by the object’s `price` field. */
  readonly price: InputMaybe<BigFloatFilter>;
};

export type PlanMaxAggregates = {
  readonly __typename: 'PlanMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanMinAggregates = {
  readonly __typename: 'PlanMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanStddevPopulationAggregates = {
  readonly __typename: 'PlanStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanStddevSampleAggregates = {
  readonly __typename: 'PlanStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanSumAggregates = {
  readonly __typename: 'PlanSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of price across the matching connection */
  readonly price: Scalars['BigFloat'];
};

export type PlanTemplate = Node & {
  readonly __typename: 'PlanTemplate';
  readonly active: Scalars['Boolean'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly dailyReqCap: Scalars['BigFloat'];
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deploymentsByOfferPlanTemplateIdAndDeploymentId: PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deploymentsByPlanPlanTemplateIdAndDeploymentId: PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deploymentsByServiceAgreementPlanTemplateIdAndDeploymentId: PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyConnection;
  readonly id: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly metadata: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offers: OffersConnection;
  readonly period: Scalars['BigFloat'];
  /** Reads and enables pagination through a set of `Plan`. */
  readonly plans: PlansConnection;
  readonly rateLimit: Scalars['BigFloat'];
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreements: ServiceAgreementsConnection;
};

export type PlanTemplatedeploymentsByOfferPlanTemplateIdAndDeploymentIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

export type PlanTemplatedeploymentsByPlanPlanTemplateIdAndDeploymentIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

export type PlanTemplatedeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

export type PlanTemplateoffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

export type PlanTemplateplansArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlansOrderBy>>;
};

export type PlanTemplateserviceAgreementsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ServiceAgreementFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
};

export type PlanTemplateAggregates = {
  readonly __typename: 'PlanTemplateAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<PlanTemplateAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<PlanTemplateDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<PlanTemplateMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<PlanTemplateMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<PlanTemplateStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<PlanTemplateStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<PlanTemplateSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<PlanTemplateVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<PlanTemplateVarianceSampleAggregates>;
};

export type PlanTemplateAverageAggregates = {
  readonly __typename: 'PlanTemplateAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Mean average of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Mean average of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Deployment` values, with data from `Offer`. */
export type PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyConnection = {
  readonly __typename: 'PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DeploymentAggregates>;
  /** A list of edges which contains the `Deployment`, info from the `Offer`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentAggregates>>;
  /** A list of `Deployment` objects. */
  readonly nodes: ReadonlyArray<Maybe<Deployment>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Deployment` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Deployment` values, with data from `Offer`. */
export type PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<DeploymentsGroupBy>;
    having: InputMaybe<DeploymentsHavingInput>;
  };

/** A `Deployment` edge in the connection, with data from `Offer`. */
export type PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyEdge = {
  readonly __typename: 'PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Deployment` at the end of the edge. */
  readonly node: Maybe<Deployment>;
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offers: OffersConnection;
};

/** A `Deployment` edge in the connection, with data from `Offer`. */
export type PlanTemplateDeploymentsByOfferPlanTemplateIdAndDeploymentIdManyToManyEdgeoffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

/** A connection to a list of `Deployment` values, with data from `Plan`. */
export type PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyConnection = {
  readonly __typename: 'PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<DeploymentAggregates>;
  /** A list of edges which contains the `Deployment`, info from the `Plan`, and the cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentAggregates>>;
  /** A list of `Deployment` objects. */
  readonly nodes: ReadonlyArray<Maybe<Deployment>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Deployment` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Deployment` values, with data from `Plan`. */
export type PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<DeploymentsGroupBy>;
    having: InputMaybe<DeploymentsHavingInput>;
  };

/** A `Deployment` edge in the connection, with data from `Plan`. */
export type PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyEdge = {
  readonly __typename: 'PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Deployment` at the end of the edge. */
  readonly node: Maybe<Deployment>;
  /** Reads and enables pagination through a set of `Plan`. */
  readonly plans: PlansConnection;
};

/** A `Deployment` edge in the connection, with data from `Plan`. */
export type PlanTemplateDeploymentsByPlanPlanTemplateIdAndDeploymentIdManyToManyEdgeplansArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlansOrderBy>>;
};

/** A connection to a list of `Deployment` values, with data from `ServiceAgreement`. */
export type PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyConnection =
  {
    readonly __typename: 'PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<DeploymentAggregates>;
    /** A list of edges which contains the `Deployment`, info from the `ServiceAgreement`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<DeploymentAggregates>>;
    /** A list of `Deployment` objects. */
    readonly nodes: ReadonlyArray<Maybe<Deployment>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `Deployment` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `Deployment` values, with data from `ServiceAgreement`. */
export type PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<DeploymentsGroupBy>;
    having: InputMaybe<DeploymentsHavingInput>;
  };

/** A `Deployment` edge in the connection, with data from `ServiceAgreement`. */
export type PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyEdge = {
  readonly __typename: 'PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Deployment` at the end of the edge. */
  readonly node: Maybe<Deployment>;
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreements: ServiceAgreementsConnection;
};

/** A `Deployment` edge in the connection, with data from `ServiceAgreement`. */
export type PlanTemplateDeploymentsByServiceAgreementPlanTemplateIdAndDeploymentIdManyToManyEdgeserviceAgreementsArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<ServiceAgreementFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
  };

export type PlanTemplateDistinctCountAggregates = {
  readonly __typename: 'PlanTemplateDistinctCountAggregates';
  /** Distinct count of active across the matching connection */
  readonly active: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of metadata across the matching connection */
  readonly metadata: Maybe<Scalars['BigInt']>;
  /** Distinct count of period across the matching connection */
  readonly period: Maybe<Scalars['BigInt']>;
  /** Distinct count of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `PlanTemplate` object types. All fields are combined with a logical ‘and.’ */
export type PlanTemplateFilter = {
  /** Filter by the object’s `active` field. */
  readonly active: InputMaybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<PlanTemplateFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `dailyReqCap` field. */
  readonly dailyReqCap: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  readonly metadata: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<PlanTemplateFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<PlanTemplateFilter>>;
  /** Filter by the object’s `period` field. */
  readonly period: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `rateLimit` field. */
  readonly rateLimit: InputMaybe<BigFloatFilter>;
};

export type PlanTemplateMaxAggregates = {
  readonly __typename: 'PlanTemplateMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Maximum of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Maximum of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

export type PlanTemplateMinAggregates = {
  readonly __typename: 'PlanTemplateMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Minimum of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Minimum of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

export type PlanTemplateStddevPopulationAggregates = {
  readonly __typename: 'PlanTemplateStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

export type PlanTemplateStddevSampleAggregates = {
  readonly __typename: 'PlanTemplateStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

export type PlanTemplateSumAggregates = {
  readonly __typename: 'PlanTemplateSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of dailyReqCap across the matching connection */
  readonly dailyReqCap: Scalars['BigFloat'];
  /** Sum of period across the matching connection */
  readonly period: Scalars['BigFloat'];
  /** Sum of rateLimit across the matching connection */
  readonly rateLimit: Scalars['BigFloat'];
};

export type PlanTemplateVariancePopulationAggregates = {
  readonly __typename: 'PlanTemplateVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Population variance of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Population variance of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

export type PlanTemplateVarianceSampleAggregates = {
  readonly __typename: 'PlanTemplateVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of dailyReqCap across the matching connection */
  readonly dailyReqCap: Maybe<Scalars['BigFloat']>;
  /** Sample variance of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
  /** Sample variance of rateLimit across the matching connection */
  readonly rateLimit: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `PlanTemplate` values. */
export type PlanTemplatesConnection = {
  readonly __typename: 'PlanTemplatesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<PlanTemplateAggregates>;
  /** A list of edges which contains the `PlanTemplate` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PlanTemplatesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<PlanTemplateAggregates>>;
  /** A list of `PlanTemplate` objects. */
  readonly nodes: ReadonlyArray<Maybe<PlanTemplate>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `PlanTemplate` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `PlanTemplate` values. */
export type PlanTemplatesConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<PlanTemplatesGroupBy>;
  having: InputMaybe<PlanTemplatesHavingInput>;
};

/** A `PlanTemplate` edge in the connection. */
export type PlanTemplatesEdge = {
  readonly __typename: 'PlanTemplatesEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `PlanTemplate` at the end of the edge. */
  readonly node: Maybe<PlanTemplate>;
};

/** Grouping methods for `PlanTemplate` for usage during aggregation. */
export enum PlanTemplatesGroupBy {
  ACTIVE = 'ACTIVE',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DAILY_REQ_CAP = 'DAILY_REQ_CAP',
  LAST_EVENT = 'LAST_EVENT',
  METADATA = 'METADATA',
  PERIOD = 'PERIOD',
  RATE_LIMIT = 'RATE_LIMIT',
}

export type PlanTemplatesHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `PlanTemplate` aggregates. */
export type PlanTemplatesHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<PlanTemplatesHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<PlanTemplatesHavingInput>>;
  readonly average: InputMaybe<PlanTemplatesHavingAverageInput>;
  readonly distinctCount: InputMaybe<PlanTemplatesHavingDistinctCountInput>;
  readonly max: InputMaybe<PlanTemplatesHavingMaxInput>;
  readonly min: InputMaybe<PlanTemplatesHavingMinInput>;
  readonly stddevPopulation: InputMaybe<PlanTemplatesHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<PlanTemplatesHavingStddevSampleInput>;
  readonly sum: InputMaybe<PlanTemplatesHavingSumInput>;
  readonly variancePopulation: InputMaybe<PlanTemplatesHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<PlanTemplatesHavingVarianceSampleInput>;
};

export type PlanTemplatesHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

export type PlanTemplatesHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly dailyReqCap: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly rateLimit: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `PlanTemplate`. */
export enum PlanTemplatesOrderBy {
  ACTIVE_ASC = 'ACTIVE_ASC',
  ACTIVE_DESC = 'ACTIVE_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DAILY_REQ_CAP_ASC = 'DAILY_REQ_CAP_ASC',
  DAILY_REQ_CAP_DESC = 'DAILY_REQ_CAP_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  METADATA_ASC = 'METADATA_ASC',
  METADATA_DESC = 'METADATA_DESC',
  NATURAL = 'NATURAL',
  OFFERS_AVERAGE_ACCEPTED_ASC = 'OFFERS_AVERAGE_ACCEPTED_ASC',
  OFFERS_AVERAGE_ACCEPTED_DESC = 'OFFERS_AVERAGE_ACCEPTED_DESC',
  OFFERS_AVERAGE_CONSUMER_ASC = 'OFFERS_AVERAGE_CONSUMER_ASC',
  OFFERS_AVERAGE_CONSUMER_DESC = 'OFFERS_AVERAGE_CONSUMER_DESC',
  OFFERS_AVERAGE_CREATED_BLOCK_ASC = 'OFFERS_AVERAGE_CREATED_BLOCK_ASC',
  OFFERS_AVERAGE_CREATED_BLOCK_DESC = 'OFFERS_AVERAGE_CREATED_BLOCK_DESC',
  OFFERS_AVERAGE_DEPLOYMENT_ID_ASC = 'OFFERS_AVERAGE_DEPLOYMENT_ID_ASC',
  OFFERS_AVERAGE_DEPLOYMENT_ID_DESC = 'OFFERS_AVERAGE_DEPLOYMENT_ID_DESC',
  OFFERS_AVERAGE_DEPOSIT_ASC = 'OFFERS_AVERAGE_DEPOSIT_ASC',
  OFFERS_AVERAGE_DEPOSIT_DESC = 'OFFERS_AVERAGE_DEPOSIT_DESC',
  OFFERS_AVERAGE_EXPIRE_DATE_ASC = 'OFFERS_AVERAGE_EXPIRE_DATE_ASC',
  OFFERS_AVERAGE_EXPIRE_DATE_DESC = 'OFFERS_AVERAGE_EXPIRE_DATE_DESC',
  OFFERS_AVERAGE_ID_ASC = 'OFFERS_AVERAGE_ID_ASC',
  OFFERS_AVERAGE_ID_DESC = 'OFFERS_AVERAGE_ID_DESC',
  OFFERS_AVERAGE_LAST_EVENT_ASC = 'OFFERS_AVERAGE_LAST_EVENT_ASC',
  OFFERS_AVERAGE_LAST_EVENT_DESC = 'OFFERS_AVERAGE_LAST_EVENT_DESC',
  OFFERS_AVERAGE_LIMIT_ASC = 'OFFERS_AVERAGE_LIMIT_ASC',
  OFFERS_AVERAGE_LIMIT_DESC = 'OFFERS_AVERAGE_LIMIT_DESC',
  OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_AVERAGE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_AVERAGE_REACH_LIMIT_ASC = 'OFFERS_AVERAGE_REACH_LIMIT_ASC',
  OFFERS_AVERAGE_REACH_LIMIT_DESC = 'OFFERS_AVERAGE_REACH_LIMIT_DESC',
  OFFERS_AVERAGE_WITHDRAWN_ASC = 'OFFERS_AVERAGE_WITHDRAWN_ASC',
  OFFERS_AVERAGE_WITHDRAWN_DESC = 'OFFERS_AVERAGE_WITHDRAWN_DESC',
  OFFERS_AVERAGE_WITHDRAW_PENALTY_ASC = 'OFFERS_AVERAGE_WITHDRAW_PENALTY_ASC',
  OFFERS_AVERAGE_WITHDRAW_PENALTY_DESC = 'OFFERS_AVERAGE_WITHDRAW_PENALTY_DESC',
  OFFERS_COUNT_ASC = 'OFFERS_COUNT_ASC',
  OFFERS_COUNT_DESC = 'OFFERS_COUNT_DESC',
  OFFERS_DISTINCT_COUNT_ACCEPTED_ASC = 'OFFERS_DISTINCT_COUNT_ACCEPTED_ASC',
  OFFERS_DISTINCT_COUNT_ACCEPTED_DESC = 'OFFERS_DISTINCT_COUNT_ACCEPTED_DESC',
  OFFERS_DISTINCT_COUNT_CONSUMER_ASC = 'OFFERS_DISTINCT_COUNT_CONSUMER_ASC',
  OFFERS_DISTINCT_COUNT_CONSUMER_DESC = 'OFFERS_DISTINCT_COUNT_CONSUMER_DESC',
  OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'OFFERS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  OFFERS_DISTINCT_COUNT_DEPOSIT_ASC = 'OFFERS_DISTINCT_COUNT_DEPOSIT_ASC',
  OFFERS_DISTINCT_COUNT_DEPOSIT_DESC = 'OFFERS_DISTINCT_COUNT_DEPOSIT_DESC',
  OFFERS_DISTINCT_COUNT_EXPIRE_DATE_ASC = 'OFFERS_DISTINCT_COUNT_EXPIRE_DATE_ASC',
  OFFERS_DISTINCT_COUNT_EXPIRE_DATE_DESC = 'OFFERS_DISTINCT_COUNT_EXPIRE_DATE_DESC',
  OFFERS_DISTINCT_COUNT_ID_ASC = 'OFFERS_DISTINCT_COUNT_ID_ASC',
  OFFERS_DISTINCT_COUNT_ID_DESC = 'OFFERS_DISTINCT_COUNT_ID_DESC',
  OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  OFFERS_DISTINCT_COUNT_LIMIT_ASC = 'OFFERS_DISTINCT_COUNT_LIMIT_ASC',
  OFFERS_DISTINCT_COUNT_LIMIT_DESC = 'OFFERS_DISTINCT_COUNT_LIMIT_DESC',
  OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_DISTINCT_COUNT_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'OFFERS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  OFFERS_DISTINCT_COUNT_REACH_LIMIT_ASC = 'OFFERS_DISTINCT_COUNT_REACH_LIMIT_ASC',
  OFFERS_DISTINCT_COUNT_REACH_LIMIT_DESC = 'OFFERS_DISTINCT_COUNT_REACH_LIMIT_DESC',
  OFFERS_DISTINCT_COUNT_WITHDRAWN_ASC = 'OFFERS_DISTINCT_COUNT_WITHDRAWN_ASC',
  OFFERS_DISTINCT_COUNT_WITHDRAWN_DESC = 'OFFERS_DISTINCT_COUNT_WITHDRAWN_DESC',
  OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_ASC = 'OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_ASC',
  OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_DESC = 'OFFERS_DISTINCT_COUNT_WITHDRAW_PENALTY_DESC',
  OFFERS_MAX_ACCEPTED_ASC = 'OFFERS_MAX_ACCEPTED_ASC',
  OFFERS_MAX_ACCEPTED_DESC = 'OFFERS_MAX_ACCEPTED_DESC',
  OFFERS_MAX_CONSUMER_ASC = 'OFFERS_MAX_CONSUMER_ASC',
  OFFERS_MAX_CONSUMER_DESC = 'OFFERS_MAX_CONSUMER_DESC',
  OFFERS_MAX_CREATED_BLOCK_ASC = 'OFFERS_MAX_CREATED_BLOCK_ASC',
  OFFERS_MAX_CREATED_BLOCK_DESC = 'OFFERS_MAX_CREATED_BLOCK_DESC',
  OFFERS_MAX_DEPLOYMENT_ID_ASC = 'OFFERS_MAX_DEPLOYMENT_ID_ASC',
  OFFERS_MAX_DEPLOYMENT_ID_DESC = 'OFFERS_MAX_DEPLOYMENT_ID_DESC',
  OFFERS_MAX_DEPOSIT_ASC = 'OFFERS_MAX_DEPOSIT_ASC',
  OFFERS_MAX_DEPOSIT_DESC = 'OFFERS_MAX_DEPOSIT_DESC',
  OFFERS_MAX_EXPIRE_DATE_ASC = 'OFFERS_MAX_EXPIRE_DATE_ASC',
  OFFERS_MAX_EXPIRE_DATE_DESC = 'OFFERS_MAX_EXPIRE_DATE_DESC',
  OFFERS_MAX_ID_ASC = 'OFFERS_MAX_ID_ASC',
  OFFERS_MAX_ID_DESC = 'OFFERS_MAX_ID_DESC',
  OFFERS_MAX_LAST_EVENT_ASC = 'OFFERS_MAX_LAST_EVENT_ASC',
  OFFERS_MAX_LAST_EVENT_DESC = 'OFFERS_MAX_LAST_EVENT_DESC',
  OFFERS_MAX_LIMIT_ASC = 'OFFERS_MAX_LIMIT_ASC',
  OFFERS_MAX_LIMIT_DESC = 'OFFERS_MAX_LIMIT_DESC',
  OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_MAX_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_MAX_PLAN_TEMPLATE_ID_ASC = 'OFFERS_MAX_PLAN_TEMPLATE_ID_ASC',
  OFFERS_MAX_PLAN_TEMPLATE_ID_DESC = 'OFFERS_MAX_PLAN_TEMPLATE_ID_DESC',
  OFFERS_MAX_REACH_LIMIT_ASC = 'OFFERS_MAX_REACH_LIMIT_ASC',
  OFFERS_MAX_REACH_LIMIT_DESC = 'OFFERS_MAX_REACH_LIMIT_DESC',
  OFFERS_MAX_WITHDRAWN_ASC = 'OFFERS_MAX_WITHDRAWN_ASC',
  OFFERS_MAX_WITHDRAWN_DESC = 'OFFERS_MAX_WITHDRAWN_DESC',
  OFFERS_MAX_WITHDRAW_PENALTY_ASC = 'OFFERS_MAX_WITHDRAW_PENALTY_ASC',
  OFFERS_MAX_WITHDRAW_PENALTY_DESC = 'OFFERS_MAX_WITHDRAW_PENALTY_DESC',
  OFFERS_MIN_ACCEPTED_ASC = 'OFFERS_MIN_ACCEPTED_ASC',
  OFFERS_MIN_ACCEPTED_DESC = 'OFFERS_MIN_ACCEPTED_DESC',
  OFFERS_MIN_CONSUMER_ASC = 'OFFERS_MIN_CONSUMER_ASC',
  OFFERS_MIN_CONSUMER_DESC = 'OFFERS_MIN_CONSUMER_DESC',
  OFFERS_MIN_CREATED_BLOCK_ASC = 'OFFERS_MIN_CREATED_BLOCK_ASC',
  OFFERS_MIN_CREATED_BLOCK_DESC = 'OFFERS_MIN_CREATED_BLOCK_DESC',
  OFFERS_MIN_DEPLOYMENT_ID_ASC = 'OFFERS_MIN_DEPLOYMENT_ID_ASC',
  OFFERS_MIN_DEPLOYMENT_ID_DESC = 'OFFERS_MIN_DEPLOYMENT_ID_DESC',
  OFFERS_MIN_DEPOSIT_ASC = 'OFFERS_MIN_DEPOSIT_ASC',
  OFFERS_MIN_DEPOSIT_DESC = 'OFFERS_MIN_DEPOSIT_DESC',
  OFFERS_MIN_EXPIRE_DATE_ASC = 'OFFERS_MIN_EXPIRE_DATE_ASC',
  OFFERS_MIN_EXPIRE_DATE_DESC = 'OFFERS_MIN_EXPIRE_DATE_DESC',
  OFFERS_MIN_ID_ASC = 'OFFERS_MIN_ID_ASC',
  OFFERS_MIN_ID_DESC = 'OFFERS_MIN_ID_DESC',
  OFFERS_MIN_LAST_EVENT_ASC = 'OFFERS_MIN_LAST_EVENT_ASC',
  OFFERS_MIN_LAST_EVENT_DESC = 'OFFERS_MIN_LAST_EVENT_DESC',
  OFFERS_MIN_LIMIT_ASC = 'OFFERS_MIN_LIMIT_ASC',
  OFFERS_MIN_LIMIT_DESC = 'OFFERS_MIN_LIMIT_DESC',
  OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_MIN_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_MIN_PLAN_TEMPLATE_ID_ASC = 'OFFERS_MIN_PLAN_TEMPLATE_ID_ASC',
  OFFERS_MIN_PLAN_TEMPLATE_ID_DESC = 'OFFERS_MIN_PLAN_TEMPLATE_ID_DESC',
  OFFERS_MIN_REACH_LIMIT_ASC = 'OFFERS_MIN_REACH_LIMIT_ASC',
  OFFERS_MIN_REACH_LIMIT_DESC = 'OFFERS_MIN_REACH_LIMIT_DESC',
  OFFERS_MIN_WITHDRAWN_ASC = 'OFFERS_MIN_WITHDRAWN_ASC',
  OFFERS_MIN_WITHDRAWN_DESC = 'OFFERS_MIN_WITHDRAWN_DESC',
  OFFERS_MIN_WITHDRAW_PENALTY_ASC = 'OFFERS_MIN_WITHDRAW_PENALTY_ASC',
  OFFERS_MIN_WITHDRAW_PENALTY_DESC = 'OFFERS_MIN_WITHDRAW_PENALTY_DESC',
  OFFERS_STDDEV_POPULATION_ACCEPTED_ASC = 'OFFERS_STDDEV_POPULATION_ACCEPTED_ASC',
  OFFERS_STDDEV_POPULATION_ACCEPTED_DESC = 'OFFERS_STDDEV_POPULATION_ACCEPTED_DESC',
  OFFERS_STDDEV_POPULATION_CONSUMER_ASC = 'OFFERS_STDDEV_POPULATION_CONSUMER_ASC',
  OFFERS_STDDEV_POPULATION_CONSUMER_DESC = 'OFFERS_STDDEV_POPULATION_CONSUMER_DESC',
  OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'OFFERS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  OFFERS_STDDEV_POPULATION_DEPOSIT_ASC = 'OFFERS_STDDEV_POPULATION_DEPOSIT_ASC',
  OFFERS_STDDEV_POPULATION_DEPOSIT_DESC = 'OFFERS_STDDEV_POPULATION_DEPOSIT_DESC',
  OFFERS_STDDEV_POPULATION_EXPIRE_DATE_ASC = 'OFFERS_STDDEV_POPULATION_EXPIRE_DATE_ASC',
  OFFERS_STDDEV_POPULATION_EXPIRE_DATE_DESC = 'OFFERS_STDDEV_POPULATION_EXPIRE_DATE_DESC',
  OFFERS_STDDEV_POPULATION_ID_ASC = 'OFFERS_STDDEV_POPULATION_ID_ASC',
  OFFERS_STDDEV_POPULATION_ID_DESC = 'OFFERS_STDDEV_POPULATION_ID_DESC',
  OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  OFFERS_STDDEV_POPULATION_LIMIT_ASC = 'OFFERS_STDDEV_POPULATION_LIMIT_ASC',
  OFFERS_STDDEV_POPULATION_LIMIT_DESC = 'OFFERS_STDDEV_POPULATION_LIMIT_DESC',
  OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_STDDEV_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'OFFERS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  OFFERS_STDDEV_POPULATION_REACH_LIMIT_ASC = 'OFFERS_STDDEV_POPULATION_REACH_LIMIT_ASC',
  OFFERS_STDDEV_POPULATION_REACH_LIMIT_DESC = 'OFFERS_STDDEV_POPULATION_REACH_LIMIT_DESC',
  OFFERS_STDDEV_POPULATION_WITHDRAWN_ASC = 'OFFERS_STDDEV_POPULATION_WITHDRAWN_ASC',
  OFFERS_STDDEV_POPULATION_WITHDRAWN_DESC = 'OFFERS_STDDEV_POPULATION_WITHDRAWN_DESC',
  OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_ASC = 'OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_ASC',
  OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_DESC = 'OFFERS_STDDEV_POPULATION_WITHDRAW_PENALTY_DESC',
  OFFERS_STDDEV_SAMPLE_ACCEPTED_ASC = 'OFFERS_STDDEV_SAMPLE_ACCEPTED_ASC',
  OFFERS_STDDEV_SAMPLE_ACCEPTED_DESC = 'OFFERS_STDDEV_SAMPLE_ACCEPTED_DESC',
  OFFERS_STDDEV_SAMPLE_CONSUMER_ASC = 'OFFERS_STDDEV_SAMPLE_CONSUMER_ASC',
  OFFERS_STDDEV_SAMPLE_CONSUMER_DESC = 'OFFERS_STDDEV_SAMPLE_CONSUMER_DESC',
  OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'OFFERS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  OFFERS_STDDEV_SAMPLE_DEPOSIT_ASC = 'OFFERS_STDDEV_SAMPLE_DEPOSIT_ASC',
  OFFERS_STDDEV_SAMPLE_DEPOSIT_DESC = 'OFFERS_STDDEV_SAMPLE_DEPOSIT_DESC',
  OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_ASC = 'OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_ASC',
  OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_DESC = 'OFFERS_STDDEV_SAMPLE_EXPIRE_DATE_DESC',
  OFFERS_STDDEV_SAMPLE_ID_ASC = 'OFFERS_STDDEV_SAMPLE_ID_ASC',
  OFFERS_STDDEV_SAMPLE_ID_DESC = 'OFFERS_STDDEV_SAMPLE_ID_DESC',
  OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  OFFERS_STDDEV_SAMPLE_LIMIT_ASC = 'OFFERS_STDDEV_SAMPLE_LIMIT_ASC',
  OFFERS_STDDEV_SAMPLE_LIMIT_DESC = 'OFFERS_STDDEV_SAMPLE_LIMIT_DESC',
  OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_STDDEV_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_STDDEV_SAMPLE_REACH_LIMIT_ASC = 'OFFERS_STDDEV_SAMPLE_REACH_LIMIT_ASC',
  OFFERS_STDDEV_SAMPLE_REACH_LIMIT_DESC = 'OFFERS_STDDEV_SAMPLE_REACH_LIMIT_DESC',
  OFFERS_STDDEV_SAMPLE_WITHDRAWN_ASC = 'OFFERS_STDDEV_SAMPLE_WITHDRAWN_ASC',
  OFFERS_STDDEV_SAMPLE_WITHDRAWN_DESC = 'OFFERS_STDDEV_SAMPLE_WITHDRAWN_DESC',
  OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_ASC = 'OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_ASC',
  OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_DESC = 'OFFERS_STDDEV_SAMPLE_WITHDRAW_PENALTY_DESC',
  OFFERS_SUM_ACCEPTED_ASC = 'OFFERS_SUM_ACCEPTED_ASC',
  OFFERS_SUM_ACCEPTED_DESC = 'OFFERS_SUM_ACCEPTED_DESC',
  OFFERS_SUM_CONSUMER_ASC = 'OFFERS_SUM_CONSUMER_ASC',
  OFFERS_SUM_CONSUMER_DESC = 'OFFERS_SUM_CONSUMER_DESC',
  OFFERS_SUM_CREATED_BLOCK_ASC = 'OFFERS_SUM_CREATED_BLOCK_ASC',
  OFFERS_SUM_CREATED_BLOCK_DESC = 'OFFERS_SUM_CREATED_BLOCK_DESC',
  OFFERS_SUM_DEPLOYMENT_ID_ASC = 'OFFERS_SUM_DEPLOYMENT_ID_ASC',
  OFFERS_SUM_DEPLOYMENT_ID_DESC = 'OFFERS_SUM_DEPLOYMENT_ID_DESC',
  OFFERS_SUM_DEPOSIT_ASC = 'OFFERS_SUM_DEPOSIT_ASC',
  OFFERS_SUM_DEPOSIT_DESC = 'OFFERS_SUM_DEPOSIT_DESC',
  OFFERS_SUM_EXPIRE_DATE_ASC = 'OFFERS_SUM_EXPIRE_DATE_ASC',
  OFFERS_SUM_EXPIRE_DATE_DESC = 'OFFERS_SUM_EXPIRE_DATE_DESC',
  OFFERS_SUM_ID_ASC = 'OFFERS_SUM_ID_ASC',
  OFFERS_SUM_ID_DESC = 'OFFERS_SUM_ID_DESC',
  OFFERS_SUM_LAST_EVENT_ASC = 'OFFERS_SUM_LAST_EVENT_ASC',
  OFFERS_SUM_LAST_EVENT_DESC = 'OFFERS_SUM_LAST_EVENT_DESC',
  OFFERS_SUM_LIMIT_ASC = 'OFFERS_SUM_LIMIT_ASC',
  OFFERS_SUM_LIMIT_DESC = 'OFFERS_SUM_LIMIT_DESC',
  OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_SUM_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_SUM_PLAN_TEMPLATE_ID_ASC = 'OFFERS_SUM_PLAN_TEMPLATE_ID_ASC',
  OFFERS_SUM_PLAN_TEMPLATE_ID_DESC = 'OFFERS_SUM_PLAN_TEMPLATE_ID_DESC',
  OFFERS_SUM_REACH_LIMIT_ASC = 'OFFERS_SUM_REACH_LIMIT_ASC',
  OFFERS_SUM_REACH_LIMIT_DESC = 'OFFERS_SUM_REACH_LIMIT_DESC',
  OFFERS_SUM_WITHDRAWN_ASC = 'OFFERS_SUM_WITHDRAWN_ASC',
  OFFERS_SUM_WITHDRAWN_DESC = 'OFFERS_SUM_WITHDRAWN_DESC',
  OFFERS_SUM_WITHDRAW_PENALTY_ASC = 'OFFERS_SUM_WITHDRAW_PENALTY_ASC',
  OFFERS_SUM_WITHDRAW_PENALTY_DESC = 'OFFERS_SUM_WITHDRAW_PENALTY_DESC',
  OFFERS_VARIANCE_POPULATION_ACCEPTED_ASC = 'OFFERS_VARIANCE_POPULATION_ACCEPTED_ASC',
  OFFERS_VARIANCE_POPULATION_ACCEPTED_DESC = 'OFFERS_VARIANCE_POPULATION_ACCEPTED_DESC',
  OFFERS_VARIANCE_POPULATION_CONSUMER_ASC = 'OFFERS_VARIANCE_POPULATION_CONSUMER_ASC',
  OFFERS_VARIANCE_POPULATION_CONSUMER_DESC = 'OFFERS_VARIANCE_POPULATION_CONSUMER_DESC',
  OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'OFFERS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  OFFERS_VARIANCE_POPULATION_DEPOSIT_ASC = 'OFFERS_VARIANCE_POPULATION_DEPOSIT_ASC',
  OFFERS_VARIANCE_POPULATION_DEPOSIT_DESC = 'OFFERS_VARIANCE_POPULATION_DEPOSIT_DESC',
  OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_ASC = 'OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_ASC',
  OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_DESC = 'OFFERS_VARIANCE_POPULATION_EXPIRE_DATE_DESC',
  OFFERS_VARIANCE_POPULATION_ID_ASC = 'OFFERS_VARIANCE_POPULATION_ID_ASC',
  OFFERS_VARIANCE_POPULATION_ID_DESC = 'OFFERS_VARIANCE_POPULATION_ID_DESC',
  OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  OFFERS_VARIANCE_POPULATION_LIMIT_ASC = 'OFFERS_VARIANCE_POPULATION_LIMIT_ASC',
  OFFERS_VARIANCE_POPULATION_LIMIT_DESC = 'OFFERS_VARIANCE_POPULATION_LIMIT_DESC',
  OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_VARIANCE_POPULATION_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'OFFERS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  OFFERS_VARIANCE_POPULATION_REACH_LIMIT_ASC = 'OFFERS_VARIANCE_POPULATION_REACH_LIMIT_ASC',
  OFFERS_VARIANCE_POPULATION_REACH_LIMIT_DESC = 'OFFERS_VARIANCE_POPULATION_REACH_LIMIT_DESC',
  OFFERS_VARIANCE_POPULATION_WITHDRAWN_ASC = 'OFFERS_VARIANCE_POPULATION_WITHDRAWN_ASC',
  OFFERS_VARIANCE_POPULATION_WITHDRAWN_DESC = 'OFFERS_VARIANCE_POPULATION_WITHDRAWN_DESC',
  OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_ASC = 'OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_ASC',
  OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_DESC = 'OFFERS_VARIANCE_POPULATION_WITHDRAW_PENALTY_DESC',
  OFFERS_VARIANCE_SAMPLE_ACCEPTED_ASC = 'OFFERS_VARIANCE_SAMPLE_ACCEPTED_ASC',
  OFFERS_VARIANCE_SAMPLE_ACCEPTED_DESC = 'OFFERS_VARIANCE_SAMPLE_ACCEPTED_DESC',
  OFFERS_VARIANCE_SAMPLE_CONSUMER_ASC = 'OFFERS_VARIANCE_SAMPLE_CONSUMER_ASC',
  OFFERS_VARIANCE_SAMPLE_CONSUMER_DESC = 'OFFERS_VARIANCE_SAMPLE_CONSUMER_DESC',
  OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_DEPOSIT_ASC = 'OFFERS_VARIANCE_SAMPLE_DEPOSIT_ASC',
  OFFERS_VARIANCE_SAMPLE_DEPOSIT_DESC = 'OFFERS_VARIANCE_SAMPLE_DEPOSIT_DESC',
  OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_ASC = 'OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_ASC',
  OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_DESC = 'OFFERS_VARIANCE_SAMPLE_EXPIRE_DATE_DESC',
  OFFERS_VARIANCE_SAMPLE_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  OFFERS_VARIANCE_SAMPLE_LIMIT_ASC = 'OFFERS_VARIANCE_SAMPLE_LIMIT_ASC',
  OFFERS_VARIANCE_SAMPLE_LIMIT_DESC = 'OFFERS_VARIANCE_SAMPLE_LIMIT_DESC',
  OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC = 'OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_ASC',
  OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC = 'OFFERS_VARIANCE_SAMPLE_MINIMUM_ACCEPT_HEIGHT_DESC',
  OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'OFFERS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_ASC = 'OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_ASC',
  OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_DESC = 'OFFERS_VARIANCE_SAMPLE_REACH_LIMIT_DESC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAWN_ASC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAWN_ASC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAWN_DESC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAWN_DESC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_ASC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_ASC',
  OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_DESC = 'OFFERS_VARIANCE_SAMPLE_WITHDRAW_PENALTY_DESC',
  PERIOD_ASC = 'PERIOD_ASC',
  PERIOD_DESC = 'PERIOD_DESC',
  PLANS_AVERAGE_ACTIVE_ASC = 'PLANS_AVERAGE_ACTIVE_ASC',
  PLANS_AVERAGE_ACTIVE_DESC = 'PLANS_AVERAGE_ACTIVE_DESC',
  PLANS_AVERAGE_CREATED_BLOCK_ASC = 'PLANS_AVERAGE_CREATED_BLOCK_ASC',
  PLANS_AVERAGE_CREATED_BLOCK_DESC = 'PLANS_AVERAGE_CREATED_BLOCK_DESC',
  PLANS_AVERAGE_CREATOR_ASC = 'PLANS_AVERAGE_CREATOR_ASC',
  PLANS_AVERAGE_CREATOR_DESC = 'PLANS_AVERAGE_CREATOR_DESC',
  PLANS_AVERAGE_DEPLOYMENT_ID_ASC = 'PLANS_AVERAGE_DEPLOYMENT_ID_ASC',
  PLANS_AVERAGE_DEPLOYMENT_ID_DESC = 'PLANS_AVERAGE_DEPLOYMENT_ID_DESC',
  PLANS_AVERAGE_ID_ASC = 'PLANS_AVERAGE_ID_ASC',
  PLANS_AVERAGE_ID_DESC = 'PLANS_AVERAGE_ID_DESC',
  PLANS_AVERAGE_LAST_EVENT_ASC = 'PLANS_AVERAGE_LAST_EVENT_ASC',
  PLANS_AVERAGE_LAST_EVENT_DESC = 'PLANS_AVERAGE_LAST_EVENT_DESC',
  PLANS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'PLANS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  PLANS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'PLANS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  PLANS_AVERAGE_PRICE_ASC = 'PLANS_AVERAGE_PRICE_ASC',
  PLANS_AVERAGE_PRICE_DESC = 'PLANS_AVERAGE_PRICE_DESC',
  PLANS_COUNT_ASC = 'PLANS_COUNT_ASC',
  PLANS_COUNT_DESC = 'PLANS_COUNT_DESC',
  PLANS_DISTINCT_COUNT_ACTIVE_ASC = 'PLANS_DISTINCT_COUNT_ACTIVE_ASC',
  PLANS_DISTINCT_COUNT_ACTIVE_DESC = 'PLANS_DISTINCT_COUNT_ACTIVE_DESC',
  PLANS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'PLANS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  PLANS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'PLANS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  PLANS_DISTINCT_COUNT_CREATOR_ASC = 'PLANS_DISTINCT_COUNT_CREATOR_ASC',
  PLANS_DISTINCT_COUNT_CREATOR_DESC = 'PLANS_DISTINCT_COUNT_CREATOR_DESC',
  PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'PLANS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  PLANS_DISTINCT_COUNT_ID_ASC = 'PLANS_DISTINCT_COUNT_ID_ASC',
  PLANS_DISTINCT_COUNT_ID_DESC = 'PLANS_DISTINCT_COUNT_ID_DESC',
  PLANS_DISTINCT_COUNT_LAST_EVENT_ASC = 'PLANS_DISTINCT_COUNT_LAST_EVENT_ASC',
  PLANS_DISTINCT_COUNT_LAST_EVENT_DESC = 'PLANS_DISTINCT_COUNT_LAST_EVENT_DESC',
  PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'PLANS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  PLANS_DISTINCT_COUNT_PRICE_ASC = 'PLANS_DISTINCT_COUNT_PRICE_ASC',
  PLANS_DISTINCT_COUNT_PRICE_DESC = 'PLANS_DISTINCT_COUNT_PRICE_DESC',
  PLANS_MAX_ACTIVE_ASC = 'PLANS_MAX_ACTIVE_ASC',
  PLANS_MAX_ACTIVE_DESC = 'PLANS_MAX_ACTIVE_DESC',
  PLANS_MAX_CREATED_BLOCK_ASC = 'PLANS_MAX_CREATED_BLOCK_ASC',
  PLANS_MAX_CREATED_BLOCK_DESC = 'PLANS_MAX_CREATED_BLOCK_DESC',
  PLANS_MAX_CREATOR_ASC = 'PLANS_MAX_CREATOR_ASC',
  PLANS_MAX_CREATOR_DESC = 'PLANS_MAX_CREATOR_DESC',
  PLANS_MAX_DEPLOYMENT_ID_ASC = 'PLANS_MAX_DEPLOYMENT_ID_ASC',
  PLANS_MAX_DEPLOYMENT_ID_DESC = 'PLANS_MAX_DEPLOYMENT_ID_DESC',
  PLANS_MAX_ID_ASC = 'PLANS_MAX_ID_ASC',
  PLANS_MAX_ID_DESC = 'PLANS_MAX_ID_DESC',
  PLANS_MAX_LAST_EVENT_ASC = 'PLANS_MAX_LAST_EVENT_ASC',
  PLANS_MAX_LAST_EVENT_DESC = 'PLANS_MAX_LAST_EVENT_DESC',
  PLANS_MAX_PLAN_TEMPLATE_ID_ASC = 'PLANS_MAX_PLAN_TEMPLATE_ID_ASC',
  PLANS_MAX_PLAN_TEMPLATE_ID_DESC = 'PLANS_MAX_PLAN_TEMPLATE_ID_DESC',
  PLANS_MAX_PRICE_ASC = 'PLANS_MAX_PRICE_ASC',
  PLANS_MAX_PRICE_DESC = 'PLANS_MAX_PRICE_DESC',
  PLANS_MIN_ACTIVE_ASC = 'PLANS_MIN_ACTIVE_ASC',
  PLANS_MIN_ACTIVE_DESC = 'PLANS_MIN_ACTIVE_DESC',
  PLANS_MIN_CREATED_BLOCK_ASC = 'PLANS_MIN_CREATED_BLOCK_ASC',
  PLANS_MIN_CREATED_BLOCK_DESC = 'PLANS_MIN_CREATED_BLOCK_DESC',
  PLANS_MIN_CREATOR_ASC = 'PLANS_MIN_CREATOR_ASC',
  PLANS_MIN_CREATOR_DESC = 'PLANS_MIN_CREATOR_DESC',
  PLANS_MIN_DEPLOYMENT_ID_ASC = 'PLANS_MIN_DEPLOYMENT_ID_ASC',
  PLANS_MIN_DEPLOYMENT_ID_DESC = 'PLANS_MIN_DEPLOYMENT_ID_DESC',
  PLANS_MIN_ID_ASC = 'PLANS_MIN_ID_ASC',
  PLANS_MIN_ID_DESC = 'PLANS_MIN_ID_DESC',
  PLANS_MIN_LAST_EVENT_ASC = 'PLANS_MIN_LAST_EVENT_ASC',
  PLANS_MIN_LAST_EVENT_DESC = 'PLANS_MIN_LAST_EVENT_DESC',
  PLANS_MIN_PLAN_TEMPLATE_ID_ASC = 'PLANS_MIN_PLAN_TEMPLATE_ID_ASC',
  PLANS_MIN_PLAN_TEMPLATE_ID_DESC = 'PLANS_MIN_PLAN_TEMPLATE_ID_DESC',
  PLANS_MIN_PRICE_ASC = 'PLANS_MIN_PRICE_ASC',
  PLANS_MIN_PRICE_DESC = 'PLANS_MIN_PRICE_DESC',
  PLANS_STDDEV_POPULATION_ACTIVE_ASC = 'PLANS_STDDEV_POPULATION_ACTIVE_ASC',
  PLANS_STDDEV_POPULATION_ACTIVE_DESC = 'PLANS_STDDEV_POPULATION_ACTIVE_DESC',
  PLANS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'PLANS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  PLANS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'PLANS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  PLANS_STDDEV_POPULATION_CREATOR_ASC = 'PLANS_STDDEV_POPULATION_CREATOR_ASC',
  PLANS_STDDEV_POPULATION_CREATOR_DESC = 'PLANS_STDDEV_POPULATION_CREATOR_DESC',
  PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'PLANS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  PLANS_STDDEV_POPULATION_ID_ASC = 'PLANS_STDDEV_POPULATION_ID_ASC',
  PLANS_STDDEV_POPULATION_ID_DESC = 'PLANS_STDDEV_POPULATION_ID_DESC',
  PLANS_STDDEV_POPULATION_LAST_EVENT_ASC = 'PLANS_STDDEV_POPULATION_LAST_EVENT_ASC',
  PLANS_STDDEV_POPULATION_LAST_EVENT_DESC = 'PLANS_STDDEV_POPULATION_LAST_EVENT_DESC',
  PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'PLANS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  PLANS_STDDEV_POPULATION_PRICE_ASC = 'PLANS_STDDEV_POPULATION_PRICE_ASC',
  PLANS_STDDEV_POPULATION_PRICE_DESC = 'PLANS_STDDEV_POPULATION_PRICE_DESC',
  PLANS_STDDEV_SAMPLE_ACTIVE_ASC = 'PLANS_STDDEV_SAMPLE_ACTIVE_ASC',
  PLANS_STDDEV_SAMPLE_ACTIVE_DESC = 'PLANS_STDDEV_SAMPLE_ACTIVE_DESC',
  PLANS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'PLANS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  PLANS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'PLANS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  PLANS_STDDEV_SAMPLE_CREATOR_ASC = 'PLANS_STDDEV_SAMPLE_CREATOR_ASC',
  PLANS_STDDEV_SAMPLE_CREATOR_DESC = 'PLANS_STDDEV_SAMPLE_CREATOR_DESC',
  PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'PLANS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  PLANS_STDDEV_SAMPLE_ID_ASC = 'PLANS_STDDEV_SAMPLE_ID_ASC',
  PLANS_STDDEV_SAMPLE_ID_DESC = 'PLANS_STDDEV_SAMPLE_ID_DESC',
  PLANS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'PLANS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  PLANS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'PLANS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'PLANS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  PLANS_STDDEV_SAMPLE_PRICE_ASC = 'PLANS_STDDEV_SAMPLE_PRICE_ASC',
  PLANS_STDDEV_SAMPLE_PRICE_DESC = 'PLANS_STDDEV_SAMPLE_PRICE_DESC',
  PLANS_SUM_ACTIVE_ASC = 'PLANS_SUM_ACTIVE_ASC',
  PLANS_SUM_ACTIVE_DESC = 'PLANS_SUM_ACTIVE_DESC',
  PLANS_SUM_CREATED_BLOCK_ASC = 'PLANS_SUM_CREATED_BLOCK_ASC',
  PLANS_SUM_CREATED_BLOCK_DESC = 'PLANS_SUM_CREATED_BLOCK_DESC',
  PLANS_SUM_CREATOR_ASC = 'PLANS_SUM_CREATOR_ASC',
  PLANS_SUM_CREATOR_DESC = 'PLANS_SUM_CREATOR_DESC',
  PLANS_SUM_DEPLOYMENT_ID_ASC = 'PLANS_SUM_DEPLOYMENT_ID_ASC',
  PLANS_SUM_DEPLOYMENT_ID_DESC = 'PLANS_SUM_DEPLOYMENT_ID_DESC',
  PLANS_SUM_ID_ASC = 'PLANS_SUM_ID_ASC',
  PLANS_SUM_ID_DESC = 'PLANS_SUM_ID_DESC',
  PLANS_SUM_LAST_EVENT_ASC = 'PLANS_SUM_LAST_EVENT_ASC',
  PLANS_SUM_LAST_EVENT_DESC = 'PLANS_SUM_LAST_EVENT_DESC',
  PLANS_SUM_PLAN_TEMPLATE_ID_ASC = 'PLANS_SUM_PLAN_TEMPLATE_ID_ASC',
  PLANS_SUM_PLAN_TEMPLATE_ID_DESC = 'PLANS_SUM_PLAN_TEMPLATE_ID_DESC',
  PLANS_SUM_PRICE_ASC = 'PLANS_SUM_PRICE_ASC',
  PLANS_SUM_PRICE_DESC = 'PLANS_SUM_PRICE_DESC',
  PLANS_VARIANCE_POPULATION_ACTIVE_ASC = 'PLANS_VARIANCE_POPULATION_ACTIVE_ASC',
  PLANS_VARIANCE_POPULATION_ACTIVE_DESC = 'PLANS_VARIANCE_POPULATION_ACTIVE_DESC',
  PLANS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'PLANS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  PLANS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'PLANS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  PLANS_VARIANCE_POPULATION_CREATOR_ASC = 'PLANS_VARIANCE_POPULATION_CREATOR_ASC',
  PLANS_VARIANCE_POPULATION_CREATOR_DESC = 'PLANS_VARIANCE_POPULATION_CREATOR_DESC',
  PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'PLANS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  PLANS_VARIANCE_POPULATION_ID_ASC = 'PLANS_VARIANCE_POPULATION_ID_ASC',
  PLANS_VARIANCE_POPULATION_ID_DESC = 'PLANS_VARIANCE_POPULATION_ID_DESC',
  PLANS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'PLANS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  PLANS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'PLANS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'PLANS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  PLANS_VARIANCE_POPULATION_PRICE_ASC = 'PLANS_VARIANCE_POPULATION_PRICE_ASC',
  PLANS_VARIANCE_POPULATION_PRICE_DESC = 'PLANS_VARIANCE_POPULATION_PRICE_DESC',
  PLANS_VARIANCE_SAMPLE_ACTIVE_ASC = 'PLANS_VARIANCE_SAMPLE_ACTIVE_ASC',
  PLANS_VARIANCE_SAMPLE_ACTIVE_DESC = 'PLANS_VARIANCE_SAMPLE_ACTIVE_DESC',
  PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'PLANS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  PLANS_VARIANCE_SAMPLE_CREATOR_ASC = 'PLANS_VARIANCE_SAMPLE_CREATOR_ASC',
  PLANS_VARIANCE_SAMPLE_CREATOR_DESC = 'PLANS_VARIANCE_SAMPLE_CREATOR_DESC',
  PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'PLANS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  PLANS_VARIANCE_SAMPLE_ID_ASC = 'PLANS_VARIANCE_SAMPLE_ID_ASC',
  PLANS_VARIANCE_SAMPLE_ID_DESC = 'PLANS_VARIANCE_SAMPLE_ID_DESC',
  PLANS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'PLANS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  PLANS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'PLANS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'PLANS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  PLANS_VARIANCE_SAMPLE_PRICE_ASC = 'PLANS_VARIANCE_SAMPLE_PRICE_ASC',
  PLANS_VARIANCE_SAMPLE_PRICE_DESC = 'PLANS_VARIANCE_SAMPLE_PRICE_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  RATE_LIMIT_ASC = 'RATE_LIMIT_ASC',
  RATE_LIMIT_DESC = 'RATE_LIMIT_DESC',
  SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_AVERAGE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_AVERAGE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_END_TIME_ASC = 'SERVICE_AGREEMENTS_AVERAGE_END_TIME_ASC',
  SERVICE_AGREEMENTS_AVERAGE_END_TIME_DESC = 'SERVICE_AGREEMENTS_AVERAGE_END_TIME_DESC',
  SERVICE_AGREEMENTS_AVERAGE_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_AVERAGE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_AVERAGE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_AVERAGE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_AVERAGE_PERIOD_ASC = 'SERVICE_AGREEMENTS_AVERAGE_PERIOD_ASC',
  SERVICE_AGREEMENTS_AVERAGE_PERIOD_DESC = 'SERVICE_AGREEMENTS_AVERAGE_PERIOD_DESC',
  SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_AVERAGE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_AVERAGE_START_TIME_ASC = 'SERVICE_AGREEMENTS_AVERAGE_START_TIME_ASC',
  SERVICE_AGREEMENTS_AVERAGE_START_TIME_DESC = 'SERVICE_AGREEMENTS_AVERAGE_START_TIME_DESC',
  SERVICE_AGREEMENTS_COUNT_ASC = 'SERVICE_AGREEMENTS_COUNT_ASC',
  SERVICE_AGREEMENTS_COUNT_DESC = 'SERVICE_AGREEMENTS_COUNT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_END_TIME_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PERIOD_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_ASC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_ASC',
  SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_DESC = 'SERVICE_AGREEMENTS_DISTINCT_COUNT_START_TIME_DESC',
  SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MAX_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_MAX_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_MAX_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_MAX_END_TIME_ASC = 'SERVICE_AGREEMENTS_MAX_END_TIME_ASC',
  SERVICE_AGREEMENTS_MAX_END_TIME_DESC = 'SERVICE_AGREEMENTS_MAX_END_TIME_DESC',
  SERVICE_AGREEMENTS_MAX_ID_ASC = 'SERVICE_AGREEMENTS_MAX_ID_ASC',
  SERVICE_AGREEMENTS_MAX_ID_DESC = 'SERVICE_AGREEMENTS_MAX_ID_DESC',
  SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MAX_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MAX_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_MAX_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_MAX_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_MAX_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_MAX_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_MAX_PERIOD_ASC = 'SERVICE_AGREEMENTS_MAX_PERIOD_ASC',
  SERVICE_AGREEMENTS_MAX_PERIOD_DESC = 'SERVICE_AGREEMENTS_MAX_PERIOD_DESC',
  SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_MAX_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_MAX_START_TIME_ASC = 'SERVICE_AGREEMENTS_MAX_START_TIME_ASC',
  SERVICE_AGREEMENTS_MAX_START_TIME_DESC = 'SERVICE_AGREEMENTS_MAX_START_TIME_DESC',
  SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MIN_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_MIN_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_MIN_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_MIN_END_TIME_ASC = 'SERVICE_AGREEMENTS_MIN_END_TIME_ASC',
  SERVICE_AGREEMENTS_MIN_END_TIME_DESC = 'SERVICE_AGREEMENTS_MIN_END_TIME_DESC',
  SERVICE_AGREEMENTS_MIN_ID_ASC = 'SERVICE_AGREEMENTS_MIN_ID_ASC',
  SERVICE_AGREEMENTS_MIN_ID_DESC = 'SERVICE_AGREEMENTS_MIN_ID_DESC',
  SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_MIN_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_MIN_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_MIN_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_MIN_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_MIN_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_MIN_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_MIN_PERIOD_ASC = 'SERVICE_AGREEMENTS_MIN_PERIOD_ASC',
  SERVICE_AGREEMENTS_MIN_PERIOD_DESC = 'SERVICE_AGREEMENTS_MIN_PERIOD_DESC',
  SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_MIN_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_MIN_START_TIME_ASC = 'SERVICE_AGREEMENTS_MIN_START_TIME_ASC',
  SERVICE_AGREEMENTS_MIN_START_TIME_DESC = 'SERVICE_AGREEMENTS_MIN_START_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_END_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PERIOD_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_POPULATION_START_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_END_TIME_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PERIOD_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_ASC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_ASC',
  SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_DESC = 'SERVICE_AGREEMENTS_STDDEV_SAMPLE_START_TIME_DESC',
  SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_SUM_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_SUM_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_SUM_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_SUM_END_TIME_ASC = 'SERVICE_AGREEMENTS_SUM_END_TIME_ASC',
  SERVICE_AGREEMENTS_SUM_END_TIME_DESC = 'SERVICE_AGREEMENTS_SUM_END_TIME_DESC',
  SERVICE_AGREEMENTS_SUM_ID_ASC = 'SERVICE_AGREEMENTS_SUM_ID_ASC',
  SERVICE_AGREEMENTS_SUM_ID_DESC = 'SERVICE_AGREEMENTS_SUM_ID_DESC',
  SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_SUM_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_SUM_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_SUM_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_SUM_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_SUM_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_SUM_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_SUM_PERIOD_ASC = 'SERVICE_AGREEMENTS_SUM_PERIOD_ASC',
  SERVICE_AGREEMENTS_SUM_PERIOD_DESC = 'SERVICE_AGREEMENTS_SUM_PERIOD_DESC',
  SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_SUM_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_SUM_START_TIME_ASC = 'SERVICE_AGREEMENTS_SUM_START_TIME_ASC',
  SERVICE_AGREEMENTS_SUM_START_TIME_DESC = 'SERVICE_AGREEMENTS_SUM_START_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_END_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PERIOD_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_POPULATION_START_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CONSUMER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_DEPLOYMENT_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_END_TIME_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_INDEXER_ADDRESS_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_LOCKED_AMOUNT_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PERIOD_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_PLAN_TEMPLATE_ID_DESC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_ASC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_ASC',
  SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_DESC = 'SERVICE_AGREEMENTS_VARIANCE_SAMPLE_START_TIME_DESC',
}

export type PlanVariancePopulationAggregates = {
  readonly __typename: 'PlanVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

export type PlanVarianceSampleAggregates = {
  readonly __typename: 'PlanVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of price across the matching connection */
  readonly price: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Plan` values. */
export type PlansConnection = {
  readonly __typename: 'PlansConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<PlanAggregates>;
  /** A list of edges which contains the `Plan` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PlansEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<PlanAggregates>>;
  /** A list of `Plan` objects. */
  readonly nodes: ReadonlyArray<Maybe<Plan>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Plan` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Plan` values. */
export type PlansConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<PlansGroupBy>;
  having: InputMaybe<PlansHavingInput>;
};

/** A `Plan` edge in the connection. */
export type PlansEdge = {
  readonly __typename: 'PlansEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Plan` at the end of the edge. */
  readonly node: Maybe<Plan>;
};

/** Grouping methods for `Plan` for usage during aggregation. */
export enum PlansGroupBy {
  ACTIVE = 'ACTIVE',
  CREATED_BLOCK = 'CREATED_BLOCK',
  CREATOR = 'CREATOR',
  DEPLOYMENT_ID = 'DEPLOYMENT_ID',
  LAST_EVENT = 'LAST_EVENT',
  PLAN_TEMPLATE_ID = 'PLAN_TEMPLATE_ID',
  PRICE = 'PRICE',
}

export type PlansHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Plan` aggregates. */
export type PlansHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<PlansHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<PlansHavingInput>>;
  readonly average: InputMaybe<PlansHavingAverageInput>;
  readonly distinctCount: InputMaybe<PlansHavingDistinctCountInput>;
  readonly max: InputMaybe<PlansHavingMaxInput>;
  readonly min: InputMaybe<PlansHavingMinInput>;
  readonly stddevPopulation: InputMaybe<PlansHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<PlansHavingStddevSampleInput>;
  readonly sum: InputMaybe<PlansHavingSumInput>;
  readonly variancePopulation: InputMaybe<PlansHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<PlansHavingVarianceSampleInput>;
};

export type PlansHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

export type PlansHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly price: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Plan`. */
export enum PlansOrderBy {
  ACTIVE_ASC = 'ACTIVE_ASC',
  ACTIVE_DESC = 'ACTIVE_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  CREATOR_ASC = 'CREATOR_ASC',
  CREATOR_DESC = 'CREATOR_DESC',
  DEPLOYMENT_ID_ASC = 'DEPLOYMENT_ID_ASC',
  DEPLOYMENT_ID_DESC = 'DEPLOYMENT_ID_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PLAN_TEMPLATE_ID_ASC = 'PLAN_TEMPLATE_ID_ASC',
  PLAN_TEMPLATE_ID_DESC = 'PLAN_TEMPLATE_ID_DESC',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
}

export type Project = Node & {
  readonly __typename: 'Project';
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly createdTimestamp: Scalars['Datetime'];
  readonly currentDeployment: Scalars['String'];
  readonly currentVersion: Scalars['String'];
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deployments: DeploymentsConnection;
  readonly id: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly metadata: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly owner: Scalars['String'];
  readonly updatedTimestamp: Scalars['Datetime'];
};

export type ProjectdeploymentsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

export type ProjectAggregates = {
  readonly __typename: 'ProjectAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<ProjectAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<ProjectDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<ProjectMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<ProjectMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<ProjectStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<ProjectStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<ProjectSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<ProjectVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<ProjectVarianceSampleAggregates>;
};

export type ProjectAverageAggregates = {
  readonly __typename: 'ProjectAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type ProjectDistinctCountAggregates = {
  readonly __typename: 'ProjectDistinctCountAggregates';
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdTimestamp across the matching connection */
  readonly createdTimestamp: Maybe<Scalars['BigInt']>;
  /** Distinct count of currentDeployment across the matching connection */
  readonly currentDeployment: Maybe<Scalars['BigInt']>;
  /** Distinct count of currentVersion across the matching connection */
  readonly currentVersion: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of metadata across the matching connection */
  readonly metadata: Maybe<Scalars['BigInt']>;
  /** Distinct count of owner across the matching connection */
  readonly owner: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedTimestamp across the matching connection */
  readonly updatedTimestamp: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Project` object types. All fields are combined with a logical ‘and.’ */
export type ProjectFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<ProjectFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdTimestamp` field. */
  readonly createdTimestamp: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `currentDeployment` field. */
  readonly currentDeployment: InputMaybe<StringFilter>;
  /** Filter by the object’s `currentVersion` field. */
  readonly currentVersion: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  readonly metadata: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<ProjectFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<ProjectFilter>>;
  /** Filter by the object’s `owner` field. */
  readonly owner: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedTimestamp` field. */
  readonly updatedTimestamp: InputMaybe<DatetimeFilter>;
};

export type ProjectMaxAggregates = {
  readonly __typename: 'ProjectMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type ProjectMinAggregates = {
  readonly __typename: 'ProjectMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type ProjectStddevPopulationAggregates = {
  readonly __typename: 'ProjectStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type ProjectStddevSampleAggregates = {
  readonly __typename: 'ProjectStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type ProjectSumAggregates = {
  readonly __typename: 'ProjectSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type ProjectVariancePopulationAggregates = {
  readonly __typename: 'ProjectVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type ProjectVarianceSampleAggregates = {
  readonly __typename: 'ProjectVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Project` values. */
export type ProjectsConnection = {
  readonly __typename: 'ProjectsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<ProjectAggregates>;
  /** A list of edges which contains the `Project` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ProjectsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<ProjectAggregates>>;
  /** A list of `Project` objects. */
  readonly nodes: ReadonlyArray<Maybe<Project>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Project` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Project` values. */
export type ProjectsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<ProjectsGroupBy>;
  having: InputMaybe<ProjectsHavingInput>;
};

/** A `Project` edge in the connection. */
export type ProjectsEdge = {
  readonly __typename: 'ProjectsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Project` at the end of the edge. */
  readonly node: Maybe<Project>;
};

/** Grouping methods for `Project` for usage during aggregation. */
export enum ProjectsGroupBy {
  CREATED_BLOCK = 'CREATED_BLOCK',
  CREATED_TIMESTAMP = 'CREATED_TIMESTAMP',
  CREATED_TIMESTAMP_TRUNCATED_TO_DAY = 'CREATED_TIMESTAMP_TRUNCATED_TO_DAY',
  CREATED_TIMESTAMP_TRUNCATED_TO_HOUR = 'CREATED_TIMESTAMP_TRUNCATED_TO_HOUR',
  CURRENT_DEPLOYMENT = 'CURRENT_DEPLOYMENT',
  CURRENT_VERSION = 'CURRENT_VERSION',
  LAST_EVENT = 'LAST_EVENT',
  METADATA = 'METADATA',
  OWNER = 'OWNER',
  UPDATED_TIMESTAMP = 'UPDATED_TIMESTAMP',
  UPDATED_TIMESTAMP_TRUNCATED_TO_DAY = 'UPDATED_TIMESTAMP_TRUNCATED_TO_DAY',
  UPDATED_TIMESTAMP_TRUNCATED_TO_HOUR = 'UPDATED_TIMESTAMP_TRUNCATED_TO_HOUR',
}

export type ProjectsHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Project` aggregates. */
export type ProjectsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProjectsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProjectsHavingInput>>;
  readonly average: InputMaybe<ProjectsHavingAverageInput>;
  readonly distinctCount: InputMaybe<ProjectsHavingDistinctCountInput>;
  readonly max: InputMaybe<ProjectsHavingMaxInput>;
  readonly min: InputMaybe<ProjectsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<ProjectsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<ProjectsHavingStddevSampleInput>;
  readonly sum: InputMaybe<ProjectsHavingSumInput>;
  readonly variancePopulation: InputMaybe<ProjectsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<ProjectsHavingVarianceSampleInput>;
};

export type ProjectsHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectsHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly createdTimestamp: InputMaybe<HavingDatetimeFilter>;
  readonly updatedTimestamp: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `Project`. */
export enum ProjectsOrderBy {
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  CREATED_TIMESTAMP_ASC = 'CREATED_TIMESTAMP_ASC',
  CREATED_TIMESTAMP_DESC = 'CREATED_TIMESTAMP_DESC',
  CURRENT_DEPLOYMENT_ASC = 'CURRENT_DEPLOYMENT_ASC',
  CURRENT_DEPLOYMENT_DESC = 'CURRENT_DEPLOYMENT_DESC',
  CURRENT_VERSION_ASC = 'CURRENT_VERSION_ASC',
  CURRENT_VERSION_DESC = 'CURRENT_VERSION_DESC',
  DEPLOYMENTS_AVERAGE_CREATED_BLOCK_ASC = 'DEPLOYMENTS_AVERAGE_CREATED_BLOCK_ASC',
  DEPLOYMENTS_AVERAGE_CREATED_BLOCK_DESC = 'DEPLOYMENTS_AVERAGE_CREATED_BLOCK_DESC',
  DEPLOYMENTS_AVERAGE_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_AVERAGE_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_AVERAGE_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_AVERAGE_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_AVERAGE_ID_ASC = 'DEPLOYMENTS_AVERAGE_ID_ASC',
  DEPLOYMENTS_AVERAGE_ID_DESC = 'DEPLOYMENTS_AVERAGE_ID_DESC',
  DEPLOYMENTS_AVERAGE_LAST_EVENT_ASC = 'DEPLOYMENTS_AVERAGE_LAST_EVENT_ASC',
  DEPLOYMENTS_AVERAGE_LAST_EVENT_DESC = 'DEPLOYMENTS_AVERAGE_LAST_EVENT_DESC',
  DEPLOYMENTS_AVERAGE_PROJECT_ID_ASC = 'DEPLOYMENTS_AVERAGE_PROJECT_ID_ASC',
  DEPLOYMENTS_AVERAGE_PROJECT_ID_DESC = 'DEPLOYMENTS_AVERAGE_PROJECT_ID_DESC',
  DEPLOYMENTS_AVERAGE_VERSION_ASC = 'DEPLOYMENTS_AVERAGE_VERSION_ASC',
  DEPLOYMENTS_AVERAGE_VERSION_DESC = 'DEPLOYMENTS_AVERAGE_VERSION_DESC',
  DEPLOYMENTS_COUNT_ASC = 'DEPLOYMENTS_COUNT_ASC',
  DEPLOYMENTS_COUNT_DESC = 'DEPLOYMENTS_COUNT_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_ID_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_ID_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_ID_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_ID_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_LAST_EVENT_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_LAST_EVENT_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_LAST_EVENT_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_LAST_EVENT_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_PROJECT_ID_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_PROJECT_ID_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_PROJECT_ID_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_PROJECT_ID_DESC',
  DEPLOYMENTS_DISTINCT_COUNT_VERSION_ASC = 'DEPLOYMENTS_DISTINCT_COUNT_VERSION_ASC',
  DEPLOYMENTS_DISTINCT_COUNT_VERSION_DESC = 'DEPLOYMENTS_DISTINCT_COUNT_VERSION_DESC',
  DEPLOYMENTS_MAX_CREATED_BLOCK_ASC = 'DEPLOYMENTS_MAX_CREATED_BLOCK_ASC',
  DEPLOYMENTS_MAX_CREATED_BLOCK_DESC = 'DEPLOYMENTS_MAX_CREATED_BLOCK_DESC',
  DEPLOYMENTS_MAX_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_MAX_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_MAX_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_MAX_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_MAX_ID_ASC = 'DEPLOYMENTS_MAX_ID_ASC',
  DEPLOYMENTS_MAX_ID_DESC = 'DEPLOYMENTS_MAX_ID_DESC',
  DEPLOYMENTS_MAX_LAST_EVENT_ASC = 'DEPLOYMENTS_MAX_LAST_EVENT_ASC',
  DEPLOYMENTS_MAX_LAST_EVENT_DESC = 'DEPLOYMENTS_MAX_LAST_EVENT_DESC',
  DEPLOYMENTS_MAX_PROJECT_ID_ASC = 'DEPLOYMENTS_MAX_PROJECT_ID_ASC',
  DEPLOYMENTS_MAX_PROJECT_ID_DESC = 'DEPLOYMENTS_MAX_PROJECT_ID_DESC',
  DEPLOYMENTS_MAX_VERSION_ASC = 'DEPLOYMENTS_MAX_VERSION_ASC',
  DEPLOYMENTS_MAX_VERSION_DESC = 'DEPLOYMENTS_MAX_VERSION_DESC',
  DEPLOYMENTS_MIN_CREATED_BLOCK_ASC = 'DEPLOYMENTS_MIN_CREATED_BLOCK_ASC',
  DEPLOYMENTS_MIN_CREATED_BLOCK_DESC = 'DEPLOYMENTS_MIN_CREATED_BLOCK_DESC',
  DEPLOYMENTS_MIN_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_MIN_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_MIN_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_MIN_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_MIN_ID_ASC = 'DEPLOYMENTS_MIN_ID_ASC',
  DEPLOYMENTS_MIN_ID_DESC = 'DEPLOYMENTS_MIN_ID_DESC',
  DEPLOYMENTS_MIN_LAST_EVENT_ASC = 'DEPLOYMENTS_MIN_LAST_EVENT_ASC',
  DEPLOYMENTS_MIN_LAST_EVENT_DESC = 'DEPLOYMENTS_MIN_LAST_EVENT_DESC',
  DEPLOYMENTS_MIN_PROJECT_ID_ASC = 'DEPLOYMENTS_MIN_PROJECT_ID_ASC',
  DEPLOYMENTS_MIN_PROJECT_ID_DESC = 'DEPLOYMENTS_MIN_PROJECT_ID_DESC',
  DEPLOYMENTS_MIN_VERSION_ASC = 'DEPLOYMENTS_MIN_VERSION_ASC',
  DEPLOYMENTS_MIN_VERSION_DESC = 'DEPLOYMENTS_MIN_VERSION_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_ID_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_ID_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_ID_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_ID_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_LAST_EVENT_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_LAST_EVENT_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_LAST_EVENT_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_LAST_EVENT_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_PROJECT_ID_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_PROJECT_ID_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_PROJECT_ID_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_PROJECT_ID_DESC',
  DEPLOYMENTS_STDDEV_POPULATION_VERSION_ASC = 'DEPLOYMENTS_STDDEV_POPULATION_VERSION_ASC',
  DEPLOYMENTS_STDDEV_POPULATION_VERSION_DESC = 'DEPLOYMENTS_STDDEV_POPULATION_VERSION_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_ID_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_ID_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_ID_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_ID_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_PROJECT_ID_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_PROJECT_ID_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_PROJECT_ID_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_PROJECT_ID_DESC',
  DEPLOYMENTS_STDDEV_SAMPLE_VERSION_ASC = 'DEPLOYMENTS_STDDEV_SAMPLE_VERSION_ASC',
  DEPLOYMENTS_STDDEV_SAMPLE_VERSION_DESC = 'DEPLOYMENTS_STDDEV_SAMPLE_VERSION_DESC',
  DEPLOYMENTS_SUM_CREATED_BLOCK_ASC = 'DEPLOYMENTS_SUM_CREATED_BLOCK_ASC',
  DEPLOYMENTS_SUM_CREATED_BLOCK_DESC = 'DEPLOYMENTS_SUM_CREATED_BLOCK_DESC',
  DEPLOYMENTS_SUM_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_SUM_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_SUM_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_SUM_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_SUM_ID_ASC = 'DEPLOYMENTS_SUM_ID_ASC',
  DEPLOYMENTS_SUM_ID_DESC = 'DEPLOYMENTS_SUM_ID_DESC',
  DEPLOYMENTS_SUM_LAST_EVENT_ASC = 'DEPLOYMENTS_SUM_LAST_EVENT_ASC',
  DEPLOYMENTS_SUM_LAST_EVENT_DESC = 'DEPLOYMENTS_SUM_LAST_EVENT_DESC',
  DEPLOYMENTS_SUM_PROJECT_ID_ASC = 'DEPLOYMENTS_SUM_PROJECT_ID_ASC',
  DEPLOYMENTS_SUM_PROJECT_ID_DESC = 'DEPLOYMENTS_SUM_PROJECT_ID_DESC',
  DEPLOYMENTS_SUM_VERSION_ASC = 'DEPLOYMENTS_SUM_VERSION_ASC',
  DEPLOYMENTS_SUM_VERSION_DESC = 'DEPLOYMENTS_SUM_VERSION_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_ID_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_ID_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_ID_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_ID_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_PROJECT_ID_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_PROJECT_ID_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_PROJECT_ID_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_PROJECT_ID_DESC',
  DEPLOYMENTS_VARIANCE_POPULATION_VERSION_ASC = 'DEPLOYMENTS_VARIANCE_POPULATION_VERSION_ASC',
  DEPLOYMENTS_VARIANCE_POPULATION_VERSION_DESC = 'DEPLOYMENTS_VARIANCE_POPULATION_VERSION_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_TIMESTAMP_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_TIMESTAMP_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_TIMESTAMP_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_CREATED_TIMESTAMP_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_ID_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_ID_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_ID_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_ID_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_PROJECT_ID_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_PROJECT_ID_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_PROJECT_ID_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_PROJECT_ID_DESC',
  DEPLOYMENTS_VARIANCE_SAMPLE_VERSION_ASC = 'DEPLOYMENTS_VARIANCE_SAMPLE_VERSION_ASC',
  DEPLOYMENTS_VARIANCE_SAMPLE_VERSION_DESC = 'DEPLOYMENTS_VARIANCE_SAMPLE_VERSION_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  METADATA_ASC = 'METADATA_ASC',
  METADATA_DESC = 'METADATA_DESC',
  NATURAL = 'NATURAL',
  OWNER_ASC = 'OWNER_ASC',
  OWNER_DESC = 'OWNER_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  UPDATED_TIMESTAMP_ASC = 'UPDATED_TIMESTAMP_ASC',
  UPDATED_TIMESTAMP_DESC = 'UPDATED_TIMESTAMP_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  readonly __typename: 'Query';
  readonly _metadata: Maybe<_Metadata>;
  readonly acceptedOffer: Maybe<AcceptedOffer>;
  /** Reads a single `AcceptedOffer` using its globally unique `ID`. */
  readonly acceptedOfferByNodeId: Maybe<AcceptedOffer>;
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: Maybe<AcceptedOffersConnection>;
  readonly delegation: Maybe<Delegation>;
  /** Reads a single `Delegation` using its globally unique `ID`. */
  readonly delegationByNodeId: Maybe<Delegation>;
  /** Reads and enables pagination through a set of `Delegation`. */
  readonly delegations: Maybe<DelegationsConnection>;
  readonly delegator: Maybe<Delegator>;
  /** Reads a single `Delegator` using its globally unique `ID`. */
  readonly delegatorByNodeId: Maybe<Delegator>;
  /** Reads and enables pagination through a set of `Delegator`. */
  readonly delegators: Maybe<DelegatorsConnection>;
  readonly deployment: Maybe<Deployment>;
  /** Reads a single `Deployment` using its globally unique `ID`. */
  readonly deploymentByNodeId: Maybe<Deployment>;
  readonly deploymentIndexer: Maybe<DeploymentIndexer>;
  /** Reads a single `DeploymentIndexer` using its globally unique `ID`. */
  readonly deploymentIndexerByNodeId: Maybe<DeploymentIndexer>;
  /** Reads and enables pagination through a set of `DeploymentIndexer`. */
  readonly deploymentIndexers: Maybe<DeploymentIndexersConnection>;
  /** Reads and enables pagination through a set of `Deployment`. */
  readonly deployments: Maybe<DeploymentsConnection>;
  readonly era: Maybe<Era>;
  /** Reads a single `Era` using its globally unique `ID`. */
  readonly eraByNodeId: Maybe<Era>;
  /** Reads and enables pagination through a set of `Era`. */
  readonly eras: Maybe<ErasConnection>;
  readonly exception: Maybe<Exception>;
  /** Reads a single `Exception` using its globally unique `ID`. */
  readonly exceptionByNodeId: Maybe<Exception>;
  /** Reads and enables pagination through a set of `Exception`. */
  readonly exceptions: Maybe<ExceptionsConnection>;
  readonly indexer: Maybe<Indexer>;
  /** Reads a single `Indexer` using its globally unique `ID`. */
  readonly indexerByNodeId: Maybe<Indexer>;
  readonly indexerReward: Maybe<IndexerReward>;
  /** Reads a single `IndexerReward` using its globally unique `ID`. */
  readonly indexerRewardByNodeId: Maybe<IndexerReward>;
  /** Reads and enables pagination through a set of `IndexerReward`. */
  readonly indexerRewards: Maybe<IndexerRewardsConnection>;
  /** Reads and enables pagination through a set of `Indexer`. */
  readonly indexers: Maybe<IndexersConnection>;
  /** Fetches an object given its globally unique `ID`. */
  readonly node: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly nodeId: Scalars['ID'];
  readonly offer: Maybe<Offer>;
  /** Reads a single `Offer` using its globally unique `ID`. */
  readonly offerByNodeId: Maybe<Offer>;
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offers: Maybe<OffersConnection>;
  readonly plan: Maybe<Plan>;
  /** Reads a single `Plan` using its globally unique `ID`. */
  readonly planByNodeId: Maybe<Plan>;
  readonly planTemplate: Maybe<PlanTemplate>;
  /** Reads a single `PlanTemplate` using its globally unique `ID`. */
  readonly planTemplateByNodeId: Maybe<PlanTemplate>;
  /** Reads and enables pagination through a set of `PlanTemplate`. */
  readonly planTemplates: Maybe<PlanTemplatesConnection>;
  /** Reads and enables pagination through a set of `Plan`. */
  readonly plans: Maybe<PlansConnection>;
  readonly project: Maybe<Project>;
  /** Reads a single `Project` using its globally unique `ID`. */
  readonly projectByNodeId: Maybe<Project>;
  /** Reads and enables pagination through a set of `Project`. */
  readonly projects: Maybe<ProjectsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  readonly query: Query;
  readonly reward: Maybe<Reward>;
  /** Reads a single `Reward` using its globally unique `ID`. */
  readonly rewardByNodeId: Maybe<Reward>;
  /** Reads and enables pagination through a set of `Reward`. */
  readonly rewards: Maybe<RewardsConnection>;
  readonly serviceAgreement: Maybe<ServiceAgreement>;
  /** Reads a single `ServiceAgreement` using its globally unique `ID`. */
  readonly serviceAgreementByNodeId: Maybe<ServiceAgreement>;
  /** Reads and enables pagination through a set of `ServiceAgreement`. */
  readonly serviceAgreements: Maybe<ServiceAgreementsConnection>;
  readonly stateChannel: Maybe<StateChannel>;
  /** Reads a single `StateChannel` using its globally unique `ID`. */
  readonly stateChannelByNodeId: Maybe<StateChannel>;
  /** Reads and enables pagination through a set of `StateChannel`. */
  readonly stateChannels: Maybe<StateChannelsConnection>;
  readonly unclaimedReward: Maybe<UnclaimedReward>;
  /** Reads a single `UnclaimedReward` using its globally unique `ID`. */
  readonly unclaimedRewardByNodeId: Maybe<UnclaimedReward>;
  /** Reads and enables pagination through a set of `UnclaimedReward`. */
  readonly unclaimedRewards: Maybe<UnclaimedRewardsConnection>;
  readonly withdrawl: Maybe<Withdrawl>;
  /** Reads a single `Withdrawl` using its globally unique `ID`. */
  readonly withdrawlByNodeId: Maybe<Withdrawl>;
  /** Reads and enables pagination through a set of `Withdrawl`. */
  readonly withdrawls: Maybe<WithdrawlsConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryacceptedOfferArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryacceptedOfferByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryacceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegationArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegationsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegationsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegatorArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegatorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydelegatorsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DelegatorFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DelegatorsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentIndexerArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentIndexerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentIndexersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentIndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentIndexersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerydeploymentsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<DeploymentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<DeploymentsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryeraArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryeraByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryerasArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<EraFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ErasOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryexceptionArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryexceptionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryexceptionsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ExceptionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ExceptionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryindexerArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryindexerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryindexerRewardArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryindexerRewardByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryindexerRewardsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerRewardFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexerRewardsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryindexersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerynodeArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryofferArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryofferByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryoffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryplanArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryplanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryplanTemplateArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryplanTemplateByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryplanTemplatesArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanTemplateFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlanTemplatesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryplansArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<PlanFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PlansOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryprojectArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryprojectByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryprojectsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ProjectFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ProjectsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryrewardArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryrewardByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryrewardsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<RewardFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<RewardsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryserviceAgreementArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryserviceAgreementByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryserviceAgreementsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<ServiceAgreementFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ServiceAgreementsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerystateChannelArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerystateChannelByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerystateChannelsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<StateChannelFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<StateChannelsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryunclaimedRewardArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryunclaimedRewardByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryunclaimedRewardsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<UnclaimedRewardFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<UnclaimedRewardsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerywithdrawlArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QuerywithdrawlByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QuerywithdrawlsArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<WithdrawlFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<WithdrawlsOrderBy>>;
};

export type Reward = Node & {
  readonly __typename: 'Reward';
  readonly amount: Scalars['BigFloat'];
  readonly claimedTime: Scalars['Datetime'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly delegatorAddress: Scalars['String'];
  readonly id: Scalars['String'];
  readonly indexerAddress: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

export type RewardAggregates = {
  readonly __typename: 'RewardAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<RewardAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<RewardDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<RewardMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<RewardMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<RewardStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<RewardStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<RewardSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<RewardVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<RewardVarianceSampleAggregates>;
};

export type RewardAverageAggregates = {
  readonly __typename: 'RewardAverageAggregates';
  /** Mean average of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type RewardDistinctCountAggregates = {
  readonly __typename: 'RewardDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigInt']>;
  /** Distinct count of claimedTime across the matching connection */
  readonly claimedTime: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of delegatorAddress across the matching connection */
  readonly delegatorAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerAddress across the matching connection */
  readonly indexerAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Reward` object types. All fields are combined with a logical ‘and.’ */
export type RewardFilter = {
  /** Filter by the object’s `amount` field. */
  readonly amount: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<RewardFilter>>;
  /** Filter by the object’s `claimedTime` field. */
  readonly claimedTime: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `delegatorAddress` field. */
  readonly delegatorAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerAddress` field. */
  readonly indexerAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<RewardFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<RewardFilter>>;
};

export type RewardMaxAggregates = {
  readonly __typename: 'RewardMaxAggregates';
  /** Maximum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type RewardMinAggregates = {
  readonly __typename: 'RewardMinAggregates';
  /** Minimum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type RewardStddevPopulationAggregates = {
  readonly __typename: 'RewardStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type RewardStddevSampleAggregates = {
  readonly __typename: 'RewardStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type RewardSumAggregates = {
  readonly __typename: 'RewardSumAggregates';
  /** Sum of amount across the matching connection */
  readonly amount: Scalars['BigFloat'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type RewardVariancePopulationAggregates = {
  readonly __typename: 'RewardVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type RewardVarianceSampleAggregates = {
  readonly __typename: 'RewardVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Reward` values. */
export type RewardsConnection = {
  readonly __typename: 'RewardsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<RewardAggregates>;
  /** A list of edges which contains the `Reward` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<RewardsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<RewardAggregates>>;
  /** A list of `Reward` objects. */
  readonly nodes: ReadonlyArray<Maybe<Reward>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Reward` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Reward` values. */
export type RewardsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<RewardsGroupBy>;
  having: InputMaybe<RewardsHavingInput>;
};

/** A `Reward` edge in the connection. */
export type RewardsEdge = {
  readonly __typename: 'RewardsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Reward` at the end of the edge. */
  readonly node: Maybe<Reward>;
};

/** Grouping methods for `Reward` for usage during aggregation. */
export enum RewardsGroupBy {
  AMOUNT = 'AMOUNT',
  CLAIMED_TIME = 'CLAIMED_TIME',
  CLAIMED_TIME_TRUNCATED_TO_DAY = 'CLAIMED_TIME_TRUNCATED_TO_DAY',
  CLAIMED_TIME_TRUNCATED_TO_HOUR = 'CLAIMED_TIME_TRUNCATED_TO_HOUR',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DELEGATOR_ADDRESS = 'DELEGATOR_ADDRESS',
  INDEXER_ADDRESS = 'INDEXER_ADDRESS',
  LAST_EVENT = 'LAST_EVENT',
}

export type RewardsHavingAverageInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingDistinctCountInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Reward` aggregates. */
export type RewardsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<RewardsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<RewardsHavingInput>>;
  readonly average: InputMaybe<RewardsHavingAverageInput>;
  readonly distinctCount: InputMaybe<RewardsHavingDistinctCountInput>;
  readonly max: InputMaybe<RewardsHavingMaxInput>;
  readonly min: InputMaybe<RewardsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<RewardsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<RewardsHavingStddevSampleInput>;
  readonly sum: InputMaybe<RewardsHavingSumInput>;
  readonly variancePopulation: InputMaybe<RewardsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<RewardsHavingVarianceSampleInput>;
};

export type RewardsHavingMaxInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingMinInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingStddevPopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingStddevSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingSumInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingVariancePopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type RewardsHavingVarianceSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly claimedTime: InputMaybe<HavingDatetimeFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Reward`. */
export enum RewardsOrderBy {
  AMOUNT_ASC = 'AMOUNT_ASC',
  AMOUNT_DESC = 'AMOUNT_DESC',
  CLAIMED_TIME_ASC = 'CLAIMED_TIME_ASC',
  CLAIMED_TIME_DESC = 'CLAIMED_TIME_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATOR_ADDRESS_ASC = 'DELEGATOR_ADDRESS_ASC',
  DELEGATOR_ADDRESS_DESC = 'DELEGATOR_ADDRESS_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ADDRESS_ASC = 'INDEXER_ADDRESS_ASC',
  INDEXER_ADDRESS_DESC = 'INDEXER_ADDRESS_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
}

export type ServiceAgreement = Node & {
  readonly __typename: 'ServiceAgreement';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  readonly consumerAddress: Scalars['String'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Reads a single `Deployment` that is related to this `ServiceAgreement`. */
  readonly deployment: Maybe<Deployment>;
  readonly deploymentId: Scalars['String'];
  readonly endTime: Scalars['Datetime'];
  readonly id: Scalars['String'];
  readonly indexerAddress: Scalars['String'];
  /** Reads and enables pagination through a set of `Indexer`. */
  readonly indexersByAcceptedOfferServiceAgreementIdAndIndexerId: ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyConnection;
  readonly lastEvent: Maybe<Scalars['String']>;
  readonly lockedAmount: Scalars['BigFloat'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Offer`. */
  readonly offersByAcceptedOfferServiceAgreementIdAndOfferId: ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyConnection;
  readonly period: Scalars['BigFloat'];
  /** Reads a single `PlanTemplate` that is related to this `ServiceAgreement`. */
  readonly planTemplate: Maybe<PlanTemplate>;
  readonly planTemplateId: Scalars['String'];
  readonly startTime: Scalars['Datetime'];
};

export type ServiceAgreementacceptedOffersArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<AcceptedOfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
};

export type ServiceAgreementindexersByAcceptedOfferServiceAgreementIdAndIndexerIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<IndexerFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<IndexersOrderBy>>;
};

export type ServiceAgreementoffersByAcceptedOfferServiceAgreementIdAndOfferIdArgs = {
  after: InputMaybe<Scalars['Cursor']>;
  before: InputMaybe<Scalars['Cursor']>;
  filter: InputMaybe<OfferFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<OffersOrderBy>>;
};

export type ServiceAgreementAggregates = {
  readonly __typename: 'ServiceAgreementAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<ServiceAgreementAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<ServiceAgreementDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<ServiceAgreementMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<ServiceAgreementMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<ServiceAgreementStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<ServiceAgreementStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<ServiceAgreementSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<ServiceAgreementVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<ServiceAgreementVarianceSampleAggregates>;
};

export type ServiceAgreementAverageAggregates = {
  readonly __typename: 'ServiceAgreementAverageAggregates';
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Mean average of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

export type ServiceAgreementDistinctCountAggregates = {
  readonly __typename: 'ServiceAgreementDistinctCountAggregates';
  /** Distinct count of consumerAddress across the matching connection */
  readonly consumerAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of deploymentId across the matching connection */
  readonly deploymentId: Maybe<Scalars['BigInt']>;
  /** Distinct count of endTime across the matching connection */
  readonly endTime: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerAddress across the matching connection */
  readonly indexerAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigInt']>;
  /** Distinct count of period across the matching connection */
  readonly period: Maybe<Scalars['BigInt']>;
  /** Distinct count of planTemplateId across the matching connection */
  readonly planTemplateId: Maybe<Scalars['BigInt']>;
  /** Distinct count of startTime across the matching connection */
  readonly startTime: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `ServiceAgreement` object types. All fields are combined with a logical ‘and.’ */
export type ServiceAgreementFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<ServiceAgreementFilter>>;
  /** Filter by the object’s `consumerAddress` field. */
  readonly consumerAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `deploymentId` field. */
  readonly deploymentId: InputMaybe<StringFilter>;
  /** Filter by the object’s `endTime` field. */
  readonly endTime: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerAddress` field. */
  readonly indexerAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Filter by the object’s `lockedAmount` field. */
  readonly lockedAmount: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<ServiceAgreementFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<ServiceAgreementFilter>>;
  /** Filter by the object’s `period` field. */
  readonly period: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `planTemplateId` field. */
  readonly planTemplateId: InputMaybe<StringFilter>;
  /** Filter by the object’s `startTime` field. */
  readonly startTime: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Indexer` values, with data from `AcceptedOffer`. */
export type ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyConnection =
  {
    readonly __typename: 'ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<IndexerAggregates>;
    /** A list of edges which contains the `Indexer`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<IndexerAggregates>>;
    /** A list of `Indexer` objects. */
    readonly nodes: ReadonlyArray<Maybe<Indexer>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `Indexer` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `Indexer` values, with data from `AcceptedOffer`. */
export type ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<IndexersGroupBy>;
    having: InputMaybe<IndexersHavingInput>;
  };

/** A `Indexer` edge in the connection, with data from `AcceptedOffer`. */
export type ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyEdge = {
  readonly __typename: 'ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Indexer` at the end of the edge. */
  readonly node: Maybe<Indexer>;
};

/** A `Indexer` edge in the connection, with data from `AcceptedOffer`. */
export type ServiceAgreementIndexersByAcceptedOfferServiceAgreementIdAndIndexerIdManyToManyEdgeacceptedOffersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<AcceptedOfferFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
  };

export type ServiceAgreementMaxAggregates = {
  readonly __typename: 'ServiceAgreementMaxAggregates';
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Maximum of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

export type ServiceAgreementMinAggregates = {
  readonly __typename: 'ServiceAgreementMinAggregates';
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Minimum of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Offer` values, with data from `AcceptedOffer`. */
export type ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyConnection =
  {
    readonly __typename: 'ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyConnection';
    /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly aggregates: Maybe<OfferAggregates>;
    /** A list of edges which contains the `Offer`, info from the `AcceptedOffer`, and the cursor to aid in pagination. */
    readonly edges: ReadonlyArray<ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyEdge>;
    /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
    readonly groupedAggregates: Maybe<ReadonlyArray<OfferAggregates>>;
    /** A list of `Offer` objects. */
    readonly nodes: ReadonlyArray<Maybe<Offer>>;
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo;
    /** The count of *all* `Offer` you could get from the connection. */
    readonly totalCount: Scalars['Int'];
  };

/** A connection to a list of `Offer` values, with data from `AcceptedOffer`. */
export type ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyConnectiongroupedAggregatesArgs =
  {
    groupBy: ReadonlyArray<OffersGroupBy>;
    having: InputMaybe<OffersHavingInput>;
  };

/** A `Offer` edge in the connection, with data from `AcceptedOffer`. */
export type ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyEdge = {
  readonly __typename: 'ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AcceptedOffer`. */
  readonly acceptedOffers: AcceptedOffersConnection;
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Offer` at the end of the edge. */
  readonly node: Maybe<Offer>;
};

/** A `Offer` edge in the connection, with data from `AcceptedOffer`. */
export type ServiceAgreementOffersByAcceptedOfferServiceAgreementIdAndOfferIdManyToManyEdgeacceptedOffersArgs =
  {
    after: InputMaybe<Scalars['Cursor']>;
    before: InputMaybe<Scalars['Cursor']>;
    filter: InputMaybe<AcceptedOfferFilter>;
    first: InputMaybe<Scalars['Int']>;
    last: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ReadonlyArray<AcceptedOffersOrderBy>>;
  };

export type ServiceAgreementStddevPopulationAggregates = {
  readonly __typename: 'ServiceAgreementStddevPopulationAggregates';
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

export type ServiceAgreementStddevSampleAggregates = {
  readonly __typename: 'ServiceAgreementStddevSampleAggregates';
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

export type ServiceAgreementSumAggregates = {
  readonly __typename: 'ServiceAgreementSumAggregates';
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of lockedAmount across the matching connection */
  readonly lockedAmount: Scalars['BigFloat'];
  /** Sum of period across the matching connection */
  readonly period: Scalars['BigFloat'];
};

export type ServiceAgreementVariancePopulationAggregates = {
  readonly __typename: 'ServiceAgreementVariancePopulationAggregates';
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Population variance of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

export type ServiceAgreementVarianceSampleAggregates = {
  readonly __typename: 'ServiceAgreementVarianceSampleAggregates';
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of lockedAmount across the matching connection */
  readonly lockedAmount: Maybe<Scalars['BigFloat']>;
  /** Sample variance of period across the matching connection */
  readonly period: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `ServiceAgreement` values. */
export type ServiceAgreementsConnection = {
  readonly __typename: 'ServiceAgreementsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<ServiceAgreementAggregates>;
  /** A list of edges which contains the `ServiceAgreement` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ServiceAgreementsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<ServiceAgreementAggregates>>;
  /** A list of `ServiceAgreement` objects. */
  readonly nodes: ReadonlyArray<Maybe<ServiceAgreement>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `ServiceAgreement` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `ServiceAgreement` values. */
export type ServiceAgreementsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<ServiceAgreementsGroupBy>;
  having: InputMaybe<ServiceAgreementsHavingInput>;
};

/** A `ServiceAgreement` edge in the connection. */
export type ServiceAgreementsEdge = {
  readonly __typename: 'ServiceAgreementsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `ServiceAgreement` at the end of the edge. */
  readonly node: Maybe<ServiceAgreement>;
};

/** Grouping methods for `ServiceAgreement` for usage during aggregation. */
export enum ServiceAgreementsGroupBy {
  CONSUMER_ADDRESS = 'CONSUMER_ADDRESS',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DEPLOYMENT_ID = 'DEPLOYMENT_ID',
  END_TIME = 'END_TIME',
  END_TIME_TRUNCATED_TO_DAY = 'END_TIME_TRUNCATED_TO_DAY',
  END_TIME_TRUNCATED_TO_HOUR = 'END_TIME_TRUNCATED_TO_HOUR',
  INDEXER_ADDRESS = 'INDEXER_ADDRESS',
  LAST_EVENT = 'LAST_EVENT',
  LOCKED_AMOUNT = 'LOCKED_AMOUNT',
  PERIOD = 'PERIOD',
  PLAN_TEMPLATE_ID = 'PLAN_TEMPLATE_ID',
  START_TIME = 'START_TIME',
  START_TIME_TRUNCATED_TO_DAY = 'START_TIME_TRUNCATED_TO_DAY',
  START_TIME_TRUNCATED_TO_HOUR = 'START_TIME_TRUNCATED_TO_HOUR',
}

export type ServiceAgreementsHavingAverageInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingDistinctCountInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `ServiceAgreement` aggregates. */
export type ServiceAgreementsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<ServiceAgreementsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ServiceAgreementsHavingInput>>;
  readonly average: InputMaybe<ServiceAgreementsHavingAverageInput>;
  readonly distinctCount: InputMaybe<ServiceAgreementsHavingDistinctCountInput>;
  readonly max: InputMaybe<ServiceAgreementsHavingMaxInput>;
  readonly min: InputMaybe<ServiceAgreementsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<ServiceAgreementsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<ServiceAgreementsHavingStddevSampleInput>;
  readonly sum: InputMaybe<ServiceAgreementsHavingSumInput>;
  readonly variancePopulation: InputMaybe<ServiceAgreementsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<ServiceAgreementsHavingVarianceSampleInput>;
};

export type ServiceAgreementsHavingMaxInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingMinInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingStddevPopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingStddevSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingSumInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingVariancePopulationInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type ServiceAgreementsHavingVarianceSampleInput = {
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly endTime: InputMaybe<HavingDatetimeFilter>;
  readonly lockedAmount: InputMaybe<HavingBigfloatFilter>;
  readonly period: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `ServiceAgreement`. */
export enum ServiceAgreementsOrderBy {
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_AVERAGE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_AVERAGE_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_AVERAGE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_AVERAGE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_COUNT_ASC = 'ACCEPTED_OFFERS_COUNT_ASC',
  ACCEPTED_OFFERS_COUNT_DESC = 'ACCEPTED_OFFERS_COUNT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_OFFER_ID_DESC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_DISTINCT_COUNT_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MAX_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MAX_ID_ASC = 'ACCEPTED_OFFERS_MAX_ID_ASC',
  ACCEPTED_OFFERS_MAX_ID_DESC = 'ACCEPTED_OFFERS_MAX_ID_DESC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MAX_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MAX_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MAX_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MAX_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MAX_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_MIN_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_MIN_ID_ASC = 'ACCEPTED_OFFERS_MIN_ID_ASC',
  ACCEPTED_OFFERS_MIN_ID_DESC = 'ACCEPTED_OFFERS_MIN_ID_DESC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_MIN_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_MIN_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_ASC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_ASC',
  ACCEPTED_OFFERS_MIN_OFFER_ID_DESC = 'ACCEPTED_OFFERS_MIN_OFFER_ID_DESC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_MIN_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_STDDEV_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_SUM_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_SUM_ID_ASC = 'ACCEPTED_OFFERS_SUM_ID_ASC',
  ACCEPTED_OFFERS_SUM_ID_DESC = 'ACCEPTED_OFFERS_SUM_ID_DESC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_SUM_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_SUM_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_ASC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_ASC',
  ACCEPTED_OFFERS_SUM_OFFER_ID_DESC = 'ACCEPTED_OFFERS_SUM_OFFER_ID_DESC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_SUM_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_POPULATION_SERVICE_AGREEMENT_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_CREATED_BLOCK_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_INDEXER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_LAST_EVENT_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_OFFER_ID_DESC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_ASC',
  ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC = 'ACCEPTED_OFFERS_VARIANCE_SAMPLE_SERVICE_AGREEMENT_ID_DESC',
  CONSUMER_ADDRESS_ASC = 'CONSUMER_ADDRESS_ASC',
  CONSUMER_ADDRESS_DESC = 'CONSUMER_ADDRESS_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DEPLOYMENT_ID_ASC = 'DEPLOYMENT_ID_ASC',
  DEPLOYMENT_ID_DESC = 'DEPLOYMENT_ID_DESC',
  END_TIME_ASC = 'END_TIME_ASC',
  END_TIME_DESC = 'END_TIME_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ADDRESS_ASC = 'INDEXER_ADDRESS_ASC',
  INDEXER_ADDRESS_DESC = 'INDEXER_ADDRESS_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  LOCKED_AMOUNT_ASC = 'LOCKED_AMOUNT_ASC',
  LOCKED_AMOUNT_DESC = 'LOCKED_AMOUNT_DESC',
  NATURAL = 'NATURAL',
  PERIOD_ASC = 'PERIOD_ASC',
  PERIOD_DESC = 'PERIOD_DESC',
  PLAN_TEMPLATE_ID_ASC = 'PLAN_TEMPLATE_ID_ASC',
  PLAN_TEMPLATE_ID_DESC = 'PLAN_TEMPLATE_ID_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  START_TIME_ASC = 'START_TIME_ASC',
  START_TIME_DESC = 'START_TIME_DESC',
}

export type StateChannel = Node & {
  readonly __typename: 'StateChannel';
  readonly challengeAt: Scalars['Datetime'];
  readonly consumer: Scalars['String'];
  readonly deploymentId: Scalars['String'];
  readonly expirationAt: Scalars['Datetime'];
  readonly id: Scalars['String'];
  readonly indexer: Scalars['String'];
  readonly isFinal: Scalars['Boolean'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly spent: Scalars['BigFloat'];
  readonly startTime: Scalars['Datetime'];
  readonly status: ChannelStatus;
  readonly total: Scalars['BigFloat'];
};

export type StateChannelAggregates = {
  readonly __typename: 'StateChannelAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<StateChannelAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<StateChannelDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<StateChannelMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<StateChannelMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<StateChannelStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<StateChannelStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<StateChannelSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<StateChannelVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<StateChannelVarianceSampleAggregates>;
};

export type StateChannelAverageAggregates = {
  readonly __typename: 'StateChannelAverageAggregates';
  /** Mean average of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Mean average of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelDistinctCountAggregates = {
  readonly __typename: 'StateChannelDistinctCountAggregates';
  /** Distinct count of challengeAt across the matching connection */
  readonly challengeAt: Maybe<Scalars['BigInt']>;
  /** Distinct count of consumer across the matching connection */
  readonly consumer: Maybe<Scalars['BigInt']>;
  /** Distinct count of deploymentId across the matching connection */
  readonly deploymentId: Maybe<Scalars['BigInt']>;
  /** Distinct count of expirationAt across the matching connection */
  readonly expirationAt: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexer across the matching connection */
  readonly indexer: Maybe<Scalars['BigInt']>;
  /** Distinct count of isFinal across the matching connection */
  readonly isFinal: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigInt']>;
  /** Distinct count of startTime across the matching connection */
  readonly startTime: Maybe<Scalars['BigInt']>;
  /** Distinct count of status across the matching connection */
  readonly status: Maybe<Scalars['BigInt']>;
  /** Distinct count of total across the matching connection */
  readonly total: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `StateChannel` object types. All fields are combined with a logical ‘and.’ */
export type StateChannelFilter = {
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<StateChannelFilter>>;
  /** Filter by the object’s `challengeAt` field. */
  readonly challengeAt: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `consumer` field. */
  readonly consumer: InputMaybe<StringFilter>;
  /** Filter by the object’s `deploymentId` field. */
  readonly deploymentId: InputMaybe<StringFilter>;
  /** Filter by the object’s `expirationAt` field. */
  readonly expirationAt: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexer` field. */
  readonly indexer: InputMaybe<StringFilter>;
  /** Filter by the object’s `isFinal` field. */
  readonly isFinal: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<StateChannelFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<StateChannelFilter>>;
  /** Filter by the object’s `spent` field. */
  readonly spent: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `startTime` field. */
  readonly startTime: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  readonly status: InputMaybe<ChannelStatusFilter>;
  /** Filter by the object’s `total` field. */
  readonly total: InputMaybe<BigFloatFilter>;
};

export type StateChannelMaxAggregates = {
  readonly __typename: 'StateChannelMaxAggregates';
  /** Maximum of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Maximum of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelMinAggregates = {
  readonly __typename: 'StateChannelMinAggregates';
  /** Minimum of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Minimum of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelStddevPopulationAggregates = {
  readonly __typename: 'StateChannelStddevPopulationAggregates';
  /** Population standard deviation of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelStddevSampleAggregates = {
  readonly __typename: 'StateChannelStddevSampleAggregates';
  /** Sample standard deviation of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelSumAggregates = {
  readonly __typename: 'StateChannelSumAggregates';
  /** Sum of spent across the matching connection */
  readonly spent: Scalars['BigFloat'];
  /** Sum of total across the matching connection */
  readonly total: Scalars['BigFloat'];
};

export type StateChannelVariancePopulationAggregates = {
  readonly __typename: 'StateChannelVariancePopulationAggregates';
  /** Population variance of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Population variance of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

export type StateChannelVarianceSampleAggregates = {
  readonly __typename: 'StateChannelVarianceSampleAggregates';
  /** Sample variance of spent across the matching connection */
  readonly spent: Maybe<Scalars['BigFloat']>;
  /** Sample variance of total across the matching connection */
  readonly total: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `StateChannel` values. */
export type StateChannelsConnection = {
  readonly __typename: 'StateChannelsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<StateChannelAggregates>;
  /** A list of edges which contains the `StateChannel` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<StateChannelsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<StateChannelAggregates>>;
  /** A list of `StateChannel` objects. */
  readonly nodes: ReadonlyArray<Maybe<StateChannel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `StateChannel` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `StateChannel` values. */
export type StateChannelsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<StateChannelsGroupBy>;
  having: InputMaybe<StateChannelsHavingInput>;
};

/** A `StateChannel` edge in the connection. */
export type StateChannelsEdge = {
  readonly __typename: 'StateChannelsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `StateChannel` at the end of the edge. */
  readonly node: Maybe<StateChannel>;
};

/** Grouping methods for `StateChannel` for usage during aggregation. */
export enum StateChannelsGroupBy {
  CHALLENGE_AT = 'CHALLENGE_AT',
  CHALLENGE_AT_TRUNCATED_TO_DAY = 'CHALLENGE_AT_TRUNCATED_TO_DAY',
  CHALLENGE_AT_TRUNCATED_TO_HOUR = 'CHALLENGE_AT_TRUNCATED_TO_HOUR',
  CONSUMER = 'CONSUMER',
  DEPLOYMENT_ID = 'DEPLOYMENT_ID',
  EXPIRATION_AT = 'EXPIRATION_AT',
  EXPIRATION_AT_TRUNCATED_TO_DAY = 'EXPIRATION_AT_TRUNCATED_TO_DAY',
  EXPIRATION_AT_TRUNCATED_TO_HOUR = 'EXPIRATION_AT_TRUNCATED_TO_HOUR',
  INDEXER = 'INDEXER',
  IS_FINAL = 'IS_FINAL',
  LAST_EVENT = 'LAST_EVENT',
  SPENT = 'SPENT',
  START_TIME = 'START_TIME',
  START_TIME_TRUNCATED_TO_DAY = 'START_TIME_TRUNCATED_TO_DAY',
  START_TIME_TRUNCATED_TO_HOUR = 'START_TIME_TRUNCATED_TO_HOUR',
  STATUS = 'STATUS',
  TOTAL = 'TOTAL',
}

export type StateChannelsHavingAverageInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingDistinctCountInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `StateChannel` aggregates. */
export type StateChannelsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<StateChannelsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<StateChannelsHavingInput>>;
  readonly average: InputMaybe<StateChannelsHavingAverageInput>;
  readonly distinctCount: InputMaybe<StateChannelsHavingDistinctCountInput>;
  readonly max: InputMaybe<StateChannelsHavingMaxInput>;
  readonly min: InputMaybe<StateChannelsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<StateChannelsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<StateChannelsHavingStddevSampleInput>;
  readonly sum: InputMaybe<StateChannelsHavingSumInput>;
  readonly variancePopulation: InputMaybe<StateChannelsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<StateChannelsHavingVarianceSampleInput>;
};

export type StateChannelsHavingMaxInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingMinInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingStddevPopulationInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingStddevSampleInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingSumInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingVariancePopulationInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

export type StateChannelsHavingVarianceSampleInput = {
  readonly challengeAt: InputMaybe<HavingDatetimeFilter>;
  readonly expirationAt: InputMaybe<HavingDatetimeFilter>;
  readonly spent: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
  readonly total: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `StateChannel`. */
export enum StateChannelsOrderBy {
  CHALLENGE_AT_ASC = 'CHALLENGE_AT_ASC',
  CHALLENGE_AT_DESC = 'CHALLENGE_AT_DESC',
  CONSUMER_ASC = 'CONSUMER_ASC',
  CONSUMER_DESC = 'CONSUMER_DESC',
  DEPLOYMENT_ID_ASC = 'DEPLOYMENT_ID_ASC',
  DEPLOYMENT_ID_DESC = 'DEPLOYMENT_ID_DESC',
  EXPIRATION_AT_ASC = 'EXPIRATION_AT_ASC',
  EXPIRATION_AT_DESC = 'EXPIRATION_AT_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ASC = 'INDEXER_ASC',
  INDEXER_DESC = 'INDEXER_DESC',
  IS_FINAL_ASC = 'IS_FINAL_ASC',
  IS_FINAL_DESC = 'IS_FINAL_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  SPENT_ASC = 'SPENT_ASC',
  SPENT_DESC = 'SPENT_DESC',
  START_TIME_ASC = 'START_TIME_ASC',
  START_TIME_DESC = 'START_TIME_DESC',
  STATUS_ASC = 'STATUS_ASC',
  STATUS_DESC = 'STATUS_DESC',
  TOTAL_ASC = 'TOTAL_ASC',
  TOTAL_DESC = 'TOTAL_DESC',
}

export enum Status {
  INDEXING = 'INDEXING',
  READY = 'READY',
  TERMINATED = 'TERMINATED',
}

/** A filter to be used against Status fields. All fields are combined with a logical ‘and.’ */
export type StatusFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Status>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Status>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Status>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Status>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Status>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Status>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Status>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Status>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Status>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Status>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly distinctFromInsensitive: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  readonly endsWith: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  readonly endsWithInsensitive: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  readonly equalToInsensitive: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  readonly greaterThanInsensitive: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  readonly greaterThanOrEqualToInsensitive: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  readonly inInsensitive: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  readonly includes: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  readonly includesInsensitive: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  readonly lessThanInsensitive: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  readonly lessThanOrEqualToInsensitive: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly like: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly likeInsensitive: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly notDistinctFromInsensitive: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  readonly notEndsWith: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  readonly notEndsWithInsensitive: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  readonly notEqualToInsensitive: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  readonly notInInsensitive: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  readonly notIncludes: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  readonly notIncludesInsensitive: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLike: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLikeInsensitive: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  readonly notStartsWith: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  readonly notStartsWithInsensitive: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  readonly startsWith: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  readonly startsWithInsensitive: InputMaybe<Scalars['String']>;
};

export type TableEstimate = {
  readonly __typename: 'TableEstimate';
  readonly estimate: Maybe<Scalars['Int']>;
  readonly table: Maybe<Scalars['String']>;
};

export type UnclaimedReward = Node & {
  readonly __typename: 'UnclaimedReward';
  readonly amount: Scalars['BigFloat'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly delegatorAddress: Scalars['String'];
  readonly id: Scalars['String'];
  readonly indexerAddress: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

export type UnclaimedRewardAggregates = {
  readonly __typename: 'UnclaimedRewardAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<UnclaimedRewardAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<UnclaimedRewardDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<UnclaimedRewardMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<UnclaimedRewardMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<UnclaimedRewardStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<UnclaimedRewardStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<UnclaimedRewardSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<UnclaimedRewardVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<UnclaimedRewardVarianceSampleAggregates>;
};

export type UnclaimedRewardAverageAggregates = {
  readonly __typename: 'UnclaimedRewardAverageAggregates';
  /** Mean average of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type UnclaimedRewardDistinctCountAggregates = {
  readonly __typename: 'UnclaimedRewardDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of delegatorAddress across the matching connection */
  readonly delegatorAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexerAddress across the matching connection */
  readonly indexerAddress: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `UnclaimedReward` object types. All fields are combined with a logical ‘and.’ */
export type UnclaimedRewardFilter = {
  /** Filter by the object’s `amount` field. */
  readonly amount: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<UnclaimedRewardFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `delegatorAddress` field. */
  readonly delegatorAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexerAddress` field. */
  readonly indexerAddress: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<UnclaimedRewardFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<UnclaimedRewardFilter>>;
};

export type UnclaimedRewardMaxAggregates = {
  readonly __typename: 'UnclaimedRewardMaxAggregates';
  /** Maximum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type UnclaimedRewardMinAggregates = {
  readonly __typename: 'UnclaimedRewardMinAggregates';
  /** Minimum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
};

export type UnclaimedRewardStddevPopulationAggregates = {
  readonly __typename: 'UnclaimedRewardStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type UnclaimedRewardStddevSampleAggregates = {
  readonly __typename: 'UnclaimedRewardStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type UnclaimedRewardSumAggregates = {
  readonly __typename: 'UnclaimedRewardSumAggregates';
  /** Sum of amount across the matching connection */
  readonly amount: Scalars['BigFloat'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
};

export type UnclaimedRewardVariancePopulationAggregates = {
  readonly __typename: 'UnclaimedRewardVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

export type UnclaimedRewardVarianceSampleAggregates = {
  readonly __typename: 'UnclaimedRewardVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `UnclaimedReward` values. */
export type UnclaimedRewardsConnection = {
  readonly __typename: 'UnclaimedRewardsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<UnclaimedRewardAggregates>;
  /** A list of edges which contains the `UnclaimedReward` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<UnclaimedRewardsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<UnclaimedRewardAggregates>>;
  /** A list of `UnclaimedReward` objects. */
  readonly nodes: ReadonlyArray<Maybe<UnclaimedReward>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `UnclaimedReward` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `UnclaimedReward` values. */
export type UnclaimedRewardsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<UnclaimedRewardsGroupBy>;
  having: InputMaybe<UnclaimedRewardsHavingInput>;
};

/** A `UnclaimedReward` edge in the connection. */
export type UnclaimedRewardsEdge = {
  readonly __typename: 'UnclaimedRewardsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `UnclaimedReward` at the end of the edge. */
  readonly node: Maybe<UnclaimedReward>;
};

/** Grouping methods for `UnclaimedReward` for usage during aggregation. */
export enum UnclaimedRewardsGroupBy {
  AMOUNT = 'AMOUNT',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DELEGATOR_ADDRESS = 'DELEGATOR_ADDRESS',
  INDEXER_ADDRESS = 'INDEXER_ADDRESS',
  LAST_EVENT = 'LAST_EVENT',
}

export type UnclaimedRewardsHavingAverageInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingDistinctCountInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Conditions for `UnclaimedReward` aggregates. */
export type UnclaimedRewardsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<UnclaimedRewardsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<UnclaimedRewardsHavingInput>>;
  readonly average: InputMaybe<UnclaimedRewardsHavingAverageInput>;
  readonly distinctCount: InputMaybe<UnclaimedRewardsHavingDistinctCountInput>;
  readonly max: InputMaybe<UnclaimedRewardsHavingMaxInput>;
  readonly min: InputMaybe<UnclaimedRewardsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<UnclaimedRewardsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<UnclaimedRewardsHavingStddevSampleInput>;
  readonly sum: InputMaybe<UnclaimedRewardsHavingSumInput>;
  readonly variancePopulation: InputMaybe<UnclaimedRewardsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<UnclaimedRewardsHavingVarianceSampleInput>;
};

export type UnclaimedRewardsHavingMaxInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingMinInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingStddevPopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingStddevSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingSumInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingVariancePopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

export type UnclaimedRewardsHavingVarianceSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `UnclaimedReward`. */
export enum UnclaimedRewardsOrderBy {
  AMOUNT_ASC = 'AMOUNT_ASC',
  AMOUNT_DESC = 'AMOUNT_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATOR_ADDRESS_ASC = 'DELEGATOR_ADDRESS_ASC',
  DELEGATOR_ADDRESS_DESC = 'DELEGATOR_ADDRESS_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ADDRESS_ASC = 'INDEXER_ADDRESS_ASC',
  INDEXER_ADDRESS_DESC = 'INDEXER_ADDRESS_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
}

export enum WithdrawalStatus {
  CANCELLED = 'CANCELLED',
  CLAIMED = 'CLAIMED',
  ONGOING = 'ONGOING',
}

/** A filter to be used against WithdrawalStatus fields. All fields are combined with a logical ‘and.’ */
export type WithdrawalStatusFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom: InputMaybe<WithdrawalStatus>;
  /** Equal to the specified value. */
  readonly equalTo: InputMaybe<WithdrawalStatus>;
  /** Greater than the specified value. */
  readonly greaterThan: InputMaybe<WithdrawalStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo: InputMaybe<WithdrawalStatus>;
  /** Included in the specified list. */
  readonly in: InputMaybe<ReadonlyArray<WithdrawalStatus>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan: InputMaybe<WithdrawalStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo: InputMaybe<WithdrawalStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom: InputMaybe<WithdrawalStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo: InputMaybe<WithdrawalStatus>;
  /** Not included in the specified list. */
  readonly notIn: InputMaybe<ReadonlyArray<WithdrawalStatus>>;
};

export type Withdrawl = Node & {
  readonly __typename: 'Withdrawl';
  readonly amount: Scalars['BigFloat'];
  readonly createdBlock: Maybe<Scalars['Int']>;
  readonly delegator: Scalars['String'];
  readonly id: Scalars['String'];
  readonly index: Scalars['BigFloat'];
  readonly indexer: Scalars['String'];
  readonly lastEvent: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly startTime: Scalars['Datetime'];
  readonly status: WithdrawalStatus;
};

export type WithdrawlAggregates = {
  readonly __typename: 'WithdrawlAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly average: Maybe<WithdrawlAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly distinctCount: Maybe<WithdrawlDistinctCountAggregates>;
  readonly keys: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly max: Maybe<WithdrawlMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly min: Maybe<WithdrawlMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevPopulation: Maybe<WithdrawlStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly stddevSample: Maybe<WithdrawlStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly sum: Maybe<WithdrawlSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly variancePopulation: Maybe<WithdrawlVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly varianceSample: Maybe<WithdrawlVarianceSampleAggregates>;
};

export type WithdrawlAverageAggregates = {
  readonly __typename: 'WithdrawlAverageAggregates';
  /** Mean average of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Mean average of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlDistinctCountAggregates = {
  readonly __typename: 'WithdrawlDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigInt']>;
  /** Distinct count of delegator across the matching connection */
  readonly delegator: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  readonly id: Maybe<Scalars['BigInt']>;
  /** Distinct count of index across the matching connection */
  readonly index: Maybe<Scalars['BigInt']>;
  /** Distinct count of indexer across the matching connection */
  readonly indexer: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastEvent across the matching connection */
  readonly lastEvent: Maybe<Scalars['BigInt']>;
  /** Distinct count of startTime across the matching connection */
  readonly startTime: Maybe<Scalars['BigInt']>;
  /** Distinct count of status across the matching connection */
  readonly status: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Withdrawl` object types. All fields are combined with a logical ‘and.’ */
export type WithdrawlFilter = {
  /** Filter by the object’s `amount` field. */
  readonly amount: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  readonly and: InputMaybe<ReadonlyArray<WithdrawlFilter>>;
  /** Filter by the object’s `createdBlock` field. */
  readonly createdBlock: InputMaybe<IntFilter>;
  /** Filter by the object’s `delegator` field. */
  readonly delegator: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id: InputMaybe<StringFilter>;
  /** Filter by the object’s `index` field. */
  readonly index: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `indexer` field. */
  readonly indexer: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEvent` field. */
  readonly lastEvent: InputMaybe<StringFilter>;
  /** Negates the expression. */
  readonly not: InputMaybe<WithdrawlFilter>;
  /** Checks for any expressions in this list. */
  readonly or: InputMaybe<ReadonlyArray<WithdrawlFilter>>;
  /** Filter by the object’s `startTime` field. */
  readonly startTime: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  readonly status: InputMaybe<WithdrawalStatusFilter>;
};

export type WithdrawlMaxAggregates = {
  readonly __typename: 'WithdrawlMaxAggregates';
  /** Maximum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Maximum of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlMinAggregates = {
  readonly __typename: 'WithdrawlMinAggregates';
  /** Minimum of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['Int']>;
  /** Minimum of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlStddevPopulationAggregates = {
  readonly __typename: 'WithdrawlStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlStddevSampleAggregates = {
  readonly __typename: 'WithdrawlStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlSumAggregates = {
  readonly __typename: 'WithdrawlSumAggregates';
  /** Sum of amount across the matching connection */
  readonly amount: Scalars['BigFloat'];
  /** Sum of createdBlock across the matching connection */
  readonly createdBlock: Scalars['BigInt'];
  /** Sum of index across the matching connection */
  readonly index: Scalars['BigFloat'];
};

export type WithdrawlVariancePopulationAggregates = {
  readonly __typename: 'WithdrawlVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Population variance of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

export type WithdrawlVarianceSampleAggregates = {
  readonly __typename: 'WithdrawlVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  readonly amount: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdBlock across the matching connection */
  readonly createdBlock: Maybe<Scalars['BigFloat']>;
  /** Sample variance of index across the matching connection */
  readonly index: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Withdrawl` values. */
export type WithdrawlsConnection = {
  readonly __typename: 'WithdrawlsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly aggregates: Maybe<WithdrawlAggregates>;
  /** A list of edges which contains the `Withdrawl` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<WithdrawlsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  readonly groupedAggregates: Maybe<ReadonlyArray<WithdrawlAggregates>>;
  /** A list of `Withdrawl` objects. */
  readonly nodes: ReadonlyArray<Maybe<Withdrawl>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Withdrawl` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A connection to a list of `Withdrawl` values. */
export type WithdrawlsConnectiongroupedAggregatesArgs = {
  groupBy: ReadonlyArray<WithdrawlsGroupBy>;
  having: InputMaybe<WithdrawlsHavingInput>;
};

/** A `Withdrawl` edge in the connection. */
export type WithdrawlsEdge = {
  readonly __typename: 'WithdrawlsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Maybe<Scalars['Cursor']>;
  /** The `Withdrawl` at the end of the edge. */
  readonly node: Maybe<Withdrawl>;
};

/** Grouping methods for `Withdrawl` for usage during aggregation. */
export enum WithdrawlsGroupBy {
  AMOUNT = 'AMOUNT',
  CREATED_BLOCK = 'CREATED_BLOCK',
  DELEGATOR = 'DELEGATOR',
  INDEX = 'INDEX',
  INDEXER = 'INDEXER',
  LAST_EVENT = 'LAST_EVENT',
  START_TIME = 'START_TIME',
  START_TIME_TRUNCATED_TO_DAY = 'START_TIME_TRUNCATED_TO_DAY',
  START_TIME_TRUNCATED_TO_HOUR = 'START_TIME_TRUNCATED_TO_HOUR',
  STATUS = 'STATUS',
}

export type WithdrawlsHavingAverageInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingDistinctCountInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Withdrawl` aggregates. */
export type WithdrawlsHavingInput = {
  readonly AND: InputMaybe<ReadonlyArray<WithdrawlsHavingInput>>;
  readonly OR: InputMaybe<ReadonlyArray<WithdrawlsHavingInput>>;
  readonly average: InputMaybe<WithdrawlsHavingAverageInput>;
  readonly distinctCount: InputMaybe<WithdrawlsHavingDistinctCountInput>;
  readonly max: InputMaybe<WithdrawlsHavingMaxInput>;
  readonly min: InputMaybe<WithdrawlsHavingMinInput>;
  readonly stddevPopulation: InputMaybe<WithdrawlsHavingStddevPopulationInput>;
  readonly stddevSample: InputMaybe<WithdrawlsHavingStddevSampleInput>;
  readonly sum: InputMaybe<WithdrawlsHavingSumInput>;
  readonly variancePopulation: InputMaybe<WithdrawlsHavingVariancePopulationInput>;
  readonly varianceSample: InputMaybe<WithdrawlsHavingVarianceSampleInput>;
};

export type WithdrawlsHavingMaxInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingMinInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingStddevPopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingStddevSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingSumInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingVariancePopulationInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

export type WithdrawlsHavingVarianceSampleInput = {
  readonly amount: InputMaybe<HavingBigfloatFilter>;
  readonly createdBlock: InputMaybe<HavingIntFilter>;
  readonly index: InputMaybe<HavingBigfloatFilter>;
  readonly startTime: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `Withdrawl`. */
export enum WithdrawlsOrderBy {
  AMOUNT_ASC = 'AMOUNT_ASC',
  AMOUNT_DESC = 'AMOUNT_DESC',
  CREATED_BLOCK_ASC = 'CREATED_BLOCK_ASC',
  CREATED_BLOCK_DESC = 'CREATED_BLOCK_DESC',
  DELEGATOR_ASC = 'DELEGATOR_ASC',
  DELEGATOR_DESC = 'DELEGATOR_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  INDEXER_ASC = 'INDEXER_ASC',
  INDEXER_DESC = 'INDEXER_DESC',
  INDEX_ASC = 'INDEX_ASC',
  INDEX_DESC = 'INDEX_DESC',
  LAST_EVENT_ASC = 'LAST_EVENT_ASC',
  LAST_EVENT_DESC = 'LAST_EVENT_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  START_TIME_ASC = 'START_TIME_ASC',
  START_TIME_DESC = 'START_TIME_DESC',
  STATUS_ASC = 'STATUS_ASC',
  STATUS_DESC = 'STATUS_DESC',
}

export type _Metadata = {
  readonly __typename: '_Metadata';
  readonly chain: Maybe<Scalars['String']>;
  readonly dynamicDatasources: Maybe<Scalars['String']>;
  readonly genesisHash: Maybe<Scalars['String']>;
  readonly indexerHealthy: Maybe<Scalars['Boolean']>;
  readonly indexerNodeVersion: Maybe<Scalars['String']>;
  readonly lastProcessedHeight: Maybe<Scalars['Int']>;
  readonly lastProcessedTimestamp: Maybe<Scalars['Date']>;
  readonly queryNodeVersion: Maybe<Scalars['String']>;
  readonly rowCountEstimate: Maybe<ReadonlyArray<Maybe<TableEstimate>>>;
  readonly specName: Maybe<Scalars['String']>;
  readonly targetHeight: Maybe<Scalars['Int']>;
};

export type ServiceAgreementFieldsFragment = {
  readonly __typename: 'ServiceAgreement';
  readonly id: string;
  readonly deploymentId: string;
  readonly indexerAddress: string;
  readonly consumerAddress: string;
  readonly period: bigint | string;
  readonly lockedAmount: bigint | string;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly deployment: {
    readonly __typename: 'Deployment';
    readonly id: string;
    readonly version: string;
    readonly project: {
      readonly __typename: 'Project';
      readonly id: string;
      readonly metadata: string;
    } | null;
  } | null;
};

export type GetOngoingServiceAgreementsQueryVariables = Exact<{
  address: Scalars['String'];
  now: Scalars['Datetime'];
}>;

export type GetOngoingServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly version: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type GetExpiredServiceAgreementsQueryVariables = Exact<{
  address: Scalars['String'];
  now: Scalars['Datetime'];
}>;

export type GetExpiredServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly version: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type GetSpecificServiceAgreementsQueryVariables = Exact<{
  deploymentId: Scalars['String'];
  now: Scalars['Datetime'];
}>;

export type GetSpecificServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly version: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type GetIndexerDelegatorsQueryVariables = Exact<{
  id: Scalars['String'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetIndexerDelegatorsQuery = {
  readonly indexer: {
    readonly __typename: 'Indexer';
    readonly delegations: {
      readonly __typename: 'DelegationsConnection';
      readonly nodes: ReadonlyArray<{
        readonly __typename: 'Delegation';
        readonly delegatorId: string;
        readonly amount: any;
      } | null>;
    };
  } | null;
};

export type GetDelegationQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetDelegationQuery = {
  readonly delegation: { readonly __typename: 'Delegation'; readonly amount: any } | null;
};

export type GetAllDelegationsQueryVariables = Exact<{
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetAllDelegationsQuery = {
  readonly delegations: {
    readonly __typename: 'DelegationsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Delegation';
      readonly id: string;
      readonly delegatorId: string;
      readonly indexerId: string;
      readonly amount: any;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetDelegatorQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetDelegatorQuery = {
  readonly delegator: {
    readonly __typename: 'Delegator';
    readonly id: string;
    readonly totalDelegations: any;
  } | null;
};

export type GetDelegationsQueryVariables = Exact<{
  delegator: Scalars['String'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetDelegationsQuery = {
  readonly delegations: {
    readonly __typename: 'DelegationsConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Delegation';
      readonly id: string;
      readonly delegatorId: string;
      readonly indexerId: string;
      readonly amount: any;
      readonly indexer: {
        readonly __typename: 'Indexer';
        readonly metadata: string | null;
        readonly active: boolean;
      } | null;
    } | null>;
  } | null;
};

export type GetDeploymentQueryVariables = Exact<{
  deploymentId: Scalars['String'];
}>;

export type GetDeploymentQuery = {
  readonly deployment: {
    readonly __typename: 'Deployment';
    readonly id: string;
    readonly version: string;
    readonly project: {
      readonly __typename: 'Project';
      readonly id: string;
      readonly metadata: string;
    } | null;
  } | null;
};

export type DeploymentIndexerFieldsFragment = {
  readonly __typename: 'DeploymentIndexer';
  readonly id: string;
  readonly indexerId: string;
  readonly deploymentId: string;
  readonly blockHeight: bigint | string;
  readonly timestamp: Date | null;
  readonly status: Status;
  readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
};

export type GetDeploymentIndexersQueryVariables = Exact<{
  offset: InputMaybe<Scalars['Int']>;
  deploymentId: Scalars['String'];
}>;

export type GetDeploymentIndexersQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Status;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetDeploymentIndexerQueryVariables = Exact<{
  indexerAddress: Scalars['String'];
  deploymentId: Scalars['String'];
}>;

export type GetDeploymentIndexerQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Status;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetDeploymentIndexersByIndexerQueryVariables = Exact<{
  indexerAddress: Scalars['String'];
}>;

export type GetDeploymentIndexersByIndexerQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Status;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetAcceptedOffersQueryVariables = Exact<{
  address: Scalars['String'];
  offerId: Scalars['String'];
}>;

export type GetAcceptedOffersQuery = {
  readonly acceptedOffers: {
    readonly __typename: 'AcceptedOffersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'AcceptedOffer';
      readonly id: string;
    } | null>;
  } | null;
};

export type IndexerFieldsFragment = {
  readonly __typename: 'Indexer';
  readonly id: string;
  readonly metadata: string | null;
  readonly controller: string | null;
  readonly commission: any;
  readonly totalStake: any;
};

export type GetIndexerQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetIndexerQuery = {
  readonly indexer: {
    readonly __typename: 'Indexer';
    readonly id: string;
    readonly metadata: string | null;
    readonly controller: string | null;
    readonly commission: any;
    readonly totalStake: any;
  } | null;
};

export type GetIndexersQueryVariables = Exact<{
  offset: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<IndexersOrderBy>;
}>;

export type GetIndexersQuery = {
  readonly indexers: {
    readonly __typename: 'IndexersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Indexer';
      readonly id: string;
      readonly metadata: string | null;
      readonly controller: string | null;
      readonly commission: any;
      readonly totalStake: any;
    } | null>;
  } | null;
};

export type OfferFieldsFragment = {
  readonly __typename: 'Offer';
  readonly id: string;
  readonly consumer: string;
  readonly deposit: bigint | string;
  readonly minimumAcceptHeight: bigint | string;
  readonly expireDate: Date;
  readonly limit: number;
  readonly accepted: number;
  readonly reachLimit: boolean;
  readonly withdrawn: boolean;
  readonly deployment: {
    readonly __typename: 'Deployment';
    readonly id: string;
    readonly project: {
      readonly __typename: 'Project';
      readonly id: string;
      readonly metadata: string;
    } | null;
  } | null;
  readonly planTemplate: {
    readonly __typename: 'PlanTemplate';
    readonly id: string;
    readonly period: bigint | string;
    readonly dailyReqCap: bigint | string;
    readonly rateLimit: bigint | string;
  } | null;
};

export type GetOwnOpenOffersQueryVariables = Exact<{
  consumer: Scalars['String'];
  now: Scalars['Datetime'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetOwnOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetOwnFinishedOffersQueryVariables = Exact<{
  consumer: Scalars['String'];
  now: Scalars['Datetime'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetOwnFinishedOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetOwnExpiredOffersQueryVariables = Exact<{
  consumer: Scalars['String'];
  now: Scalars['Datetime'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetOwnExpiredOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetAllOpenOffersQueryVariables = Exact<{
  now: Scalars['Datetime'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetAllOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetSpecificOpenOffersQueryVariables = Exact<{
  deploymentId: Scalars['String'];
  now: Scalars['Datetime'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetSpecificOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type PlanTemplateFieldsFragment = {
  readonly __typename: 'PlanTemplate';
  readonly id: string;
  readonly period: bigint | string;
  readonly dailyReqCap: bigint | string;
  readonly rateLimit: bigint | string;
  readonly metadata: string | null;
  readonly active: boolean;
};

export type PlanFieldsFragment = {
  readonly __typename: 'Plan';
  readonly id: string;
  readonly active: boolean;
  readonly creator: string;
  readonly deploymentId: string | null;
  readonly price: bigint | string;
};

export type GetDeploymentPlansQueryVariables = Exact<{
  address: Scalars['String'];
  deploymentId: Scalars['String'];
}>;

export type GetDeploymentPlansQuery = {
  readonly plans: {
    readonly __typename: 'PlansConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Plan';
      readonly id: string;
      readonly active: boolean;
      readonly creator: string;
      readonly deploymentId: string | null;
      readonly price: bigint | string;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
        readonly metadata: string | null;
        readonly active: boolean;
      } | null;
    } | null>;
  } | null;
};

export type GetPlanTemplatesQueryVariables = Exact<{
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetPlanTemplatesQuery = {
  readonly planTemplates: {
    readonly __typename: 'PlanTemplatesConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'PlanTemplate';
      readonly id: string;
      readonly period: bigint | string;
      readonly dailyReqCap: bigint | string;
      readonly rateLimit: bigint | string;
      readonly metadata: string | null;
      readonly active: boolean;
    } | null>;
  } | null;
};

export type GetPlansQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetPlansQuery = {
  readonly plans: {
    readonly __typename: 'PlansConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Plan';
      readonly id: string;
      readonly active: boolean;
      readonly creator: string;
      readonly deploymentId: string | null;
      readonly price: bigint | string;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
        readonly metadata: string | null;
        readonly active: boolean;
      } | null;
    } | null>;
  } | null;
};

export type GetSpecificPlansQueryVariables = Exact<{
  address: InputMaybe<Scalars['String']>;
}>;

export type GetSpecificPlansQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
        readonly plans: {
          readonly __typename: 'PlansConnection';
          readonly nodes: ReadonlyArray<{
            readonly __typename: 'Plan';
            readonly id: string;
            readonly active: boolean;
            readonly creator: string;
            readonly deploymentId: string | null;
            readonly price: bigint | string;
            readonly planTemplate: {
              readonly __typename: 'PlanTemplate';
              readonly id: string;
              readonly period: bigint | string;
              readonly dailyReqCap: bigint | string;
              readonly rateLimit: bigint | string;
              readonly metadata: string | null;
              readonly active: boolean;
            } | null;
          } | null>;
        };
      } | null;
    } | null>;
  } | null;
};

export type ProjectFieldsFragment = {
  readonly __typename: 'Project';
  readonly id: string;
  readonly owner: string;
  readonly metadata: string;
  readonly currentVersion: string;
  readonly currentDeployment: string;
  readonly updatedTimestamp: Date;
  readonly createdTimestamp: Date;
};

export type GetProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetProjectQuery = {
  readonly project: {
    readonly __typename: 'Project';
    readonly id: string;
    readonly owner: string;
    readonly metadata: string;
    readonly currentVersion: string;
    readonly currentDeployment: string;
    readonly updatedTimestamp: Date;
    readonly createdTimestamp: Date;
  } | null;
};

export type GetProjectsQueryVariables = Exact<{
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetProjectsQuery = {
  readonly projects: {
    readonly __typename: 'ProjectsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Project';
      readonly id: string;
      readonly owner: string;
      readonly metadata: string;
      readonly currentVersion: string;
      readonly currentDeployment: string;
      readonly updatedTimestamp: Date;
      readonly createdTimestamp: Date;
    } | null>;
  } | null;
};

export type GetProjectDeploymentsQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;

export type GetProjectDeploymentsQuery = {
  readonly project: {
    readonly __typename: 'Project';
    readonly deployments: {
      readonly __typename: 'DeploymentsConnection';
      readonly nodes: ReadonlyArray<{
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly version: string;
        readonly createdTimestamp: Date;
      } | null>;
    };
  } | null;
};

export type GetWithdrawlsQueryVariables = Exact<{
  delegator: Scalars['String'];
  offset: InputMaybe<Scalars['Int']>;
}>;

export type GetWithdrawlsQuery = {
  readonly withdrawls: {
    readonly __typename: 'WithdrawlsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Withdrawl';
      readonly id: string;
      readonly index: bigint | string;
      readonly delegator: string;
      readonly indexer: string;
      readonly startTime: Date;
      readonly amount: bigint | string;
      readonly status: WithdrawalStatus;
    } | null>;
  } | null;
};

export type GetRewardsQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetRewardsQuery = {
  readonly rewards: {
    readonly __typename: 'RewardsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Reward';
      readonly id: string;
      readonly delegatorAddress: string;
      readonly indexerAddress: string;
      readonly amount: bigint | string;
      readonly claimedTime: Date;
    } | null>;
  } | null;
  readonly unclaimedRewards: {
    readonly __typename: 'UnclaimedRewardsConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'UnclaimedReward';
      readonly id: string;
      readonly delegatorAddress: string;
      readonly indexerAddress: string;
      readonly amount: bigint | string;
    } | null>;
  } | null;
};

export type GetIndexerRewardsQueryVariables = Exact<{
  address: Scalars['String'];
  era1: Scalars['String'];
  era2: Scalars['String'];
}>;

export type GetIndexerRewardsQuery = {
  readonly indexerRewards: {
    readonly __typename: 'IndexerRewardsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'IndexerReward';
      readonly id: string;
      readonly indexerId: string;
      readonly eraIdx: string;
      readonly amount: bigint | string;
    } | null>;
  } | null;
};
