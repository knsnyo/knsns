'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { TFeedWithAuthor } from 'type/convolution'
import Shared from '../../../../__shared'
import { Action } from '../../../Action'

const useLogic = (feed: TFeedWithAuthor) => {
	const router = useRouter()
	const uid = React.useContext(Shared.Provider.Session)

	const { mutation: likeMutation } = Action.api.useLike()
	const { mutation: saveMutation } = Action.api.useSave()

	const navProfile: React.MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation()
		router.push(`/user/${feed.author.uid}`)
	}

	const like: React.MouseEventHandler = (e) => {
		e.stopPropagation()
		likeMutation({ takeId: feed.id, giveId: uid! })
	}

	const save: React.MouseEventHandler = (e) => {
		e.stopPropagation()
		saveMutation({ takeId: feed.id, giveId: uid! })
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

export default useLogic
