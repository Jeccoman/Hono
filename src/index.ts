import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/1234', (c) => {
  return c.text(`Hell01234`)
})

export default app
