class Footer extends React.Component{
  constructor(props){
     super(props);
     this.state = { 
      time: "night",
      currentTime: ""
     };
     this.footer = null;
     this.footerRef = elem => {
      this.footer = elem;
     }
     //ref={this.footerRef}
     this.myHandlerClick = this.myHandlerClick.bind(this);
  }
 
  componentDidMount(){
   this.timer = setInterval(
     () => this.mymethod(),
     1000
   );
  } 
  
  mymethod(){
   this.setState({currentTime: new Date().toLocaleTimeString()});
  }  
  
  myHandlerClick(ev){
    ev.preventDefault();
    this.setState(prevstate => (
     {time: prevstate.time == "night" ? "day" : "night"}
    ));
   
   let i = 0, step = 20, tick = 40, self = this; 
   function a(){
    if(i < step){
     i++;
     self.footer.style.fontSize = 10+i+"px";
     setTimeout(a, tick);
    }    
   }
   a();
   //this.footer.style.fontSize = "50px";
  }
   
  render(){
    return <footer className={this.state.time} onClick={this.myHandlerClick} ref={this.footerRef} >
       Copyright {this.props.year} Текущее время {this.state.currentTime}    
    </footer>;
  }
}     