import { getData } from "@/actions/postActions";
import Posts from "@/components/posts";

export default async function Home() {
  const data = await getData("All");

  return <Posts posts={data} />;
}
