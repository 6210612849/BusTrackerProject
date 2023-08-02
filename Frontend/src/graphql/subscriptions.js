/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
