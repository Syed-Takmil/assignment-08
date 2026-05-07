import AnimalCard from "@/Components/AnimalCard";





const page = async() => {
    const res = await fetch('http://localhost:3000/animals.json')
    const data=await res.json()
    console.log(data)
    return (
        <div className="w-28/30 mx-auto my-5 container grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {
                data.map(n=>(
 <AnimalCard key={n.id} animal={n}></AnimalCard>
                ))
            }
        </div>
    );
};

export default page;