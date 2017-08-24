# switchboard
A Chrome extension that lets you open Google Inbox messages in GMail.

## Build instructions

1. Make sure you have `git` and `npm` installed.

2. Clone this repository: `git clone https://github.com/ronichoudhury/switchboard`.

3. Move into repository directory: `cd switchboard`.

4. Install Node dependencies: `npm i`.

5. Build the extension: `npm run build`.

6. Open the Extensions console in Chrome by visiting `chrome://extensions`.

7. Enable developer mode by activating the checkbox.

8. Click the "Load unpacked extension..." button.

9. Select `switchboard`'s build directory: `/path/to/switchboard/build`.

10. Visit https://inbox.google.com, open a message, and look for the gray GMail
    icon!

## Why?

I love the approach to email that Google Inbox provides, mainly via its bundles,
pinning, and reminders, but it does not provide proper, old-school *routing*,
whereby I could grab a URL pointing to a specific message, which is useful for
storing a reference to a message in an external system, such as a GTD setup.

GMail, however, is great at providing message-specific URLs.

This extension adds an "open in GMail" button to each message in Google Inbox.
Clicking on it opens GMail in a new tab, from which you can snag the message URL
to do with as you please.
