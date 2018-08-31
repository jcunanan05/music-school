const Section = (props) => {
  const className = props.className ? props.className : '';

  return (
    <section className={`section content ${className}`}>
      <div className="container">
        { props.children }
      </div>
    </section>
  );
}

export default Section;