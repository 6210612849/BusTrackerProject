/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      test
      _version
      _deleted
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
        id
        title
        description
        status
        test
        _version
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        status
        test
        _version
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      content
      _version
      _deleted
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
        id
        content
        _version
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        _version
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
export const getMangaDashboard = /* GraphQL */ `
  query GetMangaDashboard($umid: Int!) {
    getMangaDashboard(umid: $umid) {
      umid
      access
      desciption
      episode
      picture
      statusofmanga
      title
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
        umid
        access
        desciption
        episode
        picture
        statusofmanga
        title
      }
      nextToken
    }
  }
`;
export const getBustracker = /* GraphQL */ `
  query GetBustracker($uuid: Int!) {
    getBustracker(uuid: $uuid) {
      uuid
      timeStamp
      data
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
        uuid
        timeStamp
        data
      }
      nextToken
    }
  }
`;
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
export const getSession = /* GraphQL */ `
  query GetSession($sskey: String!, $client: String!) {
    getSession(sskey: $sskey, client: $client) {
      client
      sskey
      created
      expired
      ip
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: TableSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        client
        sskey
        created
        expired
        ip
      }
      nextToken
    }
  }
`;
