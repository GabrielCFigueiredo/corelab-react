
import axios from "axios";
import { useState } from "react";
import Card from "../components/card/card";
import useSWR from "swr";
import NavBar from "../components/navBar/navBar";

const fetcher = (url) => axios.get(url).then((res) => res.data.products);

export default function Home() {
  const [filter, setFilter] = useState('')
  

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
    fetcher
  );

  const lista =
    data &&
    data.filter((car) => {
      return Object.keys(car).some((key) =>
        car[key]
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase())
      );
    });
  
  return (
    <div className="bg-background bg-cover h-screen">
      <div>
        <NavBar
        setFilter={setFilter}
        />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 ">
        {lista?.map((car) => {
          return (
            <div className="w-full lg:w-1/4 md:w-1/3 sm:w-11/12" key={car._id}>
              <Card
                image={car.image}
                carName={car.carName}
                brand={car.brand}
                year={car.year}
                color={car.color}
                price={car.price}
                description={car.description}
                id={car._id}
                car={car}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
