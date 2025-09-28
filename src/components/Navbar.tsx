
const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="logo">
        <img 
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=100&h=100&fit=crop" 
          alt="Logo"
        />
        <h2>Blog App</h2>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
