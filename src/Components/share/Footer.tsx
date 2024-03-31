import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <div className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <Link href="/" className="text-xl">
            <Image src={logo} alt="logo" width={60} height={50} />
          </Link>
          <p>
            Fix-it-finder Industries Ltd.
            <br />
            Providing reliable tech since {currentYear}
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © {currentYear} - All right reserved by Fix-it-finder
            Industries Ltd
          </p>
        </aside>
      </div>
    </>
  );
}
