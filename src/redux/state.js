import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Egor"},
            {id: 3, name: "Igor"}
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "Egor"},
            {id: 3, message: "YO"}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCounts: 20},
            {id: 2, message: "It\'s my first post", likeCounts: 12},
            {id: 3, message: "Igor", likeCounts: 20},
            {id: 4, message: "r3", likeCounts: 20}
        ],
        newPostText: 'Your message'
    },
    navBar: {
        friends: [
            {
                id: 1,
                avatar: "https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",
                name: "Vova"
            },
            {
                id: 2,
                avatar: "https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",
                name: "Sasha"
            },
            {
                id: 3,
                avatar: "https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",
                name: "Ania"
            },
            {
                id: 4,
                avatar: "https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",
                name: "Kurva"
            }
        ]
    }

}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCounts: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}
export default state;