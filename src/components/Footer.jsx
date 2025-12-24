import "./Footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">

        <p>Designed and Developed by Abdullah Naeem</p>

        <div className="social-icons">
            <a href="https://github.com/anganger" target="_blank" rel="noreferrer" className="icon github">GITHUB</a>
            <a href="https://www.linkedin.com/in/abdullahnaeem2002/" target="_blank" rel="noreferrer" className="icon linkedin">LINKEDIN</a>
            <a href="mailto:abdullahnaeem2002a@gamil.com" className="icon email">EMAIL</a>
        </div>

      </div>
    </footer>
  );
}
