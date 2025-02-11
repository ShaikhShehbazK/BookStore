import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Course() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-30 items-center justify-center text-center space-y-8">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur, sequi fuga iste atque itaque voluptatem doloribus
            animi voluptates distinctio perspiciatis quisquam perferendis nulla
            minima, obcaecati totam, provident quibusdam quae. Dolor provident
            quo quas ea, quis quod incidunt quia vel quasi maiores commodi
            repellendus, consectetur porro? Dicta alias rem sequi.
          </p>
          <Link to="/">
            <button className="cursor-pointer rounded-md px-3 py-2 bg-pink-500 text-white hover:bg-pink-600 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
