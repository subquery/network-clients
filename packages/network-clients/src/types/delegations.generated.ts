import * as Types from './base-types';

export type GetIndexerDelegatorsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
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

export type GetDelegationQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetDelegationQuery = {
  readonly delegation: { readonly __typename: 'Delegation'; readonly amount: any } | null;
};

export type GetAllDelegationsQueryVariables = Types.Exact<{
  offset: Types.InputMaybe<Types.Scalars['Int']>;
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

export type GetDelegatorQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;

export type GetDelegatorQuery = {
  readonly delegator: {
    readonly __typename: 'Delegator';
    readonly id: string;
    readonly totalDelegations: any;
  } | null;
};

export type GetDelegationsQueryVariables = Types.Exact<{
  delegator: Types.Scalars['String'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
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
