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

    bookImages: {
      imageWrapper: '.book__image',
    }
  };
  const className = {
    bookImages: {
      wrapperFavorite: 'favorite',

    }
  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };


  class Books {
    constructor(id, data){
      const thisBooks = this;

      thisBooks.id = id;
      thisBooks.data = data;

      thisBooks.getElements();
      thisBooks.renderBooks();
      thisBooks.initActions();

    };


};

