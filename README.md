ircd.js
=======

This is a fork of the original [ircd.js][1] that enables deployment to Heroku.

Heroku's routing layer only proxies HTTP and websocket requests, which prevents
running daemons and other socket services that respond to other ports and 
protocols.

We use the [Ruppell's Sockets addon][2] to proxy socket connections from ruppells.io
to the Heroku dyno.


Installation
------------

For local deployment:

1. Make sure you have `foreman` [installed][3].
2. Create a `.env` file in the root directory with contents:

   ```bash
   RUPPELLS_SKIP=1
   BACKEND_PORT=6667
   RUPPELLS_BACKEND_TUNNEL_URI=127.0.0.1
   ```

3. `npm install`
4. `foreman start`

For Heroku deployment:

1. `heroku create`
2. `heroku addons:add ruppells-sockets`
3. Get your Ruppell's Sockets URL: 
   `heroku config:get RUPPELLS_SOCKETS_FRONTEND_URI`. This will be the hostname
   and port with which you can access the IRC daemon.
4. `git push heroku master`
5. `heroku logs -t` for troubleshooting.


License
-------

GNU GENERAL PUBLIC LICENSE, Version 3


[1]: https://github.com/alexyoung/ircd.js/
[2]: https://devcenter.heroku.com/articles/ruppells-sockets
[3]: https://toolbelt.heroku.com/
