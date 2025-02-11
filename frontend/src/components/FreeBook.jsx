import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

export default function FreeBook() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        const freeBook = res.data.filter((book) => book.category === "Free");
        setData(freeBook);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-4">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptas eum ducimus possimus voluptatibus nobis, suscipit vel
            perspiciatis temporibus quia dolor aliquid molestiae exercitationem
            libero? Voluptas eaque ab esse numquam!
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id}>
                {" "}
                {/* ✅ Key should be here */}
                <Card item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
