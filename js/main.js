import { fetchData } from "./modules/DataMiner.js";

(() => {
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            favTemplate = document.querySelector('#fav-template').content;
        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
    
                currentUserText[1].src = `images/${data[user].avatar}.jpg`;
                currentUserText[2].textContent = data[user].name;
                currentUserText[3].textContent = data[user].fav-about;
        
fetchData('./DataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));

})();