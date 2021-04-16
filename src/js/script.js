/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-semi */

{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },

    containerOf: {
      bookList: '.books-list',
      filters: '.filters',
    },

    bookImage: '.book__image',
  };

  const className = {
    imageFavorite: 'favorite',
    imageHidden: 'hidden',
  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };


  class Books {
    constructor(){
      const thisBooks = this;

      thisBooks.getElements();
      thisBooks.renderBooks();
      thisBooks.initBookClickActions();
      thisBooks.initFilterClickActions();
    };

    getElements() {
      const thisBooks = this;

      thisBooks.bookList = document.querySelector(select.containerOf.bookList);
      thisBooks.filtersWrapper = document.querySelector(select.containerOf.filters);
      thisBooks.imageWrapper = document.querySelector(select.bookImage);
      thisBooks.favoriteBooks = [];
      thisBooks.filters = [];
    };

    renderBooks() {
      const thisBooks = this;

      for ( const book of dataSource.books ) {
        const rating = book.rating;
        book.ratingBgc = thisBooks.determineRatingBgc(rating);
        book.ratingWidth = rating * 10; //procentowa wartość

        const generateHTML = templates.bookTemplate(book);
        const generatedDOM = utils.createDOMFromHTML(generateHTML);
        thisBooks.bookList.appendChild(generatedDOM);
      };
    };

    initBookClickActions() {
      const thisBooks = this;

      thisBooks.bookList.addEventListener('dblclick', function(event) {
        event.preventDefault();
        const clickedElement = event.target.offsetParent;

        if (!clickedElement.classList.contains(thisBooks.imageWrapper)) {
          const bookId = clickedElement.getAttribute('.data-id');
          if (!clickedElement.classList.contains(className.imageFavorite)) {
            thisBooks.favoriteBooks.push(bookId);
            clickedElement.classList.add(className.imageFavorite);}
          else {
            thisBooks.favoriteBooks.splice(thisBooks.favoriteBooks.indexOf(bookId), 1);
            clickedElement.classList.remove(className.imageFavorite);
          };
        };
      });
    };

    initFilterClickActions() {
      const thisBooks = this;

      thisBooks.filtersWrapper.addEventListener('click', function(event) {
        const clickedElement = event.target;

        if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'checkbox' && clickedElement.name === 'filter') {
          if (clickedElement.checked) {
            thisBooks.filters.push(clickedElement.value);}
          else {
            const id = thisBooks.filters.indexOf(clickedElement.value);
            thisBooks.filters.splice(thisBooks.filters.indexOf(id), 1);
          };
        };
        thisBooks.filterBooks();
      });
    };

    filterBooks() {
      const thisBooks = this;

      for ( const hiddenBook of dataSource.books ) {
        let shouldBeHidden = false;

        for ( const filter of thisBooks.filters) {
          if (!hiddenBook.details[filter]) {
            shouldBeHidden = true;
            break; //przerwanie działania funkcji
          };
        };
        const book = document.querySelector('.book__image[data-id="' + hiddenBook.id + '"]');

        if (shouldBeHidden) {
          book.classList.add(className.imageHidden);}
        else {
          book.classList.remove(className.imageHidden);
        };
      };
    };

    determineRatingBgc(rating) {
      const thisBooks = this;

      if (rating < 6) {
        thisBooks.ratingColor = 'linear-gradient(to bottom, #FFF96A 0%, #FFF61D 100%);';};
      if (rating > 6 && rating <= 8) {
        thisBooks.ratingColor = 'linear-gradient(to bottom, #C3FF62 0%,#7AE700 100%);';};
      if (rating > 8 && rating <= 9) {
        thisBooks.ratingColor = 'linear-gradient(to bottom, #ACFF52 0%, #55ED00 100%);';};
      if (rating > 9) {
        thisBooks.ratingColor = 'linear-gradient(to bottom, #63FF69 0%,#1A951F 100%);';};

      return thisBooks.ratingColor;
    };
  };

  const app = {
    init: function() {
      new Books();
    },
  };
  app.init();
};

