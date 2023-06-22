FROM klakegg/hugo:0.80.0-ext-alpine

# labels
LABEL maintainer="dev@pez.ai"

RUN apk add --update npm \
      && npm install -g firebase-tools --unsafe-perm

EXPOSE 1313

WORKDIR /nycet

COPY ./ ./

WORKDIR /nycet/src

CMD ["server", "--themesDir", "../themes"]
