/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMangaDashboard = /* GraphQL */ `
  query GetMangaDashboard($umid: Int!) {
    getMangaDashboard(umid: $umid) {
      umid
      access
      desciption
      episode
      statusofmanga
      title
      picture
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
        statusofmanga
        title
        picture
      }
      nextToken
    }
  }
`;
