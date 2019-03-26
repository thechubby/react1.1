class AddBookForm extends React.Component{
  constructor(props){
		super(props);
		
		this.state = {
			id: 0,
			title: '',
			author: '',
			price: 0			
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}
	
	isValidBook(book){
		console.log(book);
    if(book.id && book.title && book.author)
       return true;
    else 
			 return false;		 		
	}
	
	handleSubmit(e){
		e.preventDefault();
		console.log('Попытка отправки формы');
		
		/* //красиво с деструктуризацией
		let {id, title, author, price} = this.state;
		dataBook.push({id, title, author, price});
		*/
		
		
		let newBook = {
			id: +this.state.id,
			title: this.state.title,
			author: this.state.author,
			price: +this.state.price,
		}
		if(this.isValidBook(newBook))
		  this.props.handlerAddBook(newBook);
		else 
			alert('Заполните поля');
		
	}
	
	handleChange(e){
		//e.preventDefault();
		console.log('Изменение поля ',e.target.name);
		
		const newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
		console.log(e.target.name,e.target.value);
	}
	
	render(){
		return <form onSubmit={this.handleSubmit}>
  <div>
	  id <input type="text" name="id" onChange={this.handleChange} />
	</div>
	
  <div>
	  Название <input type="text" name="title" onChange={this.handleChange} />
	</div>	
	
  <div>
	  Авторы <input type="text" name="author"  onChange={this.handleChange} />
	</div>
	
  <div>
	  Цена <input type="text" name="price"  onChange={this.handleChange} />
 </div>
 
  <div>
	  <input type="submit" value="Добавить" onChange={this.handleChange} />
	</div>
</form>;
		
		
	}	
}