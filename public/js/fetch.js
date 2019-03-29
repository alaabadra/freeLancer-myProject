const fetch = (endpoint, {method,body}, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          if (response.error) {
            cb(new TypeError('error in status'), null);
          } else {
            cb(null, response);
          }
        } else {
          cb(new TypeError('Error in state'));
          
        }
      }
    };
    xhr.open(method, endpoint);
    xhr.send(body);
  };
  if (typeof module !== 'undefined') {
    module.exports = fetch;
  }


  