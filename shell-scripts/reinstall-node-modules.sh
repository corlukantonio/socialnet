# Go to the root folder of the project
cd ..

# Reinstall server node_modules
rm -rf ./node_modules/
npm install

cd ./client/

# Reinstall client node_modules
rm -rf ./node_modules/
npm install