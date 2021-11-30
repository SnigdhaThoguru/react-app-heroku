import React from "react";

// arrow functions
let User = (props) => {
    return(
            <div className="col-sm-12">
                <div className="card mb-3">
                    <div className="card-header">
                        <h3>User Name: {props.userName}</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <tr>
                                <th>User Id</th>
                                <th>Email Address</th>
                                <th>Age</th>
                                <th>Mobile Number</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>{props.userId}</td>
                                <td>{props.userEmail}</td>
                                <td>{props.userAge}</td>
                                <td>{props.userMobile}</td>
                                <td>{props.userDescription}</td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <input type="text" className="form-control" onChange={props.userChangeName} />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-info mr-12" onClick={props.userNameChange}> change names </button>

                        <button type="button" className="btn btn-danger" onClick={props.deleteUserRecord}> delete record </button>
                    </div>
                </div>
            </div>
    );
}

export default User;