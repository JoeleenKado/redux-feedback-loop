import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CommentsNextButton from '../Buttons/CommentsNextButton/CommentsNextButton.jsx';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  });



class Comments extends Component {
    state = {
        comments: ''
    }

    goBack = () => {
        this.props.history.push('/Support')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    addComments = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state })
        this.props.history.push('/Review')
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <section>
                <h2>Your Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goBack}>Back</button>
                    <input required placeholder="Comments" type="text" onChange={this.handleChange} />
                    <MuiThemeProvider theme={theme}>
                       <CommentsNextButton addCommentsProp={this.addComments}/>
                        {/* <button onClick={this.addFeeling}>Next</button> */}
                    </MuiThemeProvider>
                    {/* <button onClick={this.addComments}>Next</button> */}
                </form>
            </section>
        )
    }
}
//export default Comments;
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Comments);