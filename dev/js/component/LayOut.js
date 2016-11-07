import React from 'react';
import UserList from '../container/UserList';

  const Layout = () => {
    const styles = {
      marginTop: "50px"
    }
    return (
      <div>
        <div className="container" style={styles}>
         <div className="row">

          <div className="col-sm-6">
            <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">User List:</h4>
                  </div>
                   <UserList/>
                  <div className="card-block">
                      <a href="#" className="btn btn-outline-primary">Add user</a>
                  </div>
            </div>
          </div>
          <div className="col-sm-6">
             <div className="card card-block">
                 <h3 className="card-title">User Details</h3>
                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                 <a href="#" className="btn btn-outline-danger">Delete User</a>
             </div>
          </div>

         </div>
        </div>
      </div>
    );
  }

export default Layout;
