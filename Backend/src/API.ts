/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusLocatorStatusInput = {
  bbid: string,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type BusLocatorStatus = {
  __typename: "BusLocatorStatus",
  bbid: string,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type CreateBusStopsInput = {
  bsid: string,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type BusStops = {
  __typename: "BusStops",
  bsid: string,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type CreateBustrackerInput = {
  data?: string | null,
  timeStamp?: string | null,
  uuid: number,
};

export type Bustracker = {
  __typename: "Bustracker",
  data?: string | null,
  timeStamp?: string | null,
  uuid: number,
};

export type CreateHeatMapInput = {
  heatMapData?: Array< HeatMapDataInput | null > | null,
  hid: string,
  timeStamp?: string | null,
};

export type HeatMapDataInput = {
  lat?: string | null,
  lng?: string | null,
  weight?: string | null,
};

export type HeatMap = {
  __typename: "HeatMap",
  heatMapData?:  Array<HeatMapData | null > | null,
  hid: string,
  timeStamp?: string | null,
};

export type HeatMapData = {
  __typename: "HeatMapData",
  lat?: string | null,
  lng?: string | null,
  weight?: string | null,
};

export type CreateHotZoneInput = {
  hzid: string,
  lat: number,
  long: number,
  timeStamp: string,
};

export type HotZone = {
  __typename: "HotZone",
  hzid: string,
  lat: number,
  long: number,
  timeStamp: string,
};

export type CreateListLineBusStopsInput = {
  lid: string,
  line?: string | null,
  lineData?: string | null,
};

export type ListLineBusStops = {
  __typename: "ListLineBusStops",
  lid: string,
  line?: string | null,
  lineData?: string | null,
};

export type CreateLocatorProgressInput = {
  isActive?: boolean | null,
  lid: string,
  lineID?: string | null,
  progress?: string | null,
};

export type LocatorProgress = {
  __typename: "LocatorProgress",
  isActive?: boolean | null,
  lid: string,
  lineID?: string | null,
  progress?: string | null,
};

export type CreateLogBusTrackerInput = {
  bsid?: string | null,
  lat?: string | null,
  llid: string,
  lng?: string | null,
  timeStamp?: string | null,
};

export type LogBusTracker = {
  __typename: "LogBusTracker",
  bsid?: string | null,
  lat?: string | null,
  llid: string,
  lng?: string | null,
  timeStamp?: string | null,
};

export type CreateMangaDashboardInput = {
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  statusofmanga?: string | null,
  title?: string | null,
  umid: number,
};

export type MangaDashboard = {
  __typename: "MangaDashboard",
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  statusofmanga?: string | null,
  title?: string | null,
  umid: number,
};

export type ModelNoteConditionInput = {
  and?: Array< ModelNoteConditionInput | null > | null,
  content?: ModelStringInput | null,
  not?: ModelNoteConditionInput | null,
  or?: Array< ModelNoteConditionInput | null > | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreateNoteInput = {
  _version?: number | null,
  content: string,
  id?: string | null,
};

export type Note = {
  __typename: "Note",
  _deleted?: boolean | null,
  _version: number,
  content: string,
  id: string,
};

export type CreateSessionInput = {
  client: string,
  created: number,
  expired: number,
  ip?: string | null,
  sskey: string,
};

export type Session = {
  __typename: "Session",
  client: string,
  created: number,
  expired: number,
  ip?: string | null,
  sskey: string,
};

export type CreateStatusAPIInput = {
  apiid: string,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
  usedMonth?: number | null,
};

export type StatusAPI = {
  __typename: "StatusAPI",
  apiid: string,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
  usedMonth?: number | null,
};

export type ModelTaskConditionInput = {
  and?: Array< ModelTaskConditionInput | null > | null,
  description?: ModelStringInput | null,
  not?: ModelTaskConditionInput | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  status?: ModelStringInput | null,
  test?: ModelStringInput | null,
  title?: ModelStringInput | null,
};

export type CreateTaskInput = {
  _version?: number | null,
  desciption?: string | null,
  id?: string | null,
  status?: string | null,
  test: string,
  title: string,
};

export type Task = {
  __typename: "Task",
  _deleted?: boolean | null,
  _version: number,
  description?: string | null,
  id: string,
  status?: string | null,
  test: string,
  title: string,
};

export type CreateVirtualBusTrackerInput = {
  bbid: string,
  lat?: number | null,
  lng?: number | null,
  timeStamp: string,
};

export type VirtualBusTracker = {
  __typename: "VirtualBusTracker",
  bbid: string,
  lat?: number | null,
  lng?: number | null,
  timeStamp: string,
};

export type DeleteBusLocatorStatusInput = {
  bbid: string,
};

export type DeleteBusStopsInput = {
  bsid: string,
};

export type DeleteBustrackerInput = {
  uuid: number,
};

export type DeleteHeatMapInput = {
  hid: string,
};

export type DeleteHotZoneInput = {
  hzid: string,
};

export type DeleteListLineBusStopsInput = {
  lid: string,
};

export type DeleteLocatorProgressInput = {
  lid: string,
};

export type DeleteLogBusTrackerInput = {
  llid: string,
};

export type DeleteMangaDashboardInput = {
  umid: number,
};

export type DeleteNoteInput = {
  _version?: number | null,
  id: string,
};

export type DeleteSessionInput = {
  client: string,
  sskey: string,
};

export type DeleteStatusAPIInput = {
  apiid: string,
};

export type DeleteTaskInput = {
  _version?: number | null,
  id: string,
};

export type DeleteVirtualBusTrackerInput = {
  bbid: string,
  timeStamp: string,
};

export type UpdateBusLocatorStatusInput = {
  bbid: string,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type UpdateBusStopsInput = {
  bsid: string,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type UpdateBustrackerInput = {
  data?: string | null,
  timeStamp?: string | null,
  uuid: number,
};

export type UpdateHeatMapInput = {
  heatMapData?: string | null,
  hid: string,
  timeStamp?: string | null,
};

export type UpdateHotZoneInput = {
  hzid: string,
  lat?: number | null,
  long?: number | null,
  timeStamp?: string | null,
};

export type UpdateListLineBusStopsInput = {
  lid: string,
  line?: string | null,
  lineData?: string | null,
};

export type UpdateLocatorProgressInput = {
  isActive?: boolean | null,
  lid: string,
  lineID?: string | null,
  progress?: string | null,
};

export type UpdateLogBusTrackerInput = {
  bsid?: string | null,
  lat?: string | null,
  llid: string,
  lng?: string | null,
  timeStamp?: string | null,
};

export type UpdateMangaDashboardInput = {
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  statusofmanga?: string | null,
  title?: string | null,
  umid: number,
};

export type UpdateNoteInput = {
  _version?: number | null,
  content?: string | null,
  id: string,
};

export type UpdateSessionInput = {
  client: string,
  created?: number | null,
  expired?: number | null,
  ip?: string | null,
  sskey: string,
};

export type UpdateStatusAPIInput = {
  apiid: string,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
  usedMonth?: number | null,
};

export type UpdateTaskInput = {
  _version?: number | null,
  description?: string | null,
  id: string,
  status?: string | null,
  test?: string | null,
  title?: string | null,
};

export type UpdateVirtualBusTrackerInput = {
  bbid: string,
  lat?: number | null,
  lng?: number | null,
  timeStamp: string,
};

export type TableBusLocatorStatusFilterInput = {
  bbid?: TableStringFilterInput | null,
  frequency?: TableStringFilterInput | null,
  line?: TableStringFilterInput | null,
  status?: TableBooleanFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type BusLocatorStatusConnection = {
  __typename: "BusLocatorStatusConnection",
  items?:  Array<BusLocatorStatus | null > | null,
  nextToken?: string | null,
};

export type TableBusStopsFilterInput = {
  bsid?: TableStringFilterInput | null,
  coordinate?: TableIntFilterInput | null,
  des?: TableStringFilterInput | null,
  line?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  between?: Array< number | null > | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type BusStopsConnection = {
  __typename: "BusStopsConnection",
  items?:  Array<BusStops | null > | null,
  nextToken?: string | null,
};

export type TableBustrackerFilterInput = {
  timeStamp?: TableStringFilterInput | null,
  uuid?: TableIntFilterInput | null,
};

export type BustrackerConnection = {
  __typename: "BustrackerConnection",
  items?:  Array<Bustracker | null > | null,
  nextToken?: string | null,
};

export type TableHeatMapFilterInput = {
  heatMapData?: TableStringFilterInput | null,
  hid?: TableStringFilterInput | null,
  timeStamp?: TableStringFilterInput | null,
};

export type HeatMapConnection = {
  __typename: "HeatMapConnection",
  items?:  Array<HeatMap | null > | null,
  nextToken?: string | null,
};

export type TableHotZoneFilterInput = {
  hzid?: TableStringFilterInput | null,
  lat?: TableFloatFilterInput | null,
  long?: TableFloatFilterInput | null,
  timeStamp?: TableStringFilterInput | null,
};

export type TableFloatFilterInput = {
  between?: Array< number | null > | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type HotZoneConnection = {
  __typename: "HotZoneConnection",
  items?:  Array<HotZone | null > | null,
  nextToken?: string | null,
};

export type TableListLineBusStopsFilterInput = {
  lid?: TableStringFilterInput | null,
  line?: TableStringFilterInput | null,
  lineData?: TableStringFilterInput | null,
};

export type ListLineBusStopsConnection = {
  __typename: "ListLineBusStopsConnection",
  items?:  Array<ListLineBusStops | null > | null,
  nextToken?: string | null,
};

export type TableLocatorProgressFilterInput = {
  isActive?: TableBooleanFilterInput | null,
  lid?: TableStringFilterInput | null,
  lineID?: TableStringFilterInput | null,
};

export type LocatorProgressConnection = {
  __typename: "LocatorProgressConnection",
  items?:  Array<LocatorProgress | null > | null,
  nextToken?: string | null,
};

export type TableLogBusTrackerFilterInput = {
  bsid?: TableStringFilterInput | null,
  lat?: TableStringFilterInput | null,
  llid?: TableStringFilterInput | null,
  lng?: TableStringFilterInput | null,
  timeStamp?: TableStringFilterInput | null,
};

export type LogBusTrackerConnection = {
  __typename: "LogBusTrackerConnection",
  items?:  Array<LogBusTracker | null > | null,
  nextToken?: string | null,
};

export type TableMangaDashboardFilterInput = {
  access?: TableBooleanFilterInput | null,
  desciption?: TableStringFilterInput | null,
  episode?: TableIntFilterInput | null,
  picture?: TableStringFilterInput | null,
  statusofmanga?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  umid?: TableIntFilterInput | null,
};

export type MangaDashboardConnection = {
  __typename: "MangaDashboardConnection",
  items?:  Array<MangaDashboard | null > | null,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  and?: Array< ModelNoteFilterInput | null > | null,
  content?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelNoteFilterInput | null,
  or?: Array< ModelNoteFilterInput | null > | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TableSessionFilterInput = {
  client?: TableStringFilterInput | null,
  created?: TableIntFilterInput | null,
  expired?: TableIntFilterInput | null,
  ip?: TableStringFilterInput | null,
  sskey?: TableStringFilterInput | null,
};

export type SessionConnection = {
  __typename: "SessionConnection",
  items?:  Array<Session | null > | null,
  nextToken?: string | null,
};

export type TableStatusAPIFilterInput = {
  apiid?: TableStringFilterInput | null,
  des?: TableStringFilterInput | null,
  isAvalible?: TableBooleanFilterInput | null,
  usedAll?: TableIntFilterInput | null,
  usedDay?: TableIntFilterInput | null,
  usedMonth?: TableIntFilterInput | null,
};

export type StatusAPIConnection = {
  __typename: "StatusAPIConnection",
  items?:  Array<StatusAPI | null > | null,
  nextToken?: string | null,
};

export type ModelTaskFilterInput = {
  and?: Array< ModelTaskFilterInput | null > | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTaskFilterInput | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  status?: ModelStringInput | null,
  test?: ModelStringInput | null,
  title?: ModelStringInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TableVirtualBusTrackerFilterInput = {
  bbid?: TableStringFilterInput | null,
  lat?: TableFloatFilterInput | null,
  lng?: TableFloatFilterInput | null,
  timeStamp?: TableStringFilterInput | null,
};

export type VirtualBusTrackerConnection = {
  __typename: "VirtualBusTrackerConnection",
  items?:  Array<VirtualBusTracker | null > | null,
  nextToken?: string | null,
};

export type ModelSubscriptionNoteFilterInput = {
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTaskFilterInput = {
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  test?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
};

export type CreateBusLocatorStatusMutationVariables = {
  input: CreateBusLocatorStatusInput,
};

export type CreateBusLocatorStatusMutation = {
  createBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type CreateBusStopsMutationVariables = {
  input: CreateBusStopsInput,
};

export type CreateBusStopsMutation = {
  createBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type CreateBustrackerMutationVariables = {
  input: CreateBustrackerInput,
};

export type CreateBustrackerMutation = {
  createBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type CreateHeatMapMutationVariables = {
  input: CreateHeatMapInput,
};

export type CreateHeatMapMutation = {
  createHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type CreateHotZoneMutationVariables = {
  input: CreateHotZoneInput,
};

export type CreateHotZoneMutation = {
  createHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type CreateListLineBusStopsMutationVariables = {
  input: CreateListLineBusStopsInput,
};

export type CreateListLineBusStopsMutation = {
  createListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type CreateLocatorProgressMutationVariables = {
  input: CreateLocatorProgressInput,
};

export type CreateLocatorProgressMutation = {
  createLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type CreateLogBusTrackerMutationVariables = {
  input: CreateLogBusTrackerInput,
};

export type CreateLogBusTrackerMutation = {
  createLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type CreateMangaDashboardMutationVariables = {
  input: CreateMangaDashboardInput,
};

export type CreateMangaDashboardMutation = {
  createMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type CreateNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: CreateNoteInput,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type CreateStatusAPIMutationVariables = {
  input: CreateStatusAPIInput,
};

export type CreateStatusAPIMutation = {
  createStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type CreateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type CreateVirtualBusTrackerMutationVariables = {
  input: CreateVirtualBusTrackerInput,
};

export type CreateVirtualBusTrackerMutation = {
  createVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type DeleteBusLocatorStatusMutationVariables = {
  input: DeleteBusLocatorStatusInput,
};

export type DeleteBusLocatorStatusMutation = {
  deleteBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type DeleteBusStopsMutationVariables = {
  input: DeleteBusStopsInput,
};

export type DeleteBusStopsMutation = {
  deleteBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type DeleteBustrackerMutationVariables = {
  input: DeleteBustrackerInput,
};

export type DeleteBustrackerMutation = {
  deleteBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type DeleteHeatMapMutationVariables = {
  input: DeleteHeatMapInput,
};

export type DeleteHeatMapMutation = {
  deleteHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type DeleteHotZoneMutationVariables = {
  input: DeleteHotZoneInput,
};

export type DeleteHotZoneMutation = {
  deleteHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type DeleteListLineBusStopsMutationVariables = {
  input: DeleteListLineBusStopsInput,
};

export type DeleteListLineBusStopsMutation = {
  deleteListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type DeleteLocatorProgressMutationVariables = {
  input: DeleteLocatorProgressInput,
};

export type DeleteLocatorProgressMutation = {
  deleteLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type DeleteLogBusTrackerMutationVariables = {
  input: DeleteLogBusTrackerInput,
};

export type DeleteLogBusTrackerMutation = {
  deleteLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type DeleteMangaDashboardMutationVariables = {
  input: DeleteMangaDashboardInput,
};

export type DeleteMangaDashboardMutation = {
  deleteMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type DeleteNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: DeleteNoteInput,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type DeleteStatusAPIMutationVariables = {
  input: DeleteStatusAPIInput,
};

export type DeleteStatusAPIMutation = {
  deleteStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type DeleteVirtualBusTrackerMutationVariables = {
  input: DeleteVirtualBusTrackerInput,
};

export type DeleteVirtualBusTrackerMutation = {
  deleteVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type UpdateBusLocatorStatusMutationVariables = {
  input: UpdateBusLocatorStatusInput,
};

export type UpdateBusLocatorStatusMutation = {
  updateBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type UpdateBusStopsMutationVariables = {
  input: UpdateBusStopsInput,
};

export type UpdateBusStopsMutation = {
  updateBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type UpdateBustrackerMutationVariables = {
  input: UpdateBustrackerInput,
};

export type UpdateBustrackerMutation = {
  updateBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type UpdateHeatMapMutationVariables = {
  input: UpdateHeatMapInput,
};

export type UpdateHeatMapMutation = {
  updateHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type UpdateHotZoneMutationVariables = {
  input: UpdateHotZoneInput,
};

export type UpdateHotZoneMutation = {
  updateHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type UpdateListLineBusStopsMutationVariables = {
  input: UpdateListLineBusStopsInput,
};

export type UpdateListLineBusStopsMutation = {
  updateListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type UpdateLocatorProgressMutationVariables = {
  input: UpdateLocatorProgressInput,
};

export type UpdateLocatorProgressMutation = {
  updateLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type UpdateLogBusTrackerMutationVariables = {
  input: UpdateLogBusTrackerInput,
};

export type UpdateLogBusTrackerMutation = {
  updateLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type UpdateMangaDashboardMutationVariables = {
  input: UpdateMangaDashboardInput,
};

export type UpdateMangaDashboardMutation = {
  updateMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type UpdateNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: UpdateNoteInput,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type UpdateStatusAPIMutationVariables = {
  input: UpdateStatusAPIInput,
};

export type UpdateStatusAPIMutation = {
  updateStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type UpdateVirtualBusTrackerMutationVariables = {
  input: UpdateVirtualBusTrackerInput,
};

export type UpdateVirtualBusTrackerMutation = {
  updateVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type GetBusLocatorStatusQueryVariables = {
  bbid: string,
};

export type GetBusLocatorStatusQuery = {
  getBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type GetBusStopsQueryVariables = {
  bsid: string,
};

export type GetBusStopsQuery = {
  getBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type GetBustrackerQueryVariables = {
  uuid: number,
};

export type GetBustrackerQuery = {
  getBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type GetHeatMapQueryVariables = {
  hid: string,
};

export type GetHeatMapQuery = {
  getHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type GetHotZoneQueryVariables = {
  hzid: string,
};

export type GetHotZoneQuery = {
  getHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type GetListLineBusStopsQueryVariables = {
  lid: string,
};

export type GetListLineBusStopsQuery = {
  getListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type GetLocatorProgressQueryVariables = {
  lid: string,
};

export type GetLocatorProgressQuery = {
  getLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type GetLogBusTrackerQueryVariables = {
  llid: string,
};

export type GetLogBusTrackerQuery = {
  getLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type GetMangaDashboardQueryVariables = {
  umid: number,
};

export type GetMangaDashboardQuery = {
  getMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type GetSessionQueryVariables = {
  client: string,
  sskey: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type GetStatusAPIQueryVariables = {
  apiid: string,
};

export type GetStatusAPIQuery = {
  getStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type GetVirtualBusTrackerQueryVariables = {
  bbid: string,
  timeStamp: string,
};

export type GetVirtualBusTrackerQuery = {
  getVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type ListBusLocatorStatusesQueryVariables = {
  filter?: TableBusLocatorStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusLocatorStatusesQuery = {
  listBusLocatorStatuses?:  {
    __typename: "BusLocatorStatusConnection",
    items?:  Array< {
      __typename: "BusLocatorStatus",
      bbid: string,
      frequency?: string | null,
      line?: string | null,
      status?: boolean | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListBusStopsQueryVariables = {
  filter?: TableBusStopsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusStopsQuery = {
  listBusStops?:  {
    __typename: "BusStopsConnection",
    items?:  Array< {
      __typename: "BusStops",
      bsid: string,
      coordinate?: Array< number | null > | null,
      des?: string | null,
      line?: string | null,
      title?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListBustrackersQueryVariables = {
  filter?: TableBustrackerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBustrackersQuery = {
  listBustrackers?:  {
    __typename: "BustrackerConnection",
    items?:  Array< {
      __typename: "Bustracker",
      data?: string | null,
      timeStamp?: string | null,
      uuid: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListHeatMapsQueryVariables = {
  filter?: TableHeatMapFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHeatMapsQuery = {
  listHeatMaps?:  {
    __typename: "HeatMapConnection",
    items?:  Array< {
      __typename: "HeatMap",
      hid: string,
      timeStamp?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListHotZonesQueryVariables = {
  filter?: TableHotZoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHotZonesQuery = {
  listHotZones?:  {
    __typename: "HotZoneConnection",
    items?:  Array< {
      __typename: "HotZone",
      hzid: string,
      lat: number,
      long: number,
      timeStamp: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListListLineBusStopsQueryVariables = {
  filter?: TableListLineBusStopsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListLineBusStopsQuery = {
  listListLineBusStops?:  {
    __typename: "ListLineBusStopsConnection",
    items?:  Array< {
      __typename: "ListLineBusStops",
      lid: string,
      line?: string | null,
      lineData?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListLocatorProgressesQueryVariables = {
  filter?: TableLocatorProgressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocatorProgressesQuery = {
  listLocatorProgresses?:  {
    __typename: "LocatorProgressConnection",
    items?:  Array< {
      __typename: "LocatorProgress",
      isActive?: boolean | null,
      lid: string,
      lineID?: string | null,
      progress?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListLogBusTrackersQueryVariables = {
  filter?: TableLogBusTrackerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogBusTrackersQuery = {
  listLogBusTrackers?:  {
    __typename: "LogBusTrackerConnection",
    items?:  Array< {
      __typename: "LogBusTracker",
      bsid?: string | null,
      lat?: string | null,
      llid: string,
      lng?: string | null,
      timeStamp?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListMangaDashboardsQueryVariables = {
  filter?: TableMangaDashboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMangaDashboardsQuery = {
  listMangaDashboards?:  {
    __typename: "MangaDashboardConnection",
    items?:  Array< {
      __typename: "MangaDashboard",
      access?: boolean | null,
      desciption?: string | null,
      episode?: number | null,
      picture?: string | null,
      statusofmanga?: string | null,
      title?: string | null,
      umid: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      _deleted?: boolean | null,
      _version: number,
      content: string,
      id: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: TableSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "SessionConnection",
    items?:  Array< {
      __typename: "Session",
      client: string,
      created: number,
      expired: number,
      ip?: string | null,
      sskey: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListStatusAPISQueryVariables = {
  filter?: TableStatusAPIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatusAPISQuery = {
  listStatusAPIS?:  {
    __typename: "StatusAPIConnection",
    items?:  Array< {
      __typename: "StatusAPI",
      apiid: string,
      des?: string | null,
      isAvalible?: boolean | null,
      usedAll?: number | null,
      usedDay?: number | null,
      usedMonth?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      _deleted?: boolean | null,
      _version: number,
      description?: string | null,
      id: string,
      status?: string | null,
      test: string,
      title: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListVirtualBusTrackersQueryVariables = {
  filter?: TableVirtualBusTrackerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVirtualBusTrackersQuery = {
  listVirtualBusTrackers?:  {
    __typename: "VirtualBusTrackerConnection",
    items?:  Array< {
      __typename: "VirtualBusTracker",
      bbid: string,
      lat?: number | null,
      lng?: number | null,
      timeStamp: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  lastSync?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      _deleted?: boolean | null,
      _version: number,
      content: string,
      id: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  lastSync?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      _deleted?: boolean | null,
      _version: number,
      description?: string | null,
      id: string,
      status?: string | null,
      test: string,
      title: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateBusLocatorStatusSubscriptionVariables = {
  bbid?: string | null,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type OnCreateBusLocatorStatusSubscription = {
  onCreateBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type OnCreateBusStopsSubscriptionVariables = {
  bsid?: string | null,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type OnCreateBusStopsSubscription = {
  onCreateBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type OnCreateBustrackerSubscriptionVariables = {
  data?: string | null,
  timeStamp?: string | null,
  uuid?: number | null,
};

export type OnCreateBustrackerSubscription = {
  onCreateBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type OnCreateHeatMapSubscriptionVariables = {
  heatMapData?: HeatMapDataInput | null,
  hid?: string | null,
  timeStamp?: string | null,
};

export type OnCreateHeatMapSubscription = {
  onCreateHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type OnCreateHotZoneSubscriptionVariables = {
  hzid?: string | null,
  lat?: number | null,
  long?: number | null,
  timeStamp?: string | null,
};

export type OnCreateHotZoneSubscription = {
  onCreateHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type OnCreateListLineBusStopsSubscriptionVariables = {
  lid?: string | null,
  line?: string | null,
  lineData?: string | null,
};

export type OnCreateListLineBusStopsSubscription = {
  onCreateListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type OnCreateLocatorProgressSubscriptionVariables = {
  isActive?: boolean | null,
  lid?: string | null,
  lineID?: string | null,
  progress?: string | null,
};

export type OnCreateLocatorProgressSubscription = {
  onCreateLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type OnCreateLogBusTrackerSubscriptionVariables = {
  bsid?: string | null,
  lat?: string | null,
  llid?: string | null,
  lng?: string | null,
  timeStamp?: string | null,
};

export type OnCreateLogBusTrackerSubscription = {
  onCreateLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type OnCreateMangaDashboardSubscriptionVariables = {
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  umid?: number | null,
};

export type OnCreateMangaDashboardSubscription = {
  onCreateMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  client?: string | null,
  created?: number | null,
  expired?: number | null,
  ip?: string | null,
  sskey?: string | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type OnCreateStatusAPISubscriptionVariables = {
  apiid?: string | null,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
};

export type OnCreateStatusAPISubscription = {
  onCreateStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type OnCreateVirtualBusTrackerSubscriptionVariables = {
  bbid?: string | null,
  lat?: number | null,
  lng?: number | null,
  timeStamp?: string | null,
};

export type OnCreateVirtualBusTrackerSubscription = {
  onCreateVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type OnDeleteBusLocatorStatusSubscriptionVariables = {
  bbid?: string | null,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type OnDeleteBusLocatorStatusSubscription = {
  onDeleteBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type OnDeleteBusStopsSubscriptionVariables = {
  bsid?: string | null,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type OnDeleteBusStopsSubscription = {
  onDeleteBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type OnDeleteBustrackerSubscriptionVariables = {
  data?: string | null,
  timeStamp?: string | null,
  uuid?: number | null,
};

export type OnDeleteBustrackerSubscription = {
  onDeleteBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type OnDeleteHeatMapSubscriptionVariables = {
  heatMapData?: HeatMapDataInput | null,
  hid?: string | null,
  timeStamp?: string | null,
};

export type OnDeleteHeatMapSubscription = {
  onDeleteHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type OnDeleteHotZoneSubscriptionVariables = {
  hzid?: string | null,
  lat?: number | null,
  long?: number | null,
  timeStamp?: string | null,
};

export type OnDeleteHotZoneSubscription = {
  onDeleteHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type OnDeleteListLineBusStopsSubscriptionVariables = {
  lid?: string | null,
  line?: string | null,
  lineData?: string | null,
};

export type OnDeleteListLineBusStopsSubscription = {
  onDeleteListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type OnDeleteLocatorProgressSubscriptionVariables = {
  isActive?: boolean | null,
  lid?: string | null,
  lineID?: string | null,
  progress?: string | null,
};

export type OnDeleteLocatorProgressSubscription = {
  onDeleteLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type OnDeleteLogBusTrackerSubscriptionVariables = {
  bsid?: string | null,
  lat?: string | null,
  llid?: string | null,
  lng?: string | null,
  timeStamp?: string | null,
};

export type OnDeleteLogBusTrackerSubscription = {
  onDeleteLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type OnDeleteMangaDashboardSubscriptionVariables = {
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  umid?: number | null,
};

export type OnDeleteMangaDashboardSubscription = {
  onDeleteMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  client?: string | null,
  created?: number | null,
  expired?: number | null,
  ip?: string | null,
  sskey?: string | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type OnDeleteStatusAPISubscriptionVariables = {
  apiid?: string | null,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
};

export type OnDeleteStatusAPISubscription = {
  onDeleteStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type OnDeleteVirtualBusTrackerSubscriptionVariables = {
  bbid?: string | null,
  lat?: number | null,
  lng?: number | null,
  timeStamp?: string | null,
};

export type OnDeleteVirtualBusTrackerSubscription = {
  onDeleteVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};

export type OnUpdateBusLocatorStatusSubscriptionVariables = {
  bbid?: string | null,
  frequency?: string | null,
  line?: string | null,
  status?: boolean | null,
};

export type OnUpdateBusLocatorStatusSubscription = {
  onUpdateBusLocatorStatus?:  {
    __typename: "BusLocatorStatus",
    bbid: string,
    frequency?: string | null,
    line?: string | null,
    status?: boolean | null,
  } | null,
};

export type OnUpdateBusStopsSubscriptionVariables = {
  bsid?: string | null,
  coordinate?: Array< number | null > | null,
  des?: string | null,
  line?: string | null,
  title?: string | null,
};

export type OnUpdateBusStopsSubscription = {
  onUpdateBusStops?:  {
    __typename: "BusStops",
    bsid: string,
    coordinate?: Array< number | null > | null,
    des?: string | null,
    line?: string | null,
    title?: string | null,
  } | null,
};

export type OnUpdateBustrackerSubscriptionVariables = {
  data?: string | null,
  timeStamp?: string | null,
  uuid?: number | null,
};

export type OnUpdateBustrackerSubscription = {
  onUpdateBustracker?:  {
    __typename: "Bustracker",
    data?: string | null,
    timeStamp?: string | null,
    uuid: number,
  } | null,
};

export type OnUpdateHeatMapSubscriptionVariables = {
  heatMapData?: HeatMapDataInput | null,
  hid?: string | null,
  timeStamp?: string | null,
};

export type OnUpdateHeatMapSubscription = {
  onUpdateHeatMap?:  {
    __typename: "HeatMap",
    heatMapData?:  Array< {
      __typename: "HeatMapData",
      lat?: string | null,
      lng?: string | null,
      weight?: string | null,
    } | null > | null,
    hid: string,
    timeStamp?: string | null,
  } | null,
};

export type OnUpdateHotZoneSubscriptionVariables = {
  hzid?: string | null,
  lat?: number | null,
  long?: number | null,
  timeStamp?: string | null,
};

export type OnUpdateHotZoneSubscription = {
  onUpdateHotZone?:  {
    __typename: "HotZone",
    hzid: string,
    lat: number,
    long: number,
    timeStamp: string,
  } | null,
};

export type OnUpdateListLineBusStopsSubscriptionVariables = {
  lid?: string | null,
  line?: string | null,
  lineData?: string | null,
};

export type OnUpdateListLineBusStopsSubscription = {
  onUpdateListLineBusStops?:  {
    __typename: "ListLineBusStops",
    lid: string,
    line?: string | null,
    lineData?: string | null,
  } | null,
};

export type OnUpdateLocatorProgressSubscriptionVariables = {
  isActive?: boolean | null,
  lid?: string | null,
  lineID?: string | null,
  progress?: string | null,
};

export type OnUpdateLocatorProgressSubscription = {
  onUpdateLocatorProgress?:  {
    __typename: "LocatorProgress",
    isActive?: boolean | null,
    lid: string,
    lineID?: string | null,
    progress?: string | null,
  } | null,
};

export type OnUpdateLogBusTrackerSubscriptionVariables = {
  bsid?: string | null,
  lat?: string | null,
  llid?: string | null,
  lng?: string | null,
  timeStamp?: string | null,
};

export type OnUpdateLogBusTrackerSubscription = {
  onUpdateLogBusTracker?:  {
    __typename: "LogBusTracker",
    bsid?: string | null,
    lat?: string | null,
    llid: string,
    lng?: string | null,
    timeStamp?: string | null,
  } | null,
};

export type OnUpdateMangaDashboardSubscriptionVariables = {
  access?: boolean | null,
  desciption?: string | null,
  episode?: number | null,
  picture?: string | null,
  umid?: number | null,
};

export type OnUpdateMangaDashboardSubscription = {
  onUpdateMangaDashboard?:  {
    __typename: "MangaDashboard",
    access?: boolean | null,
    desciption?: string | null,
    episode?: number | null,
    picture?: string | null,
    statusofmanga?: string | null,
    title?: string | null,
    umid: number,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    _deleted?: boolean | null,
    _version: number,
    content: string,
    id: string,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  client?: string | null,
  created?: number | null,
  expired?: number | null,
  ip?: string | null,
  sskey?: string | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    client: string,
    created: number,
    expired: number,
    ip?: string | null,
    sskey: string,
  } | null,
};

export type OnUpdateStatusAPISubscriptionVariables = {
  apiid?: string | null,
  des?: string | null,
  isAvalible?: boolean | null,
  usedAll?: number | null,
  usedDay?: number | null,
};

export type OnUpdateStatusAPISubscription = {
  onUpdateStatusAPI?:  {
    __typename: "StatusAPI",
    apiid: string,
    des?: string | null,
    isAvalible?: boolean | null,
    usedAll?: number | null,
    usedDay?: number | null,
    usedMonth?: number | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    _deleted?: boolean | null,
    _version: number,
    description?: string | null,
    id: string,
    status?: string | null,
    test: string,
    title: string,
  } | null,
};

export type OnUpdateVirtualBusTrackerSubscriptionVariables = {
  bbid?: string | null,
  lat?: number | null,
  lng?: number | null,
  timeStamp?: string | null,
};

export type OnUpdateVirtualBusTrackerSubscription = {
  onUpdateVirtualBusTracker?:  {
    __typename: "VirtualBusTracker",
    bbid: string,
    lat?: number | null,
    lng?: number | null,
    timeStamp: string,
  } | null,
};
