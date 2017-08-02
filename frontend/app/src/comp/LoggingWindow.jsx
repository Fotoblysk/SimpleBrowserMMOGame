import React, { Component } from 'react';

class LoggingWindow extends Component {

  onSubmitClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
		 <form>
				login:<br />
				<input type="text" name="login" /><br />
				password:<br />
				<input type="password" name="password" /><br />
        <input type="submit" value="Submit" onClick={this.onSubmitClick} />
			</form>
    );
  }
}

export default LoggingWindow;
