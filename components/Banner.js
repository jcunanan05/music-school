const mediaQuery = {
  smallDevices: '(max-width: 799px)'
};

const imgSource = {
  smallDevices: '/static/banner/school.png',
  largeDevices: '/static/banner/school.png'
}

/**
 * Note: No Alternative set of images yet.
 * Need to add soon 
 */

const Banner = () => {
  return (
    <header className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-hidden">
            Weston New Music School
          </h1>

          <picture className="image banner__image">
            <source 
              media={mediaQuery.smallDevices} 
              srcSet={imgSource.smallDevices}/>

            <img 
              src={imgSource.largeDevices} 
              alt="Logo of Weston New Music School"/>
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Banner;