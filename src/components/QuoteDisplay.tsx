import Bubbles from "./Bubbles";
import Quote from "./Quote"; // Assuming you have a Quote component

const QuoteDisplay: React.FC<{ quote: any; fetchRandomQuote: () => void }> = ({
  quote,
  fetchRandomQuote,
}) => {

  const handleCopy = () => {
    // Copy the quote content to the clipboard
    navigator.clipboard.writeText(quote.content);
    // You can add some visual feedback to the user if needed
    alert("Quote copied to clipboard!");
  };

  const handleShare = () => {
    // Construct the tweet URL with the quote content
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.content)}`;

    // Open the tweet URL in a new window
    window.open(tweetUrl, '_blank');
  };

  return (
    <>
      <Bubbles />
      <div
        id="generate"
        className="h-screen flex flex-col justify-center items-center"
      >
        {quote ? <Quote quote={quote} /> : <h2>Loading...</h2>}
        <div className="flex m-8">
          <div className="flex items-center bg-transparent p-2 px-6 text-xl tracking-widest text-white">
            <button className="relative pr-4 text-gray-600 pb-1" onClick={handleCopy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transition-all duration-100 ease-out  hover:scale-10 hover:text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </button>

            <button className="relative pr-4 text-gray-600 pb-1" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transition-all duration-100 ease-out  hover:scale-10 hover:text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={fetchRandomQuote}
            className="btn group flex items-center bg-transparent p-2 px-6 text-xl tracking-widest text-white"
          >
            <span className="relative pr-4 text-gray-600 pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              Generate New
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
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteDisplay;
