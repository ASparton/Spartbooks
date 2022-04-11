import axios from 'axios';
import { useState, useEffect } from 'react';

// subcomponents
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import BooksGrid from './components/BooksGrid.js';

// styles
import './App.css';

function App() {

  const [booksList, setBooksList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  
  /**
   * Build a useable book object for the project coming from the Google Books API book object.
   * @param {object} apiBook the Google Books API book object
   * @return a useable book object for the project.
   */
  function parseBook(apiBook) {
    return {
      id: apiBook.id,
      title: apiBook.volumeInfo.title,
      publishedDate: apiBook.volumeInfo.publishedDate,
      categories: 'categories' in apiBook.volumeInfo ? apiBook.volumeInfo.categories : [],
      description: 'description' in apiBook.volumeInfo ? apiBook.volumeInfo.description : null,
      thumbnailLink: 'imageLinks' in apiBook.volumeInfo ? apiBook.volumeInfo.imageLinks.thumbnail: null,
      price: 'listPrice' in apiBook.saleInfo ? apiBook.saleInfo.listPrice.amount : null,
      currencyCode: 'listPrice' in apiBook.saleInfo ? apiBook.saleInfo.listPrice.currencyCode : null,
      buyLink: 'buyLink' in apiBook.saleInfo ? apiBook.saleInfo.buyLink : null
    }
  }

  /**
   * Replace the current books list with a new one with the given author's name.
   * @param {string} name the author's name
   */
  function searchForAuthor(name) {
    axios.get('https://www.googleapis.com/books/v1/volumes?maxResults=40&orderBy:newest&q=inauthor:' + name)
    .then(data => {
      let parsedBooksList = [];
      for (let apiBook of data.data.items) {
        parsedBooksList.push(parseBook(apiBook));
      }
      
      setBooksList(parsedBooksList);
      setPageIndex(0);
    })
    .catch(error => console.error(error));
  }

  /**
   * Decrement the index page if > 0
   */
  function previousPage() {
    if (pageIndex === 0)
      return;
    setPageIndex((prev) => prev - 1);
  }

  /**
   * Increment the index page if < 4
   */
  function nextPage() {
    if (pageIndex === 4)
      return;
    setPageIndex((prev) => prev + 1);
  }

  useEffect(function() {
    searchForAuthor('');
  }, [])

  return (
    <>
      <Header searchFunction={searchForAuthor} />
      <main>
        <BooksGrid booksList={booksList.slice(pageIndex * 9, (pageIndex * 9 + 9 > booksList.length ? 40 : pageIndex * 9 + 9))} />
      </main>
      <Footer previousPageFunction={previousPage} nextPageFunction={nextPage} />
    </>
  );
}

export default App;