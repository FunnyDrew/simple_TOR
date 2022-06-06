install:
	npm install

lint:
	npx htmlhint *.html ./src/pages/*.html
	npx stylelint ./src/styles/*.css ./src/styles/pages_styles/*.css
	
lintjs:
	npx eslint src/scripts/*.js
	
start:
	npx browser-sync start -s  --files 'src/pages/*.html'

deploy:
	git push origin

compile: 
	npx browserify src/scripts/rock_paper_scissors.js -o src/scripts/bundle001.js