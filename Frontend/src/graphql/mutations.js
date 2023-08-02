/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
