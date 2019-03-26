class Book extends React.Component{	
  constructor(props){
	super(props);
    this.state = {selected: false};
	this.handleClick = this.handleClick.bind(this);
	this.addBasketBook = this.addBasketBook.bind(this);
  }
 
  handleClick(e){
	  e.preventDefault();
	  console.log(this, e);
  }
  
  
	addBasketBook(e){
		e.preventDefault();
		this.props.handleAddBasket(this.props.id);
	}
	
  render(){	
	  const price = this.props.price ? <strong>{this.props.price}</strong>:<del>&nbsp;</del>;
	  
	  const selected = this.state.selected;
	  
	  return  <div className={'book ' + (selected ? 'book-selected' : 'book-default')} >
		   <h3>{this.props['title']}</h3>
		   <img src={'http://placehold.it/100x120?text='+this.props['title']} />
		   <p>Автор: {this.props['author']}</p>
		   <p>Цена: {price}</p>
		   <div>
		     <a href='#' className='btn btn-success' onClick={this.handleClick}>
			   Сравнить
			 </a>&nbsp;
		     <a href='#' className='btn btn-success' onClick={this.addBasketBook}>
			   В корзину
			 </a>
		   </div>
		 </div>;	
  }	 
}