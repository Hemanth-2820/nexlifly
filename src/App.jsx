import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import AwsDevOps from './pages/AwsDevOps';
import HostingServer from './pages/HostingServer';
import DigitalMarketing from './pages/DigitalMarketing';
import AiChatbots from './pages/AiChatbots';
import IvrSolutions from './pages/IvrSolutions';
import ApiIntegrations from './pages/ApiIntegrations';
import SecurityMaintenance from './pages/SecurityMaintenance';
import AiAutomation from './pages/AiAutomation';
import EcommerceSolutions from './pages/EcommerceSolutions';
import Works from './pages/Works';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities/web-development" element={<WebDevelopment />} />
          <Route path="/capabilities/app-development" element={<AppDevelopment />} />
          <Route path="/capabilities/software-development" element={<SoftwareDevelopment />} />
          <Route path="/capabilities/aws-devops" element={<AwsDevOps />} />
          <Route path="/capabilities/hosting-server" element={<HostingServer />} />
          <Route path="/capabilities/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/capabilities/ai-chatbots" element={<AiChatbots />} />
          <Route path="/capabilities/ivr-solutions" element={<IvrSolutions />} />
          <Route path="/capabilities/api-integrations" element={<ApiIntegrations />} />
          <Route path="/capabilities/security-maintenance" element={<SecurityMaintenance />} />
          <Route path="/capabilities/ai-automation" element={<AiAutomation />} />
          <Route path="/capabilities/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
