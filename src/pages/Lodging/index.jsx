import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import useFetch from "../../utils/hooks/useFetch"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"


function getLodgingWithId (lodgingDatas, lodgingId) {
    for (let lodging of lodgingDatas) {
        if (lodging.id===lodgingId) { 
            console.log(lodging.id, lodgingId, lodging)
            return lodging
        }
    }
}


function Lodging () { 
    const {datas, isLoading} = useFetch("/logements.json")
    const {lodgingId} = useParams()
    const lodgingDatas = datas
    const lodging = getLodgingWithId(lodgingDatas, lodgingId)

    return (
        <div className="lodging"> 
            <Slideshow photosArray={lodging.pictures} />
            <div className="lodging__informations">
                <div className="lodging__informations__lodging">
                    <div className="loding__informations__lodging__title">{lodging.title}</div>
                    <div className="lodging__informations__lodging__location">{lodging.location}</div>
                    <ul className="lodging__informations__lodging__tags">
                        {lodging.tags.map((tag)=>(
                            <li key={tag.index} className="lodging__informations__lodging__tags__tag">{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="lodging__informations__hostAndRate">
                    <div className="lodging__informations__hostAndRate__host">
                        <div className="lodging__informations__hostAndRate__host__name">{lodging.host.name}</div>
                        <div className="lodging__informations__hostAndRate__host__picture">
                            <img src={lodging.host.picture} alt={lodging.host.name} />
                        </div>
                    </div>
                    <Rating rate={parseInt(lodging.rating)} />
                </div>
            </div>
            <Collapse label="Description" description={lodging.description}/>
            <Collapse label="Equipements" description={lodging.equippments}/>
        </div>
    )
}


export default Lodging