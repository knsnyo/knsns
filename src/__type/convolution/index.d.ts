import { Action, Follow, User } from '@prisma/client'

export type TFeedWithAuthor = Feed & { author?: User; action?: Action }

export type TUserWithFollow = User & {
	follower?: Follow[]
	followed?: Follow[]
}

export type TFollowWithUser = Follow & { user?: User; followedUser?: User }
