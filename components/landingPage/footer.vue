<template>
  <footer class="footer site-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 col-sm-3">&#169;&nbsp; Coconel tech {{ year }}</div>
        <div class="col-6 col-sm-3">
          <a href="" >Aviso de Privacidad</a>
        </div>
        <div class="col-6 col-sm-3">
          <ul class="social-media">
            <li>
              <a href="" target="_blank" ><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            </li>
            <li>
              <a target="_blank" ><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li>
              <a  target="_blank" ><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-sm-3">
          Powered by <a>Coconel</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '~assets/sass/custom';

$footer-height: 100px;
$footer-color: #1F3D4A;

.footer {
  background-color: $footer-color;
  width: 100%;
  height: $footer-height;
  line-height: $footer-height / 2;
  color: $white;
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  @media (min-width: 575px) {
    height: $footer-height / 2;
  }
  a {
    color: $blue;
    &:hover, &:focus {
      color: $white;
    }
  }
  .social-media {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 1.5em;
    li {
      display: inline-block;
      margin: 0 10px;
    }
  }
}
</style>