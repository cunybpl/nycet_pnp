FROM klakegg/hugo:0.80.0-ext-alpine

EXPOSE 1313

WORKDIR /nycet

COPY ./ ./

WORKDIR /nycet/src

CMD ["server", "--themesDir", "../themes"]
