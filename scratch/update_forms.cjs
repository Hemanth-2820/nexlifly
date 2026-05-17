const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/Users/DELL/Desktop/nexlifly/src/pages';
const files = fs.readdirSync(pagesDir);

const skippedFiles = ['ContactUs.jsx', 'Home.jsx', 'About.jsx', 'Works.jsx', 'WebDevelopment.jsx', 'AppDevelopment.jsx', 'AwsDevOps.jsx', 'SoftwareDevelopment.jsx'];

const serviceNames = {
  'AiAutomation.jsx': 'AI & Automation',
  'AiChatbots.jsx': 'AI Chatbots',
  'ApiIntegrations.jsx': 'API Integrations',
  'AppDevelopment.jsx': 'App Development',
  'AwsDevOps.jsx': 'AWS & DevOps',
  'DigitalMarketing.jsx': 'Digital Marketing',
  'EcommerceSolutions.jsx': 'E-Commerce Solutions',
  'HostingServer.jsx': 'Hosting & Servers',
  'IvrSolutions.jsx': 'IVR Solutions',
  'SecurityMaintenance.jsx': 'Security & Maintenance',
  'SoftwareDevelopment.jsx': 'Software Development',
  'WebDevelopment.jsx': 'Web Development'
};

files.forEach(file => {
  if (!file.endsWith('.jsx') || skippedFiles.includes(file)) {
    return;
  }

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('const [clientType, setClientType] = useState')) {
    console.log(`Skipping ${file} - no clientType state found.`);
    return;
  }

  console.log(`Processing ${file}...`);

  // 1. Add CapabilityForm import and clean up React import
  content = content.replace(
    /import React,\s*{\s*useEffect,\s*useState\s*}\s*from\s*'react';/,
    "import React, { useEffect } from 'react';\nimport CapabilityForm from '../components/CapabilityForm';"
  );

  // 2. Remove clientType and budget state declarations
  content = content.replace(
    /\s*const\s*\[clientType,\s*setClientType\]\s*=\s*useState\('[^']*'\);\s*const\s*\[budget,\s*setBudget\]\s*=\s*useState\('[^']*'\);/,
    ""
  );

  // 3. Find the heading/title in the form card
  const headingMatch = content.match(/<div className="form-card-exact">\s*<h3>([\s\S]*?)<\/h3>/);
  if (!headingMatch) {
    console.error(`Error: Could not find form card heading in ${file}`);
    return;
  }
  const fullTitle = headingMatch[1].trim(); 
  const serviceName = serviceNames[file] || fullTitle.replace("Get Started with ", "").trim();

  // 4. Replace the entire old form block
  const formBlockRegex = /<div className="hero-form-wrapper">[\s\S]*?<\/form>\s*<\/div>\s*<\/div>/;
  
  const replacementFormBlock = `<div className="hero-form-wrapper">
              <div className="form-card-exact">
                <CapabilityForm title="${fullTitle}" serviceName="${serviceName}" />
              </div>
            </div>`;

  if (content.match(formBlockRegex)) {
    content = content.replace(formBlockRegex, replacementFormBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated ${file} with CapabilityForm (Service: ${serviceName}).`);
  } else {
    console.error(`Error: Could not match form block regex in ${file}`);
  }
});
