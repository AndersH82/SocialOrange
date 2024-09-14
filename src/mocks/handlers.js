import { rest } from "msw";

const baseURL = 'https://socialorangeapi-e92b8d7040bd.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (_, res, ctx) => {
        return res(
            ctx.json({
                username: 'test'
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/login/`, (_, res, ctx) => {
        return res(
            ctx.json({
                key: 'test-key'
            })
        )
    }),
    rest.get(`${baseURL}posts/`, (_, res, ctx) => {
        return res(
            ctx.json([
                { id: 1, title: 'First Post', content: 'This is the first post' },
                { id: 2, title: 'Second Post', content: 'This is the second post' }
            ])
        )
    }),
    rest.post(`${baseURL}posts/`, (_, res, ctx) => {
        return res(
            ctx.json({
                id: 3,
                title: 'New Post',
                content: 'This is a new post'
            })
        )
    })
];
