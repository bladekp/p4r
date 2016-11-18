### Instalacja podstawowych narzędzi

Zanim cokolwiek zrobimy musimy zainstalować pakiet bower, pakiet ten zależy jednak od trzech innych: node, npm oraz git.
Instalacja dla windows:
1. Instalacja GIT: https://git-for-windows.github.io/
2. Instalacja node.js i npm: https://nodejs.org/en/
3. Teraz prawdopodobnie trzeba będzie zrestartować Windowsy.
4. Instalacja bower: $ npm install -g bower

To wszystko, można przystąpić do pracy.

Użytkownicy innych systemów niż powyższy poradzą sobie sami.

### Instalowanie zależności aplikacji

Mamy dwa rodzaje zależności w projekcie: narzędzia developerskie oraz biblioteki projektu.

* Narzędzia pobieramy za pomocą npm [node package manager].
* Biblioteki są pobierane przy pomocy bowera [client-side code package manager].

'npm' jest skonfigurowany do automatycznego wołania bowera, a więc wszystkie zależności można ściągnąć wołając:

```
npm install
```

### Start serwera aplikacji

Serwer deweloperski możemy uruchomić przy pomocy polecenia:
```
npm start
```
W przeglądarce wpisujemy http://localhost:8000/app/ i powinna ukazać się strona startowa aplikacji.

Można przystąpić do wprowadzania zmian.

