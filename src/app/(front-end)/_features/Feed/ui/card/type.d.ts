import { Feed, User } from '@prisma/client'

export interface IFeedCardProps {
	feed: Feed & { author: User }
}
