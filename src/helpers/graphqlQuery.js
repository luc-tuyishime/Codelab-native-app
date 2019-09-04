import gql from 'graphql-tag'; 

export const getUsers = gql`
query fetchUsers {
  search(query: "location:rwanda", type: USER, first: 100) {
    edges {
      cursor
      node {
        ... on User {
          name
          login
          bio
          email
          location
          url
          websiteUrl
          avatarUrl
          createdAt
          starredRepositories {
            totalCount
          }
          repositories {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
        }
      }
    }
  }
  viewer {
    avatarUrl
  }
}
`