import { PrinterIcon } from "lucide-react";

export function Header() {

  function printPage() {
    window.print();
  }
  
  return (
    <header className="w-full flex flex-row min-h-16 items-center justify-between flex-wrap gap-4">
        <div className="h-full flex flex-row items-center gap-4">
          <img src="http://github.com/andersonzero0.png" className="rounded-2xl w-16 h-16" />

          <div>
            <h1 className="text-xl font-bold">Anderson Viana</h1>
            <p className="font-plex-mono">Desenvolvedor de Software</p>
            <p>
              ⭐️⭐️⭐️⭐️⭐️
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <a href="">
            <img className="w-6" src="./github.svg" />
          </a>
          <a href="">
            <img className="w-6" src="./linkedin.png" />
          </a>
          <button onClick={printPage} className="flex justify-center items-center">
            <PrinterIcon size={24}/>
          </button>
        </div>
    </header>
  )
}