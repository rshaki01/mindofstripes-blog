import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <div className="flex h-[85vh] flex-col justify-center items-center">
        {/* Featured Articles */}
        <div className="w-[80vw] h-[55vh] mx-auto grid grid-cols-5 justify-items-center relative" >
          {/* objectFit ensures that image is cropped and maintains aspect ratio */}
          <div className="relative h-full w-full"> 
            <Image
            src="/images/Ken-Ijima-Header.jpeg"
            fill={true}
            alt="Picture of Ken, founder of Vujade"
            style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full w-full"> 
            <Image
            src="/images/Ken-Ijima-Header.jpeg"
            fill={true}
            alt="Picture of Ken, founder of Vujade"
            style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full w-full"> 
            <Image
            src="/images/Ken-Ijima-Header.jpeg"
            fill={true}
            alt="Picture of Ken, founder of Vujade"
            style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full w-full"> 
            <Image
            src="/images/Ken-Ijima-Header.jpeg"
            fill={true}
            alt="Picture of Ken, founder of Vujade"
            style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full w-full"> 
            <Image
            src="/images/Ken-Ijima-Header.jpeg"
            fill={true}
            alt="Picture of Ken, founder of Vujade"
            style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex justify-center my-5">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover more →
          </a>
        </div>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="localhost:3000/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            About
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="localhost:3000/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Contact
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="http://instagram.com/mindofstripes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Socials
          </a>
        </footer>
      </div>
    </div>
    
  );
}
