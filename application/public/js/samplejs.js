
document.getElementById("get-photos").onclick = getPhotos;

function getPhotos(){
    var photoCount;
    function fadeOut(event) {
        var fadeTarget = event.currentTarget;                           //element to fade out
        console.log(`the fade target is ${fadeTarget} !`);              //returns "the fade target is [object HTMLDivElement] "
        var fadeTargetOpacity = 1;                                      //set opacity of our target element
        console.log(typeof(fadeTargetOpacity));                         //returns "string"

        var fadeEffect = setInterval(function () {                      //interval set-200 milliseconds

            fadeTargetOpacity -= 0.1;
            fadeTarget.style.opacity = fadeTargetOpacity;               //update opacity
            console.log(`current opacity is  ${fadeTargetOpacity} `);   
                
             if(fadeTargetOpacity <= 0.1){
                clearInterval(fadeEffect);      
                fadeTarget.remove();                                    //remove from DOM
                photoCount -=1;                                         //update photo count
                document.getElementById('item-count').innerHTML = `There are ${photoCount} photos shown`;    //update photo count
            } 
                   
        }, 150);
    }
   
    let mainDiv = document.getElementById('container');
        if(mainDiv){ 
            let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos";
            fetch(fetchURL)
            .then((data) => data.json())    //parse data
            .then((photos) => {
                //let innerHTML = "";
                photos.forEach((photo) => {             // forEach() calls createPhotoCard for each element in photos[]
                    createPhotoCard(photo, mainDiv);      //create card for each photo 
                });
                photoCount = photos.length;
                document.getElementById('item-count').innerHTML = `There are ${photos.length} photos shown`;
            }).catch( (error) => {
                console.log(error);
            });
        }

        function createPhotoCard(data, containerDiv) {
            let div = document.createElement('div');
            let photo = document.createElement('img');
            let photoTitle = document.createElement('div');
            let photoTitleText = document.createElement('p');
            photoTitleText.innerHTML = (`${data.title}`);       //each photo assigned its unique title

            div.setAttribute("id", `photo-${data.id}`);         //each div assigned its unique id 
            div.setAttribute("class", 'fadeout');
            photo.setAttribute("src", `${data.url}`);           //each img assigned its unique url
        
            photoTitle.appendChild(photoTitleText);                      
            div.appendChild(photo);
            div.appendChild(photoTitleText);
        
            photo.width = "240";
            photo.height = "240";
            containerDiv.appendChild(div);                      //append photo cards to grid

            div.addEventListener("click", fadeOut);             //fade out card when clicked
        } 
        
 
}