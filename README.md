Test react app (recipes)

/be/ - backend part
/fe/ - frontend part

Both parts are made to work independently, for security purposes.


Deployment:

1) run dev version (requirements: node + yarn)
- navigate to either /be/ or /fe/ 
- Execute in console: 
yarn (1st time only)
yarn start

2) build/run prod version (requirements: node + yarn)
- navigate to either /be/ or /fe/ 
yarn build (there's already prebuilt code in repositgory, so if no changes were made, this step may be skipped)
- deploy /build/ folder contents to your server.
 
!IMPORTANT! Current build must be located on domain root.
See https://create-react-app.dev/docs/deployment#building-for-relative-paths for
setting custom root paths.

Settings:
API endpoint can be set by modifying
/be/src/config/index.js
/fe/src/config/index.js
