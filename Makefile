install-deps:
	npm ci

build:
	npm run build

start:
	npm run start

deploy:
	git push heroku
