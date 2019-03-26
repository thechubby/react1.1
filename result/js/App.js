class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      dataBook: this.props.dataBook,
      items: {}
    };
    this.addBook = this.addBook.bind(this); 
    this.addBasket = this.addBasket.bind(this); 
    this.removeBasket = this.removeBasket.bind(this); 
  }
  
   removeBasket(id){
     let items = Object.assign({},this.state.items);
     delete items[id]; 
     console.log(items);
     this.setState({ items: items});
   }  
   addBasket(id){
     let items = Object.assign({},this.state.items);
     items[id] = (id in items) ? items[id]+1 : 1;
     console.log(items);
     this.setState({ items: items});
   }
 
  addBook(book){
   //alert(JSON.stringify(book))
   
   this.setState( prev =>{
    return {dataBook:prev.dataBook.concat(book)}
   });
   
//    let toAdd = Object.assign({},book);
//    this.setState({
//      dataBook: [...this.state.dataBook, toAdd]
//    }); 

  }
 
  render(){
    const book = this.state.dataBook. map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    handleAddBasket={this.addBasket}
    /> :
    <BookWithoutPrice
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    />
    )
    )
    return <div>
      <Basket items={this.state.items} dataBook={this.state.dataBook} handleRemoveBasket={this.removeBasket} />
      <AddBookForm handleAddBook={this.addBook}/>
      <SearchForm />
     {book}
    </div>;
  }
}