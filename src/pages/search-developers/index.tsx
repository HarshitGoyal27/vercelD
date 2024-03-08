import Form from "@/components/molecules/Form";
import Layout from "@/components/layout";
const SearchDeveloper = () => {
  return (
    <div>
      {/* <h1 className={css.homeWrapper}>Search Elite Developers</h1> */}
      <div>
        <Form />
      </div>
      <style jsx>{`
        .homeWrapper {
          font-family: "Poppins", sans-serif;
          font-size: 3em;
          font-weight: 700;
          color: transparent;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #fd6e6a, #ffcc5c, #38f9d7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: pulse 2s infinite;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchDeveloper;
