import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import CTA from "./components/CTA";
import Bubbles from "./components/Bubbles";
import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";

interface Quote {
  content: string;
  author: string;
}

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const storedQuote = localStorage.getItem("randomQuote");
    if (storedQuote) {
      setQuote(JSON.parse(storedQuote));
    } else {
      fetchRandomQuote();
    }
  }, []);

  const fetchRandomQuote = () => {
    fetch("https://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const { content, author } = data[0];
          const newQuote = { content, author };
          localStorage.setItem("randomQuote", JSON.stringify(newQuote));
          setQuote(newQuote);
        } else {
          console.error("Invalid API response format");
        }
      })
      .catch((error) => console.error("Error fetching quote:", error));
  };

  return (
    <div className="app">
      <Bubbles />
      <CTA />
      <QuoteDisplay quote={quote} fetchRandomQuote={fetchRandomQuote} />
    </div>
  );
}

export default App;
