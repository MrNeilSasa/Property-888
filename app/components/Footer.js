import React from "react";
import Link from "next/link";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                <span>&copy; 2025 Property 888. All rights reserved.</span>
            </div>
            <div className="trueSPAC">
                <p>Powered by <br/> TrueSPAC Web 3 Crypto</p>            
            </div>
            <div className="footer__links">
                <Link href="/terms-of-service">Terms of Service</Link>
                <span> &middot; &nbsp; </span>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <span>&middot; &nbsp; </span>
                <Link href="/legal-disclaimer">Disclaimer</Link>
            </div>
        </footer>
    );
}

export default Footer;