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

function CreatePost() {
    const [title,setTitle] = useState<string>('');
    const [body,setBody] = useState<string>('');


    useEffect(() => {
        document.title = "Create Post";
        // getData();
      }, []);
      
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

      function postData(){
        alert ('submitted successfully');
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then((res)=>{
        //     // console.log(res.data)
        //     setPosts(res.data);
        // })
        // .catch((err)=>{
        //     console.error(err);
        // });
    }

  return (
    <>
        <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Post/</span> Create Post</h4>
              <Link to = "/post/create">Add New</Link>
                <div className="card mt-3">
                    <h5 className="card-header">Create Post</h5>
                    <div className="card-body">
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="form-label">Title</label>
                                <input type="text" name="title" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-label">Body</label>
                                <textarea name="body" className="form-control" rows={4}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
        </div>
    </>
  )
}

export default CreatePost;
