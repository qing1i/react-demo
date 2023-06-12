import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Content() {
  //  路由的params参数
  // const { id, title, content } = useParams();

  // 路由的search参数
  // const [search, setSearch] = useSearchParams();
  // const id = search.get("id");
  // const title = search.get("title");
  // const content = search.get("content");

  // 路由的state参数
  const {
    state: { id, title, content },
  } = useLocation();

  return (
    <ul>
      <li>ID：{id}</li>
      <li>TITLE：{title}</li>
      <li>CONTENT：{content}</li>
    </ul>
  );
}
