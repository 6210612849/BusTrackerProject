/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusStops = /* GraphQL */ `
  query GetBusStops($bsid: String!) {
    getBusStops(bsid: $bsid) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const getBustracker = /* GraphQL */ `
  query GetBustracker($uuid: Int!) {
    getBustracker(uuid: $uuid) {
      data
      timeStamp
      uuid
    }
  }
`;
export const getMangaDashboard = /* GraphQL */ `
  query GetMangaDashboard($umid: Int!) {
    getMangaDashboard(umid: $umid) {
      access
      desciption
      episode
      picture
      statusofmanga
      title
      umid
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      _deleted
      _version
      description
      id
      status
      test
      title
    }
  }
`;
export const listBusStops = /* GraphQL */ `
  query ListBusStops(
    $filter: TableBusStopsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusStops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bsid
        coordinate
        des
        line
        title
      }
      nextToken
    }
  }
`;
export const listBustrackers = /* GraphQL */ `
  query ListBustrackers(
    $filter: TableBustrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBustrackers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        data
        timeStamp
        uuid
      }
      nextToken
    }
  }
`;
export const listMangaDashboards = /* GraphQL */ `
  query ListMangaDashboards(
    $filter: TableMangaDashboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMangaDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        access
        desciption
        episode
        picture
        statusofmanga
        title
        umid
      }
      nextToken
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _version
        content
        id
      }
      nextToken
      startedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _version
        description
        id
        status
        test
        title
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncNotes(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _version
        content
        id
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncTasks(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _version
        description
        id
        status
        test
        title
      }
      nextToken
      startedAt
    }
  }
`;
