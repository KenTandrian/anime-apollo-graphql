import gql from "graphql-tag";

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        description
        averageScore
        averageScore
        title {
          english
          romaji
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`;
