import Cities from "../components/Cities"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Properties from "../components/Properties"


function Home() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Cities/>
      <Properties/>
      <Featured/>
      <Footer/>
    </>
  )
}

export default Home
