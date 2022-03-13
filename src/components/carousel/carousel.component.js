import './carousel.styles.scss'

const carouselComponent = () => {

  return (
    <div id="wrapper">

      <div className="dust"><img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/dust.png" /></div>

      <div className="foreground"><img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/foreground.png" />
      </div>

      <div className="midground"><img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/midground.png" />
      </div>

      <div className="background"><img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/background.jpg" />
      </div>
    </div>
  )
}

export default carouselComponent;
