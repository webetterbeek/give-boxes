import boxes from '../data/data.json';

const boxesContainerFr = document.querySelector('.boxes-container__fr');
const boxesContainerNl = document.querySelector('.boxes-container__nl');

const renderItem = function(object, container, lang = 'fr') {

    const { nameFr, nameNl, streetFr, number, streetNl, websiteFr, websiteNl, giveBox, usersOnly, bookBox, isPublic } = object;
    let dataType = giveBox ? 'givebox' : 'bookbox';;
    let boxClass = giveBox ? 'givebox' : 'bookbox';
    let boxSvg = giveBox ? 'store' : 'book';
    let boxBadge = giveBox ? 'givebox' : 'bookbox';
    let boxBadgeContent = giveBox ? 'Give-box' : 'Boîte à livres';
    let boxName;
    lang === 'fr' ? boxName = nameFr : boxName = nameNl;
    let address = lang === 'fr' ? `${streetFr} ${number}` : `${streetNl} ${number}`;
    let website;
    lang === 'fr' ? website = websiteFr : website = websiteNl;

    let html = `
    <li class="card card--${boxClass}" data-type="${dataType}">
        <div class="card__header">
            <div class="card__icon card__icon--${boxClass}">
                <i class="fas fa-${boxSvg}">&nbsp;</i>                
            </div>
            <h2 class="card__name">${boxName}</h2>
        </div>
        
        <p class="card__address">        
          <i class="fas fa-map-marker-alt">&nbsp;</i>
            ${address}
        </p>
        
        <hr class="card__divider">
        
        <div class="card__footer">
          <ul class="card__badges">
            <li class="badge badge--${boxBadge}">${boxBadgeContent}</li>`;
    if (usersOnly) html += `<li class="badge badge--private">Accès restreint</li>`;
    if (isPublic) html += `<li class="badge badge--public">Accès public</li>`;

    html += `</ul>`;

    if (website) html += `<a href="${website}" target="_blank" class="card__link">Website<i class="fas fa-external-link-alt" aria-hidden="true">&nbsp;</i></a>\n          
    `;
          
        html += `</div>\n </li>`



    container.insertAdjacentHTML('beforeend', html);

}

const normalizeBox = box => ({
    ...box,
    giveBox: box["give-box"],
    usersOnly: box["users-only"],
    bookBox: box["book-box"],
    isPublic: box.public
});

const htmlmaker = function(objects, lang = 'fr') {
    let container;
    lang === 'fr' ? container = boxesContainerFr : container = boxesContainerNl;

    objects.map(normalizeBox).forEach(box => {
        renderItem(box, container, lang);
    });
}

htmlmaker(boxes);
htmlmaker(boxes, 'nl');