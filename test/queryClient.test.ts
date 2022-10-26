// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { GraphqlQueryClient } from '@subql/network-clients';
import { NETWORK_CONFIGS } from '@subql/network-clients';
import assert from 'assert';
import {
  GetDelegation,
  GetIndexer,
  GetIndexers,
  GetDelegator,
  GetIndexerDelegators
} from '../packages/network-query/src';
import {
  GetExpiredServiceAgreements,
  GetOngoingServiceAgreements,
  GetSpecificServiceAgreements
} from '../packages/network-query/src';
import {
  GetAcceptedOffers,
  GetDeployment,
  GetDeploymentIndexers,
  GetAllDelegations,
  GetDeploymentIndexersByIndexer
} from '../packages/network-query/src';
import {
  GetAllOpenOffers,
  GetOwnExpiredOffers,
  GetOwnOpenOffers, 
  GetSpecificOpenOffers
} from '../packages/network-query/src';
import { GetDeploymentPlans, GetPlanTemplates, GetPlans } from '../packages/network-query/src';
import { GetProject, GetProjectDeployments, GetProjects } from '../packages/network-query/src';
import { GetIndexerRewards, GetRewards, GetWithdrawls } from '../packages/network-query/src';

function deepAssert(obj: any){
  Object.keys(obj).forEach(key => {
    assert(obj[key] !== undefined, `field ${key} is undefined`);
    if (typeof obj[key] === 'object') deepAssert(obj[key]);
  })
}

describe('query client', () => {
  let client: GraphqlQueryClient;
  const date: Date = new Date();

  const address1='0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04'
  const address2='0xa40987037547C2cc5df0b06fFe52B7FdCCB7D4FC'
  const address3='0xf9e4E6307a3186991F153249294815228D3a4634'
  const projectId='Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4'
  const projectId2='QmPemHcmAJ6BRyV13FN91miLCHNtqXLLacsqYjSaTmbFmr'
  const consumer='0xD5d48b83389150FFaa0B897ffC88817622abce58'
  const pId='0x01'

  beforeAll(async () => {
    const config = NETWORK_CONFIGS.kepler;
    assert(config, 'network config not defined');
    client = new GraphqlQueryClient(config);
  }, 160000);

  it('can query indexer detail', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetIndexer,
      variables: { address:address1},
    });
    assert(result, 'cannot request query GET_INDEXER');
  }, 16000)

  it('can query indexer delegator', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetIndexerDelegators,
      variables: { id:address1 },
    });
    assert(result, 'cannot request query GET_INDEXER_DELEGATORS');
    deepAssert(result.data.indexer);
    expect(result.data.indexer).toBeTruthy()
  }, 16000)

  it('can query Delegation detail', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDelegation,
      variables: { id: `${address1}:${address1}` },
    });
    assert(result, 'cannot request query GET_DELEGATION');
    deepAssert(result.data.delegation);
  }, 16000)

  it('can query delegator detail', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDelegator,
      variables: { address:address1 },
    });
    assert(result, 'cannot request query GET_DELEGATOR');
    deepAssert(result.data.delegator);
  }, 16000)

  it.only('can query all delegations', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetAllDelegations,
      variables: { },
    });
    console.log('result:', result); 
    assert(result, 'cannot request query GET_ALL_DELEGATIONS');
    deepAssert(result.data.delegations);
  }, 16000)

  it('can query indexer agreements', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetOngoingServiceAgreements,
      variables: {address:address2,now:date},
    });
    assert(result, 'cannot request query GET_SERVICE_AGREEMENTS');
    expect(result.data.serviceAgreements).toBeTruthy()
  }, 16000)

  it('can query expired agreements', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetExpiredServiceAgreements,
      variables: {address:address2,now:date},
    });
    assert(result, 'cannot request query GET_EXPIRED_SERVICE_AGREEMENTS');
    deepAssert(result.data.serviceAgreements);
  }, 16000)

  it('can query project agreements', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetSpecificServiceAgreements,
      variables: {deploymentId:'Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4',now:date},
    });
    assert(result, 'cannot request query GET_SPECIFIC_SERVICE_AGREEMENTS');
    deepAssert(result.data.serviceAgreements);
    expect(result.data.serviceAgreements).toBeTruthy()
  }, 16000)

  it('can query deployment by projectCid', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDeployment,
      variables: {deploymentId:projectId},
    });
    assert(result, 'cannot request query GET_DEPLOYMENT');
    expect(result.data.deployment.id).toEqual(projectId)
  }, 16000)

  it('can query deployment indexer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDeploymentIndexers,
      variables: {deploymentId:projectId},
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_INDEXERS');
  }, 16000)

  it('can query GET_DEPLOYMENT_INDEXERS_WITH_INDEXER', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDeploymentIndexersByIndexer,
      variables: {indexerAddress:address3}
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_INDEXERS_WITH_INDEXER');
    expect(result.data.deploymentIndexers).toBeTruthy()
  }, 16000)

  it('can query get accepted offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetAcceptedOffers,
      variables: {address:address3,offerId:'1'},
    });
    assert(result, 'cannot request query GET_ACCEPTED_OFFERS');
    expect(result.data).toBeTruthy()
  }, 16000)

  it('can query get indexers', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetIndexers,
      variables: {},
    });
    assert(result, 'cannot request query GET_INDEXERS');
    expect(result.data.indexers).toBeTruthy()
  }, 16000)

  it('can query get own offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetOwnOpenOffers,
      variables: {consumer:consumer,now:date},
    });
    assert(result, 'cannot request query GET_OWN_OPEN_OFFERS');
    expect(result.data).toBeTruthy()
  }, 16000)

  it('can query get expired offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetOwnExpiredOffers,
      variables: {consumer:consumer,now:date},
    });
    assert(result, 'cannot request query GET_OWN_EXPIRED_OFFERS');
    expect(result.data.offers).toBeDefined()
  }, 16000)

  it('can query get expired offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetOwnExpiredOffers,
      variables: {consumer:consumer,now:date},
    });
    assert(result, 'cannot request query GET_OWN_EXPIRED_OFFERS');
    expect(result.data.offers).toBeDefined()
  }, 16000)

  it('can query get all open offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetAllOpenOffers,
      variables: {now:date},
    });
    assert(result, 'cannot request query GET_ALL_OPEN_OFFERS');
    expect(result.data.offers.nodes).toBeDefined()
  }, 16000)

  it('can query get project open offer', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetSpecificOpenOffers,
      variables: {deploymentId:projectId2,now:date},
    });
    assert(result, 'cannot request query GET_SPECIFIC_OPEN_OFFERS');
    expect(result.data).toBeDefined()
  }, 16000)

  it('can query get deployment plan', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetDeploymentPlans,
      variables: {deploymentId:'QmQnhLMgV3SrXbunjgHjnfdw32BAHQS3nNhLWKpNjtFTSZ',address:address2},
    });
    assert(result, 'cannot request query GET_DEPLOYMENT_PLANS');
    expect(result.data.plans).toBeDefined()
  }, 16000)

  it('can query get plan templates', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetPlanTemplates,
      variables: {},
    });
    assert(result, 'cannot request query GET_PLAN_TEMPLATES');
    expect(result.data.planTemplates).toBeDefined()
  }, 16000)

  it('can query get plans', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetPlans,
      variables: {address:address2},
    });
    assert(result, 'cannot request query GET_PLANS');
    expect(result.data.plans.nodes).toBeDefined()
  }, 16000)

  it('can query get project', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetProject,
      variables: {id:pId},
    });
    assert(result, 'cannot request query GET_PROJECT');
    expect(result.data.project).toBeDefined()
  }, 16000)

  it('can query get all projects', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetProjects,
      variables: {},
    });
    assert(result, 'cannot request query GET_PROJECTS');
    expect(result.data.projects).toBeTruthy()
  }, 16000)

  it('can query get project deployment', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetProjectDeployments,
      variables: {projectId:pId},
    });
    assert(result, 'cannot request query GET_PROJECT_DEPLOYMENTS');
    expect(result.data.project.__typename).toEqual('Project')
  }, 16000)

  it('can query get withdrawls', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetWithdrawls,
      variables: {delegator:address2},
    });
    assert(result, 'cannot request query GET_WITHDRAWLS');
    expect(result.data.withdrawls).toBeTruthy()
    expect(result.data.withdrawls.__typename).toEqual('WithdrawlsConnection')
  }, 16000)

  it('can query get rewards', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetRewards,
      variables: {address:address2},
    });
    assert(result, 'cannot request query GET_REWARDS');
    expect(result.data.rewards).toBeTruthy()
    expect(result.data.unclaimedRewards.nodes).toBeTruthy()
    expect(result.data.unclaimedRewards.__typename).toEqual('UnclaimedRewardsConnection')
  }, 16000)

  it('can query get indexer rewards', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GetIndexerRewards,
      variables: {address:address2,era1:'10',era2:'100'},
    });
    assert(result, 'cannot request query GET_INDEXER_REWARDS');
    expect(result.data.indexerRewards).toBeTruthy()
    expect(result.data.indexerRewards.nodes).toBeTruthy()
    expect(result.data.indexerRewards.__typename).toEqual('IndexerRewardsConnection')
  }, 16000)
});
