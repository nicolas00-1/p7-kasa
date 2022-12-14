function Banner ({text="", picture}) { 
    return (
        <div className='banner'>
            <img src={picture} alt="banner" className="banner__image" />
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default Banner