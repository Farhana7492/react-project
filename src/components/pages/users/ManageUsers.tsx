import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config";
import type { User } from "../../../interfaces/user.interface";

function ManageUsers() {
    const [users,setUsers] = useState<User[]>([]);
    const [userId,setUserId] = useState<number | undefined>(0);
    useEffect(() => {
        document.title = "Manage Users";
        getUsers();
    },[]);
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
function handleDelete(id:any){
    // alert ("Delete id : "+id);
    api.delete(`delete-user?id=${id}`)
    .then((res) => {
        console.log(res.data);
        // alert("User Deleted Successfully");
        getUsers();
    })
    .catch((err) => {
        console.error(err);
    });
}

  return (
    <>
       <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><Link to="/users" className="text-muted fw-light">Users/</Link> Manage</h4>
              <Link to = "/create-user">Add New</Link>
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
                                                <button type="button" className="btn btn-outline-danger btn-sm"  onClick={()=>setUserId(user?.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
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

        {/* Delete Modal */}
        <div className="modal" id="deleteModal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <i className="tf-icons bx bx-x-circle bx-lg text-danger mb-4"></i>
                        <h5 className="text-center" >Are you sure you want to delete{userId}?</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleDelete(userId)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ManageUsers
