import { getPosts } from "../actions";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <h1>Posts page</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <span>{p.id}: </span> <span>{p.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Posts.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Posts;

// import React from "react";
// import { getPosts } from "../actions";

// class Posts extends React.Component {
//   static async getInitialProps() {
//     const posts = await getPosts();

//     return { posts };
//   }

//   render() {
//     const { posts } = this.props;
//     return (
//       <div className="container">
//         <h1>I am posts page</h1>
//         {/* <ul>
//           {posts.map((p) => (
//             <li key={p.id}>
//               <span>{p.id}: </span> <span>{p.title}</span>
//             </li>
//           ))}
//         </ul> */}
//         {JSON.stringify(posts)}
//       </div>
//     );
//   }
// }

// export default Posts;
