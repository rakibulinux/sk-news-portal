import RootLayout from "@/components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const NewsDetailsPage = ({ post }) => {
  const content = post[0];
  if (!content) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>{content?.title?.rendered}</title>
      </Head>
      <div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={12}>
            <div>
              <Image
                src={
                  content["_embedded"]?.["wp:featuredmedia"]?.[0]?.[
                    "source_url"
                  ]
                }
                alt={content["title"]["rendered"]}
                width={500}
                height={300}
                responsive
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <h1
              dangerouslySetInnerHTML={{
                __html: content?.title?.rendered,
              }}
            />
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
                fontSize: "12px",
              }}
            >
              <span>
                <CalendarOutlined /> {content?.date}
              </span>
              <span>
                <CommentOutlined /> {content?.comment_status}
              </span>
              <span>
                <ProfileOutlined /> {content?.status}
              </span>
            </p>
            <div
              style={{ fontSize: "15px" }}
              dangerouslySetInnerHTML={{
                __html: content["content"]["rendered"],
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps({ params }) {
  const post = await fetch(
    `https://www.sportsknot.com/wp-json/wp/v2/posts?_embed&slug=${params.newsId}`
  ).then((response) => response.json());
  return {
    props: { post: post },
  };
}
// export async function getStaticPaths() {
//   const results = await fetch(
//     "https://www.sportsknot.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish"
//   ).then((response) => response.json());
//   const paths = results.map((post) => {
//     return {
//       params: { newsId: post.slug },
//     };
//   });
//   return { paths, fallback: true };
// }
