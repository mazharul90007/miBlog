import GetAllPosts from "@/lib/getAllPosts"
import Link from "next/link";


const page = async () => {
  const posts = await GetAllPosts();
  return (
    <div className="container mx-auto">
      <h2 className="my-6 text-2xl font-semibold">This is Our Latest Article</h2>
      <ul>
        {
          posts.map((post, index) =>
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <span className="text-amber-700">{index + 1}.</span>
                <span> {post.title}</span>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default page