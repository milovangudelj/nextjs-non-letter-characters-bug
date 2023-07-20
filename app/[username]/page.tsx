export async function generateStaticParams() {
  const users = [{
	username: '@not-found'
  }, {
	username: '@milo.me'
  }]

  return users.map((user) => ({
    username: user.username,
  }))
}

export default function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  return <div>User: {decodeURIComponent(username)}</div>
}