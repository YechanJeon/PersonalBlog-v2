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
    border-left: 5px solid #d8dee4;
    padding-left: 1em;
  }
  *{
    letter-spacing: 0.1px;
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
    color: #24292F;
  }
  body{
    margin: 0;
    padding: 0;
    overflow: overlay;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    line-height: 1.25;
    /* display: inline; */
    margin-top: 24px;
    margin-bottom: 16px;

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
    background : #F6F8FA;
    padding : 16px;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 6px;
  }
  pre>code{
    color: rgb(0, 0, 0)!important;
    background-color: transparent!important;
    padding: 0 !important;
    white-space: normal;
  }
  code{
    background-color: #F6F8FA;
    color: #000000;
    padding: 2px 4px;
  }
  hr{
    display: block;
    height: 0.25em;
    margin: 24px 0;
    border: 0;
    background: #D0D7DE;
    padding: 0;
  }
  h1{
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px #d8dee4 solid ;
  }
  h2{
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px #d8dee4 solid ;
  }
  h3{
    font-size: 1.25em;
  }
  h4{
    font-size: 1rem;
  }
  h5{
    font-size: 0.875em;
  }
  h6{
    font-size: 0.85em;
  }
  p>img{
    max-width: 100%;
    max-height: 100%;
  }
  a>img{
    max-width: 100%;
    max-height: 100%;
  }


</style>