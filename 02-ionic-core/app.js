let addPhotoToGallery = function () {
    console.log("Ajoute une photo");
}

let getData = function (url) {

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResponse) {
            //A défaut d'avoir un framework, je crée dynamiquement les ionic elements.
            let elementsToDisplay = jsonResponse;
            for (let i = 0; i < elementsToDisplay.length; i++) {
                let component = document.createElement('ion-card');
                component.id = 'card_' + i;
                let content = document.createElement('ion-card-content');
                content.id = 'content_' + i;
                let header = document.createElement('ion-card-header');
                let title = document.createElement('ion-card-title');
                let image = document.createElement('img');
                image.src = 'https://devfest2018.gdgnantes.com' + elementsToDisplay[i].image;
                content.innerText = elementsToDisplay[i].brief;
                title.innerText = elementsToDisplay[i].title;

                header.appendChild(title);
                component.appendChild(image);
                component.appendChild(header);
                component.appendChild(content);
                document.getElementById('mainContent').appendChild(component);

            }

            // do something with jsonResponse
        });
}

let jsonResponse = getData('https://devfest-nantes-2018-api.cleverapps.io/blog');


