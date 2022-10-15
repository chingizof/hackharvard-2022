import "./compare.css";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { reqPicture } from "../../firebase";

export const Compare =  () => {
    let rand1 = Math.floor(1+Math.random()*5)
    let rand2 = Math.floor(1+Math.random()*5)

    console.log("first", rand1)
    console.log("second", rand2)

    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()

    let generatePhotos = async (rand1, rand2) => {
        let url1 = await reqPicture("P"+rand1)
        let url2 = await reqPicture("P"+rand2)

        setLink1(url1.URL)
        setLink2(url2.URL)
    }

    useEffect(() => {
        generatePhotos(rand1, rand2)
    },[])

    console.log(link2)

    // const imageWin = (winner, loser) => {

    // }
    
  return (
    <div className="compare-wrapper">
      <Header />
      <div className="text-holder">
        <span>Who is funnier?</span>
        <div className="images-wrapper">
          <img
            className="photo1"
            alt="photo1"
            src={link1}
          />

          <span>OR</span>
          <img
            alt="photo2"
            src={link2}
          />
        </div>
      </div>
    </div>
  );
};
