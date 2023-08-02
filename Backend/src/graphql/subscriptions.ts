/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusLocatorStatus = /* GraphQL */ `
  subscription OnCreateBusLocatorStatus(
    $bbid: String
    $frequency: String
    $line: String
    $status: Boolean
  ) {
    onCreateBusLocatorStatus(
      bbid: $bbid
      frequency: $frequency
      line: $line
      status: $status
    ) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const onCreateBusStops = /* GraphQL */ `
  subscription OnCreateBusStops(
    $bsid: String
    $coordinate: [Int]
    $des: String
    $line: String
    $title: String
  ) {
    onCreateBusStops(
      bsid: $bsid
      coordinate: $coordinate
      des: $des
      line: $line
      title: $title
    ) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const onCreateBustracker = /* GraphQL */ `
  subscription OnCreateBustracker(
    $data: AWSJSON
    $timeStamp: String
    $uuid: Int
  ) {
    onCreateBustracker(data: $data, timeStamp: $timeStamp, uuid: $uuid) {
      data
      timeStamp
      uuid
    }
  }
`;
export const onCreateHeatMap = /* GraphQL */ `
  subscription OnCreateHeatMap(
    $heatMapData: HeatMapDataInput
    $hid: String
    $timeStamp: String
  ) {
    onCreateHeatMap(
      heatMapData: $heatMapData
      hid: $hid
      timeStamp: $timeStamp
    ) {
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
export const onCreateHotZone = /* GraphQL */ `
  subscription OnCreateHotZone(
    $hzid: String
    $lat: Float
    $long: Float
    $timeStamp: String
  ) {
    onCreateHotZone(
      hzid: $hzid
      lat: $lat
      long: $long
      timeStamp: $timeStamp
    ) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const onCreateListLineBusStops = /* GraphQL */ `
  subscription OnCreateListLineBusStops(
    $lid: String
    $line: String
    $lineData: AWSJSON
  ) {
    onCreateListLineBusStops(lid: $lid, line: $line, lineData: $lineData) {
      lid
      line
      lineData
    }
  }
`;
export const onCreateLocatorProgress = /* GraphQL */ `
  subscription OnCreateLocatorProgress(
    $isActive: Boolean
    $lid: String
    $lineID: String
    $progress: AWSJSON
  ) {
    onCreateLocatorProgress(
      isActive: $isActive
      lid: $lid
      lineID: $lineID
      progress: $progress
    ) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const onCreateLogBusTracker = /* GraphQL */ `
  subscription OnCreateLogBusTracker(
    $bsid: String
    $lat: String
    $llid: String
    $lng: String
    $timeStamp: String
  ) {
    onCreateLogBusTracker(
      bsid: $bsid
      lat: $lat
      llid: $llid
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const onCreateMangaDashboard = /* GraphQL */ `
  subscription OnCreateMangaDashboard(
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
    $umid: Int
  ) {
    onCreateMangaDashboard(
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
      umid: $umid
    ) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $client: String
    $created: Int
    $expired: Int
    $ip: String
    $sskey: String
  ) {
    onCreateSession(
      client: $client
      created: $created
      expired: $expired
      ip: $ip
      sskey: $sskey
    ) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const onCreateStatusAPI = /* GraphQL */ `
  subscription OnCreateStatusAPI(
    $apiid: String
    $des: String
    $isAvalible: Boolean
    $usedAll: Int
    $usedDay: Int
  ) {
    onCreateStatusAPI(
      apiid: $apiid
      des: $des
      isAvalible: $isAvalible
      usedAll: $usedAll
      usedDay: $usedDay
    ) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onCreateVirtualBusTracker = /* GraphQL */ `
  subscription OnCreateVirtualBusTracker(
    $bbid: String
    $lat: Float
    $lng: Float
    $timeStamp: String
  ) {
    onCreateVirtualBusTracker(
      bbid: $bbid
      lat: $lat
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
export const onDeleteBusLocatorStatus = /* GraphQL */ `
  subscription OnDeleteBusLocatorStatus(
    $bbid: String
    $frequency: String
    $line: String
    $status: Boolean
  ) {
    onDeleteBusLocatorStatus(
      bbid: $bbid
      frequency: $frequency
      line: $line
      status: $status
    ) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const onDeleteBusStops = /* GraphQL */ `
  subscription OnDeleteBusStops(
    $bsid: String
    $coordinate: [Int]
    $des: String
    $line: String
    $title: String
  ) {
    onDeleteBusStops(
      bsid: $bsid
      coordinate: $coordinate
      des: $des
      line: $line
      title: $title
    ) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const onDeleteBustracker = /* GraphQL */ `
  subscription OnDeleteBustracker(
    $data: AWSJSON
    $timeStamp: String
    $uuid: Int
  ) {
    onDeleteBustracker(data: $data, timeStamp: $timeStamp, uuid: $uuid) {
      data
      timeStamp
      uuid
    }
  }
`;
export const onDeleteHeatMap = /* GraphQL */ `
  subscription OnDeleteHeatMap(
    $heatMapData: HeatMapDataInput
    $hid: String
    $timeStamp: String
  ) {
    onDeleteHeatMap(
      heatMapData: $heatMapData
      hid: $hid
      timeStamp: $timeStamp
    ) {
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
export const onDeleteHotZone = /* GraphQL */ `
  subscription OnDeleteHotZone(
    $hzid: String
    $lat: Float
    $long: Float
    $timeStamp: String
  ) {
    onDeleteHotZone(
      hzid: $hzid
      lat: $lat
      long: $long
      timeStamp: $timeStamp
    ) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const onDeleteListLineBusStops = /* GraphQL */ `
  subscription OnDeleteListLineBusStops(
    $lid: String
    $line: String
    $lineData: AWSJSON
  ) {
    onDeleteListLineBusStops(lid: $lid, line: $line, lineData: $lineData) {
      lid
      line
      lineData
    }
  }
`;
export const onDeleteLocatorProgress = /* GraphQL */ `
  subscription OnDeleteLocatorProgress(
    $isActive: Boolean
    $lid: String
    $lineID: String
    $progress: AWSJSON
  ) {
    onDeleteLocatorProgress(
      isActive: $isActive
      lid: $lid
      lineID: $lineID
      progress: $progress
    ) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const onDeleteLogBusTracker = /* GraphQL */ `
  subscription OnDeleteLogBusTracker(
    $bsid: String
    $lat: String
    $llid: String
    $lng: String
    $timeStamp: String
  ) {
    onDeleteLogBusTracker(
      bsid: $bsid
      lat: $lat
      llid: $llid
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const onDeleteMangaDashboard = /* GraphQL */ `
  subscription OnDeleteMangaDashboard(
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
    $umid: Int
  ) {
    onDeleteMangaDashboard(
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
      umid: $umid
    ) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $client: String
    $created: Int
    $expired: Int
    $ip: String
    $sskey: String
  ) {
    onDeleteSession(
      client: $client
      created: $created
      expired: $expired
      ip: $ip
      sskey: $sskey
    ) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const onDeleteStatusAPI = /* GraphQL */ `
  subscription OnDeleteStatusAPI(
    $apiid: String
    $des: String
    $isAvalible: Boolean
    $usedAll: Int
    $usedDay: Int
  ) {
    onDeleteStatusAPI(
      apiid: $apiid
      des: $des
      isAvalible: $isAvalible
      usedAll: $usedAll
      usedDay: $usedDay
    ) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onDeleteVirtualBusTracker = /* GraphQL */ `
  subscription OnDeleteVirtualBusTracker(
    $bbid: String
    $lat: Float
    $lng: Float
    $timeStamp: String
  ) {
    onDeleteVirtualBusTracker(
      bbid: $bbid
      lat: $lat
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
export const onUpdateBusLocatorStatus = /* GraphQL */ `
  subscription OnUpdateBusLocatorStatus(
    $bbid: String
    $frequency: String
    $line: String
    $status: Boolean
  ) {
    onUpdateBusLocatorStatus(
      bbid: $bbid
      frequency: $frequency
      line: $line
      status: $status
    ) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const onUpdateBusStops = /* GraphQL */ `
  subscription OnUpdateBusStops(
    $bsid: String
    $coordinate: [Int]
    $des: String
    $line: String
    $title: String
  ) {
    onUpdateBusStops(
      bsid: $bsid
      coordinate: $coordinate
      des: $des
      line: $line
      title: $title
    ) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const onUpdateBustracker = /* GraphQL */ `
  subscription OnUpdateBustracker(
    $data: AWSJSON
    $timeStamp: String
    $uuid: Int
  ) {
    onUpdateBustracker(data: $data, timeStamp: $timeStamp, uuid: $uuid) {
      data
      timeStamp
      uuid
    }
  }
`;
export const onUpdateHeatMap = /* GraphQL */ `
  subscription OnUpdateHeatMap(
    $heatMapData: HeatMapDataInput
    $hid: String
    $timeStamp: String
  ) {
    onUpdateHeatMap(
      heatMapData: $heatMapData
      hid: $hid
      timeStamp: $timeStamp
    ) {
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
export const onUpdateHotZone = /* GraphQL */ `
  subscription OnUpdateHotZone(
    $hzid: String
    $lat: Float
    $long: Float
    $timeStamp: String
  ) {
    onUpdateHotZone(
      hzid: $hzid
      lat: $lat
      long: $long
      timeStamp: $timeStamp
    ) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const onUpdateListLineBusStops = /* GraphQL */ `
  subscription OnUpdateListLineBusStops(
    $lid: String
    $line: String
    $lineData: AWSJSON
  ) {
    onUpdateListLineBusStops(lid: $lid, line: $line, lineData: $lineData) {
      lid
      line
      lineData
    }
  }
`;
export const onUpdateLocatorProgress = /* GraphQL */ `
  subscription OnUpdateLocatorProgress(
    $isActive: Boolean
    $lid: String
    $lineID: String
    $progress: AWSJSON
  ) {
    onUpdateLocatorProgress(
      isActive: $isActive
      lid: $lid
      lineID: $lineID
      progress: $progress
    ) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const onUpdateLogBusTracker = /* GraphQL */ `
  subscription OnUpdateLogBusTracker(
    $bsid: String
    $lat: String
    $llid: String
    $lng: String
    $timeStamp: String
  ) {
    onUpdateLogBusTracker(
      bsid: $bsid
      lat: $lat
      llid: $llid
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const onUpdateMangaDashboard = /* GraphQL */ `
  subscription OnUpdateMangaDashboard(
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
    $umid: Int
  ) {
    onUpdateMangaDashboard(
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
      umid: $umid
    ) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $client: String
    $created: Int
    $expired: Int
    $ip: String
    $sskey: String
  ) {
    onUpdateSession(
      client: $client
      created: $created
      expired: $expired
      ip: $ip
      sskey: $sskey
    ) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const onUpdateStatusAPI = /* GraphQL */ `
  subscription OnUpdateStatusAPI(
    $apiid: String
    $des: String
    $isAvalible: Boolean
    $usedAll: Int
    $usedDay: Int
  ) {
    onUpdateStatusAPI(
      apiid: $apiid
      des: $des
      isAvalible: $isAvalible
      usedAll: $usedAll
      usedDay: $usedDay
    ) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onUpdateVirtualBusTracker = /* GraphQL */ `
  subscription OnUpdateVirtualBusTracker(
    $bbid: String
    $lat: Float
    $lng: Float
    $timeStamp: String
  ) {
    onUpdateVirtualBusTracker(
      bbid: $bbid
      lat: $lat
      lng: $lng
      timeStamp: $timeStamp
    ) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
