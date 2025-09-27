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
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi distinctio veniam perferendis vel voluptate at deserunt id, explicabo quae reiciendis totam, ratione necessitatibus inventore maxime nisi quod vitae assumenda ipsa.</td>
                                    <td>
                                        <div className="d-flex">
                                            <button type="button" className="btn btn-outline-primary btn-sm me-2">
                                                <span className="tf-icons bx bx-edit"></span>
                                            </button>
                                            <button className="btn btn-outline-danger btn-sm">
                                                <span className="tf-icons bx bx-trash"></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {
                                   posts.map((item) => 
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-outline-primary btn-sm me-2">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
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
