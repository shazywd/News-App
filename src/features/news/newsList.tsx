import { NewsCard } from "../../components/newsCard";
import { useGetPostsQuery } from "../news/newsApi";
export const NewsList = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  console.log(posts, "data show");

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div className="flex flex-wrap  justify-evenly gap-4">
      {posts?.map((post) => (
        <NewsCard post={post} />
      ))}
    </div>
  );
};
