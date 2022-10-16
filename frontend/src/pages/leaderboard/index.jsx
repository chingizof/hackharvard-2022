import { Header } from "../../components/header"
import { LeaderboardItem } from "../../components/leaderboardItem"
import { getAllProfiles } from "../../firebase"
import "./index.css"

export const Leaderboard = () => {
    let profiles = []
    const updateProfiles = async() => {
        profiles = await getAllProfiles()
    }
    console.log(profiles)

    return(
        <div className="leaderboard-wrapper">
            <Header />
            <LeaderboardItem />
        </div>
    )
}