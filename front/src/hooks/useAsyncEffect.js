import { useEffect } from "react"

function useAsyncEffect(effect, inputs) {
  useEffect(() => {
    effect()
  }, inputs)
}

export default useAsyncEffect
