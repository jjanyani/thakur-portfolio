import { styled } from "@mui/material/styles";
import { Slide } from "react-awesome-reveal";
import img2 from "./images/parallax5.jpg";
import img3 from "./images/parallax1.png";
import Header from "./header";


const Container = styled("div")({
  display: "flex",
  backgroundImage: `url(${img2})`,
  gap: "2rem",
  width: "100%",
  height: "80vh",

  margin: "0 auto",
  zIndex: 1,
  "@media (max-width: 840px)": {
    width: "100%",
    alignItems: "flex-start",
    height: "150vh",
  },
  "@media (max-width: 640px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "167vh",
  },
});


const HeaderContainer = styled("div")({
 
});

const Banner = styled("div")({
  background:
    "linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)",
  height: "100vh",
  "@media (max-width: 640px)": {
    height: "100%",
    paddingBottom: "2rem",
  },
});

const ProfileContainer = styled("div")({
  flex: 1,
  marginRight: "5rem",
  img: {
    width: "31rem",
    filter: "drop-shadow(0px 10px 10px rgba(255, 255, 255, 0.7))",
    transition: "transform 400ms ease-in-out",
    "@media (max-width: 790px)": {
      width: "25rem",
      alignSelf: "flex-start",
    },
    "@media (max-width: 660px)": {
      width: "25rem",
      alignSelf: "flex-start",
    },
    "@media (max-width: 640px)": {
      width: "100%",
      alignSelf: "flex-start",
    },
  },
  ":hover img": {
    transform: "translateY(-10px)",
  },
  "@media (max-width: 640px)": {
    alignSelf: "flex-start", // Align the Profile component to the left
  },
});

const Texts = styled("div")({
  flex: 1,
  color: "#fff",
  marginLeft: "2rem",
  h4: {
    padding: "1rem 0",
    fontWeight: 500,
  },
  h1: {
    fontSize: "2rem",
    fontFamily: '"Secular One", sans-serif',
    letterSpacing: "2px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "1.2rem",
    paddingBottom: "1.2rem",
    textTransform: "capitalize",
  },
  p: {
    fontWeight: 300,
  },
  button: {
    padding: "0.7rem 2rem",
    marginTop: "3rem",
    cursor: "pointer",
    backgroundColor: "#01be96",
    border: "none",
    color: "#fff",
    fontWeight: 500,
    filter: "drop-shadow(0px 10px 10px #01be9551)",
    "&:hover": {
      filter: "drop-shadow(0px 10px 10px #01be9570)",
    },
  },
});

function App() {
  return (
  <HeaderContainer>
{/* <Header /> */}
    <Container id="home">
     
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Thakur Janyani</h1>
          <h3>Advocate & Senior Legal Officer</h3>
          <p>
            As a seasoned Senior Advocate specializing in Civil and Criminal
            cases since 2016, I offer a distinctive combination of legal
            expertise, strategic acumen, and a client-centric approach. With a
            track record of navigating complex legal landscapes, I bring a
            results-driven focus to every case. My commitment to client advocacy
            goes beyond the courtroom, ensuring tailored solutions, open
            communication, and dedicated support. Trust in my experience for
            comprehensive legal representation that prioritizes your rights and
            interests.{" "}
          </p>
          <button>Let's talk</button>
        </Texts>
      </Slide>
      <Slide direction="right">
        <ProfileContainer>
          <img src={img3} alt="profile" />
        </ProfileContainer>
      </Slide>
    </Container>
    </HeaderContainer>
  );
}

export default App;
