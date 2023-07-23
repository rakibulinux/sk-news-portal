import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const contentStyle = {
  height: "425px",
  color: "#000",
};
const Banner = ({ allNews }) => {
  return (
    <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
      {allNews?.map((news) => (
        <div key={news.slug}>
          <Row key={news?.slug}>
            <Col
              lg={{
                span: 8,
              }}
            >
              <h1
                style={{ fontSize: "50px" }}
                dangerouslySetInnerHTML={{
                  __html: news?.title?.rendered.slice(0, 14),
                }}
              />

              <br />
              <h1
                style={{ fontSize: "50px" }}
                dangerouslySetInnerHTML={{
                  __html: news?.title?.rendered.slice(15, 23),
                }}
              />

              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "95%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  color: "gray",
                  margin: "10px 0px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news.date}
                </span>
                <span>
                  <CommentOutlined /> NO COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> HOBBY
                </span>
              </p>

              <div
                style={{ fontSize: "25px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    news["content"]["rendered"].length > 100
                      ? news["content"]["rendered"].slice(0, 100) + "..."
                      : news["content"]["rendered"],
                }}
              />
              <Link
                href={`/news/${news?.slug}`}
                style={{
                  fontSize: "20px",
                  margin: "20px 0px",
                  backgroundColor: "black",
                  color: "white",
                  width: "168px",
                  padding: "2px 5px ",
                  fontWeight: "300",
                  letterSpacing: "3px",
                }}
              >
                Keep Reading <ArrowRightOutlined />
              </Link>
            </Col>

            <Col
              lg={{
                span: 16,
              }}
              style={contentStyle}
            >
              <Image
                src={
                  news["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"]
                }
                alt={news["title"]["rendered"]}
                fill
                responsive
              />
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
