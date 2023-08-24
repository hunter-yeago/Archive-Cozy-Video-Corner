
import wings from '../../assets/magpie.png';
import './BackgroundImage.scss'

export function BackgroundImage() {
    return (
      <>
      <div className=".backgroundimagecontainer">
          <img className='backgroundimage' src={wings}></img>
      </div>
  
      </>
    );
}

export default BackgroundImage;