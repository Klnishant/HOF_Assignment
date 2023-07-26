const books = [
    { title: "Book 1", author: "author 1", publicationYear: 2005 },
    { title: "Book 2", author: "author 2", publicationYear: 2012 },
    { title: "Book 3", author: "author 3", publicationYear: 2008 },
    { title: "Book 4", author: "author 4", publicationYear: 2015 },
  ];

  function captilizedFirstLetter(name){
    capitalized_name=name.charAt(0).toUpperCase() + name.slice(1);
    return capitalized_name;
  };

  const filteredBooks=books.filter(book => book.publicationYear>=2010).map(book =>{
    return{
        title:book.title,
        author:captilizedFirstLetter(book.author),
        publicationYear:book.publicationYear
    }
  });

  console.log(filteredBooks);