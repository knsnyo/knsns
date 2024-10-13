import gql from 'graphql-tag'

export const query = {
	follow: gql`
		mutation Follow($input: IAction!) {
			follow(input: $input) {
				updatedAt
			}
		}
	`,
	like: gql`
		mutation LikeFeed($input: IAction!) {
			like(input: $input) {
				updatedAt
			}
		}
	`,
	save: gql`
		mutation SaveFeed($input: IAction!) {
			save(input: $input) {
				updatedAt
			}
		}
	`
}
