




export interface myLocatorProgress {
    lid: String
    isActive: Boolean
    lineID: String
    progress: myLocatorProgressKey[]
}
export interface myLocatorProgressKey {
    key: string
    busID: string
}