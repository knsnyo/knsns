'use client'

import { Action } from 'features'
import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import { TFeedWithAuthor } from 'type/convolution'

export const useLogic = (feed: TFeedWithAuthor) => {
	const router = useRouter()
	const uid = React.useContext(Shared.Provider.Session)

	const { mutation: likeMutation } = Action.api.useLike()
	const { mutation: saveMutation } = Action.api.useSave()

	const navProfile: React.MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation()
		router.push(`/user/${feed.author.uid}`)
	}

	const like: React.MouseEventHandler = async (e) => {
		e.stopPropagation()
		await likeMutation({ takeId: feed.id, giveId: uid! })
	}

	const save: React.MouseEventHandler = async (e) => {
		e.stopPropagation()
		await saveMutation({ takeId: feed.id, giveId: uid! })
	}

	return {
		value: {
			like: feed.action?.likeUserId?.includes(uid) ?? false,
			save: feed.action?.saveUserId?.includes(uid) ?? false
		},
		handler: {
			like,
			save,
			nav: {
				profile: navProfile
			}
		}
	}
}
