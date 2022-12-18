import { useState } from "react"

function Slideshow(photosArray) {
    const numberOfphotos = photosArray.length()
    const firstPhoto = photosArray[0]
    const lastPhoto = photosArray[numberOfphotos-1]
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto===firstPhoto) {
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex-1])
        }
    }
    const nextPhoto = function (actualPhoto) { 
        if (actualPhoto===lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex+1])
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow__image">              
                    <img src={actualPhoto} alt="lodging" />                 
            </div>
            {numberOfphotos !== 1 &&
            <div>
                <div className="slideshow__arrows">
                    <span onClick={previousPhoto(actualPhoto)}> &lt </span>
                    <span onClick={nextPhoto(actualPhoto)}> &gt </span>
                </div>
                <div className="slideshow__bulletpoint">
                    {actualPhoto}/{numberOfphotos}
                </div>
            </div>
            }
        </div>
    )
}

export default Slideshow