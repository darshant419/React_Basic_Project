
const Fundamental = ["Fundamental", "Curical", "Core"]

function genfundamental(dar) {
  return Math.floor(Math.random() * (dar + 1));
}

 function Header() {
  const RandomELe = Fundamental[genfundamental(2)];

  return (
    <header>
      <img src="/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {RandomELe} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
}

export default Header;
