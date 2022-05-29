import { useLocation } from "react-router-dom"
import store from "@/store"
function Home() {
  const { menus } = store
  const location = useLocation()
  return "这是首页" + location.pathname + JSON.stringify(menus)
}
export default Home
