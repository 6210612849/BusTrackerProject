/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusLocatorStatus = /* GraphQL */ `
  mutation CreateBusLocatorStatus($input: CreateBusLocatorStatusInput!) {
    createBusLocatorStatus(input: $input) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const createBusStops = /* GraphQL */ `
  mutation CreateBusStops($input: CreateBusStopsInput!) {
    createBusStops(input: $input) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const createBustracker = /* GraphQL */ `
  mutation CreateBustracker($input: CreateBustrackerInput!) {
    createBustracker(input: $input) {
      data
      timeStamp
      uuid
    }
  }
`;
export const createHeatMap = /* GraphQL */ `
  mutation CreateHeatMap($input: CreateHeatMapInput!) {
    createHeatMap(input: $input) {
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
export const createHotZone = /* GraphQL */ `
  mutation CreateHotZone($input: CreateHotZoneInput!) {
    createHotZone(input: $input) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const createListLineBusStops = /* GraphQL */ `
  mutation CreateListLineBusStops($input: CreateListLineBusStopsInput!) {
    createListLineBusStops(input: $input) {
      lid
      line
      lineData
    }
  }
`;
export const createLocatorProgress = /* GraphQL */ `
  mutation CreateLocatorProgress($input: CreateLocatorProgressInput!) {
    createLocatorProgress(input: $input) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const createLogBusTracker = /* GraphQL */ `
  mutation CreateLogBusTracker($input: CreateLogBusTrackerInput!) {
    createLogBusTracker(input: $input) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const createMangaDashboard = /* GraphQL */ `
  mutation CreateMangaDashboard($input: CreateMangaDashboardInput!) {
    createMangaDashboard(input: $input) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $condition: ModelNoteConditionInput
    $input: CreateNoteInput!
  ) {
    createNote(condition: $condition, input: $input) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession($input: CreateSessionInput!) {
    createSession(input: $input) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const createStatusAPI = /* GraphQL */ `
  mutation CreateStatusAPI($input: CreateStatusAPIInput!) {
    createStatusAPI(input: $input) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $condition: ModelTaskConditionInput
    $input: CreateTaskInput!
  ) {
    createTask(condition: $condition, input: $input) {
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
export const createVirtualBusTracker = /* GraphQL */ `
  mutation CreateVirtualBusTracker($input: CreateVirtualBusTrackerInput!) {
    createVirtualBusTracker(input: $input) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
export const deleteBusLocatorStatus = /* GraphQL */ `
  mutation DeleteBusLocatorStatus($input: DeleteBusLocatorStatusInput!) {
    deleteBusLocatorStatus(input: $input) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const deleteBusStops = /* GraphQL */ `
  mutation DeleteBusStops($input: DeleteBusStopsInput!) {
    deleteBusStops(input: $input) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const deleteBustracker = /* GraphQL */ `
  mutation DeleteBustracker($input: DeleteBustrackerInput!) {
    deleteBustracker(input: $input) {
      data
      timeStamp
      uuid
    }
  }
`;
export const deleteHeatMap = /* GraphQL */ `
  mutation DeleteHeatMap($input: DeleteHeatMapInput!) {
    deleteHeatMap(input: $input) {
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
export const deleteHotZone = /* GraphQL */ `
  mutation DeleteHotZone($input: DeleteHotZoneInput!) {
    deleteHotZone(input: $input) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const deleteListLineBusStops = /* GraphQL */ `
  mutation DeleteListLineBusStops($input: DeleteListLineBusStopsInput!) {
    deleteListLineBusStops(input: $input) {
      lid
      line
      lineData
    }
  }
`;
export const deleteLocatorProgress = /* GraphQL */ `
  mutation DeleteLocatorProgress($input: DeleteLocatorProgressInput!) {
    deleteLocatorProgress(input: $input) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const deleteLogBusTracker = /* GraphQL */ `
  mutation DeleteLogBusTracker($input: DeleteLogBusTrackerInput!) {
    deleteLogBusTracker(input: $input) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const deleteMangaDashboard = /* GraphQL */ `
  mutation DeleteMangaDashboard($input: DeleteMangaDashboardInput!) {
    deleteMangaDashboard(input: $input) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $condition: ModelNoteConditionInput
    $input: DeleteNoteInput!
  ) {
    deleteNote(condition: $condition, input: $input) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession($input: DeleteSessionInput!) {
    deleteSession(input: $input) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const deleteStatusAPI = /* GraphQL */ `
  mutation DeleteStatusAPI($input: DeleteStatusAPIInput!) {
    deleteStatusAPI(input: $input) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $condition: ModelTaskConditionInput
    $input: DeleteTaskInput!
  ) {
    deleteTask(condition: $condition, input: $input) {
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
export const deleteVirtualBusTracker = /* GraphQL */ `
  mutation DeleteVirtualBusTracker($input: DeleteVirtualBusTrackerInput!) {
    deleteVirtualBusTracker(input: $input) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
export const updateBusLocatorStatus = /* GraphQL */ `
  mutation UpdateBusLocatorStatus($input: UpdateBusLocatorStatusInput!) {
    updateBusLocatorStatus(input: $input) {
      bbid
      frequency
      line
      status
    }
  }
`;
export const updateBusStops = /* GraphQL */ `
  mutation UpdateBusStops($input: UpdateBusStopsInput!) {
    updateBusStops(input: $input) {
      bsid
      coordinate
      des
      line
      title
    }
  }
`;
export const updateBustracker = /* GraphQL */ `
  mutation UpdateBustracker($input: UpdateBustrackerInput!) {
    updateBustracker(input: $input) {
      data
      timeStamp
      uuid
    }
  }
`;
export const updateHeatMap = /* GraphQL */ `
  mutation UpdateHeatMap($input: UpdateHeatMapInput!) {
    updateHeatMap(input: $input) {
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
export const updateHotZone = /* GraphQL */ `
  mutation UpdateHotZone($input: UpdateHotZoneInput!) {
    updateHotZone(input: $input) {
      hzid
      lat
      long
      timeStamp
    }
  }
`;
export const updateListLineBusStops = /* GraphQL */ `
  mutation UpdateListLineBusStops($input: UpdateListLineBusStopsInput!) {
    updateListLineBusStops(input: $input) {
      lid
      line
      lineData
    }
  }
`;
export const updateLocatorProgress = /* GraphQL */ `
  mutation UpdateLocatorProgress($input: UpdateLocatorProgressInput!) {
    updateLocatorProgress(input: $input) {
      isActive
      lid
      lineID
      progress
    }
  }
`;
export const updateLogBusTracker = /* GraphQL */ `
  mutation UpdateLogBusTracker($input: UpdateLogBusTrackerInput!) {
    updateLogBusTracker(input: $input) {
      bsid
      lat
      llid
      lng
      timeStamp
    }
  }
`;
export const updateMangaDashboard = /* GraphQL */ `
  mutation UpdateMangaDashboard($input: UpdateMangaDashboardInput!) {
    updateMangaDashboard(input: $input) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $condition: ModelNoteConditionInput
    $input: UpdateNoteInput!
  ) {
    updateNote(condition: $condition, input: $input) {
      _deleted
      _version
      content
      id
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession($input: UpdateSessionInput!) {
    updateSession(input: $input) {
      client
      created
      expired
      ip
      sskey
    }
  }
`;
export const updateStatusAPI = /* GraphQL */ `
  mutation UpdateStatusAPI($input: UpdateStatusAPIInput!) {
    updateStatusAPI(input: $input) {
      apiid
      des
      isAvalible
      usedAll
      usedDay
      usedMonth
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $condition: ModelTaskConditionInput
    $input: UpdateTaskInput!
  ) {
    updateTask(condition: $condition, input: $input) {
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
export const updateVirtualBusTracker = /* GraphQL */ `
  mutation UpdateVirtualBusTracker($input: UpdateVirtualBusTrackerInput!) {
    updateVirtualBusTracker(input: $input) {
      bbid
      lat
      lng
      timeStamp
    }
  }
`;
