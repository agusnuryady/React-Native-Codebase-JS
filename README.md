# Codebase React Native JS v1.0

Code base React Native terbaru menggunakan versi RN v0.63.0 dan javascript base,
sudah terpasang modul:
1. react-native-i18n untuk switch bahasa
2. react-navigation sebagai navigation route management
3. redux dan redux persist sebagai global state dan permanent local memory
4. react-native-svg untuk asset icon yang berformat svg menjadi js.

tersedia global component antara lain:
1. Alert
2. Button
3. Card
4. Header
5. Input

dan banyak lagi tambahan feature untuk mendukung suatu project yang akan dibuat.

- tersedia started Screen example biasa dan juga hooks yg terstruktur agar mudah dipahami.

- dalam codebase ini juga sudah terpasang enviroment switch agar memudahkan proses development, staging sampai ke production.

## Rename Project

Jika ingi mengubah nama project bawaan codebase ini silahkan ikuti intruksi dibawah ini:

1. jalankan > `yarn`
2. jalnkan > `yarn add react-native-rename`
3. jalankan > `npx react-native-rename "your app name"` atau `npx react-native-rename "your app name" -b com.costumidentifier.appname` untuk custom Bundle Identifier
4. jalankan > `cd android && ./gradlew clean && cd ..`
5. buka `android/app/src/main/java/SplashActivity.java` lalu ubah nama package sebelumnya menjadi nama package yang baru
6. jalankan > `yarn remove react-native-rename`
7. jalankan > `rm -rf node_modules`

setelah itu bisa mengikuti instruksi selanjutnya untuk menjalankan RN nya dibawah ini


## How to use

Untuk developer yang ingin menggunakan codebase ini silahkan ikuti intruksi dibawah ini:

1. setelah mengclone atau mendownload codebase ini, buka filenya di programing tools seperti VS Code atau yang sejenisnya
2. jika clone dari repo dengan url segera hapus `.git` folder, atau jalankan > `rm -rf .git`
3. buka terminal lalu jalankan > `yarn`
4. lalu jalan kan > `cd ios && pod install && cd ..`
5. lalu jalan kan > `npx react-native-fix-image`
6. lalu jalankan > `react-native link`
7. lalu jalankan > `chmod +x prepare-env.sh`
8. setelah itu buat file 'local.properties' dengan isi directori sdk android di komputer anda, taruh di dalam file android agar dapat menjalankan emulator android
9. selanjutnya jalankan > `yarn env:dev` , atau enviroment lainnya sesuai script yg terdapat di package.json
10. terakhir jalankan > `yarn ios` atau > `yarn android` untuk running RN di device atau emulator

## Created by @agusnuryady
15-12-2020