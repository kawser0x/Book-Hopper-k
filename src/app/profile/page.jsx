"use client";

import UpdateUser from "@/components/UpdateUser";
import { authClient } from "../lib/auth-client";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="card max-w-sm mx-auto bg-slate-200 items-center justify-center p-10 m-5 space-y-2">
      <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-neutral text-neutral-content ">
        {user?.image ? (
          <img
            src={user.image}
            alt={user?.name || "Profile image"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl font-bold">
            {user?.name?.charAt(0) || "K"}
          </span>
        )}
      </div>
      <h2 className="font-bold text-xl ">Name : {user?.name || "Loading..."}</h2>
      <p className="text-sm">
        Email : {user?.email || "Loading..."}
      </p>

      <UpdateUser />
    </div>
  );
};

export default ProfilePage;
