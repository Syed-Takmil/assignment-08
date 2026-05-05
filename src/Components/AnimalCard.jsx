


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({animal}) => {
    const{id,name,type,breed,price,weight,age,location,description,image,category}=animal;
    return (
<div className="card bg-base-100 w-96 shadow-sm transition-all
                    duration-300 hover:translate-y-1.5 hover:shadow-lg hover:cursor-pointer">
  <figure className="px-10 pt-10">
  <Image src={image} className='w-fit' width={300} height={300} alt={name}></Image>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <Link href={`/animalDetails/${id}`}>
      <button className="btn btn-info btn-soft">Get Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default AnimalCard;