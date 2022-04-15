FROM denoland/deno:ubuntu

# Create app directory

WORKDIR /server

ENV DENO_ENV=dev

COPY . .

# install server deps

# RUN deno bundle --watch ./bridge/server.js server.js

# install client deps

# RUN deno cache server.js

EXPOSE 8080

ENTRYPOINT ["deno", "run","--watch", "--allow-net", "--allow-read", "--allow-env", "./bridge/server.js" ]
