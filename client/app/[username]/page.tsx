interface Params {
    params: { username: string }
}

export default function ProfilePage({ params }: Params) {
    const { username } = params;
    return (
        <h1>{username}'s profile</h1>
    )
}