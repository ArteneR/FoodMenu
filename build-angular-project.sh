
echo "Building Angular project into Laravel project..."
echo $'\n'

cd angular-module

ng build --base-href http://localhost:8000/app/

echo "Done!"