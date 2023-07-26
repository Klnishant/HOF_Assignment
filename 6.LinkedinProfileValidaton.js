function isValidLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/;
  
    return urlRegex.test(url);
  }
  
  // Test LinkedIn profile URLs
  const profileURLs = [
    "https://www.linkedin.com/in/john-doe",
    "https://www.linkedin.com/in/jane_doe123",
    "https://www.linkedin.com/in/alex-smith_1",
    "https://www.linkedin.com/in/ann_williams-123456789012345678901234567890",
    "https://www.linkedin.com/in/invalid!profile", // Invalid URL
    "https://www.linkedin.com/in/invalid profile", // Invalid URL
    "https://www.linkedin.com", // Invalid URL
    "http://www.linkedin.com/in/john-doe", // Invalid URL
  ];
  
  // Check and print if the input URLs are valid or not
  profileURLs.forEach(url => {
    const isValid = isValidLinkedInURL(url);
    console.log(`${url} is ${isValid ? "a valid" : "an invalid"} LinkedIn profile URL.`);
  });
  