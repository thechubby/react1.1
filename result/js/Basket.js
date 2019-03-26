class Basket extends React.Component {
 constructor(props) {
  super(props);
  this.removeItem = this.removeItem.bind(this);
 } 
 
 removeItem(ev){
  ev.preventDefault();
  let handleRemoveBasket = this.props.handleRemoveBasket;
  let id = this.props.id;
  //alert(ev.target.id)
  handleRemoveBasket(ev.target.id);
 }
render (){ 
 let items = [];
 let dataBook = {};
 let summa = 0;
 for(let i in this.props.dataBook){
  dataBook[this.props.dataBook[i]["id"]] = this.props.dataBook[i];
 }
 
 for(let item in this.props.items){
    summa += dataBook[item]['price'] * this.props.items[item]; 
    items.push(
      <div className="basket-item" key={item}>
       <a href="#">{dataBook[item]['title']}</a>
       <span>{this.props.items[item]}шт</span>
       <span>{dataBook[item]['price']}руб</span>
       <a href="#" onClick={this.removeItem} id={item} className="btn btn-success" >Удалить</a>
      </div>
    )  
 }
 if(summa) items.push(
      <div className="basket-item"  key="bskt">
       <strong>Сумма</strong>
       <span>{summa}руб</span>
      </div>
    )  
  return <div className='basket'>
 <h3>Корзина</h3>
 {items}
</div> ;
 } 
}
