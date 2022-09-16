import create from '@utils/create.js';
/* import pre from './utils/preLoader.js'; */
import '@styles/style.scss'
import '@styles/popup.scss'
import '@styles/media.scss'


import containers from '@elements/containers.js';
import blockAbout from '@content/about.js';
import blockExperience from '@content/experience.js';
import blockEducation from '@content/education.js';
import blockCertificates from '@content/certificates.js';
import blockProjects from '@content/projects.js';

import infoTitles from '@content/infoTitles.js';
import infoContacts from '@content/infoContacts.js';
import infoKnowledge from '@content/infoKnowledge.js';
import infoTools from '@content/infoTools.js';
import infoOther from '@content/infoOther.js';
import infoLanguage from '@content/infoLanguage.js';
import infoSocial from '@content/infoSocial.js';

const body = document.querySelector('body');
let head = document.querySelector('head');
const header = create('header', 'header');

const main = create('main', 'main');
const name = create('article', 'container container_name', '', main);
const photo = create('article', 'container container_photo', '', main);
const about = create('article', 'container container_about', '', main);
const experience = create('article', 'container container_experience', `${containers.experience}`, main);
const education = create('article', 'container container_education', `${containers.education}`, main);
const certificats = create('article', 'container container_certificats', `${containers.certificats}`, main);
const projects = create('article', 'container container_projects', `${containers.projects}`, main);
const info = create('article', 'container container_info', '', main);
/* const experience_content = create('p', 'text text_content', `${blockAbout.content}`, about); // ! Delete? */
document.body.prepend(header, main);

create('h2', 'name__title', `${blockAbout.title}`, name);
create('h2', 'name__subtitle', `${blockAbout.subtitle}`, name);

const imageBox = create('div', 'name__image', '', photo);
create('img', 'item-image item-image__name','', imageBox, ['src', blockAbout.photo]);

create('p', 'item__content', `${blockAbout.content}`, about);



const createExperience = function createExperience() {
  for (let i = blockExperience.length - 1; i >=0; i -= 1) {
    const item = create('section', 'item item_experience', '', experience);
    create('h3', 'item__title', `${blockExperience[i].title}`, item);
    create('h4', 'item__subtitle',`${blockExperience[i].subtitle}`, item);
    create('p', 'item__date',`${blockExperience[i].date}`, item);
    create('p', 'item__content',`${blockExperience[i].content}`, item);
  }
};

const createEducation = function createEducation() {
  for (let i = blockEducation.length - 1; i >= 0 ; i -= 1) {
    const item = create('section', 'item item_education', '', education);
    create('h3', 'item__title', `${blockEducation[i].title}`, item);
    create('h4', 'item__subtitle',`${blockEducation[i].subtitle}`, item);
    create('p', 'item__date',`${blockEducation[i].date}`, item);

    if (blockEducation[i].content) create('p', 'item__content',`${blockEducation[i].content}`, item);
  }
};

const createCertificates = function createCertificates() {
  for (let i = blockCertificates.length - 1; i >=0 ; i -= 1) {
    const item = create('section', 'item item_certificate', '', certificats,["id", blockCertificates[i].id]);
    const imageBox = create('div', 'image__box', '', item);
    const textBox = create('div', 'text__box', '', item);
    create('img', 'item__image item__image-cert','', imageBox, ['src', blockCertificates[i].badge])
    create('h3', 'item__title', `${blockCertificates[i].title}`, textBox);
    create('h4', 'item__subtitle',`${blockCertificates[i].subtitle}`, textBox);
    create('p', 'item__date',`${blockCertificates[i].date}`, textBox);
    ;
  }
};

const createProjects = function createProjects() {
  for (let i = blockProjects.length - 1; i >= 0; i -= 1) {
    const item = create('section', 'item item_project', '', projects);
    const textBox = create('div', 'text__box', '', item);
    const imageBox = create('div', 'image__box', '', item);
    const link = create('a', 'item item__link','', imageBox, ['href', blockProjects[i].link]);

    create('h3', 'item__title', `${blockProjects[i].title}`, textBox);
    create('h4', 'item__subtitle',`${blockProjects[i].subtitle}`, textBox);
    create('p', 'item__date',`${blockProjects[i].date}`, textBox);
    create('p', 'item__content',`${blockProjects[i].content}`, textBox);
    create('img', 'item__image item__image-project','', link, ['src', blockProjects[i].image]);
  }
};

const blockInfo = create('section', 'info info__contacs', '', info);
create('p', 'info__content', create('a', 'link link_info', `${infoContacts.mail}`, blockInfo, ['href',"mailto:"+infoContacts.mail]), blockInfo);
create('p', 'info__content', create('a', 'link link_info', `${infoContacts.phone}`, blockInfo, ['href',"tel:"+infoContacts.phone]), blockInfo);
create('p', 'info__content', create('a', 'link link_info', `${infoContacts.linkedinContent}`, blockInfo, ['href',infoContacts.linkedin]), blockInfo);

const blockKnowledge = function blockKnowledge() {
  const item = create('section', 'info info__knowledge','', info);
  create('h3', 'info__title',`${infoTitles.knowledge}`, item);
  for (let i = 0; i < infoKnowledge.length; i += 1) {
    create('p', 'info__content', `${infoKnowledge[i]}`, item);
  }
};

const blockTools = function blockTools() {
  const item = create('section', 'info info__tools','', info);
  create('h3', 'info__title',`${infoTitles.tools}`, item);
  create('p', 'info__content', `${infoTools.content}`, item);

};

const blockOther = function blockOther() {
  const item = create('section', 'info info__other','', info);
  create('h3', 'info__title',`${infoTitles.other}`, item);
  for (let i = 0; i < infoOther.length; i += 1) {
    create('p', 'info__content', `${infoOther[i]}`, item);
  }
};

const blockLanguage = function blockLanguage() {
  const item = create('section', 'info info__language','', info);
  create('h3', 'info__title',`${infoTitles.language}`, item);
  for (let i = 0; i < infoLanguage.length; i += 1) {
    create('p', 'info__content', `${infoLanguage[i]}`, item);
  }
};


createExperience();
createEducation();
createCertificates();
createProjects();

blockKnowledge();
blockTools();
blockOther();
blockLanguage();
/* preLoader(certificats); */

const blockSocial = create('section', 'info info__social', '', info);
create('h3', 'info__title info__title_social',`${infoTitles.social}`, blockSocial);
const boxSocial = create('div', 'box_social','', blockSocial);
create('a', 'link link_info', create('img', 'social__img social__img_li', '', '',['src',infoSocial.linkedinIcon]), boxSocial, ['href',infoSocial.linkedin]);
create('a', 'link link_info', create('img', 'social__img social__img_gh', '', '',['src',infoSocial.githubIcon]), boxSocial, ['href',infoSocial.github]);
create('a', 'link link_info', create('img', 'social__img social__img_cr', '', '',['src',infoSocial.credlyIcon]), boxSocial, ['href',infoSocial.credly]);
create('a', 'link link_info', create('img', 'social__img social__img_cw', '', '',['src',infoSocial.codewarsIcon]), boxSocial, ['href',infoSocial.codewars]);





  let popupWindow = create('div', "popup__window","",body);
  let popupCard;
function popupCreator(i) {
  popupCard = create("img", "popup__card", "", popupWindow, ['src', blockCertificates[i].image]);
}

let cards = document.querySelectorAll(".item_certificate");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    popupCreator(card.id);
    popupWindow.classList.toggle("popup__window_active");
    body.classList.toggle("overflow-hidden_desktop");
  });
});
popupWindow.addEventListener("click", function (e) {
  if (!e.target.closest(".popup__card")) {
    popupWindow.classList.toggle("popup__window_active");
    body.classList.toggle("overflow-hidden_desktop");
    popupCard.remove();
  }
});




function preLoader(arr) {
  let image = null;
  arr.forEach(function(object) {
    image = create('link', '', '', head,['rel', 'preload'], ['href', object.image], ['as', 'image'] )
  });
  return image;
}
preLoader(blockCertificates);
/* var arr = [1, -1, 2, -2, 3];

let positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr ); // 1,2,3 */