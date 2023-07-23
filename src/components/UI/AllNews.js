import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #Today Highlight
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews?.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={
                    news["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"]
                  }
                  alt={news["title"]["rendered"]}
                  width={500}
                  height={200}
                  responsive
                />
              }
            >
              <h1
                //   title={news?.title?.rendered}

                dangerouslySetInnerHTML={{
                  __html: news?.title?.rendered,
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
                  <CalendarOutlined /> {news?.date}
                </span>
                <span>
                  <CommentOutlined /> {news?.comment_status}
                </span>
                <span>
                  <ProfileOutlined /> {news?.status}
                </span>
              </p>
              <div
                style={{ fontSize: "15px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    news["content"]["rendered"].length > 100
                      ? news["content"]["rendered"].slice(0, 70) + "..."
                      : news["content"]["rendered"],
                }}
              />
              {/* <p
                style={{ fontSize: "15px" }}
                {...(news?.content?.rendered.length > 100
                  ? news?.content?.rendered.slice(0, 70) + "..."
                  : news?.content?.rendered)}
              /> */}
              <Link href={`/news/${news.slug}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
