



import BookingForm from '@/Components/BookingForm';
import Image from 'next/image';
 export const metadata = {
  title: 'Animal Details',
  description: 'Detailed information about the selected animal, including its breed, age, weight, and location.',
}

const DetailsPage = async({params}) => {
  const res = await fetch('https://a-08qurbani-hat.vercel.app/animals.json');
  const data = await res.json();
  const param=await params;
  
      const animal = data.find(item => item.id === parseInt(param.id));
         const{id,name,type,breed,price,weight,age,location,description,image,category}=animal;
         const infoStyle="flex bg-base-100 p-2 rounded-xl justify-between transition-all hover:-translate-y-1.25 hover:shadow-lg shadow-sm duration-300 border-gray-200 border";
         const valueStyle="font-semibold text-green-500";
         const qStyle="font-extralight"
    return (
        <div className='my-5 bg-base-200  py-auto grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between items-center w-10/12
         mx-auto'>
                  <figure>
       <Image 
       className='rounded-lg'
       width={500} height={150} src={image} alt={name} />
     </figure>
     <div className='flex-col gap-5 flex'>
      <div className='text-3xl font-semibold'>{name}</div>
      <div className='text-2xl text-purple-700'>PRICE:{price} ৳</div>
      <p>{description}</p>
   <div className='p-3 bg-base-300 gap-4 rounded-lg grid-cols-1 grid lg:grid-cols-2'>
       <div className={infoStyle}>
       <span className={qStyle}>  TYPE: </span>
         <span className={valueStyle}>{type.toUpperCase()} </span>
          </div> 
            <div className={infoStyle}>
             <span className={qStyle}>  Category :  </span>
             <span className={valueStyle}>    {category.toUpperCase()} </span>
               </div>
      <div className={infoStyle}>
        <span className={qStyle}>BREED:</span>
         <span className={valueStyle}> {breed.toUpperCase()}</span>
         </div>   
           <div className={infoStyle}>
          <span className={qStyle}>  WEIGHT: </span>
           <span className={valueStyle}> {weight} kg</span>
            </div>
      <div className={infoStyle}>
        <span className={qStyle}>AGE: </span>
       <span className={valueStyle}> {age}years</span>
        </div>  
          <div className={infoStyle}> 
           <span className={qStyle}> Location:</span>
            <span className={valueStyle}> {location}</span>
             </div>
   </div>

         <a href="#booking-form">
             <button className=' w-full btn btn-info'>Click here to Book Now</button>
         </a>
     </div>  
      <div id='booking-form' className=' lg:col-span-2 w-full'>
        <BookingForm/>
      </div>
        </div>
    );
};

export default DetailsPage;