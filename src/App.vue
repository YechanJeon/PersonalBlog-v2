<template>
  <div>
    <router-view></router-view>
  </div>
  
  
  
</template>

<script>
export default {

}
</script>

<style>
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  blockquote{
    margin: 0;
    border-left: 5px solid black;
    padding-left: 1em;
  }
  a{
    text-decoration: none;
    color: dodgerblue;
  }
  a:visited{
    color: dodgerblue;
  }
  table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
    padding: 10px;
  }
  *{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    overflow: overlay;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
    /* display: inline; */
  }
  p{
    font-weight: 400;
  }
  textarea{
    resize : none;
    border: none;
  }
  textarea:focus{
    outline: none;
  }
  pre{
    background : #333333;
    padding : 20px;
  }
  pre>code{
    color: white!important;
    background-color: transparent!important;
    padding: 0 !important;
  }
  code{
    background-color: #f9f2f4;
    color: #c7254e;
    padding: 2px 4px;
  }
  hr{
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #D7D0DE;
    margin: 1em 0;
    padding: 0;
  }


</style>