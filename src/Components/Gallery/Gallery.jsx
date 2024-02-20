import { useInfiniteQuery } from "@tanstack/react-query";

import "./Gallery.css";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import ImageComponent from "../ImageComponent/ImageComponent";
const images = require("../../assets/db/gallery_db.json");

const Gallery = () => {
  const fetchPosts = async ({ pageParam }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return images.slice((pageParam - 1) * 6, pageParam * 6);
  };

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialData: {
      pages: [images.slice(0, 6)],
      pageParams: [1],
    },
  });

  const lastPostRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  const _posts = data?.pages.flatMap((page) => page);

  return (
    <div className="gallery">
      <h1 className="title">GALERIJA</h1>
      <div className="gallery-container">
        {_posts?.map((image, index) => {
          return (
            <div
              key={index}
              className="img-container"
              ref={index === _posts.length - 1 ? ref : null}
            >
              <ImageComponent
                alt={"gallery-image-" + { index }}
                src={image}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {isFetchingNextPage ? (
        <div className="load-btn">
          <box-icon name="loader-circle" animation="spin"></box-icon>
        </div>
      ) : (data?.pages.length ?? 0) < 31 ? (
        <div className="load-btn" onClick={() => fetchNextPage()}>
          <box-icon name="dots-horizontal-rounded" border="circle"></box-icon>
        </div>
      ) : (
        <div className="load-btn">{/* <p>Nema više slike</p> */}</div>
      )}
    </div>
  );
};

export default Gallery;
