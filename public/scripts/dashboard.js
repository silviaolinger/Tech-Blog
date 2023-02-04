const articleFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#create-title').value.trim();
    const content = document.querySelector('#create-content').value.trim();
  
    if (title && content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

document
.querySelector('.article-form')
.addEventListener('submit', articleFormHandler);