import Link from "next/link";
import AppLayout from "../../components/AppLayout";

export default function Timeline({ userName }) {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href="/" target="_self">
          <a>go Home</a>
        </Link>
      </AppLayout>
    </>
  );
}

//Only works with NextJS for feching of data use a Promise if not only normal
//getInitialProps only works in page components
//this getInitialProps is running from server and also from client
Timeline.getInitialProps = () => {
  //return Promise.resolve({ userName: "Carina" });
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((response) => {
      console.log("response API", response);
      const { userName } = response;
      return { userName };
    });
};
