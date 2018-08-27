const mediaQuery = {
  smallDevices: '(max-width: 799px)'
};

/**
 * Note: No Alternative set of images yet.
 * Need to add soon 
 */

const Banner = () => {
  return (
    <picture className="image">
      <source media={mediaQuery.smallDevices} srcSet="/static/banner/school.png"/>
      <img src="/static/banner/school.png" alt="Logo of Weston New Music School"/>
    </picture>
  );
};

export default Banner;