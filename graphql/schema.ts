export const typeDefs = `
  type Bookmark {
    id: ID
    title: String
    url: String
    category: String
    users: [String]
  }

  type Query {
    bookmarks: [Bookmark]!
  }`;
