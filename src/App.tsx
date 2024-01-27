import Header from "./components/header"
import Profile from "./components/profile"
import { useState, useEffect } from "react"

type UserGitHub = {
  name: string
}

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
    <main className="h-screen flex flex-col gap-20 items-center w-full m-auto container">
      <Header/>
      <Profile  />
    </main>
  )
}

export default App
