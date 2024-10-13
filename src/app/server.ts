import { createServer } from 'http'
import next from 'next'
import { parse } from 'url'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url!, true)
		handler(req, res, parsedUrl)
	}).listen(7469)
})

/**
 * https://github.com/vercel/next.js/tree/canary/examples/custom-server
 */
