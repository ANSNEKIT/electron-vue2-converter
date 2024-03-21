# electron-converter

## Установка проекта
NPM v8.19.4

NODE v16.20.2
```
npm install
```

### Запуск сервера для разработки
```
npm run serve
```

### Сборка статических файлов проекта для сервера
```
npm run build
```

### Запуск проверки линтера
```
npm run lint
```

## Electron-builder
### Установка необходимых пакетов для ОС [electron-builder-doc](https://www.electron.build/multi-platform-build#linux)

### Собрать electron build для Windows
```
npm run electron:build-win
```
### Собрать electron build для Linux
```
npm run electron:build-linux
```

### После сборки в папке проекта появится папка desktop-build. Внутри будут находиться файлы в зависимости от выбранной ОС
- electron_converter_0.1.0_amd64.deb
- *.exe
