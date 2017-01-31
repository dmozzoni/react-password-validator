import React, {Component} from "react";

 class Password extends Component {
   constructor(props) {
      super(props);
      this.state = {
        qUser: "",
        qPass: "",
        qPassConfirm: ""
        };
   }
   handleUser(e) {
        this.setState({
          qUser: e.target.value
        });
   }
   handlePass(e) {
        this.setState({
          qPass: e.target.value
        });
   }
   handlePassConfirm(e) {
        this.setState({
          qPassConfirm: e.target.value
        });
   }
   submitQuery(evt) {
        evt.preventDefault();
        console.log(this.state.qUser);
        console.log(this.state.qPass);
        console.log(this.state.qPassConfirm);
        if (this.state.qPass === this.state.qPassConfirm) {
          alert('Successful');
        } else {
          alert('Passwords do not match!');
          this.setState({
            qPass: '',
            qPassConfirm: ''
          });
        }
   }

   render(){
     return (
       <div className="passwordBox">
        <form onSubmit={(evt) => this.submitQuery(evt)}>
          <input type="text" placeholder="Username" onChange={(evt) => this.handleUser(evt)} value={this.state.qUser} /><br />
          <input type="text" placeholder="Password" onChange={(evt) => this.handlePass(evt)} value={this.state.qPass} /><br />
          <input type="text" placeholder="Confirm Password" onChange={(evt) => this.handlePassConfirm(evt)} value={this.state.qPassConfirm} /><br />
          <button type="submit">Submit</button>
         </form>
      </div>
    )
  }
}

export default Password
