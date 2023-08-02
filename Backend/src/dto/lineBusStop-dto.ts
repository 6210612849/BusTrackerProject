
export interface LineListBustStopDTO {
    lid: String
    line: String
    lineData: LineDataDTO[]
}
export interface LineDataDTO {
    key: string
    value: CoordinateDTO
}
export interface CoordinateDTO {
    lat: number
    lng: number
    bsid: number
}