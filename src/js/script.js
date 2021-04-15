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
  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };


  function render(){
    for(const data of dataSource.books){
      /*generate HTML based on template */
      const bookList = document.querySelector(select.containerOf.bookList);
      const generateHTML = templates.bookTemplate(data);

      /*create element using utils.createElementFromHTML */
      const elementHTML = utils.createDOMFromHTML(generateHTML);

      /*add element to menu */
      bookList.appendChild(elementHTML);
    }
  }

  render();

}


