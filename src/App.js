import React from "react";
import axios from "axios";
import "./styles.css"
class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      selectedFile:null
    }
  }
   onChangeHandler=event=>{

  this.setState({
    selectedFile:event.target.files[0],
    loaded:0,
  })

}
onClickHandler=()=>{
  const data= new FormData();
  data.append('file',this.state.selectedFile);
  axios.post("http://localhost:8000/upload",data,{

  })
.then(res=>{
  console.log(res.statusText);
})
}
render(){
  return (
    
<div className="container">
	<div className="row">
	  <div className="col-md-6">
	      <form method="post" action="#" id="#">
            <div className="form-group files">
                <label><br/> Upload Your File : </label>
                <input type="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
                <br/>
               
             <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
              </div>
              
            
          </form>
	      </div>
	      </div>
	  </div>
  );
}
}
export default App;
