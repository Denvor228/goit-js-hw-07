'use strict'

const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector('.gallery-container');
const galleryInner = createGallery(images);

// createUserProfile(profile);

gallery.appendChild(galleryInner);


function createGallery(images) {
    const container = document.createElement('ul');
    container.classList.add('gallery');
    const containerInner = creationImg(images);
    container.append(containerInner);

    function creationImg(images) {
        let item = undefined;
        images.forEach(element => {
            item = document.createElement('li');
            let image = document.createElement('img');
            image.src = element.url;
            image.alt = element.alt;
            item.append(image);
            image.classList.add('gallery-image');
            container.append(item);
        });
        return item;
    }
    return container;
}