import "./compare.css";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { reqPicture } from "../../firebase";
import { updateRank } from "../../firebase";


export const Compare =  () => {
    const [rand1, setRand1] = useState(Math.floor(1+Math.random()*5))
    const [rand2, setRand2] = useState(Math.floor(1+Math.random()*5))

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

    const imageWin = async (winnerId, loserId) => {
        await updateRank("P"+winnerId, -1)
        await updateRank("P"+loserId, +1)
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
            src={link1}
            onClick={() => imageWin(rand1, rand2)}
          />

          <span>OR</span>
          <img
            alt="photo2"
            src={link2}
            onClick={() => imageWin(rand2, rand1)}
          />
        </div>
      </div>
    </div>
  );
};
