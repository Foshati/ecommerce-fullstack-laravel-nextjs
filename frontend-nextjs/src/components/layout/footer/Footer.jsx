import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-black rounded footer footer-center text-base-content">
        <div className="m-1">
          <p className="hidden lg:block">
            Copyright &copy; 2024 - All right reserved by{" "}
            <a
              className="cursor-pointer hover:text-red-500"
              href="https://github.com/Foshati"
              target="_blank"
              rel="noopener noreferrer" /* Prevent tabnabbing security attack */
            >
              Foshati
            </a>
          </p>

          <nav className="grid grid-flow-col gap-4">
            <Link href="" className="link link-hover">
              About us
            </Link>
            <Link href="" className="link link-hover">
              Contact
            </Link>
            <Link href="" className="link link-hover">
              Jobs
            </Link>
            <Link href="" className="link link-hover">
              Press kit
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
