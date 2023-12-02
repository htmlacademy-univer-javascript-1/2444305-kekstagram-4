import { renderPhotos } from './addpreview.js';
import { shuffleArray } from './util.js';
import { showError } from './alerts.js';

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const filter = document.querySelector('.img-filters');
// eslint-disable-next-line prefer-const
let photos = [];

const removeActiveClass = () => {
  const activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach((element) => {
      element.remove();
    });
  }
};

const filters = {
  'filter-default': () => {
    renderPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
  },
  'filter-random': () => {
    renderPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));

  },
  'filter-discussed': () => {
    renderPhotos(photos.slice().sort((a, b) => b.comments.length - a.comments.length));
  },
};

const onSuccess = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice();
  renderPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
};

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
};
