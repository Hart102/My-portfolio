

const Footer = () => {
  return (
    <div className="Footer p-4 text-center" style={footer}>
        <span>
            <a href="#jumbotrom" className="p-3" style={link}>Home</a>
            <a href="#About" className="p-3" style={link}>About</a>
            <a href="#Projects" className="p-3" style={link}>Project</a>
            <a href="#Knowledge" className="p-3" style={link}>Knowledge</a>
            <a href="#contact" className="p-3" style={link}>Contact</a>
        </span>
        <p style={P} className='mt-4'>Designed by Hart.</p>
    </div>
  )
}

const footer = {
    background: "#333"
}

const P = {
    color: "#999"
}

const link = {
    color: "#999",
    fontSize: "0.8em",
    textDecoration: "none"
}

export default Footer