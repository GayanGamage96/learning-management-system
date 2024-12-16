import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p> &copy; 2024 NAME. All Rights Reserved.</p>
      <div className="footer__links">
        {footerLinks.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "_")}`}
            className="footer__link"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
