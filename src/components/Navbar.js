function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand head " href="#">Math Magicians</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav navba">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/App">Calculator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Quote">Quote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
export default Navbar;

