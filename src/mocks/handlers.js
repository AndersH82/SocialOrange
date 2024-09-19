import { rest } from "msw";

const baseURL = 'https://socialorangeapi-e92b45e0f0bd.herokuapp.com/';

// Function to extract query parameters
function getQueryParams(req) {
  return Object.fromEntries(req.url.searchParams);
}

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
          pk: 2,
          username: "brian",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 2,
          profile_image:
            "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp",
        })
      );
    }),

    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),

    rest.post(`${baseURL}dj-rest-auth/login/`, (req, res, ctx) => {
        const queryParams = getQueryParams(req);
        console.log('Login request:', queryParams);
        return res(
            ctx.json({
                key: 'test-key'
            })
        );
    }),

    rest.get(`${baseURL}posts/`, (req, res, ctx) => {
        const queryParams = getQueryParams(req);
        console.log('Posts request:', queryParams);
        return res(
            ctx.json([
                { id: 1, title: 'First Post', content: 'This is the first post' },
                { id: 2, title: 'Second Post', content: 'This is the second post' }
            ])
        );
    }),
    
    rest.post(`${baseURL}posts/`, (req, res, ctx) => {
        const queryParams = getQueryParams(req);
        console.log('Post creation request:', queryParams);
        return res(
            ctx.json({
                id: 3,
                title: 'New Post',
                content: 'This is a new post'
            })
        );
    })
];
