# Simple Chat Application (TypeScript + React + Redux + Node.js + Socket IO)

This is a simple app to demostrate a Chat through websockets, with basic versions of features such as light/dark theme switching, emojis, and media links parsing.

# Requirements

1. `nvm`.

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

Some of the features were required, others optional, and others were additional ideas on my end.

Since all of the required features were implemented, the following is a list of the more interesting optional (suggested by the spec) and additional (suggested by myself) features.

# Chat

"Optional" = Suggested by the spec, but not required.
"Additional" = Own ideas beyond the spec.

| Feature  | Type | Development Notes |
| ------------- | ------------- | ---------- |
| Smiles support  | Optional  | Implemented as collapsable panel with browsable smileys by category ("People", "Objects", etc.)
| Smiles support  | Additional  | Chat message input was first a `textarea` but later re-implemented as a "rich editor" to allow the chosen smiley to appear fully rendered in it |
| Link parser | Optional | Implemented YouTube, Image, and plain old link parsing, as suggested. |
| Link parser | Additional | Added Audio link parsing. If a URL looks like an audio file, I render a file player |
| Chat input | Additional | Remove the "Send" button if user wants to use CTRL + ENTER, to give the user more space to write |

# Settings


| Feature  | Type | Development Notes |
| ------------- | ------------- | ---------- |
| Username | Additional | I made the server send "guest-{N}" as user name suggestion to new users |
| Interface color | Additional | Besides implementing light/dark theme switching, the app will make the dark theme a default if it finds that such is the user's OS preference |
| Internationalization | Optional | Implemented using the redux store to keep the language literals. Using the React Context API was considered, but for this small app it didn't seem to be worth it. |

# Known Issues / General development notes / TODOs

1. Routing with React Router's `<Switch>` is convenient, BUT it unmounts `<Chat />` when switching to `/settings`. This causes important state to be lost when returning to the Chat. Some of the issues caused by this could be solved with `componentWillUnmount` to persist this state somewhere (e.g. chat input text, UI state of the emoji panel, chat messages vertical scroll, etc.). BUT other issues caused by this are too hairy to solve (e.g. the YouTube embed iframes completely reset, same goes for the audio, etc.). One solution would be to ditch react router, and just implement a pseudo  routing using CSS to hide/show each page.
2. Emoji performance: There are **way too many emoji** in the seemingly official DB I found. I filtered the data tree a it, but still. Many `<img>` around. Some kind of smart pre-loading could be thought for this.