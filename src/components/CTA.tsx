export default function CTA() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text mb-2">
        QuoteMe
      </div>
      <div className="text-center mb-4">
        <p className="text-gray-600">Your Source for Inspirational Quotes</p>
      </div>
      <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl tracking-widest text-white">
        <a href="#generate">
          <span className="relative pr-4 text-gray-600 pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
            Generate
          </span>
          <svg
            className="inline-block -translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-blue-500"
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </a>
      </button>
    </div>
  );
}
