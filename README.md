Building:

1. build the static site: cd gatsby-site && gatsby build
    - make sure you build & or dont copy when gatsby develop is running
2. move up to public layer or tell firebase where to serve the public content from
    - rm public & then cp -r gatsby-site/public public
** check line #10 of firebase.json - currently serving from within gatsby-site
3. compile ts into js - cd functions && npm run-script build
4. cd to project home & firebase serve --only hosting (start emulators first if testing non content). firebase serve seems to start it all
