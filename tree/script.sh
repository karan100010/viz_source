
if [ $(pwd) = "C:/xampp/htdocs/git/Working/Visualisation/viz_source/tree" ]; then
  echo "Running commands in current directory"
else
  echo "Changing directory to C:/xampp/htdocs/git/Working/Visualisation/viz_source/tree"
  cd C:/xampp/htdocs/git/Working/Visualisation/viz_source/tree
fi
npx webpack
gsutil cp -r C:\xampp\htdocs\git\Working\Visualisation\viz_source\dist\dist/* gs://data_viz_one1
exit 1