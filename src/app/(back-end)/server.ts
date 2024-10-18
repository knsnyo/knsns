import { createServer, IncomingMessage, ServerResponse } from 'http'
import next, { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'url'

const dev: boolean = process.env.NODE_ENV !== 'production'
const hostname: string = 'localhost'
const port: number = 7469

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	createServer(async (req: IncomingMessage, res: ServerResponse) => {
		try {
			const parsedUrl = parse(req.url!, true)

			// Next.js 핸들러 호출
			await handle(req as NextApiRequest, res as NextApiResponse, parsedUrl)
		} catch (err) {
			res.statusCode = 500
			res.end('Internal Server Error')
		}
	}).listen(port, () => {
		console.log(`http://${hostname}:${port}`)
	})
})
