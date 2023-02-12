import { gql, useQuery } from "@apollo/client";
import type { Bookmark } from "@prisma/client";

const AllBookmarksQuery = gql`
  query {
    bookmarks {
      id
      title
      url
      category
    }
  }
`;

const Home = () => {
  //useQuery hook for querying graphql endpoint. Parameter is a graphql query string
  //loading is a boolean. error contains a message
  const { data, loading, error } = useQuery(AllBookmarksQuery);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Umm... {error.message}</p>;
  return (
    <>
      <p>hi</p>
      {data.bookmarks.map((bookmark: Bookmark) => (
        <li key={bookmark.id}>
          <h3>{bookmark.title}</h3>
          <a href={bookmark.url}>{bookmark.url}</a>
          <p>{bookmark.category}</p>
        </li>
      ))}
    </>
  );
};

export default Home;
