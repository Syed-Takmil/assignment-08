


import Image from 'next/image';
import React from 'react';

const DetailsPage = async({params}) => {
  const res = await fetch('http://localhost:3000/animals.json');
  const data = await res.json();
  const param=await params
      const animal = data.find(item => item.id === parseInt(param.id));
      console.log(animal)
    return (
        <div>
             <h1>{animal.name}</h1>
      <Image width={500} height={400} src={animal.image} alt={animal.name} />
      <p>Price: {animal.price}</p>
      <p>Location: {animal.location}</p>
      
        </div>
    );
};

export default DetailsPage;