const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/Users/DELL/Desktop/nexlifly/src/pages';
const files = fs.readdirSync(pagesDir);

const skippedFiles = ['ContactUs.jsx', 'Home.jsx', 'About.jsx', 'Works.jsx'];

files.forEach(file => {
  if (!file.endsWith('.jsx') || skippedFiles.includes(file)) {
    return;
  }

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('className="btn-hero-consult"')) {
    console.log(`Skipping ${file} - no btn-hero-consult found.`);
    return;
  }

  console.log(`Processing ${file}...`);

  // Replace button tag with one that has the onClick handler
  content = content.replace(
    /<button className="btn-hero-consult">/,
    `<button className="btn-hero-consult" onClick={() => window.open('https://calendly.com/nexlifly2/30min', '_blank')}>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated ${file} with Calendly redirect.`);
});
