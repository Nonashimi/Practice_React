import About from "../camponents/pages/About";
import Error from "../camponents/pages/Error";
import PostById from "../camponents/pages/PostById";
import Posts from "../camponents/pages/Posts";

export const privateRoute = [
    {path: "/posts", element: <Posts></Posts>},
    {path: "/posts/:id", element: <PostById></PostById>},
    {path: "/about", element: <About></About>},
    {path: "*", element: <Error></Error>}
]


export const publicRoute = [
    {path: "*", element: <Error></Error>}
]