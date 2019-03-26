class Basket extends React.Component{
	
	constructor(props){
		super(props);
		this.deleteBasketItem = this.deleteBasketItem.bind(this);
  }
 
  deleteBasketItem(e){
	  e.preventDefault();
	  //console.log(this, e);
		this.props.handleRemoveBasket(e.target.id);
  }
	
	render(){	
	  let items = [];
		let sum = 0;
		
		const getIndexById = id => {
			for(let p in this.props.dataBook){
				if(this.props.dataBook[p]['id'] == id)			
					return p;
			}
		}
		
		for(let i in this.props.items){
			let item = this.props.dataBook[getIndexById(i)];
			sum += item.price * this.props.items[i];
			items.push(
			  <div className='basket-item' key={i}> 
			   <a href='#'> {item.title} </a>
			   <span> {this.props.items[i]}шт. </span>
			   <span> {item.price}руб. </span>
				 <a href='#' onClick={this.deleteBasketItem} id={i}> Удалить </a>
			  </div>
			);			
		}
		
		items.push(
		  <div className='basket-item' key='0'> 
			  <span> Всего {sum}руб. </span>
			</div>
		)
	
	  return <div className='basket'>
		 <h3>Корзина</h3>
		 {items}
		</div>
	}
}



