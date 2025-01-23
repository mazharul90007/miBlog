import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className=" my-20">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Welcome
          <span className="text-amber-600"> {user?.given_name} {user?.family_name}</span></h3>
        <p className="text-xl">to</p>
        <h3 className="text-4xl font-bold">miBlog</h3>
      </div>

    </div>
  )
}

export default Profile