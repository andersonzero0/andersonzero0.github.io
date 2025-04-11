
import { useId, useMemo } from "react"
import { Badge } from "./ui/badge"

export function Hero() {

  const username = "andersonzero0"

  const svgFilterId = useId()

  const seed = useMemo(
    () => username.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0),
    [username],
  )

  const baseFrequency = useMemo(() => {
    const sum = "andersonzero0".split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const mod = sum % 9

    // Original 4 variants
    if (mod === 0) return "0.75 0.75"
    if (mod === 1) return "0.02 0.02"
    if (mod === 2) return "0.08 0.02"
    if (mod === 3) return "2 2"

    // 5 new variants
    if (mod === 4) return "0.1 0.5" 
    if (mod === 5) return "1.5 0.5" // High x frequency, medium y frequency
    if (mod === 6) return "0.05 0.1" // Fine detail on both axes
    if (mod === 7) return "3 0.2" // Very high x frequency, low y frequency
    return "0.5 1.5" // Medium x frequency, high y frequency (mod 8)
  }, [])

  return (
    <section className="w-full flex flex-col items-center gap-3">
      <div className="relative flex justify-center items-center w-full">
        <svg className="w-full h-52 rounded-2xl" style={{ pointerEvents: "none" }}>
          <filter colorInterpolationFilters="sRGB" height="300%" id={svgFilterId} width="300%" x="-0.75" y="-0.75">
            <feColorMatrix result="saturated" type="saturate" values="5" />
            <feColorMatrix
              in="saturated" 
              result="bright-colors"
              type="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    33 33 33 101 -120"
            />
            <feMorphology in="bright-colors" operator="dilate" radius="5" result="spread" />
            <feGaussianBlur in="spread" result="ambilight-light" stdDeviation="30" />
            <feTurbulence
              baseFrequency={baseFrequency}
              numOctaves="1"
              result="turbulence"
              seed={seed}
              type="turbulence"
            />
            <feDisplacementMap
              in="ambilight-light"
              in2="turbulence"
              result="displacementMap"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
          <image
            filter={`url(#${svgFilterId})`}
            height="50%"
            href={"https://github.com/andersonzero0.png"}
            preserveAspectRatio="xMidYMid slice"
            width="100%"
          />
        </svg>
        <img src="https://github.com/andersonzero0.png" alt="emoji" className="absolute w-28 h-28 rounded-3xl bottom-3" />
      </div>


      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">Anderson Viana</h1>
        <h2 className="text-xl font-thin">Desenvolvedor de Software</h2>
      </div>

      <div className="flex flex-row items-center gap-3">
        <Badge variant="outline">NestJS</Badge>
        <Badge variant="outline">Node.js</Badge>
      </div>

      {/* <img src="./emoji.png" alt="emoji" className="w-28 h-28 animate-bounce" /> */}

    </section>
  )
}