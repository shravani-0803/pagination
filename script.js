const container = document.getElementById("cardcontainer");
      fetch('datajson.json')
      .then(response=>response.json())
      .then(data=>
      data.forEach(data =>{
        const card = document.createElement("div");
        card.classList.add("card") 
      
        card.innerHTML = `
          <img src="${data.image_url}" alt="${data.title} Image">
          <h3>${data.title}</h3>
          <p>${data.category}</p>
        `;
        container.appendChild(card);
      })
      );

	const cardcontainer = document.querySelector('.cardcontainer'); 
	const i = 1; 
	function prev() { 
		if (i == 1) { 
			document.getElementsByClassName('prev').disabled = true; 
			document.getElementsByClassName('next').disabled = false; 
		} else { 
			i--; 
			return setimage(); 
		} 
	} 
	function next() { 
		if (i == 5) { 
			document.getElementsByClassName('next').disabled = true; 
			document.getElementsByClassName('prev').disabled = false; 
		} else { 
			i++; 
			return setimage(); 
		} 
	} 
	
	function setimage() { 
		return cardcontainer.innerHTML = i; 
	}
