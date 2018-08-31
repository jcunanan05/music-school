const Box = (props) => (
  <section className={`box content`}>
    <h3 className="title">{props.title}</h3>
    { props.content }

    { props.children }
  </section>
);

export default Box;