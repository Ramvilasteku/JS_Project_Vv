const apiURL = 'https://api-data-ggsb.onrender.com/Mens'

async function apiCall() {

    const dataFetch = await fetch(apiURL);
    const dataRes = await dataFetch.json();

    // dataRes.forEach(element => {
        // let card = document.createElement("div")
        // let btn=document.createElement("button")
        // btn.innerHTML="add to card"

        // document.body.append(card)
        // document.body.append(btn)

        const container = document.getElementById('card-container');
            dataRes.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                // Image
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.title || 'Product Image';

                // Title
                const title = document.createElement('h3');
                title.textContent = item.title;

                // Price
                const price = document.createElement('p');
                price.className = 'price';
                price.textContent = `Price: ${item.price}`;

                // Gender
                // const gender = document.createElement('p');
                // gender.textContent = `Gender: ${item.gender}`;

                // // Category
                // const category = document.createElement('p');
                // category.textContent = `Category: ${item.category}`;

                // // Description
                // const description = document.createElement('p');
                // description.textContent = item.description;

                // // Append elements to the card
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(price);
                // card.appendChild(gender);
                // card.appendChild(category);
                // card.appendChild(description);

                // Append the card to the container
                container.appendChild(card);
            });
        