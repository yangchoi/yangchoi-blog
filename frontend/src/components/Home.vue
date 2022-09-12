<template>
  <div class="hello">
    <div class="menu">
      <ul role="menu-bar">
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          Menu
          <ul role="menu">
            <li role="menu-item"><a href="#menu">About</a></li>
            <li role="menu-item"><a href="#menu">Post</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="window">
      <div class="title-bar">
        <div class="title">{{ msg }}</div>
      </div>
        <div class="details-bar">
          <span>{{ description }}</span>
        </div>
      <div class="window-pane">
        <div class="square">
          <img src="../assets/cat.png">
        </div>
      </div>
    <div class="standard-dialog center scale-down">
      <h1 class="dialog-text">Contact here 👇</h1>
        <ul>
          <li>
            <a
              href="https://github.com/yangchoi"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hyojeong-yang-879325147/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.rocketpunch.com/@yangchoi"
              target="_blank"
            >
              RocketPunch
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hyojeong.yang.33/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://yanguelna-programmer.tistory.com/"
              target="_blank"
            >
              Tistory
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YangChoi',
  data () {
    return {
      msg: 'Yang Hyojeong',
      description: 'Backend Programmer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}

</style>
