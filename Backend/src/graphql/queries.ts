/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusLocatorStatus = /* GraphQL */ `
  query GetBusLocatorStatus($bbid: String!) {
    getBusLocatorStatus(bbid: $bbid) {
      bbid
      frequency
      line
      status
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
export const getBustracker = /* GraphQL */ `
  query GetBustracker($uuid: Int!) {
    getBustracker(uuid: $uuid) {
      data
      timeStamp
      uuid
    }
  }
`;
export const getHeatMap = /* GraphQL */ `
  query GetHeatMap($hid: String!) {
    getHeatMap(hid: $hid) {
      heatMapData {
        lat
        lng
        weight
      }
      hid
      timeStamp
    }
  }
`;
export const getHotZone = /* GraphQL */ `
  query GetHotZone($hzid: String!) {
    getHotZone(hzid: $hzid) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const getListLineBusStops = /* GraphQL */ `
  query GetListLineBusStops($lid: String!) {
    getListLineBusStops(lid: $lid) {
      lid
      line
      lineData
    }
  }
`;
export const getLocatorProgress = /* GraphQL */ `
  query GetLocatorProgress($lid: String!) {
    getLocatorProgress(lid: $lid) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const getLogBusTracker = /* GraphQL */ `
  query GetLogBusTracker($llid: String!) {
    getLogBusTracker(llid: $llid) {
      bsid
      lat
      llid
      lng
      timeStamp
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
export const getSession = /* GraphQL */ `
  query GetSession($client: String!, $sskey: String!) {
    getSession(client: $client, sskey: $sskey) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const getStatusAPI = /* GraphQL */ `
  query GetStatusAPI($apiid: String!) {
    getStatusAPI(apiid: $apiid) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
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
export const getVirtualBusTracker = /* GraphQL */ `
  query GetVirtualBusTracker($bbid: String!, $timeStamp: String!) {
    getVirtualBusTracker(bbid: $bbid, timeStamp: $timeStamp) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
export const listBusLocatorStatuses = /* GraphQL */ `
  query ListBusLocatorStatuses(
    $filter: TableBusLocatorStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusLocatorStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bbid
        frequency
        line
        status
      }
      nextToken
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
export const listHeatMaps = /* GraphQL */ `
  query ListHeatMaps(
    $filter: TableHeatMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeatMaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        hid
        timeStamp
      }
      nextToken
    }
  }
`;
export const listHotZones = /* GraphQL */ `
  query ListHotZones(
    $filter: TableHotZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        hzid
        lat
        long
        timeStamp
      }
      nextToken
    }
  }
`;
export const listListLineBusStops = /* GraphQL */ `
  query ListListLineBusStops(
    $filter: TableListLineBusStopsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListLineBusStops(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        lid
        line
        lineData
      }
      nextToken
    }
  }
`;
export const listLocatorProgresses = /* GraphQL */ `
  query ListLocatorProgresses(
    $filter: TableLocatorProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocatorProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        isActive
        lid
        lineID
        progress
      }
      nextToken
    }
  }
`;
export const listLogBusTrackers = /* GraphQL */ `
  query ListLogBusTrackers(
    $filter: TableLogBusTrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogBusTrackers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bsid
        lat
        llid
        lng
        timeStamp
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: TableSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        client
        created
        expired
        ip
        sskey
      }
      nextToken
    }
  }
`;
export const listStatusAPIS = /* GraphQL */ `
  query ListStatusAPIS(
    $filter: TableStatusAPIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatusAPIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        apiid
        des
        isAvalible
        usedAll
        usedDay
        usedMonth
      }
      nextToken
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
export const listVirtualBusTrackers = /* GraphQL */ `
  query ListVirtualBusTrackers(
    $filter: TableVirtualBusTrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVirtualBusTrackers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bbid
        lat
        lng
        timeStamp
      }
      nextToken
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
