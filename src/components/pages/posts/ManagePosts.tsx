import axios from "axios";
import {useEffect,useState } from "react"
import { Link } from "react-router-dom";
interface Post{
    userId : number;
    id:number;
    title:string;
    body:string;
}
// type posts = {
//     id:number;
//     userId : number | string;
//     title:string;
//     body:string;
// }

function ManagePosts() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        document.title = "Manage Posts";
        getData();
      }, []);
      useEffect(() => {
        console.log("Posts data updated:", posts);
      }, [posts]);
    //   async function loadData(){
    //     //fetch data from api
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = await res.json();
    //         console.log(data);
    //         setPosts(data);
    //   } catch (err) {
    //       console.error(err)
    //   }
    //   }

    //   axios API

    // --------------------------------------------------

      function getData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            // console.log(res.data)
            setPosts(res.data);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
    const handleDelete = (id:number)=>{
        // console.log(id+"  confirm delete");
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
  return (
    <>
        <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Post/</span> Manage Posts</h4>
              <Link to = "/post/create">Add New</Link>
                <div className="card mt-3">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>                                
                                {
                                   posts.map((item) => 
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to={`/post/details/${item.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-search"></span>
                                                </Link>
                                                <Link to={`/post/edit/${item.id}`} type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </Link>
                                                <button type="button" onClick={()=>{confirm("Are you sure to delete?") && handleDelete(item.id)}} className="btn btn-outline-danger btn-sm">
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

export default ManagePosts;
