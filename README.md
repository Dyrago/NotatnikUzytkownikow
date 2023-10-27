# NotatnikUzytkownikow

## Aplikacja łącząca .NET API z aplikacją React.js

Aplikacja umożliwia:

* Odczyt
* Zapis
* Modyfikację
* Usunięcie 

Użytkowników aplikacji.

# Uruchomienie aplikacji lokalnie 

## Wymagane:

* .NET 6 SDK
* Node.js 18.18.0

### 1.Uruchomienie API:

Bezpośrednio z poziomu Visual Studio 
lub
za pomocą .NET CLI z poziomu folderu /NotatnikUzytkownikow/API z użyciem komendy: 
> dotnet watch

lub w razie problemów z poprawnym działaniem 

> dotnet watch --no-hot-reload

### 2.Uruchomienie klienta

Komenda z poziomu folderu /NotatnikUzytkownikow/client-app:
* npm install
* npm run dev

Po wykonaniu powyższych kroków aplikacja jest
gotowa do uruchomienia pod adresem https://localhost:3000
