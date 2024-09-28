'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { TFeedWithAuthor } from 'type/convolution'
import Shared from '../../../../__shared'
import { Action } from '../../../Action'

const useLogic = (feed: TFeedWithAuthor) => {
	const router = useRouter()
	const { mutation } = Action.api.useLike()
	const uid = React.useContext(Shared.Provider.Session)

	const navProfile: React.MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation()
		router.push(`/user/${feed.author.uid}`)
	}

	const like: React.MouseEventHandler = (e) => {
		e.stopPropagation()
		mutation({ takeId: feed.id, giveId: uid! })
	}

	return {
		handler: {
			like,
			nav: {
				profile: navProfile
			}
		}
	}
}

export default useLogic
