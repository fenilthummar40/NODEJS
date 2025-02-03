import React from 'react';
import Dashbord from './Componets/Dashbord';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingupForm from './Componets/SingupForm';
import LoginForm from './Componets/LoginForm';
import Form from './Componets/Form';
import DetailsPage from './Componets/Detailpage';

function App() {
  return (

    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/SingupForm" element={<SingupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Detailpag/:bidNumber" element={<DetailsPage />} />
          
         
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
