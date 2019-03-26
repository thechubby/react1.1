class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			items: {},
			dataBook: this.props.dataBook
		}
		this.addBasket = this.addBasket.bind(this);
		this.removeBasket = this.removeBasket.bind(this);
		this.newBook = this.newBook.bind(this);
	}
	
	newBook(book){
		let dataBook = [];
		for(let i in this.state.dataBook){
			dataBook.push( Object.assign({}, this.state.dataBook[i]) );			
		}
		dataBook.push(book);
		this.setState({dataBook: dataBook})
		console.log('YDJSQ',dataBook)
	}
	
	addBasket(id){
		let items = Object.assign({},this.state.items);
		items[id] = id in items ? items[id]+1: 1;
		console.log(items);
		this.setState({items: items});
	}
	
		
		removeBasket(id){
			let newState = Object.assign({},this.state.items);
			console.log('старое',newState,id);
			delete newState[id];
			console.log('новый',newState,id);
			this.setState({items:newState});
   		}	
	
	render(){
		let dataBook = this.state.dataBook;
		let books = [];
		for(let i in dataBook){
			let book = dataBook[i].price ? (
			 <Book
				 key={i} 
				 title={dataBook[i]['title']}  
				 price={dataBook[i]['price']}  
				 author={dataBook[i]['author']}  		 
				 id={dataBook[i]['id']}  	
				 handleAddBasket={this.addBasket}
			 />
			) : (
			 <BookWithoutPrice
				 key={i} 
				 title={dataBook[i]['title']}  
				 id={dataBook[i]['id']}  
				 author={dataBook[i]['author']}  		 
			 />			
			);
			books.push(book);
		}
		
		return <div>
		  <Basket 
			  items={this.state.items}
			  handleRemoveBasket={this.removeBasket}	
				dataBook={this.state.dataBook}
			/>
			<AddBookForm handlerAddBook={this.newBook} />		
			{books}
		</div>;
	}
}


