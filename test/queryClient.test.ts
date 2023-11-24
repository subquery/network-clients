// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient } from '@apollo/client/core';
import assert from 'assert';
import { constants } from 'ethers';
import { GraphqlQueryClient, NETWORK_CONFIGS } from '../packages/network-clients/src';
import {
  GetAcceptedOffers,
  GetAggregatesEraRewards,
  GetAggregatesEraRewardsByIndexer,
  GetAirdrops,
  GetAirdropsByAccount,
  GetAllDelegations,
  GetAllOpenOffers,
  GetConsumerClosedFlexPlans,
  GetConsumerOngoingFlexPlans,
  GetDashboard,
  GetDelegation,
  GetDelegator,
  GetDeployment,
  GetDeploymentIndexers,
  GetDeploymentIndexersByIndexer,
  GetDeploymentPlans,
  GetEraQuery,
  GetEraRewardsByIndexerAndPage,
  GetExpiredServiceAgreements,
  GetFilteredDelegations,
  GetIndexer,
  GetIndexerClosedFlexPlans,
  GetIndexerDelegators,
  GetIndexerOngoingFlexPlans,
  GetIndexerRewards,
  GetIndexerStakesByEras,
  GetIndexerStakesByIndexer,
  GetIndexerUnfinalisedPlans,
  GetIndexers,
  GetOngoingServiceAgreements,
  GetOrders,
  GetOwnExpiredOffers,
  GetOwnOpenOffers,
  GetPlanTemplates,
  GetPlans,
  GetProject,
  GetProjectDeployments,
  GetProjectOngoingServiceAgreements,
  GetProjects,
  GetRewards,
  GetSpecificOpenOffers,
  GetStateChannels,
  GetWithdrawls,
} from '../packages/network-query';

function deepAssert(obj: any) {
  Object.keys(obj).forEach((key) => {
    assert(obj[key] !== undefined, `field ${key} is undefined`);
    if (typeof obj[key] === 'object') deepAssert(obj[key]);
  });
}

describe('query client', () => {
  let client: ApolloClient<unknown>;
  const date: Date = new Date();

  const address1 = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';
  const address2 = '0xa40987037547C2cc5df0b06fFe52B7FdCCB7D4FC';
  const address3 = '0xf9e4E6307a3186991F153249294815228D3a4634';
  const projectId = 'QmNYsNZvM9XZuzkF3n6XcqFVxvMLfWYtEQHzszMFfNCkgt';
  const projectId2 = 'QmZGAZQ7e1oZgfuK4V29Fa5gveYK3G2zEwvUzTZKNvSBsm';
  const consumer = '0xD5d48b83389150FFaa0B897ffC88817622abce58';
  const pId = '0x01';

  const polkadotDictDeploymentId = 'QmSjjRjfjXXEfSUTheNwvWcBaH54pWoToTHPDsJRby955X';

  beforeAll(async () => {
    const config = NETWORK_CONFIGS.kepler;
    assert(config, 'network config not defined');
    client = new GraphqlQueryClient(config).networkClient;
  });

  it('can query indexer detail', async () => {
    const result = await client.query({
      query: GetIndexer,
      variables: { address: address1 },
    });
    assert(result, 'cannot request query GET_INDEXER');
  });

  // TODO: FIXME
  it.skip('can query indexer delegator', async () => {
    const result = await client.query({
      query: GetIndexerDelegators,
      variables: { id: address1 },
    });
    assert(result, 'cannot request query GET_INDEXER_DELEGATORS');
    deepAssert(result.data.indexer);
    expect(result.data.indexer).toBeTruthy();
  });

  // TODO: FIXME
  it.skip('can query Delegation detail', async () => {
    const result = await client.query({
      query: GetDelegation,
      variables: { id: `${address1}:${address1}` },
    });
    assert(result, 'cannot request query GET_DELEGATION');
    deepAssert(result.data.delegation);
  });

  // TODO: FIXME
  it.skip('can query filtered Delegation detail', async () => {
    const result = await client.query({
      query: GetFilteredDelegations,
      variables: { delegator: address1, filterIndexer: address1 },
    });
    assert(result, 'cannot request query GET_FILTERED_DELEGATION');
    deepAssert(result.data.delegation);
  });

  // TODO: FIXME
  it.skip('can query delegator detail', async () => {
    const result = await client.query({
      query: GetDelegator,
      variables: { address: address1 },
    });
    assert(result, 'cannot request query GET_DELEGATOR');
    deepAssert(result.data.delegator);
  });

  it('can query all delegations', async () => {
    const result = await client.query({
      query: GetAllDelegations,
      variables: {},
    });
    console.log('result:', result);
    assert(result, 'cannot request query GET_ALL_DELEGATIONS');
    deepAssert(result.data.delegations);
  });

  it('can query indexer agreements', async () => {
    const result = await client.query({
      query: GetOngoingServiceAgreements,
      variables: { address: address2, now: date },
    });
    assert(result, 'cannot request query GET_SERVICE_AGREEMENTS');
    expect(result.data.serviceAgreements).toBeTruthy();
  });

  it('can query expired agreements', async () => {
    const result = await client.query({
      query: GetExpiredServiceAgreements,
      variables: { address: address2, now: date },
    });
    assert(result, 'cannot request query GET_EXPIRED_SERVICE_AGREEMENTS');
    deepAssert(result.data.serviceAgreements);
  });

  it('can query project ongoing agreements', async () => {
    const result = await client.query({
      query: GetProjectOngoingServiceAgreements,
      variables: { deploymentId: 'Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4', now: date },
    });
    assert(result, 'cannot request query GET_SPECIFIC_SERVICE_AGREEMENTS');
    deepAssert(result.data.serviceAgreements);
    expect(result.data.serviceAgreements).toBeTruthy();
  });

  it('can query deployment by projectCid', async () => {
    const result = await client.query({
      query: GetDeployment,
      variables: { deploymentId: projectId },
    });
    assert(result, 'cannot request query GET_DEPLOYMENT');
    expect(result.data.deployment.id).toEqual(projectId);
  });

  it('can query deployment indexer', async () => {
    const result = await client.query({
      query: GetDeploymentIndexers,
      variables: { deploymentId: projectId },
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_INDEXERS');
  });

  it('can query GET_DEPLOYMENT_INDEXERS_WITH_INDEXER', async () => {
    const result = await client.query({
      query: GetDeploymentIndexersByIndexer,
      variables: { indexerAddress: address3 },
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_INDEXERS_WITH_INDEXER');
    expect(result.data.indexerDeployments).toBeTruthy();
  });

  it('can query get accepted offer', async () => {
    const result = await client.query({
      query: GetAcceptedOffers,
      variables: { address: address3, offerId: '1' },
    });
    assert(result, 'cannot request query GET_ACCEPTED_OFFERS');
    expect(result.data).toBeTruthy();
  });

  it('can query get indexers', async () => {
    const result = await client.query({
      query: GetIndexers,
    });
    assert(result, 'cannot request query GET_INDEXERS');
    expect(result.data.indexers).toBeTruthy();
  });

  it('can query get own offer', async () => {
    const result = await client.query({
      query: GetOwnOpenOffers,
      variables: { consumer: consumer, now: date },
    });
    assert(result, 'cannot request query GET_OWN_OPEN_OFFERS');
    expect(result.data).toBeTruthy();
  });

  it('can query get expired offer', async () => {
    const result = await client.query({
      query: GetOwnExpiredOffers,
      variables: { consumer: consumer, now: date },
    });
    assert(result, 'cannot request query GET_OWN_EXPIRED_OFFERS');
    expect(result.data.offers).toBeDefined();
  });

  it('can query get expired offer', async () => {
    const result = await client.query({
      query: GetOwnExpiredOffers,
      variables: { consumer: consumer, now: date },
    });
    assert(result, 'cannot request query GET_OWN_EXPIRED_OFFERS');
    expect(result.data.offers).toBeDefined();
  });

  it('can query get all open offer', async () => {
    const result = await client.query({
      query: GetAllOpenOffers,
      variables: { now: date },
    });
    assert(result, 'cannot request query GET_ALL_OPEN_OFFERS');
    expect(result.data.offers.nodes).toBeDefined();
  });

  it('can query get project open offer', async () => {
    const result = await client.query({
      query: GetSpecificOpenOffers,
      variables: { deploymentId: projectId2, now: date },
    });
    assert(result, 'cannot request query GET_SPECIFIC_OPEN_OFFERS');
    expect(result.data).toBeDefined();
  });

  it('can query get deployment plan', async () => {
    const result = await client.query({
      query: GetDeploymentPlans,
      variables: {
        deploymentId: 'QmQnhLMgV3SrXbunjgHjnfdw32BAHQS3nNhLWKpNjtFTSZ',
        address: address2,
      },
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_PLANS');
    expect(result.data.plans).toBeDefined();
  });

  it('can query get plan templates', async () => {
    const result = await client.query({
      query: GetPlanTemplates,
      variables: {},
    });
    assert(result, 'cannot request query GET_PLAN_TEMPLATES');
    expect(result.data.planTemplates).toBeDefined();
  });

  it('can query get plans', async () => {
    const result = await client.query({
      query: GetPlans,
      variables: { address: address2 },
    });
    assert(result, 'cannot request query GET_PLANS');
    expect(result.data.plans.nodes).toBeDefined();
  });

  it('can query get project', async () => {
    const result = await client.query({
      query: GetProject,
      variables: { id: pId },
    });
    assert(result, 'cannot request query GET_PROJECT');
    expect(result.data.project).toBeDefined();
  });

  it('can query get all projects', async () => {
    const result = await client.query({
      query: GetProjects,
      variables: {},
    });
    assert(result, 'cannot request query GET_PROJECTS');
    expect(result.data.projects).toBeTruthy();
  });

  it('can query get project deployment', async () => {
    const result = await client.query({
      query: GetProjectDeployments,
      variables: { projectId: pId },
    });
    assert(result, 'cannot request query GET_PROJECT_DEPLOYMENTS');
    expect(result.data.project.__typename).toEqual('Project');
  });

  // TODO: FIXME
  it.skip('can query get withdrawls', async () => {
    const result = await client.query({
      query: GetWithdrawls,
      variables: { delegator: address2 },
    });
    assert(result, 'cannot request query GET_WITHDRAWLS');
    expect(result.data.withdrawls).toBeTruthy();
    expect(result.data.withdrawls.__typename).toEqual('WithdrawlsConnection');
  });

  it('can query get rewards', async () => {
    const result = await client.query({
      query: GetRewards,
      variables: { address: address2 },
    });
    assert(result, 'cannot request query GET_REWARDS');
    expect(result.data.rewards).toBeTruthy();
    expect(result.data.unclaimedRewards.nodes).toBeTruthy();
    expect(result.data.unclaimedRewards.__typename).toEqual('UnclaimedRewardsConnection');
  });

  it('can query get indexer rewards', async () => {
    const result = await client.query({
      query: GetIndexerRewards,
      variables: { address: address2, era1: '10', era2: '100' },
    });
    assert(result, 'cannot request query GET_INDEXER_REWARDS');
    expect(result.data.indexerRewards).toBeTruthy();
    expect(result.data.indexerRewards.nodes).toBeTruthy();
    expect(result.data.indexerRewards.__typename).toEqual('IndexerRewardsConnection');
  });

  //STATE CHANNEL QUERY TESTS

  it('can query statechannels', async () => {
    const result = await client.query({
      query: GetStateChannels,
      variables: { status: 'OPEN' },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query consumer ongoing flex plans', async () => {
    const result = await client.query({
      query: GetConsumerOngoingFlexPlans,
      variables: {
        consumer: consumer,
        now: new Date(),
      },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query consumer closed flex plans', async () => {
    const result = await client.query({
      query: GetConsumerClosedFlexPlans,
      variables: {
        consumer: consumer,
        now: new Date(),
      },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query indexer ongoing flex plans', async () => {
    const result = await client.query({
      query: GetIndexerOngoingFlexPlans,
      variables: {
        indexer: address1,
        deploymentId: polkadotDictDeploymentId,
        now: new Date(),
      },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query indexer ongoing flex plans', async () => {
    const result = await client.query({
      query: GetIndexerClosedFlexPlans,
      variables: {
        indexer: address1,
        deploymentId: polkadotDictDeploymentId,
        now: new Date(),
      },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query indexer unfinalised plans', async () => {
    const result = await client.query({
      query: GetIndexerUnfinalisedPlans,
      variables: {
        indexer: address1,
        now: new Date(),
      },
    });

    expect(result.data.stateChannels).toBeTruthy();
  });

  it('can query dashboard', async () => {
    const result = await client.query({
      query: GetDashboard,
    });

    expect(result.data.indexers.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query indexer stakes', async () => {
    const result = await client.query({
      query: GetIndexerStakesByIndexer,
      variables: {
        indexerId: '0', // it's a includes condition.
      },
    });

    expect(result.data.indexerStakes.groupedAggregates).toBeTruthy();
  });

  it('can query indexer stakes by eras', async () => {
    const result = await client.query({
      query: GetIndexerStakesByEras,
      variables: {
        eraIds: ['0x01', '0x02', '0x03'],
      },
    });

    expect(result.data.indexerStakes.groupedAggregates).toBeTruthy();
    expect(result.data.indexerStakes.groupedAggregates[0].keys).toBeTruthy();
  });

  it('can query aggregates era rewards', async () => {
    const result = await client.query({
      query: GetAggregatesEraRewards,
      variables: {
        eraIds: ['0x01', '0x02', '0x03'],
      },
    });

    expect(result.data.eraRewards.groupedAggregates).toBeTruthy();
  });

  it('can query aggregates era rewards by indexers', async () => {
    const result = await client.query({
      query: GetAggregatesEraRewardsByIndexer,
      variables: {
        eraIds: ['0x01', '0x02', '0x03'],
        indexerId: address1,
      },
    });

    expect(result.data.eraRewards.groupedAggregates).toBeTruthy();
  });

  it('can query era rewards by indexers and page', async () => {
    const result = await client.query({
      query: GetEraRewardsByIndexerAndPage,
      variables: {
        delegatorId: address1,
      },
    });

    expect(result.data.eraRewards.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query orders', async () => {
    const result = await client.query({
      query: GetOrders,
      variables: {
        swapFrom: constants.AddressZero,
        now: new Date(),
      },
    });

    expect(result.data.orders.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query airdrops', async () => {
    const result = await client.query({
      query: GetAirdrops,
    });

    expect(result.data.airdrops.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query airdrops by account', async () => {
    const result = await client.query({
      query: GetAirdropsByAccount,
      variables: {
        account: constants.AddressZero,
      },
    });

    expect(result.data.airdropUsers.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query airdrops by account', async () => {
    const result = await client.query({
      query: GetAirdropsByAccount,
      variables: {
        account: constants.AddressZero,
      },
    });

    expect(result.data.airdropUsers.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('can query era stakes by account', async () => {
    const result = await client.query({
      query: GetEraQuery,
      variables: {
        account: constants.AddressZero,
      },
    });

    expect(result.data.eraStakes.groupedAggregates.length).toBeGreaterThanOrEqual(0);
  });
});
