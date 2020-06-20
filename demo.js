var bookarray=[]
var input=prompt("Which operation you want to [add|list|exit]")
while(input != 'exit'){
  if (input == 'add'){
    var newBook=prompt('Enter the book name need to add:')
    bookarray.push(newBook)
  }
  else if(input == 'list'){
    console.log('List of books:');
    console.log(bookarray);
  }
  else{
    console.log('Choose valid option')
  }
  input=prompt("Which operation you want to [add|list|exit]")
}
