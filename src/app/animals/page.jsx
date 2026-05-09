


"use client";

import AnimalCard from "@/Components/AnimalCard";
import { useEffect, useState } from "react";

const Page = () => {

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("default");
const[loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://a-08qurbani-hat.vercel.app/animals.json");
      const result = await res.json();

      setData(result);
      setLoading(false)
    };

    fetchData();
  }, []);

  let displayedData = [...data];

  if (sortType === "lowToHigh") {
    displayedData.sort((a, b) => a.price - b.price);
  }

  if (sortType === "highToLow") {
    displayedData.sort((a, b) => b.price - a.price);
  }
if(loading){
    return(
         <div className="flex container  mx-auto text-center justify-center items-center gap-5 my-auto">
            <h2>Loading</h2>
       <div className="flex justify-center items-center justify-items-center min-h-screen">
          <span className="loading loading-dots loading-xl"></span>
       </div>
        </div>
    )
}
  return (
    
       <div className="w-28/30 mx-auto my-5  container">

      <div className="dropdown my-4 dropdown-right dropdown-hover">

        <div
          tabIndex={0}
          role="button"
          className="btn bg-purple-400 m-1"
        >
          Sort By Price
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >

          <li>
            <a onClick={() => setSortType("highToLow")}>
              Higher to Lower
            </a>
          </li>

          <li>
            <a onClick={() => setSortType("lowToHigh")}>
              Lower to Higher
            </a>
          </li>

          <li>
            <a onClick={() => setSortType("default")}>
              Default
            </a>
          </li>

        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {displayedData.map((n) => (
          <AnimalCard key={n.id} animal={n} />
        ))}

      </div>
    </div>
 
  );
};

export default Page;