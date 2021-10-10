import React from "react"
import styled from "@emotion/styled"
import Thumbnail from "../thumbnail"
import { TABLET_SCREEN_OFFSET } from "../../styles/layout"

// slug, title
const PostList = ({ posts }) => {
  // console.log("---->posts", posts);

  return (
    <StyleUl>
      {posts &&
        posts.map(({ title, slug, meta, category, tags }) => {
          return (
            <Thumbnail
              title={title}
              category={category}
              slug={slug}
              meta={meta}
              tags={tags}
            />
          )
        })}
    </StyleUl>
  )
}

export default PostList

const StyleUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 18px;
  }
  .date {
    font-size: 14px;
  }
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: 100vw;
    height: 100%;
  }
`
