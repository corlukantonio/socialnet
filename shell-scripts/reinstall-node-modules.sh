dir_path="./node_modules/"

rm_rf_directory()
{
  if [ -d $1 ] # Check if directory exists
  then
    echo "Directory $1 is being removed..."
    rm -rf $1
  else
    echo "Directory $1 doesn't exist."
  fi
}

# Go to the root directory of the project
cd ..

rm_rf_directory $dir_path
npm install

# Go to the client directory
cd ./client/

rm_rf_directory $dir_path
npm install

# Go back to the shell-scripts directory
cd ..
cd ./shell-scripts/