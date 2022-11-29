# if pwd =C://Users/karan/datastudio-react
# then run the commands below
# else cd into the directory and run the commands below
if [ $(pwd) = "C://Users/karan/datastudio-react" ]; then
  echo "Running commands in current directory"
else
  echo "Changing directory to C://Users/karan/datastudio-react"
  cd C://Users/karan/datastudio-react
fi
npx tsc
mkdir -p deploy/hello && cp manifest.json deploy/ && cp dist/viz.js deploy/hello/ && cp hello.config.json deploy/hello/
npm run build && npm run prepare && gsutil cp -r deploy/* gs://data_viz_one