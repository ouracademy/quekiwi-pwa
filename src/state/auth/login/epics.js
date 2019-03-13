import { epicFrom } from "./actions"

export const loginEpic = epicFrom("http://localhost:3000/auth/login")
