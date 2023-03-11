export default function Navbar() {
  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          Mr. Meow
        </a>
        <nav>
          <div className="close-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <a href="#" className="active">
            Nip
          </a>
          <a href="#">Fur</a>
          <a href="#">Paw</a>
        </nav>
        <div className="bar-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="overlay"></div>
      </div>
    </header>
  );
}
