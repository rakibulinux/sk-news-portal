import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetPostsQuery } from "@/redux/api/apiSlice";
import dynamic from "next/dynamic";

const HomePage = ({ allNews }) => {
  // const { data: allNews, isLoading } = useGetPostsQuery(undefined);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // console.log(allNews);
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner allNews={allNews} />
      <AllNews allNews={allNews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://www.sportsknot.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish"
  );
  const data = await res.json();
  return {
    props: {
      allNews: data,
    },
  };
};
