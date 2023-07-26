function isValidURL(url) {
    // Regular expression to match valid URLs
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9~!*()'\-.\/?#@&=+$_:;%]+[a-zA-Z]+$/;
  
    return urlRegex.test(url);
  }
  
  // Test URLs
  const urls = [
    "http://www.example.com",
    "https://www.example.com",
    "http://subdomain.example.com",
    "https://subdomain.example.com",
    "https://example.com/page?query=value",
    "ftp://example.com", // Invalid URL
  ];
  
  // Check and print if the input matches the conditions or not
  urls.forEach(url => {
    const isValid = isValidURL(url);
    console.log(`${url} is ${isValid ? "valid" : "invalid"}.`);
  });
  