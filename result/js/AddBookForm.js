class AddBookForm extends React.Component{
 
 constructor(props){
     super(props);
     this.state = {
       id: 0,
       title: "",
       author: "",
       price: 0     
     };
    
     //сво-во для будущего "рефа"
     this.inputTitle = null;
     //получение самой ссылки
     this.setRefInputTitle = elem => {
       this.inputTitle = elem;
     } 
     this.focusTextInput = () => {
      if (this.inputTitle) this.inputTitle.focus();
     }
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
 
 componentDidMount(){
  this.focusTextInput();
 }
 
  isValidBook(book){
   return book.id && book.title.trim() && book.author.trim() ;
  }
 //https://vk.com/jsspec
  handleSubmit(ev){
   ev.preventDefault();
   let book = {
     id: parseInt(this.state.id),
     title: this.state.title,
     author: this.state.author,
     price: parseFloat(this.state.price)    
   };
   
   if(this.isValidBook(book)){
     //dataBook.push(book);
     this.setState({id: 0,title: "",author: "",price: 0});
     let handleAddBook = this.props.handleAddBook;
     handleAddBook(book);
   }else 
     alert("Заполните поля");
  } 
  handleChange(ev){
   ev.preventDefault();
   //console.log(ev.target.name,ev.target.value);
   let newstate = {};
   newstate[ev.target.name]=ev.target.value;
   this.setState(newstate);
  }
 
  render(){
   return <form action="" onSubmit={this.handleSubmit} className="addbookform">
 <h3>Добавление книги</h3>     
 <div><label>id</label> <input type="text" name="id" onChange={this.handleChange} value={this.state.id} autoComplete="off" /></div>
 <div><label>Название</label> <input type="text" name="title"  onChange={this.handleChange} value={this.state.title} ref={this.setRefInputTitle} autoComplete="off" /></div>
 <div><label>Авторы</label> <input type="text" name="author"  onChange={this.handleChange} value={this.state.author} autoComplete="off"/></div>
 <div><label>Цена</label> <input type="text" name="price"  onChange={this.handleChange} value={this.state.price} autoComplete="off"/></div>
 <div><input type="submit" value="Добавить" className="btn btn-success"/></div>
</form>;

   
  }
}