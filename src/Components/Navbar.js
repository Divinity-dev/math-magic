import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Calculator">Calculator</a>
        </li>
        <li>
          <a href="/Quotes">Quotes</a>
        </li>
      </ul>

    </div>
  );
}
export default Navbar;
