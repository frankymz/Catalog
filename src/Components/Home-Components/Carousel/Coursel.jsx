import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Service from "../../../Service/Service";
import './Carousel.css'

const images = [
  "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780062060624_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780062439598_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780062846907_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780062909879_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780062941206_p0_v1_s600x595.jpg",
  " https://prodimage.images-bn.com/pimages/9780062941237_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780063005549_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780131103627_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780134190440_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780134494166_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780134685991_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780134757599_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780143110439_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780143121701_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780143127550_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780201633610_p0_v1_s600x595.jpg",
  "https://prodimage.images-bn.com/pimages/9780262033848_p0_v1_s600x595.jpg",
];

/*
Object must be:
image:
Name:
id:
*/

export default function Panel() {
  const [state, setState] = useState({
    products: [],
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Service.getProducts().then((response) => {
      console.log(response.data);
      setState({ products: response.data });
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="row">
        {images.map((image, i) => (
          <Link to={`/book/${i}`}> 
          <img key={i} src={images[i]} className="poster" />
          </Link>
        ))}
      </div>
      {/* {JSON.stringify(state.products[0].price)} */}
    </React.Fragment>
  );
}
