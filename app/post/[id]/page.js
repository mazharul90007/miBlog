import GetPost from "@/lib/getPost";


const PostPage = async ({params}) => {
    const {id} = params;


    const post = await GetPost(id)
  return (
    <div className="container mx-auto mt-20">
        <div>
            <h3 className="text-3xl font-bold text-center mb-5 uppercase text-amber-700">{post.title}</h3>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default PostPage;