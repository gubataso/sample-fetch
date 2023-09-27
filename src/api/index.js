import {URL, POSTS} from './apiConstatns'
export const PostIndex = async () => {
    const response = await fetch(`${URL}${POSTS}`)
    const json = await response.json()
    return json
}