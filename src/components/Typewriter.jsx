import { useEffect, useState } from 'react'

export default function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
          ),
        deleting ? 40 : 80
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="block min-h-[1.2em] text-brand">
      {text}
      <span className="animate-blink font-light">|</span>
    </span>
  )
}