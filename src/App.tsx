import Header from "./components/header"
import AboutMe from "./components/about-me"

function App() {

  /* const [dataUser, setDataUser] = useState<UserGitHub | null>(null)

  async function getDataUser() {
    const response = await fetch('https://api.github.com/users/andersonzero0')
    const user = await response.json()

    return user
  }

  useEffect(() => {
    getDataUser().then(user => {
      setDataUser(user)
    }).catch(error => {
      console.log(error)
    })
  }, []) */
  
  return (
    <main className="flex flex-col gap-20 items-center w-full m-auto container divide-y-2">
      <Header/>
      <AboutMe  />
    </main>
  )
}

export default App
