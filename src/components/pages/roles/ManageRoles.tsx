import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api  from "../../../config";

export interface Role{
    id:number;
    name:string;
}

function ManageRoles() {

    const[roles,setRoles] = useState<Role[]>([]);

    useEffect(()=>{
        getRoles()
    },[]);

    // useEffect(()=>{
    //     console.log(roles);
    // },[roles]);

    const getRoles = () =>{

        api.get ("http://localhost/php_react-api/api/roles")
        .then((res)=>{
            // console.log(res.data);
            setRoles(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }


  return (
    <>
       <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><Link to='/roles' className="text-muted fw-light">Roles/</Link> Manage Roles</h4>
              <Link to = "/create-role">Add New</Link>
                <div className="card mt-3">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>

                                    <th>ID</th>                                
                                    <th>Name</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>                                
                                {
                                    roles.map((item)=>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="d-flex">                                                
                                                <Link to={`/post/details/${item.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-search"></span>
                                                </Link>
                                                <Link to={`/edit-role/${item.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
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

export default ManageRoles
