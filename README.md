# Simple Chat App (TypeScript + React + Redux + SASS + Node.js + Socket IO)

Simple app to demostrate a Chat through websockets, with basic Settings section to allow configuration of things like e.g. light/dark theme switching, emojis, and media links parsing.

# Requirements

1. [nvm](https://github.com/nvm-sh/nvm) for installing the right version of node, as found in the `.nvmrc` files for client and server.

# Running the app

## Development - Initial setup

Assuming `nvm` is already installed, and you are at the root of the git repo, then:

> cd client
> nvm use && npm i && npm run dev
> cd ../server
> nvm use && npm i && npm run dev

Afterwards, you can just run `npm run dev` for the client and for the server.

## Production mode

> cd client && nvm use && npm run build
> cd ../server && npm run build

# Features

Since all of the required features were implemented, the following are my notes on the more interesting optional (as suggested by the spec) features, as well as the additional (i.e. suggested by myself) features.

# Chat

* "Optional" = Suggested by the spec, but not required.
* "Additional" = Own ideas beyond the spec.

| Feature  | Type | Post-development comments |
| ------------- | ------------- | ---------- |
| Smiles support  | Optional  | Implemented as collapsable panel with browsable smileys by category ("People", "Objects", etc.)
| Smiles support  | Additional  | Chat message input was first a `textarea` but later re-implemented as a "rich editor" to allow the chosen smiley to appear fully rendered in it |
| Link parser - YouTube | Optional | An `<iframe>` is added with the embedded YT video.. |
| Link parser - Images | Optional | Add the `<img>` if the URL is recognized as an image. It needed `max-width` and `max-height` in the CSS to keep large images from breaking everything. |
| Link parser - Plain links | Optional | Normal links shown as `<a>`. Word break, wrap, hyphen, etc. salad of CSS rules used to keep large links from breaking the layout. |
| Link parser - Audio | Additional | If a URL looks like an audio file, I render a file player |
| Chat input | Additional | Remove the "Send" button if user wants to use CTRL + ENTER, to give the user more space to write |

# Settings

* "Optional" = Suggested by the spec, but not required.
* "Additional" = Own ideas beyond the spec.

| Feature  | Type | Post-development comments |
| ------------- | ------------- | ---------- |
| Username | Additional | I made the server send "guest-{N}" as user name suggestion to new users |
| Interface color | Additional | Besides implementing light/dark theme switching, the app will make the dark theme a default if it finds that such is the user's OS preference |
| Internationalization | Optional | Implemented using the redux store to keep the language literals. Using the React Context API was considered, but for this small app it didn't seem to be worth it. |

# Known Issues / General development notes

| Type  | Description | Suggestion |
| ------------- | ------------- | ---------- |
| Bug | Routing with React Router's `<Switch>` is convenient, BUT it unmounts `<Chat />` when switching to `/settings`. This causes important state to be lost when returning to the Chat. Some of the issues caused by this could be solved with `componentWillUnmount` to persist this state somewhere (e.g. chat input text, UI state of the emoji panel, chat messages vertical scroll, etc.). BUT other issues caused by this are too hairy to solve (e.g. the YouTube embed iframes completely reset, same goes for the audio, etc.). | One solution would be to ditch react router, and just implement a pseudo  routing using CSS to hide/show each page |
| Perf | There are **way too many emoji** in the seemingly official DB I found. I filtered the data tree a it, but it's still very large. Many `<img>` being rendered | Some kind of clever pre-loading could be thought for this.|
| Issue | User doesn't know how many users are online | It should not be hard to at basic "Chat room" and "User list" functionality. |

# Missing

1. Unit testing: There are plenty of things that could and should be unit tested. I would recommend property-based/generative testing (e.g. with jsverify). Particularly for the media link parsers, etc.
2. JSDoc missing.
3. Performance improvements: Putting the redux containers nearer to the React node tree leaves, memoization, using `PureComponent` whenever possible.