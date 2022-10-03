import * as Types from './base-types';

export type IndexerFieldsFragment = {
  readonly __typename: 'Indexer';
  readonly id: string;
  readonly metadata: string | null;
  readonly controller: string | null;
  readonly commission: any;
  readonly totalStake: any;
};

export type GetIndexerQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
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

export type GetIndexersQueryVariables = Types.Exact<{
  offset: Types.InputMaybe<Types.Scalars['Int']>;
  order?: Types.InputMaybe<Types.IndexersOrderBy>;
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
