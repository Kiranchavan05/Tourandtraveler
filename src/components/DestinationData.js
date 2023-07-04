
import './DestinationStyle.css'


const DestinationData=(props)=>{
    return(
        <>
        <div className={props.className}>
          <div className="dex-text">
            <h2>{props.heading}</h2>
            <p>
              {props.text}
            </p>
          </div>

          <div className="image">
            <img alt="img" src={props.i1}/>
            <img alt="img" src={props.i2}/>


          </div>
        </div>


        </>
    )
}

export default DestinationData;
