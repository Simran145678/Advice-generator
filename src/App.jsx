import "./App.css";
import React from "react";
import AdviceCard from "./AdviceCard";

function App() {
  const [advice, setAdvice] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [click, setClick] = React.useState(false);

  // Define an async function to handle the fetch operation
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-darkBlue flex items-center justify-center">
        <AdviceCard
          advice={advice}
          loading={loading}
          handleClick={fetchAdvice}
        />
      </div>
    </>
  );
}

export default App;
