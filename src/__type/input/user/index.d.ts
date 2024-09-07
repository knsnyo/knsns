export interface IUserInput {
	uid: string
	email?: string | null
	displayName: string
	photoUrl?: string | null
	providerId: string
}

export interface IUserUpdateInput {
	uid: string
	displayName: string
	tagname?: string
	intro?: string
	link?: string
}
