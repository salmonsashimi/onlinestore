export default async (id) => {
    const userInfoStr = await fetch(`http://localhost:3000/api/user/${id}`);
    const userInfo = await userInfoStr.json();
    return userInfo;
}