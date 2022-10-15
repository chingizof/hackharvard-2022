import "./compare.css";
import { Header } from "../../components/header";
import { useState } from "react";
import "axios"
import { reqPicture } from "../../firebase";

export const Compare = async () => {
    let rand1 = 1+ Math.random()*2
    let rand2 = 1+ Math.random()*2

    // let link1 = reqPicture("P" + rand1)
    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()
    // let link2 = await reqPicture()

    console.log(link2)

    const imageWin = (winner, loser) => {

    }
    
  return (
    <div className="compare-wrapper">
      <Header />
      <div className="text-holder">
        <span>Who is funnier?</span>
        <div className="images-wrapper">
          <img
            className="photo1"
            alt="photo1"
            src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F-VBWvHn1Skz8LVzmcrTD4w%252Fhellthumb800.jpg&width=1200&height=630&quality=80"
          />

          <span>OR</span>
          <img
            alt="photo2"
            src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F-VBWvHn1Skz8LVzmcrTD4w%252Fhellthumb800.jpg&width=1200&height=630&quality=80"
          />
        </div>
      </div>
    </div>
  );
};
