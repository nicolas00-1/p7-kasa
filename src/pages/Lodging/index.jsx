import { useParams } from "react-router-dom"

function Lodging () {
    const {lodgingId} = useParams()
    return (
        <div className="lodging">
            {lodgingId}
        </div>
    )
}


export default Lodging