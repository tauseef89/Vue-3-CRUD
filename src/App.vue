<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}
ul {
  list-style: none;
}
.nav-bar {
  background-color: #343a40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.nav-bar a {
  color: white;
}
.top-nav li {
  display: inline-block;
  padding: 15px 15px 15px 0px;
}
.title {
  padding-left: 15px;
  font-size: 20px;
}
.wrraper {
  display: flex;
}
.left-content {
  background-color: #f8f9fa;
  flex: 3;
  min-height: 90vh;
}
.side-menu {
  margin-top: 20px;
}
.side-menu li {
  border-bottom: dashed 1px #cfd3d8;
}
.side-menu a {
  display: block;
  padding: 10px 15px;
  color: #343a40;
  text-decoration: none;
}
.right-content {
  padding: 20px;
  flex: 9;
}
table {
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-top: 1px solid #dee2e6;
  border-left: 1px solid #dee2e6;
}
table thead th {
  vertical-align: bottom;
}

td,
th {
  padding: 0.3rem;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
}
table td,
table th {
  padding: 0.75rem;
  vertical-align: top;
}
.btn,
button {
  display: inline-block;
  background: #007bff;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 15px;
  text-align: center;
  border: none;
}
.btn-del {
  background: #dc3545;
}
form {
  max-width: 450px;
  width: 100%;
  margin: auto;
}
label {
  display: block;
  font-size: 18px;
  margin-top: 15px;
  line-height: 30px;
}
input {
  display: block;
  width: 100%;
  height: 35px;
  border: turquoise 2px dashed;
  margin-bottom: 10px;
  padding-left: 10px;
}
.welcome {
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
}
</style>
