/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      content
      _version
      _deleted
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      content
      _version
      _deleted
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      content
      _version
      _deleted
    }
  }
`;
export const onCreateMangaDashboard = /* GraphQL */ `
  subscription OnCreateMangaDashboard(
    $umid: Int
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
  ) {
    onCreateMangaDashboard(
      umid: $umid
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
    ) {
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
export const onUpdateMangaDashboard = /* GraphQL */ `
  subscription OnUpdateMangaDashboard(
    $umid: Int
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
  ) {
    onUpdateMangaDashboard(
      umid: $umid
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
    ) {
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
export const onDeleteMangaDashboard = /* GraphQL */ `
  subscription OnDeleteMangaDashboard(
    $umid: Int
    $access: Boolean
    $desciption: String
    $episode: Int
    $picture: String
  ) {
    onDeleteMangaDashboard(
      umid: $umid
      access: $access
      desciption: $desciption
      episode: $episode
      picture: $picture
    ) {
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
export const onCreateBustracker = /* GraphQL */ `
  subscription OnCreateBustracker(
    $uuid: Int
    $timeStamp: String
    $data: AWSJSON
  ) {
    onCreateBustracker(uuid: $uuid, timeStamp: $timeStamp, data: $data) {
      uuid
      timeStamp
      data
    }
  }
`;
export const onUpdateBustracker = /* GraphQL */ `
  subscription OnUpdateBustracker(
    $uuid: Int
    $timeStamp: String
    $data: AWSJSON
  ) {
    onUpdateBustracker(uuid: $uuid, timeStamp: $timeStamp, data: $data) {
      uuid
      timeStamp
      data
    }
  }
`;
export const onDeleteBustracker = /* GraphQL */ `
  subscription OnDeleteBustracker(
    $uuid: Int
    $timeStamp: String
    $data: AWSJSON
  ) {
    onDeleteBustracker(uuid: $uuid, timeStamp: $timeStamp, data: $data) {
      uuid
      timeStamp
      data
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $client: String
    $sskey: String
    $created: Int
    $expired: Int
    $ip: String
  ) {
    onCreateSession(
      client: $client
      sskey: $sskey
      created: $created
      expired: $expired
      ip: $ip
    ) {
      client
      sskey
      created
      expired
      ip
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $client: String
    $sskey: String
    $created: Int
    $expired: Int
    $ip: String
  ) {
    onUpdateSession(
      client: $client
      sskey: $sskey
      created: $created
      expired: $expired
      ip: $ip
    ) {
      client
      sskey
      created
      expired
      ip
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $client: String
    $sskey: String
    $created: Int
    $expired: Int
    $ip: String
  ) {
    onDeleteSession(
      client: $client
      sskey: $sskey
      created: $created
      expired: $expired
      ip: $ip
    ) {
      client
      sskey
      created
      expired
      ip
    }
  }
`;
