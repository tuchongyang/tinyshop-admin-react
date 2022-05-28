import { useLocation } from "react-router-dom"
function Home() {
  const location = useLocation()
  return "这是首页" + location.pathname
}
export default Home
