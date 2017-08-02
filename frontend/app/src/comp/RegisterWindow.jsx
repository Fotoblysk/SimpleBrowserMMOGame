import React, { Component } from 'react';

class RegisterWindow extends Component {

  onSubmitClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
		 <form>
				login:<br />
				<input type="text" name="login" /><br />
				email:<br />
				<input type="text" name="email" /><br />
				password:<br />
				<input type="password" name="password" /><br />
        <input type="submit" value="Submit" onClick={this.onSubmitClick} />
			</form>
    );
  }
}

export default RegisterWindow;
