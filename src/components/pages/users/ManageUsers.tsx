import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { User } from "../../../interfaces/user.interface";
import api from "../../../config";

function ManageUsers() {
    const [users,setUsers] = useState<User[]>([]);
    useEffect(() => {
        document.title = "Manage Users";
        getUsers();
    })
    const getUsers = () => {
    api.get("users")
        .then((res) => {
            // console.log("API response:", res.data);
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
};

  return (
    <>
       <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><Link to="/users" className="text-muted fw-light">Users/</Link> Manage</h4>
              <Link to = "/create-users">Add New</Link>
                <div className="card mt-3">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>                                
                                {
                                     users.map((user)=>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <div className="d-flex">                                                
                                                <Link to={`/post/details/${user.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-search"></span>
                                                </Link>
                                                <Link to={`/post/edit/${user.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </Link>
                                                <button type="button" className="btn btn-outline-danger btn-sm">
                                                    <span className="tf-icons bx bx-trash"></span>
                                                </button>
                                            </div>
                                            </td>
                                        </tr>
                                    
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div> 
    </>
  )
}

export default ManageUsers
