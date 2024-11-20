import Banner from "./components/Banner"
import Content from "./components/Content"
import NewNews from "./components/NewNews"
import Search from "./components/Search"

const Home = () => {
  return <>
    <Banner />
    <Search />
    <NewNews />
    <Content />
  </>
}

export default Home