import {useParams, Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function PostPage() {

    const navigate = useNavigate()

    const params = useParams()

    const status = 200

    if(status === 404) {
        return <Navigate to="/notfound" />
    }

    

    const onClick = () => {
        navigate("/about")
    }

    return (
        <div>
            <h1>Post {params.id}</h1>
            <p>{params.title}</p>
            <p>
                <button onClick={onClick}>Redirect to about</button>
            </p>
        </div>
    )
}

export default PostPage
