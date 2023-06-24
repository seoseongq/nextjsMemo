import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const check = () => {
    console.log(email)
    console.log(password)

    if (email !== "seongkyu@cigro.io") {
      alert('email is not allowed')
      return false
    }

    if (password !== "000000") {
      alert('password not ..')
      return false
    }

    router.push("/createMemo")
  }

  return (
    <main>
      hello !!!
      <br></br>
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
      <br></br>
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
      <br></br>
      <button onClick={check}>Login</button>
    </main>
  )
}
