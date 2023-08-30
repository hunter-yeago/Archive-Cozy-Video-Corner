import './InfoPanel.scss';

export function InfoPanel(props) {
  
  return (
      <>
        <div className='centeredinfopanel'>

          <h1>Welcome to Cozy Video Corner!</h1>
          <p>
            This is a website to allow you to enjoy the comfort of online video watching without
            all of the distracting recommended videos and other things that these sites will oftern
            use to get you to lose track of time and watch as many as ads as possible.
          </p>

          <p>
            This has been a fun little project of mine and I'm happy with how it's turning out!
            Click the button below to start searching for some videos in this nice distraction
            free environment :)
          </p>

          <button id="search" className='startbutton' onClick={props.handler.bind(this)}>
            Start Searching!
          </button>

        </div>
        
      </>
    )
  }

export default InfoPanel;