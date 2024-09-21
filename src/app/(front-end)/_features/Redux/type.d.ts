import store from './_store'

const { getState, dispatch } = store

export type RootState = ReturnType<typeof getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof dispatch
