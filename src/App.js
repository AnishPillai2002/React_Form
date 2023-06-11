import React,{useState} from 'react';
import FormComponent from './components/FormComponent';
import Navbar from './components/Navbar';
import DetailsComponent from './components/DetailsComponent';
import { BrowserRouter } from "react-router-dom";


const App = () => {

  const [submittedData, setSubmittedData] = useState(null);

  //handling form submit
  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  //handling go back
  const handleGoBack = () => {
    setSubmittedData(null);
  };

  return (
    <BrowserRouter>

      <Navbar/>
      {!submittedData ? (
        <FormComponent onSubmit={handleFormSubmit} />
      ) : (
        <DetailsComponent {...submittedData} onGoBack={handleGoBack} />
      )}
    </BrowserRouter>

  );
};

export default App;