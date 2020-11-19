// export default (req, res) => {
//   const posts = [
//     { id: "1", name: "some post 1", description: "some post description 1" },
//     { id: "2", name: "some post 2", description: "some post description 2" },
//     { id: "3", name: "some post 3", description: "some post description 3" },
//   ];
//   return res.json(posts);
// };

import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const postData = JSON.parse(req.body);
    console.log(postData);

    return res.json({
      status: "Saving Post to DB!",
      ...postData,
    });
  } else {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    return res.json(posts.slice(0, 20));
  }
};
