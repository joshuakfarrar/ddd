var Journal = require('./index').Journal;

var entry = new Journal.Entry();
entry.create();
entry.setTitle('hello world.');
entry.setBody('we\'re doing it live #maga');
entry.setTitle('just hello');

var author = new Journal.Author();
author.create();
author.setName('Joshua K. Farrar');

entry.addAuthor(author);
entry.addAuthor(author);
entry.removeAuthor(author);
entry.addAuthor(author);
entry.addAuthor(author);
entry.addAuthor(author);
entry.addAuthor(author);
console.log(entry._domainModel);
