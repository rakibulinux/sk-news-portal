import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import DrawingImage from "@/assets/images/banner-images/drawing_image.jpg";
import EagleImage from "@/assets/images/banner-images/eagle_image.jpg";
import Link from "next/link";

const contentStyle = {
  height: "425px",
  color: "#000",
};
const Banner = ({ allNews }) => {
  return (
    <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
      {/* slider-1 */}
      {allNews?.map((news) => (
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
              src={news["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"]}
              alt={news["title"]["rendered"]}
              fill
              responsive
            />
          </Col>
        </Row>
      ))}

      {/* slider-2 */}
      {/* <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            EAGLE, YOU ARE
            <br />
            NOT ALONE
          </h1>
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
              <CalendarOutlined /> MARCH 30, 2023
            </span>
            <span>
              <CommentOutlined /> 5 COMMENTS
            </span>
            <span>
              <ProfileOutlined /> NATURE
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            A spread opened patient and compulsively one placed seagull goodness
            python owing snapped yikes equitable when much the much Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
          </p>
          <p
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
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={EagleImage}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div> */}
    </Carousel>
  );
};

export default Banner;
