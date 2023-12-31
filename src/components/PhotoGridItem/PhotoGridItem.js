import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source
            type="image/avif"
            srcset={`${src.replace(".jpg", ".avif")},${src.replace(
              ".jpg",
              "@2x.avif"
            )},${src.replace(".jpg", "@3x.avif")}`}
          />
          <source
            type="image/webp"
            srcset={`${src},${src.replace(".jpg", "@2x.jpg")},${src.replace(
              ".jpg",
              "@3x.jpg"
            )}`}
          />
          <img alt="" src={`${src.replace(".jpg", "@2x.jpg")}`} />
        </Image>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.picture`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
