"use client";

import { authClient } from "@/app/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateUser = async (data) => {
    const { data: res, error } = await authClient.updateUser({
      name: data.name,
      image: data.photo,
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Profile updated successfully!");
      window.location.reload();
    }
  };

  return (
    <div>
      <button className="btn btn-success" popoverTarget="my-modal-1">
        Update Profile
      </button>

      <div className="modal" id="my-modal-1" popover="auto">
        <div className="modal-box max-w-md mx-auto relative">
          <h3 className="font-bold text-lg mb-4">Update Profile</h3>

          <form className="space-y-2" onSubmit={handleSubmit(handleUpdateUser)}>
            <fieldset className="fieldset">
              <label className="text-l font-bold">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name field is required" })}
                className="input w-full"
                placeholder="Type your Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <label className="text-l font-bold">Photo URL</label>
              <input
                type="text"
                {...register("photo", { required: "Photo URL is required" })}
                className="input w-full"
                placeholder="Enter photo URL"
              />
              {errors.photo && (
                <p className="text-red-500">{errors.photo.message}</p>
              )}
            </fieldset>

            <button
              type="submit"
              className="btn btn-success w-full mt-4"
              popoverTargetAction="hide"
              popoverTarget="my-modal-1">
              Save Changes
            </button>
          </form>

          <div className="modal-action">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              popoverTarget="my-modal-1"
              popoverTargetAction="hide">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
