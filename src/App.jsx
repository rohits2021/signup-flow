import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './components/Signup';
import SubmitOTP from './components/SubmitOTP';
import ReferralCode from './components/ReferralCode';
import Dashboard from './components/Dashboard';
import './App.css';
import './style.css';

const theme = createTheme();

export const AppContext = React.createContext();
function App() {
  const [referalText, setReferalText] = useState('');
  const handleReferalChange = (value) => {
    setReferalText(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Signup referalText={referalText} handleReferalChange={handleReferalChange} />} />
            <Route path="submitOTP" element={<SubmitOTP />} />
            <Route path="referalCode" element={<ReferralCode referalText={referalText} />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
