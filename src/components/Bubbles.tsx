import './Bubbles.css';

const Bubbles: React.FC = () => {
  return (
      <div className="bubbles">
        {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
      </div>
  );
};

export default Bubbles;
