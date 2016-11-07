import React, { Component } from 'react';
import { bindActionCreators } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';

class UserList extends Component{

  listUsersItems(){
    return this.props.users.map((user) => {
       return(
           <li className="list-group-item" key={user.id.toString()}><a href="#">{user.fullName}</a></li>
       );
    });
  }
  render(){
    return(
        <div>
          <ul className="list-group list-group-flush">
             {this.listUsersItems()}
          </ul>
        </div>
    );
  }
}

function  mapStateToProps(state){
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUsers: selectUser},dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
