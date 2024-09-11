import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

const UPLOAD_DIR = path.resolve(
	'/Users/knsn/workspace/side/knsns',
	'public/uploads'
)

export const POST = async (req: NextRequest) => {
	const formData = await req.formData()
	const body = Object.fromEntries(formData)
	const file = (body.file as Blob) || null

	if (!file) {
		return NextResponse.json({ success: false })
	}

	const buffer = Buffer.from(await file.arrayBuffer())

	// directory 없으면 만들기
	if (!fs.existsSync(UPLOAD_DIR)) {
		fs.mkdirSync(UPLOAD_DIR)
	}

	// 현재 시간을 이용해 파일 이름을 생성
	const timestamp = new Date().toISOString().replace(/[:.-]/g, '_') // 시간 포맷: YYYYMMDD_HHMMSS
	const extension = (body.file as File).name.split('.').pop() // 파일 확장자 추출
	const newFileName = `${timestamp}.${extension}` // 새로운 파일 이름: timestamp + 확장자

	fs.writeFileSync(path.resolve(UPLOAD_DIR, newFileName), buffer)

	return NextResponse.json({
		success: true,
		name: newFileName
	})
}
