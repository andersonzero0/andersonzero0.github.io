export function Header() {
  return (
    <header className="w-full flex flex-row h-16 items-center justify-between flex-wrap gap-4">
        <div className="h-full flex flex-row items-center gap-4">
          <img src="http://github.com/andersonzero0.png" className="terminal-effect h-full" />

          <div>
            <h1 className="font-retro">Anderson Viana</h1>
            <p className="font-plex-mono">Desenvolvedor de Software</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <a href="">
            <img className="w-6" src="./github.svg" />
          </a>
          <a href="">
            <img className="w-6" src="./linkedin.png" />
          </a>
        </div>
      </header>
  )
}