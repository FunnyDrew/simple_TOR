install:
	npm install

lint:
	npx htmlhint *.html ./src/pages/*.html
	npx stylelint ./src/styles/*.css ./src/styles/pages_styles/*.css
	
start:
	npx browser-sync start -s  --files 'src/pages/*.html'

deploy:
	git push origin