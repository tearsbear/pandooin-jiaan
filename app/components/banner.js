import Image from "next/image";

export default function Banner() {
  return (
    <div className="container mx-auto relative max-h-screen mt-10">
      <Image
        src="/assets/bg-banner.png"
        alt="Background"
        fill
        className="md:object-contain object-cover"
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 z-10 relative">
        <div className="mb-4 md:mb-0">
          <Image
            src="/assets/logo-white.svg"
            alt="zamrood logo"
            width={150}
            height={150}
          />
        </div>
        <div className="text-white text-center md:text-right">
          <span className="text-md font-albert-regular mb-2">
            Want to see other destinations? Check us out at our website
          </span>
          <a
            href="https://pandooin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl font-albert-semi underline text-center justify-center md:text-right flex mt-2 md:justify-end w-full"
          >
            Pandooin.com{" "}
            <svg
              className="ml-2"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.013L15.8333 5.17969M15.8333 5.17969V15.5797M15.8333 5.17969H5.43333"
                stroke="#FAF9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
