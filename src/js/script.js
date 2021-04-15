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
    imageFavorite: 'favorite'
  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };


  class Books {
    constructor(){
      const thisBooks = this;

      thisBooks.getElements();
      thisBooks.renderBooks();
      thisBooks.initActions();
    };

    getElements() {
      const thisBooks = this;

      thisBooks.bookList = document.querySelector(select.containerOf.bookList);
      thisBooks.image = document.querySelector(select.bookImage);
      thisBooks.favoriteBooks = [];
    };

    renderBooks() {
      const thisBooks = this;

      for ( const book of dataSource.books ) {
        const generateHTML = templates.bookTemplate(book);
        const generatedDOM = utils.createDOMFromHTML(generateHTML);
        thisBooks.bookList.appendChild(generatedDOM);
      };
    };

    initActions() {
      const thisBooks = this;

      thisBooks.bookList.addEventListener('dblclick', function(event) {
        event.preventDefault();

        const clickedElement = event.target.offsetParent;

        if (!clickedElement.classList.contains(select.bookImage)) {
          const bookId = thisBooks.getAttribute('.data-id');

          if (!clickedElement.classList.contains(className.imageFavorite)) {
            thisBooks.favoriteBooks.push(bookId);
            clickedElement.classList.add(className.imageFavorite);
          }
          else {
            thisBooks.favoriteBooks.splice(thisBooks.favoriteBooks.indexOf(bookId), 1);
            clickedElement.classList.remove(className.favoriteBooks);
          };
        };
      });
    };
  };

  const app = {
    init: function() {
      new Books();
    },
  };
  app.init();
};

