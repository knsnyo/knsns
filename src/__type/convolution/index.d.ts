import { Action, Follow } from '@prisma/client'

export type TFeedWithAuthor = Feed & { author: User; action: Action }

export type TUserWithFollow = User & { follower: Follow[]; followed: Follow[] }
