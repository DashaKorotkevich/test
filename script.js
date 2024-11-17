console.log('js')

fetch('./modules/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const contentElement = document.getElementById('content');
        if (contentElement) { // Проверка наличия элемента
          contentElement.innerHTML = data;
        } else {
          console.error('Element with id "content" not found');
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });