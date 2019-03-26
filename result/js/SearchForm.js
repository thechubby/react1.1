class SearchForm extends React.Component{
 
 constructor(props){
     super(props);
     this.state = {  };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
 
 componentDidMount(){

 }
 

  handleSubmit(ev){

  }
  handleChange(ev){

  }
 
  render(){
   return <form action="" onSubmit={this.handleSubmit} className="searchform">
 <h3>Поиск книги</h3>     
 <div><label>Название</label> <input type="text" name="title"  onChange={this.handleChange} value={this.state.title} ref={this.setRefInputTitle} autoComplete="off" /><input type="submit" value="Искать" className="btn btn-success"/></div>
</form>;

   
  }
}