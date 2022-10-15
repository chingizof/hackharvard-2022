import "./compare.css"
import { Header } from "../../components/header"

export const Compare = () => {

    const WinnerImage = () => {

    }

    

    return (
        <div className="compare-wrapper" >
            <Header />
            <div className="text-holder">
                <span className="text-3xl font-bold underline">Who is funnier?</span>
                <div className="images-wrapper">
                    <img id="image-1" onClick={WinnerImage} src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F-VBWvHn1Skz8LVzmcrTD4w%252Fhellthumb800.jpg&width=1200&height=630&quality=80" />
                    <span>OR</span>
                    <img id="image-2" onClick={WinnerImage} src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F-VBWvHn1Skz8LVzmcrTD4w%252Fhellthumb800.jpg&width=1200&height=630&quality=80" />
                </div>
            </div>
        </div>
    )
}
