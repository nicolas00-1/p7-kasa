import { useParams } from "react-router-dom"
import useFetch from "../../utils/hooks/useFetch"

function Lodging () {
    const {lodgingDatas, isLoading} = useFetch(`./logements.json`)
    const {lodgingId} = useParams()
    console.log(lodgingDatas, isLoading)
    return (
        <div className="lodging">
            {/* <Slideshow photosArray={photosArray} /> */}
            {lodgingId}
            {lodgingDatas}
        </div>
    )
}

export default Lodging