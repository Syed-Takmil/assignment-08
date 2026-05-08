


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({animal}) => {
    const{id,name,price,description,image,category}=animal
    return (
<div className="card bg-base-100 p-3 h-125 shadow-xl  transition-all
                    duration-300 hover:translate-y-1.5 hover:shadow-lg hover:cursor-pointer">
  <figure className="p-3">
  <Image src={image} className='rounded-xl' width={400} height={60} alt={name}></Image>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-black text-3xl ">{name}</h2>
     <p className='text-amber-800 font-semibold text-xl'>{price}৳</p>
    <p className='font-medium text-gray-700 text-lg'>{description}
    </p>
    <div className="card-actions">
      <Link href={`/animalDetails/${id}`}>
      <button className="btn btn-info btn-soft">Get Details </button></Link>
    </div>
  </div>
</div>
    );
};

export default AnimalCard;