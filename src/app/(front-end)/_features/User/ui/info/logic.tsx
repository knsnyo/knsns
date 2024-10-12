import { usePathname, useRouter } from 'next/navigation'
import Shared from 'shared'
import { Action } from '../../../Action'
import { api } from '../../api'

export const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/').pop()!
	const uid = Shared.Hooks.useUid()!
	const isMy = id === 'my'

	const { data } = api.useGetUser(isMy ? uid : id)

	const go = () => {
		if (!isMy) return
		router.push(`/user/${uid}/edit`)
	}

	const navFollow = () => router.push(`/user/${isMy ? uid : id}/follow`)

	const { mutation } = Action.api.useFollow()

	const follow = async () => {
		await mutation({ giveId: uid, takeId: id })
	}

	return {
		value: { user: data?.user ?? null, isMy, my: uid },
		handler: {
			follow,
			nav: { go, follow: navFollow }
		}
	}
}
