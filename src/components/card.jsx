import './card.css'
function Card({path,course,description,style}){
    return(
        <div className="card-container">
            <div className="img-container">
                <img src={path} alt="course-image" />
            </div>
            <div className="text-container">
                <div id="info">
                    <h3 style={style}>{course}</h3>
                    <h3>$57</h3>
                </div>
                <p>{description}</p>
                <div id="rate">
                    <div className="stars">
                        <img src="../assets/star.png" alt="star" />
                        <p>5.0</p>
                    </div>
                    <div className="number">
                        <p>265.7K <span>students</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card