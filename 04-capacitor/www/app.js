const { Camera, CameraResultType } = capacitorExports;

let addPhotoToGallery = async function () {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
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


