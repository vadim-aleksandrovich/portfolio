import create from '@utils/create.js';
import '@styles/style.scss'
import '@styles/popup.scss'
import '@styles/media.scss'

import containers from '@elements/containers.js';
import blockAbout from '@content/about.js';
import blockExperience from '@content/experience.js';
import blockEducation from '@content/education.js';
import blockCertificates from '@content/certificates.js';
import blockProjects from '@content/projects.js';
import infoLanguage from '@content/infoLanguage.js';
import infoSocial from '@content/infoSocial.js';
import infoSkills from '@content/infoSkills.js';

let isProjects=true

const body = document.querySelector('body');
const header = create('header', 'header');
const main = create('main', 'main');
const name = create('article', 'container container_name', '', main);
const photo = create('article', 'container container_info', '', main);
const about = create('article', 'container container_about', '', main);
const experience = create('article', 'container container_experience', `${containers.experience}`, main);
const education = create('article', 'container container_education', `${containers.education}`, main);
const certificats = create('article', 'container container_certificats', `${containers.certificats}`, main);
if (isProjects) {
  var projects = create('article', 'container container_projects', `${containers.projects}`, main);
}

const skills = create('article', 'container container_skills', `${containers.skills}`, main);
const languages = create('article', 'container container_languages', `${containers.languages}`, main);

document.body.prepend(header, main);

create('h2', 'name__title', `${blockAbout.title}`, name);
create('h2', 'name__subtitle', `${blockAbout.subtitle}`, name);

const imageBox = create('div', 'name__image', '', photo);
create('img', 'item-image item-image__name','', imageBox, ['src', blockAbout.photo]);

create('p', 'item__content', `${blockAbout.content}`, about);

const createSkills = function createSkills() {
  for (let i = 0; i <= infoSkills.length - 1; i += 1) {
    const item = create('section', 'item item_skill', '', skills);
    const textBox = create('div', 'text__box', '', item);
    create('h4', 'item__title', `${infoSkills[i].title}`, textBox);
    create('p', 'item__content',`${infoSkills[i].content}`, textBox);
  }
};

const createExperience = function createExperience() {
  for (let i = blockExperience.length - 1; i >= 0; i -= 1) {
    const item = create('section', 'item item_experience', '', experience);
    const header = create('div', 'experience_header', '', item); // Создаем контейнер для заголовка и даты
    create('h3', 'item__title', `${blockExperience[i].title}`, header);
    create('p', 'item__date', `${blockExperience[i].date}`, header); // Дата теперь внутри header
    create('h4', 'item__subtitle', `${blockExperience[i].subtitle}`, item);
    create('p', 'item__content', `${blockExperience[i].content}`, item);
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
    // create('img', 'item__image item__image-project','', link, ['src', blockProjects[i].image]);
  }
};

const blockSocial = create('section', 'info info__social', '', photo);
const boxSocial = create('div', 'box_social','', blockSocial);
const createSocial = function creeateSocial() {
  for (let i = 0; i <= infoSocial.length - 1 ; i += 1) {
    create('a', 'link link_info', create('img', `social__img ${infoSocial[i].cssClass}`, '', '',['src',infoSocial[i].icon]), boxSocial, ['href',infoSocial[i].link]);
  }
};

const createLanguages = function createLanguages() {
  const item = create('section', 'info info__language','', languages);
  for (let i = 0; i < infoLanguage.length; i += 1) {
    create('p', 'item__content', `${infoLanguage[i]}`, item);
  }
};
createSocial();
createSkills();
createLanguages();
createExperience();
createEducation();
createCertificates();

if (isProjects) {
  createProjects();
}


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
