import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('render NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const signInLink = screen.getByRole('link', { name: 'Sign in' });
    expect(signInLink).toBeInTheDocument();
});

test('render link to the user profile for logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profileAvatar = await screen.findByText('Profile');
    expect(profileAvatar).toBeInTheDocument();
});


test('render Add post link for logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const addPostLink = await screen.findByRole('link', { name: 'Add post' });
    expect(addPostLink).toBeInTheDocument();
});

test('render Feed link for logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const feedLink = await screen.findByRole('link', { name: 'Feed' });
    expect(feedLink).toBeInTheDocument();
});

test('render Liked link for logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const likedLink = await screen.findByRole('link', { name: 'Liked' });
    expect(likedLink).toBeInTheDocument();
});

test('render Profiles link for logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profilesLink = await screen.findByRole('link', { name: 'Profiles' });
    expect(profilesLink).toBeInTheDocument();
});

test('render Home link', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
});