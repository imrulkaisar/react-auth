import Container from "../Components/Container";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="">
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
    </>
  );
};

export default PageTemplate;
