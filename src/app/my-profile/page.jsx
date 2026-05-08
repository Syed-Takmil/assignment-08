

"use client";

import { authClient } from '@/lib/auth-client';

import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const HandleUpdate=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const username=form.name.value;
        const photoURL=form.photoURL.value;
   await authClient.updateUser({
    image: photoURL,
    name: username,
})
toast.success("Profile updated successfully!")
    }
   const { data: session } = authClient.useSession();
  
    const [updateMsg, setUpdateMsg] = useState(false);
    return (

       <div className='flex flex-col-reverse md:flex-row justify-evenly items-center gap-5 container mx-auto w-full min-h-screen'>
       <form
       onSubmit={HandleUpdate}  className={`${updateMsg ? "block" : "hidden"}  rounded-lg mx-auto p-6 m-5 flex flex-col items-center border  bg-base-300 border-black  w-fit h-full`}>
        <fieldset className="fieldset p-4">
  <legend className="fieldset-legend text-xl font-semibold">Update Profile</legend>

  <label className="label text-xl font-semibold">New UserName</label>
  <input type="text" className="input w-full" placeholder="New Username" name="name" />

  <label className="label text-xl font-semibold">Photo Url</label>
  <input type="url" className="input w-full" placeholder="Photo URL" name="photoURL" />

  <button type='submit' className="btn btn-neutral mt-4" >
    Save Changes & Update
  </button>
</fieldset>
       </form>
 <div className="rounded-lg mx-auto p-6 m-5 flex flex-col items-center border w-fit">
            <Image src={session?.user?.image} alt="Profile Picture" width={200} height={200} className="rounded-full" />
            <h1 className="text-2xl font-bold mt-4">{session?.user?.name}</h1>
            <p className="text-gray-600">{session?.user?.email}</p>
            <p className="mt-2">Welcome to your profile, {session?.user?.name}!</p>
       <button
        onClick={() => setUpdateMsg(!updateMsg)}
        className="btn btn-primary mt-4">
        Update Profile
       </button>
        </div>
       </div>
    );
};

export default ProfilePage;