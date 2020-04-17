INICIALIZANDO GITHUB

echo "# graphs" >> README.md

git init

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/zz4fff/graphs.git

git push -u origin master



RUNNING THE APP

To run this app properly you must install several libraries. See how below:

Open a terminal and clone or fork this GitHub:

  git clone graphs

Go inside app directory:

  cd graphs

Install needed libraries:

Run

  node_modules


Run

  npm install react-native-chart-kit

Run

  expo install react-native-svg

Run app

  yarn start

  When browse opens the localhost page, choose a device to run the app, like 'Run on iOS Simulator' or other.