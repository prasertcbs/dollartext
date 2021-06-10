# สาธิตการสร้าง web service เพื่อให้ใช้งานร่วมกับ Excel และ Google Sheets
* see Excel demo: https://drive.google.com/file/d/1s3MOHG-hWIjugeN8qtMz6omO5MWM3d8G/view?usp=sharing
* see Google Sheets demo: https://docs.google.com/spreadsheets/d/1D_msgeZrXNJO7Z31ilWGwee7STp9Ravp4U3Lz4jdLQg/edit?usp=sharing

# Usage:
## API
* https://dollartext.herokuapp.com/en/123 returns `One Hundred Twenty Three Dollars Only`
* https://dollartext.herokuapp.com/en/123?currency=false returns `One Hundred Twenty Three`
* https://dollartext.herokuapp.com/th/123 returns `หนึ่งร้อยยี่สิบสามบาทถ้วน`
## Excel
* `=WEBSERVICE("https://dollartext.herokuapp.com/en/123")`
## Google Sheets
* `=IMPORTDATA("https://dollartext.herokuapp.com/en/123")`