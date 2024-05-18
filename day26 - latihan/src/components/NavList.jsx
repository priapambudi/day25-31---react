const NavList = (props) => {
  const { data, handleRedirect } = props;
  return (
    <div className="navbar-list">
      {data.map((item, idx) => (
        <a onClick={() => handleRedirect(item)} key={idx}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavList;

// cara 1 langsung props
// const Navlist = (props) => {<a>{props.data[0]}</a>}

// cara 2 destructering didalam param

// cara 3
