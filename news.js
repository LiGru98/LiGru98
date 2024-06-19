// Description: This file contains the code to fetch the news data from the News.json file and display it on the news page.



  fetch('News.json')
  .then(response => response.json())
  .then(cards => {
    const newsContainer = document.getElementById('news');
    
    cards.forEach(card => {
      const cardElement = document.createElement('a');
      cardElement.href = card.link;
      cardElement.className = 'swiper-slide block transform transition duration-500 ease-in-out hover:scale-105 carousel-item ';
      cardElement.innerHTML = `
        <div class="bg-white shadow-lg rounded-xl">
          <div class="bg-cover rounded-t-xl bg-center h-48" style="background-image: url('${card.image}');"></div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">${card.title}</h3>
            <h6 class="text-gray-700 mb-4">${card.description}</h6>
            <div class="flex justify-between items-center">
              <p class="text-gray-500">${card.date}</p>
              <div class="text-blue-500 flex items-center">
                <span class="mr-2">Learn more</span>
                <i class="fas fa-arrow-right"></i>
                </div>
                </div>
              </div>
            </div>
      `;
      newsContainer.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error:', error));
