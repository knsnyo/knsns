'use client'

import { useTheme } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import { TFeedWithAuthor } from 'type/convolution'
import { shareUrl } from '../../../../__shared/utils/share-url'
import { Action } from '../../../Action'

export const useLogic = (feed: TFeedWithAuthor) => {
	const router = useRouter()
	const uid = Shared.Hooks.useUid()
	const theme = useTheme()
	const { snackbar, open } = Shared.Hooks.useSnackbar({
		message: '쓰레기 던질 준비 완료',
		ContentProps: {
			sx: { bgcolor: theme.palette.success.main }
		}
	})

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

	const share: React.MouseEventHandler = (e) => {
		e.stopPropagation()
		shareUrl(`/feed/${feed.id}`)
		open()
	}

	return {
		component: {
			snackbar
		},
		value: {
			like: feed.action?.likeUserId?.includes(uid) ?? false,
			save: feed.action?.saveUserId?.includes(uid) ?? false
		},
		handler: {
			like,
			save,
			share,
			nav: {
				profile: navProfile
			}
		}
	}
}
