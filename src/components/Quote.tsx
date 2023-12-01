interface Quote {
    content: string;
    author: string;
  }

export default function Quote({ quote } : { quote: Quote}) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">{quote.content}</h2>
      <p className="text-sm italic">— {quote.author}</p>
    </div>
  );
}
