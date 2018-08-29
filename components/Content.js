const Content = (props) => {

  return (
    <section className="section content">
      <div className="container">
        { props.children }
      </div>
    </section>
  );
}

export default Content;