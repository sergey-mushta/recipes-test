Test react app (recipes)

/be/ - backend part
/fe/ - frontend part

Deployment:

1) run dev version (requirements: node + yarn)
- navigate to either /be/ or /fe/ 
- Execute in console: 
yarn (1st time only)
yarn start

2) build/run prod version (requirements: node + yarn)
- navigate to either /be/ or /fe/ 
yarn build (there's already prebuilt code in repository, so if no changes were made, this step may be skipped)
- deploy /build/ folder contents to your server.
 
!IMPORTANT! Build must be located on domain root.