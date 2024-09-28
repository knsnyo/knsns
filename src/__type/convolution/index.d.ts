import { Action } from '@prisma/client'

export type TFeedWithAuthor = Feed & { author: User } & { action: Action }
